import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Array<ProductModel> = []

  addToCart(product: any) {
    this.items.push(product)
  }

  getItems() {
    return this.items
  }

  isCartFull() {
    if(this.items.length > 0) {
      return true
    }
    return false
  }

  cleanCart() {
    this.items = []
    return this.items
  }
}
