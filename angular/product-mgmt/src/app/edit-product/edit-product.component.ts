import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "../product";
import { ProductsService } from "../products.service";
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;
  constructor(
    private _route: ActivatedRoute,
    private _products: ProductsService,
    private _router: Router
  ) {
    this._route.paramMap.subscribe((data)=>{
      let id = data.get("id");
      this.product = this._products.getProductById(id);
    });
  }

  ngOnInit() {
  }

  deleteProduct(id){
    this._products.deleteProduct(id);
    this._router.navigate(["products"]);
  }
  updateProduct(id){
    this._products.updateProduct(this.product,id);
    this._router.navigate(["products"]);
  }
}
