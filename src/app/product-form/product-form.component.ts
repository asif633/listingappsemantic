import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})

export class ProductFormComponent implements OnInit {

  constructor(private prodServ: ProductService) { }

  ngOnInit() {
  }

  @Input() product: Product;
  @Input() addProduct: boolean;
  msg: string;
  msg1: string;

  updateProduct() {
    let fle: File;
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      fle = selectedFile;
    };
    let flip: File;
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('flip')).files[0]]) {
      flip = selectedFile;
    };
    this.prodServ.updateProduct(this.product, fle, flip);
  }

  deleteProduct() {
    this.prodServ.deleteProduct(this.product);
  }

  addNew() {
    let fle: File;
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      fle = selectedFile;
    };
    let flip: File;
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('flip')).files[0]]) {
      flip = selectedFile;
    };
    this.prodServ.addProduct(this.product, fle, flip);
  }

}
