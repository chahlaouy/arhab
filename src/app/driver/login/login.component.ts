import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  
  user: FormGroup;

  authError: any;
  

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private router:Router
    ) { }

  ngOnInit() {
    this.initializeForm();
    this.firebaseService.eventAuthError$.subscribe(data => {
      this.authError = data;
    })
  }
  
  initializeForm(){
    this.user = this.fb.group({
      username: "",
      password: ""
    })
  }
  onSubmit(){
    this.firebaseService.signIn(this.user.value.username, this.user.value.password);
  }
}
