import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, switchMap } from 'rxjs'
import { CartService } from 'src/app/cart/services/cart.service'
import { ProductModel } from '../../models/product-model'
import { ProductObservableService } from '../../../products/'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  products$!: Observable<Array<ProductModel>>

  @ViewChild('modal', {read: ViewContainerRef}) modal!: ViewContainerRef

  constructor(private productObservableService: ProductObservableService,
              private cartService: CartService,
              private router: Router) {}

  ngOnInit(): void {
    this.products$ = this.productObservableService.getProducts()
  }

  onProductSelect(product: ProductModel) {
    console.log('You buy new item')
    this.cartService.addToCart(product)

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
