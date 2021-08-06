import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * Import Components Of The Riders Module
 */

import { RiderComponent } from './rider/rider.component'
import { RiderAddComponent } from './rider-add/rider-add.component'
import { RiderEditComponent } from './rider-edit/rider-edit.component'
import { RiderListComponent } from './rider-list/rider-list.component'

/**
 * Declaring the Riders Routes in the Riders Module
 */

const routes: Routes = [
  {
    path: 'rider-list',
    component: RiderListComponent
  },
  {
    path: 'rider',
    component: RiderComponent
  },
  {
    path: 'rider-add',
    component: RiderAddComponent
  },
  {
    path: 'rider-edit',
    component: RiderEditComponent
  }
]

@NgModule({
  declarations: [
    RiderAddComponent,
    RiderComponent,
    RiderEditComponent,
    RiderListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RidersModule { }
