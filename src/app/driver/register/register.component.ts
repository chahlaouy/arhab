import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  user: FormGroup;
  authError: any;
  constructor(
    private fb: FormBuilder,
    private authService: FirebaseService,
    private router:Router
    ) { }

  ngOnInit() {
    this.initializeForm();
    this.authService.eventAuthError$.subscribe(data => {
      this.authError = data;
    })
  }


  initializeForm(){ 
    this.user = this.fb.group({
      username: "",
      password: "",
      email: "",
      gender: "",
      phone: "",
      age: "",
      confirmationPassword: ""
    })
  }
  
  getImage(e){
    this.user.value.picture = e.target.files[0];
    console.log(this.user.value.picture);
  }

  onSubmit(){
    console.log(this.user.value)
    this.authService.createDriver(this.user.value);
  }

}
