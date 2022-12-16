import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductModel } from '../interface/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  @Input() product?: ProductModel

  constructor(private cartService: CartService) { }

  onAddToCart(product: any) {
    console.log('You buy new item')
    this.cartService.addToCart(product)
  }
}
