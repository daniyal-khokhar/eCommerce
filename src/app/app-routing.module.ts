import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserformComponent } from './userform/userform.component';
import { Nav1Component } from './nav1/nav1.component';
import { Nav2Component } from './nav2/nav2.component';
import { BlogComponent } from './blog/blog.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'products',
    component: HomeComponent
  }, 
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: "sale",
    component: SaleComponent
  },
  {
    path: "userform",
    component: UserformComponent
  },
  {
    path: "userlist",
    component: UserlistComponent
  },
  {
    path: "nav1",
    component: Nav1Component
  },
  {
    path: "nav2",
    component:Nav2Component
  },
  {
    path: "blog",
    component:BlogComponent
  },
  {
    path: "product",
    component:ProductComponent
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
