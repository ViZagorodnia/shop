import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CartListComponent, CartItemComponent } from './components'
import { RouterModule } from '@angular/router'
import { ProductsModule } from '../products/products.module'



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
