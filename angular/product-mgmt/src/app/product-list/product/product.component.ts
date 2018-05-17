import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../product";
import { ProductsService } from "../../products.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor(private _products: ProductsService) { }

  ngOnInit() {
  }

  deleteProduct(id){
    this._products.deleteProduct(id);
  }
}
