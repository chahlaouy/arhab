import { Injectable } from '@angular/core';
import {  AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';

import { FirebaseService } from './firebase.service'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  private errorConfirmingRide= new BehaviorSubject<string>("");
  errorConfirmingRide$ = this.errorConfirmingRide.asObservable();

  private rideSource: any;
  private rideDestination: any;
  private rideNumberOfSeats: any;
  private ridePrice: any;
  private rideDistance = {
    text: '',
    value: 0
  };
  private rideAverageDuration = {
    text: '',
    value: 0
  };
  private rideDate = {
    rideDayAndMonth: {
      day: '',
      month: '',
      monthValue: ''
    },
    rideHour: {
      hour: '',
      minute: ''
    }
  }

  constructor(
    private db: AngularFirestore,
    private firebaseService: FirebaseService,
    private mapsAPILoader: MapsAPILoader,
  ) {

  }

  
  setRideDayAndMonth(date){
    this.rideDate.rideDayAndMonth.day = date.day.text
    this.rideDate.rideDayAndMonth.month = date.month.text
    this.rideDate.rideDayAndMonth.monthValue = date.month.value
  }
  setRideHour(dateInHour){
    this.rideDate.rideHour.hour = dateInHour.hour.text
    this.rideDate.rideHour.minute = dateInHour.minute.text
  }

  getCurrentsUserInfo(){
          
    return this.db.doc(`drivers/${localStorage.getItem('uid')}`).get()
  }

  addCar(car){
    return this.db.doc(`drivers/${localStorage.getItem('uid')}`).update({
      userCar: car
    })
  }

  addFavorite(favorite){ 
    return this.db.doc(`drivers/${localStorage.getItem('uid')}`).update({
      userFavorite: favorite
    }) 
  }

  async confirmRide(){
    this.firebaseService.getUser().then(doc =>{ 
      let ride = {
        rideInfo: this.getRideDetails(),
        userInfo: {
          userUID:localStorage.getItem('uid'),
          userExtraInfo: doc.data()
        }
      }
      return new Promise<any>((resolve, reject) => { 
        this.db
            .collection("rides")
            .add(ride)
            .then(
                res => {
                  console.log(res)
                  this.errorConfirmingRide.next('success')
                }, 
                err => reject(err)
            )
     })
    }).catch(err => {
      this.errorConfirmingRide.next('error')
    })
    
    
  }

  setRideSource(source){
    this.rideSource = source;
  }
  setRidePrice(price){
    this.ridePrice = price;
  }
  setRideDestination(destination){
    this.rideDestination = destination;
    this.getDistance();
  }

  setNumberOfSeats(seats){
    this.rideNumberOfSeats = seats;
  }
  
  getRideDetails(){
    return {
      rideSource: this.rideSource,
      rideDestination: this.rideDestination,
      rideNumberOfSeats: this.rideNumberOfSeats,
      rideDistance: this.rideDistance,
      ridePrice: this.ridePrice,
      rideAverageDuration: this.rideAverageDuration,
      rideDate: this.rideDate
    }
  }

  getDistance() {
    this.mapsAPILoader.load().then(() => {
      let service = new google.maps.DistanceMatrixService;
      service.getDistanceMatrix({
        origins: [{ lat: this.rideSource.lat, lng: this.rideSource.lng }],
        destinations: [{ lat: this.rideDestination.lat, lng: this.rideDestination.lng }],
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (resp, status) => {
        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {
          this.rideDistance= {
            text: resp.rows[0].elements[0].distance.text,
            value: resp.rows[0].elements[0].distance.value
          }
          this.rideAverageDuration= {
            text: resp.rows[0].elements[0].duration.text,
            value: resp.rows[0].elements[0].duration.value
          }
          // console.log("/////////////////////////////");
          // console.log(this.rideDistance, this.rideAverageDuration);
        }
      })
    })
  }

  getAllRides(){
    return this.db.collection("rides").ref
  }

  deleteDriverRequests(uid){
    
    
  }

  updateImageAndAddress(form){

  }
}
