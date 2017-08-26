import { Component } from '@angular/core';
import {Vehicle} from '../models/vehicle';

const VEHICLE: Vehicle[] = [
  {
   
    brand: "Nissan",
    model: "abart",
    year: 2000,
    type: "sedan"
   
  },
  {
   brand: "Nissan",
    model: "gtr",
    year: 2000,
    type: "pickup"
   
  },
  {
   brand: "Nissan",
    model: "cabrio",
    year: 2000,
    type: "suv"
   
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "the vehicle";

  selected: Vehicle;

  vehicle: Vehicle[] = VEHICLE;

  onSelect(vehicle: Vehicle){
    this.selected = vehicle;
  }
}
