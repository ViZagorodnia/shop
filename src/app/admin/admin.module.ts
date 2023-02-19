import { HttpClientModule, HttpClient } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { AdminRoutingModule } from './admin-routing.module'


@NgModule({
  declarations: [AdminRoutingModule.components],
  imports: [
    SharedModule,
    HttpClientModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
