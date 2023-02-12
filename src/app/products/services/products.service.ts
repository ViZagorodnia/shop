import { Injectable } from '@angular/core'
import { ProductModel } from '../models/product-model'

export const Products : ProductModel[] = [
  new ProductModel (1, 'MacBook 1', '256Gb MGN63 Space Grey 2020', 2000, 'laptop', true, 'Apple M2 chip', 3),
  new ProductModel (2, 'Lenovo IdeaPad 2', '256Gb MGN63 Space Grey 2020', 1200, 'laptop', false, 'Apple M2 chip', 0),
  new ProductModel (3, 'Lenovo Gaming 0', '256Gb MGN63 Space Grey 2020', 3000, 'laptop', true, 'Apple M2 chip', 1),
  new ProductModel (4, 'MacBook', '256Gb MGN63 Space Grey 2020', 2500, 'laptop', true, 'Apple M2 chip', 30),
  new ProductModel (5, 'Lenovo IdeaPad 6', '256Gb MGN63 Space Grey 2020', 1300, 'laptop', false, 'Apple M2 chip', 0),
  new ProductModel (6, 'Lenovo Gaming 4', '256Gb MGN63 Space Grey 2020', 2300, 'laptop', true, 'Apple M2 chip', 13),
  new ProductModel (7, 'Lenovo IdeaPad1', '256Gb MGN63 Space Grey 2020', 6000, 'laptop', true, 'Apple M2 chip', 2),
  new ProductModel (8, 'Lenovo Gaming 3', '256Gb MGN63 Space Grey 2020', 1000, 'laptop', true, 'Apple M2 chip', 14)
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productListPromise = Promise.resolve(Products)

  getProducts(): Promise<ProductModel[]> {
    return this.productListPromise
  }

  getProduct(id: NonNullable<ProductModel['id']> | string): Promise<ProductModel | undefined> {
    return this.getProducts()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getProduct'))
  }
}
