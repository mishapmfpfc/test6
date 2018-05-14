import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { BigTextDirective } from './directives/big-text.directive';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductComponent,
    BigTextDirective,
    AboutComponent,
    ProductDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StorageServiceModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
