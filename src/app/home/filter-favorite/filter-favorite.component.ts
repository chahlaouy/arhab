import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

import { FilterService } from '../home.services/filter.service'

@Component({
  selector: 'app-filter-favorite',
  templateUrl: './filter-favorite.component.html',
  styleUrls: ['./filter-favorite.component.scss'],
})
export class FilterFavoriteComponent implements OnInit {

  
  userFavorite: FormGroup;
  currentFavorite: null 
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.initializeForm();
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
    this.filterService.setFilterFavorite(this.userFavorite.value);
    this.router.navigate(["/home/rides-list"])
  }

}
