import { Inject, Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { firstValueFrom } from 'rxjs'

import type { ProductModel } from 'src/app/products'
import { CartAPI } from '../cart.config'
import CartItemModel from '../models/cart-model'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'any'
})
export class CartPromiseService {
  items$: Promise<CartItemModel[]>

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(CartAPI) private cartUrl: string
    ) {
      this.items$ = this.getItems()
    }
  get totalCost(): Promise<number> {
    return this.getTotalCost()
  }

  get totalQuantity(): Promise<number> {
    return this.getTotalQuantity()
  }

  addToCart(product: ProductModel): Promise<CartItemModel> {
    const url = this.cartUrl
    const cartItem: CartItemModel = new CartItemModel(product.id || 0, product.name || 'test', product.price || 0, 1)
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const request$ = this.http.post(url, cartItem, options)

    return firstValueFrom(request$)
        .then(response => response as CartItemModel)
        .catch(this.handleError)
  }

  onQuantityIncrease(cartItem: CartItemModel): Promise<CartItemModel> {
    const url = `${this.cartUrl}/${cartItem.id}`
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    let updatedItem = new CartItemModel(cartItem.id, cartItem.name, cartItem.price, cartItem.quantity + 1)
    const request$ = this.http.put(url, updatedItem, options)

    return firstValueFrom(request$)
      .then(response => response as CartItemModel)
      .catch(this.handleError)
  }

  onQuantityDecrease(cartItem: CartItemModel): Promise<CartItemModel> {
    const url = `${this.cartUrl}/${cartItem.id}`

    if(cartItem.quantity === 1) {
      return this.deleteItem(cartItem)
    }
    let updatedItem = new CartItemModel(cartItem.id, cartItem.name, cartItem.price, cartItem.quantity - 1)

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    const request$ = this.http.put(url, updatedItem, options)

    return firstValueFrom(request$)
      .then(response => response as CartItemModel)
      .catch(this.handleError)
  }

  getItems(): Promise<CartItemModel[]> {
    return firstValueFrom(this.http.get(this.cartUrl))
      .then(res => res as CartItemModel[])
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

  getTotalCost(): Promise<number> {
    return this.items$
      .then((items: any) => {
        return (items as CartItemModel[]).reduce(
          (acc, item) => acc + (item.quantity * item.price),
          0
        )
      })
      .catch(this.handleError)
  }

  getTotalQuantity(): Promise<number> {
    return this.items$
      .then((items: any) => {
        return (items as CartItemModel[]).reduce(
          (acc, item) => acc + item.quantity,
          0
        )
      })
      .catch(this.handleError)
  }

  isCartEmpty(): Promise<boolean> {
    return this.items$
      .then((items: any) => {
        if((items as CartItemModel[]).length > 0) {
          return false
        }
        return true
      })
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

}
