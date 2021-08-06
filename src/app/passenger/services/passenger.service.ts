import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  isLoggedIn = false;

  passenger: any;

  currentUser: any;

 
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  constructor(
    private angularFireAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
  ) { }

  signIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error)
      }).then(userCredentials => {
        if (userCredentials) {
          this.currentUser = userCredentials.user;
          localStorage.setItem('uid', userCredentials.user.uid)
          localStorage.setItem('userRole', 'passenger')
          this.router.navigate(['/home'])
        }
      })
  }
  async createPassenger(passenger) {

    await this.angularFireAuth.createUserWithEmailAndPassword(passenger.email, passenger.password)
      .then(userCredentials => {

        this.passenger = passenger;
        localStorage.setItem('uid', userCredentials.user.uid)
        userCredentials.user.updateProfile({
          displayName: passenger.username
        })
        this.insertDriverData(userCredentials)
          .then(response => {
            localStorage.setItem('userRole', 'passenger')
            this.router.navigate(["/passenger/dashboard"])
          })
      })
      .catch(error => { 
        console.log(error) 
        this.eventAuthError.next(error)
      })
  }

  insertDriverData(userCredentials: firebase.auth.UserCredential) {
    return this.db.doc(`passengers/${userCredentials.user.uid}`).set({
      gender: this.passenger.gender,
      username: this.passenger.username,
      email: this.passenger.email,
      phone: this.passenger.phone,
      age: this.passenger.age,
    })
  }

  updateImageAndAddress(form){

  }

  getUserState() {
    return this.angularFireAuth.authState;
  }
  getUser() {
    return this.db.collection('passengers').doc(localStorage.getItem('uid')).get();
  }
  signOut() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem("uid")
      localStorage.removeItem("userRole")
      this.router.navigate(['/home'])
    });
  }
}
