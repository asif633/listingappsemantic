import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.less']
})
export class ProductManageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedProduct: Product;
  addBool: boolean;

  getSelectedProduct(event) {
    this.selectedProduct = event;
  }

  addOrUpdate(event) {
    this.addBool = event;
  }

}
