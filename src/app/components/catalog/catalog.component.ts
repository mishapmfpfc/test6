import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';
import { Category } from '../../models/category.model';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { LoginService } from '../../services/login.service';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: Product[];

  constructor(
  @Inject(LoginService) private loginService: LoginService,
  private router: Router,
  private dataService: DataService) {

      if (!loginService.isActiveSession()) {
        this.router.navigate(['/']);
      }

  }

  ngOnInit() {

    const self = this;

    this.dataService.categories = [];
    this.dataService.getCategories()
    .subscribe(categories => {
      categories.forEach((p) => this.dataService.categories.push(
          new Category(p['CategoryID'], p['CategoryName'])
        )
      );

      self.products = [];
      this.dataService.getProducts()
      .subscribe(products => {
          products.forEach((p) => self.products.push(
            new Product(p['ProductID'], p['ProductName'], self.getCategoryByCategoryId(p['CategoryID']), p['UnitPrice'])
          )
        );

        this.dataService.products = self.products;
      });

    });


/*
    this.products = [];
    const product1 = new Product(1, 'Proizvod Prvi', new Category(1, 'Kategorija 1'), 12);
    const product2 = new Product(1, 'Proizvod Drugi', new Category(1, 'Kategorija 2'), 12);
    const product3 = new Product(1, 'Proizvod Treci', new Category(1, 'Kategorija 1'), 12);
    const product4 = new Product(1, 'Proizvod Treci', new Category(1, 'Kategorija 1'), 12);

    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product3);
    this.products.push(product4);
*/
  }


  getCategoryByCategoryId(id: number): Category {
    for (const i in this.dataService.categories) {
      if (this.dataService.categories[i].id === id) {
        return this.dataService.categories[i];
      }
    }
  }

}
