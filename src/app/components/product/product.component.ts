import { Component, OnInit, Input, Inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  @Input() product;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }


  addProduct(product: Product) {
    alert(product.price * product.quantity);
  }

  gotoProductDetails(product: Product) {
    this.router.navigate(['/product-details/' + product.id ]);
  }

}
