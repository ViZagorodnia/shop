import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
