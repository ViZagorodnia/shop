import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { firstValueFrom } from 'rxjs'

import type { CartItemModel } from '../models/cart-model'
import type { ProductModel } from 'src/app/products'

@Injectable({
  providedIn: 'any'
})
export class CartPromiseService {
  totalCost: number = 0
  totalQuantity: number = 0
  items: Array<CartItemModel> = []

  private cartUrl = 'http://localhost:3000/cart'

  constructor(private http: HttpClient) {}

  addToCart(product: ProductModel): Promise<CartItemModel> {
    const url = this.cartUrl
    const cartItem = {id: product.id, name: product.name, price: product.price, quantity: 1}
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const request$ = this.http.post(url, cartItem, options)

    return firstValueFrom(request$)
        .then(response => response as CartItemModel)
        .catch(this.handleError)
  }

  updateCart(cartItem: CartItemModel): Promise<CartItemModel> {
    const url = `${this.cartUrl}/${cartItem.id}`
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const request$ = this.http.put(url, cartItem, options)

    return firstValueFrom(request$)
      .then(response => response as CartItemModel)
      .catch(this.handleError)
  }

  getItems(): Promise<CartItemModel[]> {
    const url = this.cartUrl
    const request$ = this.http.get(url)
    return firstValueFrom(request$)
      .then(response => {
        this.items = response as CartItemModel[]
        return response as CartItemModel[]
      })
      .catch(this.handleError)
  }

  deleteItem(cartItem: CartItemModel): Promise<CartItemModel> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const request$ = this.http.delete(`${this.cartUrl}/${cartItem.id}`, options)
    return firstValueFrom(request$)
      .catch(this.handleError)
  }

  onClearCart(): Promise<CartItemModel> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return firstValueFrom(this.http.delete(this.cartUrl, options))
      .catch(this.handleError)
  }

  getTotalCost(): number {
    this.totalCost = this.items.reduce((acc, item) => acc + (item.quantity * item.price), 0)
    return this.totalCost
  }

  getTotalQuantity(): number {
    this.totalQuantity = this.items.reduce((acc, item) => acc + item.quantity, 0)
    return this.totalQuantity
  }

  isCartEmpty(): boolean {
    if(this.items.length > 0) {
      return false
    }
    return true
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

}
