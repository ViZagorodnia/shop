import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { of } from 'rxjs'

import * as productsData from '../assets/products.json'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data = productsData

  constructor (private http: HttpClient) {}

  getProducts (): Observable<any> {
    return of(this.data)
  }
}
