import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Array<ProductModel> = []
  totalCost: number = 0
  totalQuantity: number = 0

  addToCart(product: any) {
    this.items.push(product)
    this.totalCost += product.price
    this.totalQuantity += 1
    console.log('Cost - ' + this.totalCost, ' Quantity - ' + this.totalQuantity)

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
    this.totalCost = 0
    this.totalQuantity = 0
    console.log('Cost - ' + this.totalCost, ' Quantity - ' + this.totalQuantity)
    return this.items
  }
}
