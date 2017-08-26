   import { Component } from '@angular/core';

export class Vehicle {

  brand: string;
  model: string;
  color: string;
  plate: string;
  capacity: number;
  builtyear: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "list car";

  selected: Vehicle;

  vehicle: Vehicle[] = VEHICLE;

  onSelect(vehicle: Vehicle){
    this.selected = vehicle;
  }
}


const VEHICLE: Vehicle[] = [
  {
    brand: 'VW',
    model: "GTI",
    color: "blue",
    plate: "SPEEDMAX",
    capacity: 5,
    builtyear: 2017
   
  },
  {
    brand: 'NISSAN',
    model: "GTR",
    color: "orange",
    plate: "SKYLINE",
    capacity: 5,
    builtyear: 2001
  },
  {
    brand: 'SUBARU',
    model: "SRT",
    color: "bluemate",
    plate: "STI",
    capacity: 5,
    builtyear: 2012
  }
];