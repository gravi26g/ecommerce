import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Product } from '../../model/product-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  id: string | null = null;
  productdata!:Product;
  showadd:boolean=true;
  showremove:boolean=false

  constructor(private route: ActivatedRoute, private exampleService: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      this.getData(this.id);
    });
  }





  getData(id: string | null): void {
    if (id) {
      this.exampleService.getproductbyId(id).subscribe((data:any) => {
        this.productdata=data
        console.log(data)
      });
    }
  }
  addToCart(item:any){
    this.exampleService.addToCart(item)
    this.showadd=false
    this.showremove=true

  }
  removeItem(item:Product){
    this.exampleService.removeCartItem(item)
    
    this.showadd=true
    this.showremove=false
  }
}

