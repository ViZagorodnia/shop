import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  @Input() product!: ProductModel
  @Output() productSelect: EventEmitter<ProductModel> = new EventEmitter<ProductModel>()

  constructor() { }

  onAddToCart(product: any) {
    this.productSelect.emit(product)
  }
}
