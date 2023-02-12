import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { ProcessOrderComponent } from './components'



@NgModule({
  declarations: [ProcessOrderComponent],
  imports: [
    SharedModule
  ]
})
export class OrdersModule { }
