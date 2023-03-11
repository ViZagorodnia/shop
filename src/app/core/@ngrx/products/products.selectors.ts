import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productsFeatureKey } from '../app.state';
import { type ProductsState } from './products.state';

export const selectProductsState = createFeatureSelector<ProductsState>(productsFeatureKey)

export const selectProductsData = createSelector(selectProductsState, (state: ProductsState) => state.data);
export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);
export const selectSelectedProduct = createSelector(selectProductsState, (state: ProductsState) => state.selectedProduct);
export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);
