import { NgModule } from "@angular/core"
import { RouterModule, type Routes } from "@angular/router"
import { CanDeactivateGuard } from "../core"
import { AuthGuard } from "../core/guards/auth.guard"
import { ProductResolver } from "../core/guards/product.resolver"
import { AdminComponent } from "./admin.component"

import { OrdersComponent, ProductsAddComponent, ProductsComponent, ProductsEditComponent } from './components'

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'product/add', component: ProductsAddComponent },
          { path: 'product/edit/:productID',
            component: ProductsEditComponent,
            resolve: {product: ProductResolver},
            canDeactivate: [CanDeactivateGuard]
          },
          { path: 'orders', component: OrdersComponent },
          { path: '', component: ProductsComponent },
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule{
  static components = [
    AdminComponent,
    OrdersComponent,
    ProductsAddComponent,
    ProductsComponent,
    ProductsEditComponent
  ]
}
