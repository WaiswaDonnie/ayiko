import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechServicesPageRoutingModule } from './tech-services-routing.module';

import { TechServicesPage } from './tech-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechServicesPageRoutingModule
  ],
  declarations: [TechServicesPage]
})
export class TechServicesPageModule {}
