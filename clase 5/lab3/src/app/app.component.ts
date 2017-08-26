import { Component } from '@angular/core';
import {Student} from '../models/student';

const STUDENT: Student[] = [
  {
    id: 1,
    name: "Alex",
    grade: 5,
    group: "B",
    teacher: "Claudia"
    
  },
  {
   id: 2,
    name: "Paola",
    grade: 4,
    group: "A",
    teacher: "Beto"
    
  },
  {
     id: 3,
    name: "jonathan",
    grade: 3,
    group: "C",
    teacher: "Carlos"
    
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "estudent and teachers";

  selected: Student;

  student: Student[] = STUDENT;

  onSelect(student: Student){
    this.selected = student;
  }
}