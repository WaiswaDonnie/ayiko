import { AngularFireDatabase } from '@angular/fire/database';
import { Iproducts, Inurse, Itech, Ispecial } from './productsInterface';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private adverts: [];
  advertInfo: any;
  private products: Iproducts[];
  data: any;

  private nurses: Inurse[];
  nurseInfo: any;

  private techServices: Itech[];
  techInfo: any;

  private special: Ispecial[];
  specialInfo: any;
  // productUrl = '../assets/api/products/products.json';

  constructor(
    // private http: HttpClient,
    private productDb: AngularFireDatabase
  ) {
    // console.log(this.products);

    this.productDb
      .list('/food')
      .valueChanges()
      .subscribe((data) => {
        this.data = data;
        this.products = this.data;
      });

    this.productDb
      .list('/adverts')
      .valueChanges()
      .subscribe((info) => {
        this.advertInfo = info;
        this.adverts = this.advertInfo;
      });

    this.productDb
      .list('/nurses')
      .valueChanges()
      .subscribe((info) => {
        this.nurseInfo = info;
        this.nurses = this.nurseInfo;
      });

    this.productDb
      .list('/techServices')
      .valueChanges()
      .subscribe((info) => {
        this.techInfo = info;
        this.techServices = this.techInfo;
      });

    this.productDb
      .list('/specialHire')
      .valueChanges()
      .subscribe((info) => {
        this.specialInfo = info;
        this.special = this.specialInfo;
      });
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Iproducts {
    return {
      ...this.products.find((product) => {
        return product.productId === id;
      }),
    };
  }

  getNurses() {
    console.log(this.nurses)
    return this.nurses;
  }

  getSpecial() {
    return this.special;
  }

  getTechServices() {
    return this.techServices;
  }

  getAdverts() {
    return this.adverts;
  }
}
