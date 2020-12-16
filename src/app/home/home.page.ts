import { ProductsService } from './shared/products.service';
import { Iadvert } from './shared/productsInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  imgUrl = 'https://media-cdn.tripadvisor.com/media/photo-s/1b/1e/ae/e9/mouth-watering-scrumptious.jpg';

  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -20,
  };

  adverts: Iadvert[];
  advertInfo: any;

  constructor(private productServie: ProductsService) {



  }

  ngOnInit() {
    this.advertInfo = this.productServie.getAdverts();
    this.adverts = this.advertInfo;
  }



  toggleMenu() {
  }
}
