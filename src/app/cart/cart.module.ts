import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartListComponent } from './components/cart-list/cart-list.component';



@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
