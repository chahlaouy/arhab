import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RouterModule, Routes } from '@angular/router'

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core'; 

import { DashboardComponent } from './dashboard/dashboard.component'
import { DriverCarComponent } from './driver-car/driver-car.component'
import { DriverInfoComponent } from './driver-info/driver-info.component'
import { DriverReviewsComponent } from './driver-reviews/driver-reviews.component'
import { DriverRidesComponent } from './driver-rides/driver-rides.component'
import { DriverWalletComponent } from './driver-wallet/driver-wallet.component'
import { FavoriteComponent } from './favorite/favorite.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { RequestsComponent } from './requests/requests.component'
import { RideDestinationComponent } from './ride-destination/ride-destination.component'
import { RidePriceComponent } from './ride-price/ride-price.component'
import { RideSeatsComponent } from './ride-seats/ride-seats.component'
import { RideSourceComponent } from './ride-source/ride-source.component'
import { RideDateDayComponent } from './ride-date-day/ride-date-day.component'
import { RideDateHourComponent } from './ride-date-hour/ride-date-hour.component'
import { ConfirmRideComponent } from './confirm-ride/confirm-ride.component'

import { ChatSingleComponent } from './chat-single/chat-single.component'


const routes: Routes = [ 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'wallet',
    component: DriverWalletComponent,
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
  },
  {
    path: 'requests',
    component: RequestsComponent,
  },
  {
    path: 'requests/chat',
    component: ChatSingleComponent,
  },
  {
    path: 'car',
    component: DriverCarComponent,
  },
  {
    path: 'rides',
    component: DriverRidesComponent,
  },
  {
    path: 'reviews',
    component: DriverReviewsComponent,
  },
  {
    path: 'info',
    component: DriverInfoComponent,
  },
  {
    path: 'add/ride-source',
    component: RideSourceComponent,
  },
  {
    path: 'add/ride-destination',
    component: RideDestinationComponent,
  },
  {
    path: 'add/ride-seats',
    component: RideSeatsComponent,
  },
  {
    path: 'add/ride-day',
    component: RideDateDayComponent,
  },
  {
    path: 'add/ride-hour',
    component: RideDateHourComponent,
  },
  {
    path: 'add/ride-price',
    component: RidePriceComponent,
  },
  {
    path: 'add/confirm-ride',
    component: ConfirmRideComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    DriverCarComponent,
    DriverInfoComponent,
    DriverReviewsComponent,
    DriverRidesComponent,
    DriverWalletComponent,
    FavoriteComponent,
    FavoriteComponent,
    LoginComponent,
    RegisterComponent,
    RequestsComponent,
    RideDestinationComponent,
    RidePriceComponent,
    RideSeatsComponent,
    RideSourceComponent,
    RideDateDayComponent,
    RideDateHourComponent,
    ConfirmRideComponent,
    ChatSingleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDK_H25782ntfx8P1phlMxs1KngoieEaYw',
      libraries: ['places']
    })
  ]
})
export class DriverModule { }
