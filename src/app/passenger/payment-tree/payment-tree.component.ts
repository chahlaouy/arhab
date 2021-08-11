import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/payment/payment.service';

@Component({
  selector: 'app-payment-tree',
  templateUrl: './payment-tree.component.html',
  styleUrls: ['./payment-tree.component.scss'],
})
export class PaymentTreeComponent implements OnInit {

  constructor(
    private router: Router,
    private paymentSer: PaymentService
  ) { }

  ngOnInit() {
    console.log(this.paymentSer.getPaymentObject())
  }

  setPaymentType(){
    this.paymentSer.setPaymentType("Master Card")
    this.router.navigate(["/payment/master-card"])
  }

}
