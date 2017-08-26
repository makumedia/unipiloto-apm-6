import { Component, Input } from '@angular/core';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'vehicle-detail',
  templateUrl: './vehicledetail.component.html'
})

export class VehicleDetailComponent {
  @Input()
  Vehicle: Vehicle;
}