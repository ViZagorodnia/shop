import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
//NgRx
import { Store } from '@ngrx/store'
import { selectProductsData, selectProductsError } from 'src/app/core/@ngrx'
import * as ProductsActions from '../../../core/@ngrx/products/products.actions'

import { ProductModel } from '../../models/product-model'
import { CartPromiseService } from 'src/app/cart/services/cart-promise.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<ReadonlyArray<ProductModel>>
  productsError$!: Observable<Error | string | null>

  @ViewChild('modal', {read: ViewContainerRef}) modal!: ViewContainerRef

  constructor(
              private cartPromiseService: CartPromiseService,
              private router: Router,
              private store: Store) {}

  ngOnInit(): void {
    this.products$ = this.store.select(selectProductsData)
    this.productsError$ = this.store.select(selectProductsError)
    this.store.dispatch(ProductsActions.getProducts())

  }

  onProductSelect(product: ProductModel) {
    console.log('You buy new item')
    this.cartPromiseService.addToCart(product)

    // Adding dynamic modal message component
    import('../modal-message/modal-message.component')
    .then(module => {
      this.modal.createComponent(module.ModalMessageComponent)
    })

    setTimeout(() => {
      this.modal.clear()
    }, 1000)
  }

  onProductDetails(product: ProductModel) {
    const link = ['/product', product.id]
    this.router.navigate(link)
  }
}
