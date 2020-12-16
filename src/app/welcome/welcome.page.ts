import { AuthenticationService } from './../home/shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  registerAuthError: string;
  loginAuthError: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {}
  tabsegment = 'register';

  registrationForm = this.fb.group({
    email: ['', Validators.required],
    regPhoneNumber: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  loginForm = this.fb.group({
    logPassword: ['', [Validators.required, Validators.minLength(6)]],
    logEmail: ['', [Validators.required, Validators.email]],
  });

  get regPhoneNumber() {
    return this.registrationForm.get('regPhoneNumber');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }

  get logEmail() {
    return this.loginForm.get('logEmail');
  }
  get logPassword() {
    return this.loginForm.get('logPassword');
  }

  ngOnInit() {
    this.authService.registerAuthEventError$.subscribe((error) => {
      this.registerAuthError = error;
    });

    this.authService.loginAuthEventError$.subscribe((error) => {
      this.loginAuthError = error;
    });
  }

  createUser(user) {
    return this.authService.createUser(user.value);
  }

  loginUser(frm) {
    return this.authService.loginUser(
      frm.value.logEmail,
      frm.value.logPassword
    );
  }
}
