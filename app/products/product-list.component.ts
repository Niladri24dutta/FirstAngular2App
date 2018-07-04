import { Component,Input,OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {IProduct} from './product'
import {ProductService} from './product.service'



@Component(
    {
       
        templateUrl:'app/products/product-list.component.html',
        styleUrls:['app/products/product-list.component.css']
    }
)

export class ProductComponent implements OnInit {
pageTitle:string = 'Product List';
imageWidth :number= 50;
imageMargin:number=2;
isVisible :boolean=true;
listFilter:string;
products:IProduct[];
errorMessage:string;

constructor(private _productService:ProductService,private _router: Router)
{
    
}
showImage():void{
  this.isVisible = !this.isVisible;
}

ngOnInit():void{
    this._productService.getProducts()
    .subscribe(products => this.products = products,
    error => this.errorMessage = <any>error);
    
}

OnRatingClicked(message:string):void{
  this.pageTitle = 'Product List: ' + message;
}

editProduct(productId:number){
    this._router.navigate(['/editProduct', productId]);
   //console.log("this is the edit action");
}

deleteProduct(productId:number){
  this._router.navigate(['/deleteProduct', productId]);
    //console.log("this is the delete action");
}

}
