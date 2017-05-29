import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() product: Product;

}
