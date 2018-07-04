import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {HttpModule } from  '@angular/http';
import {routing} from './app.routes';
import {ProductComponent} from './products/product-list.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';
import {ProductAddCompoment} from './products/product-add.component';
import {ProductService} from './products/product.service';
import 'rxjs/Rx';

@NgModule({
  imports: [ BrowserModule,routing,FormsModule,HttpModule,ReactiveFormsModule],
  declarations: [ AppComponent,ProductComponent,ProductFilterPipe,StarComponent,ProductDetailComponent,WelcomeComponent,ProductAddCompoment],
  bootstrap: [ AppComponent ],
  providers:[ProductService]
})
export class AppModule { } 
