import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NursePageRoutingModule } from './nurse-routing.module';

import { NursePage } from './nurse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NursePageRoutingModule
  ],
  declarations: [NursePage]
})
export class NursePageModule {}
