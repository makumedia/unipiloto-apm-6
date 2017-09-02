import {Component, OnInit} from '@angular/core';
import { Student } from '../../models/student';
import {ProductsService} from "../../service/products.service";

@Component({
  selector: 'student-list-app',
  templateUrl: './student.component.html',
})
export class ProductsComponent implements OnInit {
  title: string = "los estudiantes del Año";

  selected: Student;

  products: Student[];

  constructor(private studentService: StudentService) {

  }

  getProducts() {
    this.studentService.getStudent().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }


  onSelect(product: Product){
    this.selected = product;
  }
}
