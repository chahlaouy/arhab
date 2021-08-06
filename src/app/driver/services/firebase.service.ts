import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService { 

  private uploadTask: firebase.storage.UploadTask;

  isLoggedIn = false;

  newDriver: any;

  currentUser: any;
 
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  constructor(
    private angularFireAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) { }

  signIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error)
      }).then(userCredentials => {
        if (userCredentials) {
          this.currentUser = userCredentials.user;
          localStorage.setItem('uid', userCredentials.user.uid)
          localStorage.setItem('userRole', 'driver')
          this.router.navigate(['/home'])
        }
      })
  }
  async createDriver(driver) {

    await this.angularFireAuth.createUserWithEmailAndPassword(driver.email, driver.password)
      .then(userCredentials => {

        this.newDriver = driver;
        localStorage.setItem('uid', userCredentials.user.uid)
        userCredentials.user.updateProfile({
          displayName: driver.username
        })
        this.insertDriverData(userCredentials)
          .then(response => {
            localStorage.setItem('userRole', 'driver')
            this.router.navigate(["/user/dashboard"])
          })
      })
      .catch(error => { 
        console.log(error)
        this.eventAuthError.next(error)
      })
  }

  insertDriverData(userCredentials: firebase.auth.UserCredential) {
    return this.db.doc(`users/${userCredentials.user.uid}`).set({
      gender: this.newDriver.gender,
      username: this.newDriver.username,
      email: this.newDriver.email,
      picture: this.newDriver.picture,
      phone: this.newDriver.phone,
      age: this.newDriver.age,
    })
  }

  getUserState() {
    return this.angularFireAuth.authState;
  }
  getUser() {
    return this.db.collection('users').doc(localStorage.getItem('uid')).ref.get();
  }
  signOut() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem("uid")
      localStorage.removeItem("userRole")
      this.router.navigate(['/home'])
    });
  }
}
