import { Routes } from '@angular/router'

import { ProductListComponent, ProductViewComponent } from './products'
import { CartListComponent } from './cart'
import { ProcessOrderComponent } from './orders'

import { PathNotFoundComponent } from './path-not-found'
import { AuthGuard, IsCardEmptyGuard } from './core'

export const APP_ROUTES: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent,
    title: 'Apple store'
  },
  {
    path: 'product/:productID',
    component: ProductViewComponent,
    title: 'Details about the product'
  },
  {
    path: 'cart',
    component: CartListComponent,
    title: 'Your cart'
  },
  {
    path: 'order',
    canActivate: [IsCardEmptyGuard],
    component: ProcessOrderComponent,
    title: 'Process your order'
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PathNotFoundComponent,
    title: 'Page not found'
  }
]
