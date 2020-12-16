import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechServicesPage } from './tech-services.page';

const routes: Routes = [
  {
    path: '',
    component: TechServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechServicesPageRoutingModule {}
