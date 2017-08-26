import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { DriversComponent } from './drivers/drivers.component';
import { VehicleComponent } from './vehicle/vehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeachersComponent,
    DriversComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{
      provide: APP_BASE_HREF, useValue : '/'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
