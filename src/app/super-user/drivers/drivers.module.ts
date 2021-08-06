import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
/**
 * Importing The Reactive And Forms Module To Deal With Form In Angular
 */

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Importing Ionic Module 
 */

import { IonicModule } from '@ionic/angular';

/**
 * Import The store Module and The Reducer for The Drivers Module
 */

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { reducers, effects } from './store'

/**
 * Import Components Of The Drivers Module
 */

 import { DriverComponent } from './driver/driver.component' 
 import { DriverAddComponent } from './driver-add/driver-add.component' 
 import { DriverEditComponent } from './driver-edit/driver-edit.component' 
 import { DriverListComponent } from './driver-list/driver-list.component' 

/**
 * Declaring the Drivers Routes in the Drivers Module
 */

const routes: Routes = [
  {
    path: 'driver-list',
    component: DriverListComponent
  },
  {
    path: ':driverId',
    component: DriverEditComponent
  },
  {
    path: ':driverId/driver-rides',
    component: DriverComponent
  },
  {
    path: ':driverId/driver-reviews',
    component: DriverAddComponent
  },
]

@NgModule({
  declarations: [
    DriverComponent,
    DriverAddComponent,
    DriverEditComponent,
    DriverListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("superUserDrivers", reducers),
    EffectsModule.forFeature(effects),
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule
  ]
})
export class DriversModule { }
