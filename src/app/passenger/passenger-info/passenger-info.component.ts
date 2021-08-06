import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { PassengerService } from '../services/passenger.service'

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.scss'],
})
export class PassengerInfoComponent implements OnInit {

  userInfo : FormGroup;
  currentUser= null;
  userAdditionalInformation: any;
  constructor( 
    private fb: FormBuilder,
    private router:Router,
    private passengerSer: PassengerService
  ) { }


  ngOnInit() {
    this.passengerSer.getUser().subscribe(user=>{
      this.currentUser = user.data() 
     });
     this.initializeForm()
  }

  initializeForm(){ 
    this.userAdditionalInformation = this.fb.group({ 
      address: "",
      picture: ""

    })
  }

  getImage(e){
    this.userAdditionalInformation.value.picture = e.target.files[0];
    console.log(this.userAdditionalInformation.value.picture);
  }

  onSubmit(){
    console.log(this.userAdditionalInformation.value)
    this.passengerSer.updateImageAndAddress(this.userAdditionalInformation)
  }

}
