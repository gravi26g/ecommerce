import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  public cartitems:number=0
  service=inject(ApiService)
  constructor(){
    
  }
ngOnInit(): void {
  this.service.products().subscribe((res)=>{
    this.cartitems=res.length
  })
}
   

}
