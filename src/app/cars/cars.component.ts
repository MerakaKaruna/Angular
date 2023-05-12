import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  cars:any[]
  hide:boolean
constructor(){
  this.cars=[{
    name:"BMW",
    model:'3 Series',
    year:2008
  },
  {
    name:"Mercedes-Benz",
    model:'1Gen',
    year:2000
  }
  ]
  this.hide=true
}
public getCars():any[]{
  return this.cars;
}
toggle(){
  this.hide=!this.hide;
}
ngOnInit(): void {
  
}
}
