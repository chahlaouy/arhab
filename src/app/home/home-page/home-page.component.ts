import { Component, OnInit } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { FilterService } from '../home.services/filter.service';
import { Router } from '@angular/router'; 

import { Store } from '@ngrx/store'
import * as fromStore from '../store'
@Component({
  selector: 'app-home-page', 
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  rides = [1,2,3,4]
  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: false,
    slidesPerView: 1.2
  }

  currentUser= null;

  latitude: number;
  longitude: number;
  adminAreaLevel1: string;
  adminAreaLevel2: string;
  locality: string;
  zoom:number;
  address: string = null;
  private geoCoder;

  constructor(
    private router: Router,
    private store: Store,
    private mapsAPILoader: MapsAPILoader,
    private filterSer: FilterService,
    ) {}

  ngOnInit(){
    this.store.dispatch(new fromStore.LoadRides());
  }

  ngAfterViewInit(){
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
      this.setCurrentLocation();
    })

    
  }
  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        this.getAddress(this.latitude, this.longitude)
      });
    }
    
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          console.log(results[0])
          results[0].address_components.forEach(item => {
            // console.log(item.types.indexOf("administrative_area_level_2"))
            // if ( item.types.indexOf("administrative_area_level_2") != -1){
            //   this.adminAreaLevel2 = item.long_name
            // }
            if ( item.types.indexOf("locality") != -1){
              this.locality = item.long_name
            }
            if ( item.types.indexOf("administrative_area_level_1") != -1){
              this.adminAreaLevel1 = item.long_name
            }
          })
        } else {
          // window.alert('No results found');
        }
      } else {
        // window.alert('Geocoder failed due to: ' + status);
      }

    }); 
  }

  filterHomeDestination(){
    this.filterSer.setFilterSource({adminAreaLevel1: this.adminAreaLevel1, locality: this.locality, lat: this.latitude, lng: this.longitude})
    this.router.navigate(['/home/filter/destination'])
  }

}
