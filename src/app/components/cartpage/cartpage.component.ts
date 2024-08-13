import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cartpage',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.css'
})
export class CartpageComponent implements OnInit {
  public showproduct:any=[]
  addressFrom:boolean=false
  service=inject(ApiService)
  totalamount!: number;
  myform!: FormGroup;
  ngOnInit(): void {
    this.service.products().subscribe((res)=>{
      this.showproduct=res
      this.totalamount=this.service.calculatePrice()
      console.log(res)
      this.myform=new FormGroup({
        email:new FormControl('',Validators.required),
        name:new FormControl('',Validators.required),
        mobile:new FormControl('',Validators.required),
        address:new FormControl('',Validators.required)


      })
    })
  }
  onsubmit(){
    this.myform.value
    console.log(this.myform.value)
    this.myform.reset()
  }
  cancel(){
    this.addressFrom=false
    this.myform.reset()

  }
  deleteItem(item:any){
    this.service.removeCartItem(item)
  }
  removeallcartitems(){
    this.service.removeallItems()
  }

}
