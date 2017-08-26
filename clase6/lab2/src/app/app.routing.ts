import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TeachersComponent} from "./teachers/teachers.component";
import {StudentsComponent} from "./students/students.component";
import {DriversComponent} from "./drivers/drivers.component";
import {VehicleComponent} from "./vehicle/vehicle.component";

const routes: Routes = [
  { path: '', redirectTo: '/teachers', pathMatch: 'full' },
  { path: 'teachers',  component:  TeachersComponent},
  { path: 'students',  component:  StudentsComponent},
  { path: 'drivers', component: DriversComponent },
  { path: 'vehicle', component: VehicleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}