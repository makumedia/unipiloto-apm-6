   import { Component } from '@angular/core';

export class Teacher {

  id: string;
  profesion: string;
  grades: number;
  group: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "los productos del colegio";

  selected: Teacher;

  teacher: Teacher[] = TEACHER;

  onSelect(teacher: Teacher){
    this.selected = teacher;
  }
}

const TEACHER: Teacher[] = [
  {
    id: 'mao',
    profesion: "ENG",
    grades: 3,
    group: "B"
   
  },
  {
    id: 'carla',
    profesion: "LIS",
    grades: 4,
    group: "C"
  },
  {
    id: 'carlo',
    profesion: "CAL",
    grades: 5,
    group: "C"
  }
];