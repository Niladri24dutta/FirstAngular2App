import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {Http,Response,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService{
//private _productUrl = "http://localhost:4923/api/values";
 private _productUrl = "api/products/products.json";
 constructor(private _http:Http){}
  getProducts():Observable<IProduct[]>{
      return this._http.get(this._productUrl)
      .map((response:Response) => <IProduct[]>response.json())
      .do(data => console.log("All Data: "+JSON.stringify(data)))
      .catch(this.handleError);
      
  }

  getProduct(id:any):Observable<IProduct[]>{
      var searchParam = new URLSearchParams();
      searchParam.append('id',id);
      return this._http.get(this._productUrl,{search:searchParam})
      .map((response:Response) => <IProduct[]>response.json())
      .do(data => console.log("Selected Product: "+JSON.stringify(data)))
      .catch(this.handleError);
      
  }

  private handleError(error:Response){
    console.error(error);
    return Observable.throw(error.json().error||'Server Error');
  }
}