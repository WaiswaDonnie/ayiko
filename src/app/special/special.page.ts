import { ProductsService } from './../home/shared/products.service';
import { Ispecial } from './../home/shared/productsInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.page.html',
  styleUrls: ['./special.page.scss'],
})
export class SpecialPage implements OnInit {

  constructor(private productService: ProductsService) { }

  specials: Ispecial[];
  specialInfo;
  ngOnInit() {

    this.specialInfo = this.productService.getSpecial();
    this.specials = this.specialInfo;


  }

}
