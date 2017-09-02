import { Injectable } from '@angular/core';
import {STUDENTS} from "../mock/product-mock";

@Injectable()
export class ProductsService {

  getProducts(){
    return Promise.resolve(PRODUCTS);
  }

}
