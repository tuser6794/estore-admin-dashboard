import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from 'src/app/pages/categories/categories.component';
import { OrdersComponent } from 'src/app/pages/orders/orders.component';
import { PaymentsComponent } from 'src/app/pages/payments/payments.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { ShipmentsComponent } from 'src/app/pages/shipments/shipments.component';
import { UsersComponent } from 'src/app/pages/users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'products/categories', component: CategoriesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'shipments', component: ShipmentsComponent },
  { path: 'payments', component: PaymentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
