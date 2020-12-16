import { AlertController, Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  newUser: any;

  user = firebase.auth().currentUser;

  constructor(private db: AngularFirestore,
              private afAuth: AngularFireAuth,
              private router: Router,
              public alertCtrl: AlertController) {

      this.afAuth.onAuthStateChanged((user) => {
        if (this.user){
          this.router.navigate(['/home']);
        }else{
          this.router.navigate(['/welcome']);
        }
      });


     }


  private loginAuthEventError = new BehaviorSubject<string>('');
  loginAuthEventError$ = this.loginAuthEventError.asObservable();
  private registerAuthEventError = new BehaviorSubject<string>('');
  registerAuthEventError$ = this.registerAuthEventError.asObservable();
  private authEventError = new BehaviorSubject<string>('');
  authEventError$ = this.authEventError.asObservable();





  createUser(user){
    return  this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then(userCredential => {
      this.newUser = user;

      this.inserUserData(userCredential).then(() => {

        this.alertCtrl.create({

          header: 'Congratulations',
          message: 'Welcome, your account has been created successfully',
          buttons: ['Okay']
        }).then(alrtEl => alrtEl.present());
        setTimeout( () => {

          

          this.router.navigate(['/home']);

        }, 2000);


      }).catch(error => {
        this.registerAuthEventError.next(error);
        setTimeout(() => this.registerAuthEventError.next(null), 5000);
      });
      userCredential.user.updateProfile({
        displayName: user.userName,
      });

    }).catch(error => {
      this.registerAuthEventError.next(error);
      setTimeout(() => this.registerAuthEventError.next(null), 5000);
    });

  }

  inserUserData(userCredential: firebase.auth.UserCredential){
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      password: this.newUser.password,
      phoneNumber: this.newUser.regPhoneNumber
    }).catch(error => {
      this.registerAuthEventError.next(error);
      setTimeout(() => this.registerAuthEventError.next(null), 5000);
    });

  }

  loginUser(email: string , password: string ){

    this.afAuth.signInWithEmailAndPassword(email, password).then((userCredential => {


      this.router.navigate(['/home']);
    })).catch(error => {
      this.loginAuthEventError.next(error);
      setTimeout(() => this.loginAuthEventError.next(null), 5000);
    });

  }


  logOut(){
    this.afAuth.signOut().then(() => {
      setTimeout(() => this.router.navigate(['/welcome']), 5000);
    });
  }




}
