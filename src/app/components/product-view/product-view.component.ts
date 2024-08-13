import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Product } from '../../model/product-model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{
apiservice=inject(ApiService)
  productsdata!: Product[];

  ngOnInit(): void {
    this.displyProducts()
  }
  displyProducts(){
   this.apiservice.getProduct().subscribe((res:any)=>{
    this.productsdata=res.products
    console.log(res)
   })
  }
  addtocart(item:Product){
    this.apiservice.addToCart(item)
  }
  removecart(item:Product){
    this.apiservice.removeCartItem(item)
  }
}
