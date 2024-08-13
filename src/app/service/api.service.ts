import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/product-model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dummyjson.com/products';
  cartItemList: any = []
  productList = new BehaviorSubject<any>([])
  http = inject(HttpClient)

  constructor() { }

  getProduct() {
    return this.http.get<Product>(`${this.apiUrl}`)
  }
  getproductbyId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)

  }
  addToCart(data:Product){
    this.cartItemList.push(data)
    this.productList.next(this.cartItemList)
    console.log(this.cartItemList)
  }

  products(){
    return this.productList.asObservable()
  }
  removeCartItem(data:Product){
    this.cartItemList.map((a:Product,index:Product)=>{
      if(data.id==a.id){
        this.cartItemList.splice(index,1)

      }
    })
    this.productList.next(this.cartItemList)

    
  }
  calculatePrice(){
    let total=0
    this.cartItemList.map((a:any)=>{
       total+=a.price
    })
    return total
  }
  removeallItems(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList)
  }
}
