﻿import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Product} from "../models/product";
import {Customer} from "../models/customer";

export class InMemoryProductService implements InMemoryDbService {
  createDb() {
    let products: Array<Product> = [
      {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
      },
      {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
      },
      {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
      }
    ];

    return {products};
  }

}

export class InMemoryCustomersService implements InMemoryDbService {
  createDb() {
    let customers: Array<Customers> = [
      {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
      },
      {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
      },
      {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
      }
    ];

    return {customers};
  }

}
