import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filterSource: any;
  private filterDestination: any;
  private filterDate: any;
  private filterFavorite: any
  constructor() { }

  setFilterSource(data){
    this.filterSource = data
  }
  setFilterDestination(data){
    this.filterDestination = data
  }
  setFilterDate(data){
    this.filterDate = data
  }
  setFilterFavorite(data){
    this.filterFavorite = data
  }

  getFilterObject(){
    if (this.filterSource != undefined){

      return {
        filterSource: this.filterSource,
        filterDestination: this.filterDestination,
        filterDate: this.filterDate,
        filterFavorite: this.filterFavorite
      }
    }
    return null
  }
}
