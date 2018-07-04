import {Component,OnInit} from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { IProduct } from './product';
import {Validators} from '@angular/forms';

@Component(
    {
       
        templateUrl:'app/products/product-add.component.html',
        styleUrls:['app/products/product-add.component.css']
    }
)

export class ProductAddCompoment implements OnInit{
  pageTitle:string="Add a new Product";
  product:FormGroup;

  ngOnInit(){
      this.product = new FormGroup({
        productInfo: new FormGroup({
           productId : new FormControl('',[Validators.required,Validators.minLength(3)]),
           productName : new FormControl('',Validators.required),
           productCode : new FormControl('',Validators.required)
        }),
        releaseInfo:new FormGroup({
            releaseDate:new FormControl('',Validators.required),
            description:new FormControl('',Validators.required),
            price:new FormControl('',Validators.required),
            starRating:new FormControl('',Validators.required)
        })
        
      });
  }

  onSubmit({value,valid}:{value:IProduct,valid:boolean}):void{
     console.log(value,valid);
  }
}
