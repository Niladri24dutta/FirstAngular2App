import { Component,Input  } from '@angular/core';
import {ProductComponent} from './products/product-list.component';
import {COMMON_DIRECTIVES} from '@angular/common/src/directives/index';

@Component({
    selector: 'pm-app',
    template: `
        <div>
          <nav class='navbar navbar-default'>
            <div class='container-fluid'>
              <a class='navbar-brand'>{{pageTitle}}</a>
              <ul class='nav navbar-nav'>
                <li><a href="#" [routerLink]="['/welcome']">Home</a></li>
                <li><a href="#" [routerLink]="['/products']">Product List</a></li>
                <li><a href="#" [routerLink]="['/addproduct']">Add Product</a></li>
              </ul>
            </div>
         </nav> 
         <div class='container'>
            <router-outlet></router-outlet>
         </div>
      </div>
    `
})
export class AppComponent { 
    pageTitle: string = 'Angular 2 with bootstrap component';
}
