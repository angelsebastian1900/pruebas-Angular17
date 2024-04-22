import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableProductsComponent } from './table-products/table-products.component';
import { CardProductsComponent } from './card-products/card-products.component';
import { DetailsProductsComponent } from './details-products/details-products.component';

const routes: Routes = [
  {path: '', component: CardProductsComponent},
  {path: 'products', component: TableProductsComponent},
  //{path: 'products-list', component: TableProductsComponent},
  {path: 'card-products', component: CardProductsComponent},
  {path: 'products/details-product/:id', component: DetailsProductsComponent},
  {path: 'products/details-product/:id', component: DetailsProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
