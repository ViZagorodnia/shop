import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productsFeatureKey } from '../app.state';
import { type ProductsState } from './products.state';
import { selectRouterState } from './../router';

import { ProductModel } from 'src/app/products';

export const selectProductsState = createFeatureSelector<ProductsState>(productsFeatureKey)

export const selectProductsData = createSelector(selectProductsState, (state: ProductsState) => state.data);
export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);
export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);

export const selectSelectedProductByUrl = createSelector(
  selectProductsData,
  selectRouterState,
  (products, router): ProductModel => {
      const productID = router.state.params['productID'];
      if (productID && Array.isArray(products)) {
          return products.find(product => product.id === +productID);
      } else {
          return new ProductModel(null, '', '', 1, '', true, '', 1);
      }
});
