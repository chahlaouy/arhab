import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service'

@Component({
  selector: 'app-ride-price',
  templateUrl: './ride-price.component.html',
  styleUrls: ['./ride-price.component.scss'],
})
export class RidePriceComponent implements OnInit {
  
  ridePrice: any;
  next = false;
  minPermittedPrice: any;
  maxPermittedPrice: any;
  rideSource: any;
  rideDestination: any;
  rideDistance= this.userSer.getRideDetails().rideDistance.value;
  rideAverageDuration : any;
  rideDistanceText : any;
  lessThan100Km = (this.rideDistance/1000) < 100;
  between100And200Km = (this.rideDistance/1000) > 100 && (this.rideDistance/1000) < 200;
  between200And300Km = (this.rideDistance/1000) > 200 && (this.rideDistance/1000) < 300;
  between300And700Km = (this.rideDistance/1000) >= 300 && (this.rideDistance/1000) < 700;
  moreThan700Km = (this.rideDistance/1000) >= 700;
  

  constructor(
    private userSer: DriverService,
    private router: Router
  ) {}


  ngOnInit() {
    this.getPermittedPrices();
    this.rideSource = this.userSer.getRideDetails().rideSource.adminAreaLevel1 + ', ' +this.userSer.getRideDetails().rideSource.locality;
    this.rideDestination = this.userSer.getRideDetails().rideSource.adminAreaLevel1 + ', ' + this.userSer.getRideDetails().rideDestination.locality;
    this.rideAverageDuration = this.userSer.getRideDetails().rideAverageDuration.text;
    this.rideDistanceText = this.userSer.getRideDetails().rideDistance.text
  }

  priceChange(){
    this.next = this.betweenRange(this.ridePrice, this.minPermittedPrice, this.maxPermittedPrice)
  }

  betweenRange(val, min, max){
    if ((val >= min) && (val <= max)) {
      return true;
    }
  }

  getPermittedPrices(){
    if ( this.lessThan100Km ){
      let priceInRiyal = (this.rideDistance/1000) / 2;
      let percentPriceInriyal = (priceInRiyal*20) / 100
      let minPrice = priceInRiyal - percentPriceInriyal;
      let maxPrice = priceInRiyal + percentPriceInriyal;
      this.minPermittedPrice = Math.round(minPrice);
      this.maxPermittedPrice = Math.round(maxPrice);
    }

    if ( this.between100And200Km ){
      let priceInRiyal = (this.rideDistance/1000) / 2.5 ;
      let percentPriceInriyal = (priceInRiyal*20) / 100
      let minPrice = priceInRiyal - percentPriceInriyal;
      let maxPrice = priceInRiyal + percentPriceInriyal;
      this.minPermittedPrice = Math.round(minPrice);
      this.maxPermittedPrice = Math.round(maxPrice);
    }

    if ( this.between200And300Km ){
      let priceInRiyal = (this.rideDistance/1000) / 2.8571;
      let percentPriceInriyal = (priceInRiyal*20)/100
      let minPrice = priceInRiyal - percentPriceInriyal;
      let maxPrice = priceInRiyal + percentPriceInriyal;
      this.minPermittedPrice = Math.round(minPrice);
      this.maxPermittedPrice = Math.round(maxPrice);
    }

    if ( this.between300And700Km ){
      let priceInRiyal = (this.rideDistance/1000) / 3.3333;
      let percentPriceInriyal = (priceInRiyal*20) / 100
      let minPrice = priceInRiyal - percentPriceInriyal;
      let maxPrice = priceInRiyal + percentPriceInriyal;
      this.minPermittedPrice = Math.round(minPrice);
      this.maxPermittedPrice = Math.round(maxPrice);
    }

    if ( this.moreThan700Km ){
      let priceInRiyal = (this.rideDistance/1000) / 4;
      let percentPriceInriyal = (priceInRiyal*20) / 100
      let minPrice = priceInRiyal - percentPriceInriyal;
      let maxPrice = priceInRiyal + percentPriceInriyal;
      this.minPermittedPrice = Math.round(minPrice);
      this.maxPermittedPrice = Math.round(maxPrice);
    }
  }

  nextStep(){
    this.userSer.setRidePrice(this.ridePrice);
    this.router.navigate(['/driver/add/confirm-ride'])
  }
}
