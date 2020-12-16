import { Itech } from './../home/shared/productsInterface';
import { ProductsService } from './../home/shared/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-services',
  templateUrl: './tech-services.page.html',
  styleUrls: ['./tech-services.page.scss'],
})
export class TechServicesPage implements OnInit {

  constructor(private productService: ProductsService) { }

  techServices: Itech[];
  techInfo: any;

  ngOnInit() {

    this.techInfo = this.productService.getTechServices();
    this.techServices = this.techInfo;
  }

}
