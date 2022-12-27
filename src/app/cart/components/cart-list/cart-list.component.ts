import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductModel } from '../../../products/models/product-model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass']
})
export class CartListComponent implements OnInit {
  items: Array<ProductModel> = []

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems()
   }

  ngOnInit(): void {
  }

  trackByItems(index: number, item: any): number { return item.id }

  onClearCart() {
    this.cartService.cleanCart()
  }

}
