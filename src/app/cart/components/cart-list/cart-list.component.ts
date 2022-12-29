import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductModel } from '../../../products/models/product-model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass']
})
export class CartListComponent implements OnInit, AfterContentChecked {
  items: Array<ProductModel> = []
  totalQuantity: number = 0
  totalCost: number = 0
  faTrash = faTrash

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems()
   }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.totalCost = this.cartService.totalCost
    this.totalQuantity = this.cartService.totalQuantity
  }

  trackByItems(index: number, item: any): number { return item.id }

  onClearCart() {
    this.cartService.cleanCart()
  }

}
