import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router'

import { HomePageComponent } from './home-page/home-page.component'
import { RidesListComponent } from './rides-list/rides-list.component'
import { RideEditComponent } from './ride-edit/ride-edit.component'
import { FilterHomeComponent } from './filter-home/filter-home.component'
import { FilterSourceComponent } from './filter-source/filter-source.component'
import { FilterDestinationComponent } from './filter-destination/filter-destination.component'
import { FilterDateComponent } from './filter-date/filter-date.component'
import { FilterFavoriteComponent } from './filter-favorite/filter-favorite.component'
import { ChooseInterfaceComponent } from './choose-interface/choose-interface.component'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { reducers, effects } from './store'

import { AgmCoreModule } from '@agm/core';

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent 
  }, 
  {
    path: 'rides-list',
    component: RidesListComponent
  },
  {
    path: 'rides-list/:rideId',
    component: RideEditComponent
  },
  {
    path: 'filter/home',
    component: FilterHomeComponent
  },
  {
    path: 'filter/source',
    component: FilterSourceComponent
  },
  {
    path: 'filter/destination',
    component: FilterDestinationComponent
  },
  {
    path: 'filter/date',
    component: FilterDateComponent
  },
  {
    path: 'filter/favorite',
    component: FilterFavoriteComponent
  },
  {
    path: 'choose-interface',
    component: ChooseInterfaceComponent
  },
]
@NgModule({
  declarations: [
    HomePageComponent,
    RidesListComponent,
    RideEditComponent,
    FilterFavoriteComponent,
    FilterDateComponent,
    FilterDestinationComponent,
    FilterSourceComponent,
    FilterHomeComponent,
    ChooseInterfaceComponent
  ],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("homerides", reducers),
    EffectsModule.forFeature(effects),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDK_H25782ntfx8P1phlMxs1KngoieEaYw',
      libraries: ['places']
    })
  ]
})
export class HomeModule { }
