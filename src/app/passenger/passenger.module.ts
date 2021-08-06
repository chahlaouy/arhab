import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RouterModule, Routes } from '@angular/router'

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { ChatInterfaceComponent } from './chat-interface/chat-interface.component'
import { ChatSingleComponent } from './chat-single/chat-single.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { NumberOfSeatsComponent } from './number-of-seats/number-of-seats.component'
import { PassengerInfoComponent } from './passenger-info/passenger-info.component'
import { PaymentTreeComponent } from './payment-tree/payment-tree.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'chat-interface',
    component: ChatInterfaceComponent
  },
  {
    path: 'number-seats',
    component: NumberOfSeatsComponent
  },
  {
    path: 'chat-interface/chat',
    component: ChatSingleComponent
  },
  {
    path: 'info',
    component: PassengerInfoComponent
  },
  {
    path: 'payment-tree',
    component: PaymentTreeComponent
  },

]

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ChatInterfaceComponent,
    ChatSingleComponent,
    NumberOfSeatsComponent,
    PassengerInfoComponent,
    PaymentTreeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class PassengerModule { }
