import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

import { DriverService } from '../services/driver.service'

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.scss'],
})
export class DriverInfoComponent implements OnInit {

  userInfo : FormGroup;
  currentUser= null;
  userAdditionalInformation: any;
  constructor( 
    private fb: FormBuilder,
    private router:Router,
    private driverSer: DriverService
  ) { }


  ngOnInit() {
    this.driverSer.getCurrentsUserInfo().subscribe(user=>{
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
    this.driverSer.updateImageAndAddress(this.userAdditionalInformation)
  }

}
