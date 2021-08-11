import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { AngularFireFunctions } from '@angular/fire/functions'
import { environment } from 'src/environments/environment'
import { PaymentService } from '../payment.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-master-card',
  templateUrl: './master-card.component.html',
  styleUrls: ['./master-card.component.scss'],
})
export class MasterCardComponent implements OnInit {

  card: FormGroup;
  req: any
  checkoutId: any
   
  constructor(
    private fb: FormBuilder,
    private paymentSer: PaymentService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // this.initializeForm();
    this.req = this.paymentSer.getPaymentObject()
    console.log(this.req)
    this.renderPaymentform()
  }

  // initializeForm(){
  //   this.card = this.fb.group({
  //     number: "",
  //     holder: "",
  //     cvv: "",
  //     expirationDate: "",
  //   })
  // }
  

  renderPaymentform(){
    // const headers= new HttpHeaders()
    // .set('content-type', 'application/json')
    // .set('Accept', 'application/json')
    // .set('Access-Control-Allow-Origin', '*');
    const amount = this.req.numberOfSeats *  this.req.rideInfo.rideInfo.ridePrice
    this.http.get<any>("http://digigate.tn/checkout?amount=" + amount).subscribe(res => {
      console.log(res.id)
      this.checkoutId = res.id
      this.createForm()
    })     
  }

  createForm(){
    const script = document.createElement("script");

    script.src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.checkoutId}`;
    // ${this.checkoutId}
    script.async = true;
    document.body.appendChild(script);
    const form = document.createElement("form")
    const formId = document.getElementById("form")
    form.action = "http://digigate.tn/result";
    form.setAttribute("class", "paymentWidgets");
    form.setAttribute("data-brands", "VISA MASTER")
    formId.appendChild(form);
  }

}
