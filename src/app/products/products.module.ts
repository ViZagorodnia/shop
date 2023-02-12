import { NgModule } from '@angular/core'
import { ProductComponent, ProductListComponent, ModalMessageComponent, ProductViewComponent } from './components'
import { SharedModule } from '../shared/shared.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductViewComponent,
    ModalMessageComponent
  ],
  imports: [
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    ModalMessageComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
