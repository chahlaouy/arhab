import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private db: AngularFirestore,

  ) { }

  getAllDriverRequests(){
    let driverUid = localStorage.getItem('uid')
    return this.db.collection('users').doc(driverUid).collection('requests').valueChanges()
  }
}
