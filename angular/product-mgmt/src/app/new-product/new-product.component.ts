import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from "@angular/router";
import { ProductsService  } from "../products.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  product: Product;
  constructor(private _router: Router, private _products: ProductsService) {
    this.product = new Product();
  }

  ngOnInit() {
  }

  newProduct(){
    //add id field to product
    this.product.id = this._products.getNextId();
    //save this product to the products list in the service
    this._products.addProduct(this.product);
    this.product = new Product();
    //redirect to product list
    this._router.navigate(["products"])
  }
}
