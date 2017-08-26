import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {StudentDetailComponent} from '../pages/studentdetail.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


