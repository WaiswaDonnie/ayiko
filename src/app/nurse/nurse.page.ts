import { Inurse } from './../home/shared/productsInterface';
import { ProductsService } from './../home/shared/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.page.html',
  styleUrls: ['./nurse.page.scss'],
})
export class NursePage implements OnInit {

  constructor(private productService: ProductsService) { }

  nurses: Inurse[];
  nurseInfo: any;
  ngOnInit() {
    this.nurseInfo =  this.productService.getNurses();
    this.nurses = this.nurseInfo;
  }

}
