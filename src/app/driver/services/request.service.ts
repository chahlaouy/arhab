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
    return this.db.collection('drivers').doc(driverUid).collection('requests').valueChanges()
  }
  deleteDriverRequests(uid){
    let driverUid = localStorage.getItem('uid')
    this.db.collection('users').doc(driverUid).collection('requests').doc(uid).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  }
}
