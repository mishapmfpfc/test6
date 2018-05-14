import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html', 
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  id: number;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
      this.product = this.getProductByProductId(this.id);
    });



  }

  getProductByProductId(id: number): Product {
    for (const i in this.dataService.products) {
      if (this.dataService.products[i].id == id) {
        return this.dataService.products[i];
      }
    }
  }



}
