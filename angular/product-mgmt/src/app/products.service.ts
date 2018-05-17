import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() { }

  addProduct(product){
    let temp = this.products.getValue();
    temp.push(product);
    this.products.next(temp);
  }

  getProducts(){
    return this.products.getValue();
  }
  getNextId(){
    return this.products.getValue().length;
  }
  getProductById(id){
    return this.products.getValue()[id];
  }
  updateProduct(product,id){
    let temp = this.products.getValue();
    temp[id] = product;
    this.products.next(temp);
  }
  deleteProduct(id){
    let temp = this.products.getValue().filter(x => x.id !== id);
    console.log(temp);
    this.products.next(temp);
  }
}
