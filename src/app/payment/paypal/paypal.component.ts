import { Component, OnInit } from '@angular/core';

import { loadStripe, Stripe } from '@stripe/stripe-js'

import { AngularFireFunctions } from '@angular/fire/functions'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss'],
})
export class PaypalComponent implements OnInit {

  private stripe: Stripe
  constructor() {}

  async ngOnInit() {
    this.stripe = await loadStripe(environment.stripe.testKey)
    const elements = this.stripe.elements()

    const style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: (window.innerWidth <= 500) ? '12px' : '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    const card = elements.create('card', { style });


    card.mount('#card-element');

  }

}
