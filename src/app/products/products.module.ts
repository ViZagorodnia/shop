import { NgModule } from '@angular/core'
import { ProductComponent } from './components/product/product.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { CommonModule } from '@angular/common'
import { ModalMessageComponent } from './components/modal-message/modal-message.component'



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ModalMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // ProductComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
