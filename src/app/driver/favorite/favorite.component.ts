import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

import { DriverService } from '../services/driver.service'


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

  
  userFavorite: FormGroup;
  currentFavorite: null 
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private driverService: DriverService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.driverService.getCurrentsUserInfo().subscribe(a=>{
      this.currentFavorite = a.data().userFavorite;
     });
  }

  initializeForm(){
    this.userFavorite = this.fb.group({
      pets: false,
      smoking: false,
      music: false,
      chat: false
    })
  }
  
  onSubmit(){
    this.driverService.addFavorite(this.userFavorite.value)
      .then(response => {
        this.ngOnInit()
      }).catch(error => {
        console.log(error)
      })
  }

}
