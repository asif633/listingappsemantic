import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.less']
})
export class ListContainerComponent implements OnInit {

  constructor(private prodServ: ProductService) { }

  products: Observable<Product[]>;

  ngOnInit() {
    this.products = this.prodServ.getProducts();
  }

}
