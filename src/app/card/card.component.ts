import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() product: Product;
  
}
