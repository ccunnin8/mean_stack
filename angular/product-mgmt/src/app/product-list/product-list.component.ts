import { Component, OnInit, Input} from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private _products: ProductsService) {

  }

  ngOnInit() {
    this._products.products.subscribe(x => this.products = x);
  }

}
