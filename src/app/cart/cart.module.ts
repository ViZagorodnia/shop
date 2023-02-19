import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { ProductsModule } from '../products/products.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CartListComponent, CartItemComponent } from './components'
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent
  ],
  imports: [
    FontAwesomeModule,
    SharedModule,
    ProductsModule,
    RouterModule
  ],
  exports: [
    // CartItemComponent,
    CartListComponent
  ]
})
export class CartModule { }
