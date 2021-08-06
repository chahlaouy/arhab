import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

import { DriverService } from '../services/driver.service'

@Component({
  selector: 'app-driver-car',
  templateUrl: './driver-car.component.html',
  styleUrls: ['./driver-car.component.scss'],
})
export class DriverCarComponent implements OnInit {

  userCar: FormGroup;

  currentCar= null;

  brands= [
    {label: 'كيا', array: ['اوبتيما','سيراتو','كادينزا', 'سبورتاج','ريو','بيكانتو','كرنفال']},
    {label: 'مرسيدس', array: ['E','C','S','CLA','G','A','ML']},
    {label: 'تويوتا',array: ['كامري','لاند كروزر','كوزولا','يارس','اف جي','افالون',]},
    {label: 'هيونداي', array: ['النترا','سوناتا','اكسنت','توسان','ازيرا','جنسس','كريتا','i10']},
    {label: 'نيسان', array: ['باترول','صني','التيما','مكسيما','سنترا',]},
    {label: 'شيفروليه', array: ['كابرس','ماليبو','كروز','سبارك','لومينا','كمارو','اوبترا']},
    {label: 'لكزس', array: ['LX','ES','LS','GS','RX','IS','GX','NX','RC']},
    {label:   'جي ام سي' ,array: ['يوكن','سييرا','اكاديا','انفوي','سافانا','سفاري']},
    {label: 'فورد', array: ['تورس','فكتوريا','فيوجن','موستنغ','رانجر','ايدج','فلكس' ]},
    {label: 'بي إم دبليو',array: ['M','Z','7','5','X','6','4']},
    {label: 'بورش', array: ['كاين','GTS','بوكستر','ماكان','كايملن','other']},
    {label: 'أودي', array: ['M','Z','7','5','X','6','4']},
    {label: 'كرايسلر', array: ['C300','S300','M300','ج فوياجر','BT كروزر','SRT','C200']},
    {label: 'جيلي', array:  ['باندا','EC7','EC8','X7','GS','GC7','GX2']},
    {label: 'انفنتي', array: ['QX','FX','Q','G','M','JX']},
    {label: 'ام جي', array: ['RX','ZS', '3','5', '6']}
  
  ]

  modelArray= null;
  carReleaseYear= ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020',]

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private userService: DriverService
  ) { }
 
  ngOnInit() {
    this.initializeForm();
    this.userService.getCurrentsUserInfo().subscribe(a=>{
      this.currentCar = a.data().userCar;
     });
  }

  initializeForm(){
    this.userCar = this.fb.group({
      brand: "",
      model: "",
      state: "",
      serialNumber: ""
    })
  }

  changeBrand(e){
    this.userCar.value.brand=e.target.value;
    this.brands.forEach(item => {
      if (item.label === e.target.value){
        this.modelArray = item.array
      }
    })
  }

  onSubmit(){
    this.userService.addCar(this.userCar.value)
    .then(response => {
      this.ngOnInit()
    }).catch(error => {
      console.log(error)
    })
  }

}
