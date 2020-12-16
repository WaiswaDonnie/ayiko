import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MenuController } from '@ionic/angular';
import { ProductsService } from '../home/shared/products.service';
import { Iproducts } from '../home/shared/productsInterface';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  products: Iproducts[];
  info: any;

  constructor(
    private menuCtrl: MenuController,
    private db: AngularFireDatabase,
    private productsService: ProductsService
  ) {

  }
  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
