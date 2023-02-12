import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core'
import { ProductModel } from '../../models/product-model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  hovered: boolean = false

  @Input() product!: ProductModel
  @Output() productSelect: EventEmitter<ProductModel> = new EventEmitter<ProductModel>()
  @Output() productDetails: EventEmitter<ProductModel> = new EventEmitter<ProductModel>()

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.hovered = true
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.hovered = false
  }

  constructor() { }

  onAddToCart(product: ProductModel) {
    this.productSelect.emit(product)
  }

  onDetails(product: ProductModel) {
    this.productDetails.emit(product)
  }
}
