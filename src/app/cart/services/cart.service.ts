import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product-model';
import {CartItemModel} from '../models/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Array<CartItemModel> = []
  totalCost: number = 0
  totalQuantity: number = 0


  addToCart(product: ProductModel) {
    let cartItem = this.items.find(item => item.id === product.id)
    if(!cartItem) {
      this.items.push({id: product.id, name: product.name, price: product.price, quantity: 1})
    } else {
      cartItem.quantity += 1
    }
  }

  getItems() {
    return this.items
  }

  isCartFull(): boolean {
    if(this.items.length > 0) {
      return true
    }
    return false
  }

  onClearCart(): void {
    this.totalCost = 0
    this.totalQuantity = 0
    this.items = []
  }

  getTotalCost(): number {
    this.totalCost = this.items.reduce((acc, item) => acc + (item.quantity * item.price), 0)
    return this.totalCost
  }

  getTotalQuantity(): number {
    this.totalQuantity = this.items.reduce((acc, item) => acc + item.quantity, 0)
    return this.totalQuantity
  }

  onQuantityIncrease(item: CartItemModel) {
    item.quantity ++
  }

  onQuantityDecrease(item: CartItemModel) {
    if(item.quantity === 1) {
      return this.onDeleteItem(item)
    }

    item.quantity --
  }

  onDeleteItem(item: CartItemModel) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}
