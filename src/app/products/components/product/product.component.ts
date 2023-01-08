import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  hovered: boolean = false

  @Input() product!: ProductModel
  @Output() productSelect: EventEmitter<ProductModel> = new EventEmitter<ProductModel>()

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.hovered = true
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.hovered = false
  }

  constructor() { }

  onAddToCart(product: any) {
    this.productSelect.emit(product)
  }
}
