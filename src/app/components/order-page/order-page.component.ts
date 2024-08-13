import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent implements OnInit {
service=inject(ApiService)
router=inject(Router)
  totalamount: number=0
//  constructor(private router:Router){

//  } 

ngOnInit(): void {
  setTimeout(() => {
    this.router.navigate(["/"])
  }, 4000);
  this.totalamount=this.service.calculatePrice()
  
}

}
