import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { PassengerService } from './passenger.service'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private requestToCollecionPassenger= {
    driverUid: null,
    chatID: null,
    numberOfSeats: null,
    rideInfo: null
  }
  private requestToCollecionDriver= {
    passengerUid: null,
    passengerInfo: null,
    chatID: null,
    numberOfSeats: null,
    rideInfo: null
  }

  constructor(
    private db: AngularFirestore,
    private passengerServ: PassengerService
  ) { }

  setRideInfo(rideInfo){
    this.requestToCollecionDriver.rideInfo = rideInfo
    this.requestToCollecionPassenger.rideInfo = rideInfo
    this.requestToCollecionPassenger.driverUid =rideInfo.userInfo.userUID;
    this.requestToCollecionDriver.passengerUid = localStorage.getItem('uid');

    this.setChatID()
  }
  

  allowedNumberOfSeats(){
    return this.requestToCollecionDriver.rideInfo.rideInfo.rideNumberOfSeats
  }
  
  setNumberOfSeatsAndSaveRequest(numberOfSeats){
    this.requestToCollecionDriver.numberOfSeats = numberOfSeats;
    this.requestToCollecionPassenger.numberOfSeats = numberOfSeats;
    
    this.passengerServ.getUser().subscribe(user => {
      this.requestToCollecionDriver.passengerInfo = user.data()

      /**
       * Save Request To request subcollection under passenger Collection
       */

      this.db.collection('passengers').doc(this.requestToCollecionDriver.passengerUid).collection('requests').add(this.requestToCollecionPassenger).then(data => {
        // console.log(data)
      })
      
      
      /**
       * Save Request To requests subcollection under driver Collection
       */

      this.db.collection('users').doc(this.requestToCollecionPassenger.driverUid).collection('requests').add(this.requestToCollecionDriver).then(data => {
        // console.log(data)
      })
      
    })
  }



  setChatID(){
    let chatID = this.requestToCollecionDriver.passengerUid + this.requestToCollecionPassenger.driverUid;
    this.requestToCollecionPassenger.chatID = chatID;
    this.requestToCollecionDriver.chatID = chatID
  }


  getAllPassengersRequest(){
    let passengerUid = localStorage.getItem('uid')
    return this.db.collection('passengers').doc(passengerUid).collection('requests').valueChanges()
  }

}
