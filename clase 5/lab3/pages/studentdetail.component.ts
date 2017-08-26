import { Component, Input } from '@angular/core';
import { Product } from '../models/student';

@Component({
  selector: 'student-detail',
  templateUrl: './detail.component.html'
})

export class StudentDetailComponent {
  @Input()
  student: Student;
}