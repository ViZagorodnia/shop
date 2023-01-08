import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product-model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  products: Array<ProductModel> = []

  @ViewChild('modal', {read: ViewContainerRef}) modal!: ViewContainerRef

  constructor(private productsService: ProductsService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data.productsList
      console.log(this.products)
    })
  }

  onProductSelect(product: any) {
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
}
