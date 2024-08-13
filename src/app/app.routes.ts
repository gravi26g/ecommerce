import { Routes } from '@angular/router';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { OrderPageComponent } from './components/order-page/order-page.component';

export const routes: Routes = [
    {path:"",component:ProductViewComponent},
    {path:'productdetail/:id',component:ProductDetailComponent},
    {path:'cartpage',component:CartpageComponent},
    {path:'orderpage',component:OrderPageComponent}

];
