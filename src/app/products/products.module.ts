import { NgModule } from '@angular/core'
import { ProductComponent } from './components/product/product.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ModalMessageComponent } from './components/modal-message/modal-message.component'
import { SharedModule } from '../shared/shared.module'



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ModalMessageComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    // ProductComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
