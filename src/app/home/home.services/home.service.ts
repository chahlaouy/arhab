import { Injectable } from '@angular/core';

import {  AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private db: AngularFirestore
  ) { }

  getAllRides(){
    return this.db.collection("rides").get()
  }

  getRidesByDate(dateBegin: any, dateEnd: any){
    
  }

  getRidesByFavorite(favorite: any){
    
  }

  getRidesByLocation(source: any, destination: any){
    
  }
  
}
