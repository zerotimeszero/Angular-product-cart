import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UmListComponent } from './components/um-list/um-list.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: "", component: ProductsComponent},
  {path: "um-list", component: UmListComponent,data: {animation: 'isRight'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
