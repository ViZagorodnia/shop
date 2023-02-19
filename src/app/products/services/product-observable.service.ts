import { Injectable, Inject } from '@angular/core';
import { HttpClient, type HttpErrorResponse } from '@angular/common/http';
import { type Observable, throwError, catchError, retry, share, concatMap } from 'rxjs';

import { ProductsAPI } from './../product.config';
import { ProductModel } from './../models/product-model';

@Injectable({
  providedIn: 'any'
})
export class ProductObservableService {
  constructor(
    private http: HttpClient,
    @Inject(ProductsAPI) private productsUrl: string
  ) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productsUrl).pipe(
      retry(3),
      share(),
      catchError(this.handleError)
    );
  }

  getProduct(id: NonNullable<ProductModel['id']> | string) {
    const url = `${this.productsUrl}/${id}`

    return this.http.get<ProductModel>(url).pipe(
      retry(3),
      share(),
      catchError(this.handleError)
    )
  }

  updateProduct(product: ProductModel): Observable<ProductModel> {
    const url = `${this.productsUrl}/${product.id}`
    const body = JSON.stringify(product)
    return this.http
      .put<ProductModel>(url, body)
      .pipe(catchError(this.handleError));
  }

  createProduct(product: ProductModel): Observable<ProductModel> {
    const url = this.productsUrl
    const body = JSON.stringify(product)

    return this.http
      .post<ProductModel>(url, body)
      .pipe(catchError(this.handleError))
  }

  deleteProduct(product: ProductModel) {
    const url = `${this.productsUrl}/${product.id}`

    return this.http.delete(url).pipe(
      concatMap(() => this.getProducts()),
      catchError(this.handleError)
    )
  }

 private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a Product-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
}
