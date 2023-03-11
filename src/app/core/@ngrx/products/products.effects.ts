import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { type Action } from '@ngrx/store'
import { type Observable, of, switchMap, map, catchError, concatMap } from 'rxjs'

import { ProductObservableService } from 'src/app/products'
import { type ProductModel } from 'src/app/products'
import * as ProductsActions from './products.actions'

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productObservableService: ProductObservableService
  ) {}

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap(action =>
        this.productObservableService.getProducts().pipe(
          map(products => ProductsActions.getProductsSuccess({ products })),
          catchError(error => of(ProductsActions.getProductsError({ error })))
        ))
    )
  )

  getProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProduct),
      map(action => action.productID),
      switchMap(productID =>
        this.productObservableService.getProduct(productID).pipe(
          map(product => ProductsActions.getProductSuccess({product})),
          catchError(error => of(ProductsActions.getProductError({error})))
        )
      )
    )
  )

  updateProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      map(action => action.product),
      concatMap((product: ProductModel) =>
        this.productObservableService.updateProduct(product).pipe(
          map(updatedProduct => {
            return ProductsActions.updateProductSuccess({ product: updatedProduct})
          }),
          catchError(error => of(ProductsActions.updateProductError({ error })))
        ))
    )
  )

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      map(action => action.product),
      concatMap((product: ProductModel) =>
        this.productObservableService.createProduct(product).pipe(
          map(createProduct => {
            return ProductsActions.createProductSuccess({ product: createProduct})
          }),
          catchError(error => of(ProductsActions.createProductError({ error })))
        ))
    )
  )

  deleteProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.deleteProduct),
      map(action => action.product),
      concatMap((product: ProductModel) =>
        this.productObservableService.deleteProduct(product).pipe(
          // Note: json-server doesn't return deleted user
          // so we use user
          map(() => ProductsActions.deleteProductSuccess({ product })),
          catchError(error => of(ProductsActions.deleteProductError({ error })))
        )
      )
    )
  )



}
