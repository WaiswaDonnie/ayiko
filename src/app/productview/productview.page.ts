import { ProductsService } from './../home/shared/products.service';
import { Iproducts } from './../home/shared/productsInterface';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.page.html',
  styleUrls: ['./productview.page.scss'],
})
export class ProductviewPage implements OnInit {
  constructor(
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  product: Iproducts;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.product = this.productsService.getProduct(id);
      console.log(this.product);
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
