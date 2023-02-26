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

  updateCart(cartItem: CartItemModel, operation: string): Promise<CartItemModel> {
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
      .then(response => response as CartItemModel[])
      .catch(this.handleError)
  }

  deleteItems(cartItem: CartItemModel): Promise<CartItemModel> {
    const request$ = this.http.delete(`${this.cartUrl}/${cartItem.id}`)
    return firstValueFrom(request$)
      .catch(this.handleError)
  }

  onClearCart(): Promise<CartItemModel> {
    return firstValueFrom(this.http.delete(this.cartUrl))
      .catch(this.handleError)
  }

  isCartEmpty(): void {

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

}
