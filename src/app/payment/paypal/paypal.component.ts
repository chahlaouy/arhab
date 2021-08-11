import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss'],
})
export class PaypalComponent implements OnInit {

  req: any
  checkoutId: any
   
  constructor(
    private paymentSer: PaymentService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.req = this.paymentSer.getPaymentObject()
    console.log(this.req)
    this.renderPaymentform()
  }


  renderPaymentform(){
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
    script.async = true;

    document.body.appendChild(script);

    const form = document.createElement("form")
    const formId = document.getElementById("form")
    form.action = "http://digigate.tn/result";
    form.setAttribute("class", "paymentWidgets");
    form.setAttribute("data-brands", "MADA")
    formId.appendChild(form);
  }

}
