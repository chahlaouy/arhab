import { Injectable } from "@angular/core";

import {  AngularFirestore } from '@angular/fire/firestore';

import { Observable, of } from "rxjs";

import { Driver } from "../models/driver.model";

@Injectable({
  providedIn: "root"
})
export class DriverService {
  private driversUrl = "http://localhost:3000/admin/drivers";
  constructor(
    private db: AngularFirestore
  ) {}

  getDrivers(): Observable<any>{
    return this.db.collection("users").get()
  }
  getRides(): Observable<any>{
    return this.db.collection("rides").get()
  }

  getDriverById(payload: string): Observable<any>{
    return this.db.doc(`users/${payload}`).get()
  }

  createDriver(payload: Driver): Observable<any> {
    return null
  }

  updateDriver(driver: Driver): Observable<any> {
    return null
  }

  deleteDriver(payload: number) {
    return null
  }
}