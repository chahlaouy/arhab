import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router'

import { MasterCardComponent } from './master-card/master-card.component'
import { PaypalComponent } from './paypal/paypal.component';
import { VisaCardComponent } from './visa-card/visa-card.component';

const routes: Routes = [
  {
    path: 'master-card',
    component: MasterCardComponent
  },
  {
    path: 'visa-card',
    component: VisaCardComponent
  },
  {
    path: 'mada',
    component: PaypalComponent
  },
]

@NgModule({
  declarations: [
    MasterCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    HttpClientModule
  ]
})
export class PaymentModule { }
