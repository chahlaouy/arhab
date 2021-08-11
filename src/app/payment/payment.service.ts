import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  payment: any
  type: any

  constructor() { }


  setPaymentTree(payment){
    this.payment = payment
  }
  setPaymentType(type){
    this.type = type
  }
  setPayment(payment){

  }
  getPaymentObject(){
    return this.payment
  }
}
