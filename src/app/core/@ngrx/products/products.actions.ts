import { createAction } from '@ngrx/store'

import type { ProductModel } from "src/app/products"

export const getProducts = createAction('[Products list page (App)] GET_PRODUCTS');

export const getProduct = createAction(
  '[Add/Edit Task Page (App)] GET_PRODUCT',
  props<{ productID: number }>()
);

export const getProductsSuccess = createAction(
  '[Get Products Effect] GET_ProductS_SUCCEESS',
  props<{ Products: ProductModel[] }>()
);

export const getProductsError = createAction(
  '[Get Products Effect] GET_ProductS_ERROR',
  props<{ error: Error | string | null }>()
);

export const createProduct = createAction(
  '[Product Admin Page] CREATE_Product',
  props<{ Product: ProductModel }>()
);

export const createProductSuccess = createAction(
  '[Create Product Effect] CREATE_Product_SUCCESS',
  props<{ Product: ProductModel }>()
);

export const createProductError = createAction(
  '[Create Product Effect] CREATE_Product_ERROR',
  props<{ error: Error | string | null }>()
);


export const updateProduct = createAction(
  '[Product Admin Page] UPDATE_Product',
  props<{ Product: ProductModel }>()
);

export const updateProductSuccess = createAction(
  '[Update Product Effect] UPDATE_Product_SUCCESS',
  props<{ Product: ProductModel }>()
);

export const updateProductError = createAction(
  '[Update Product Effect] UPDATE_Product_ERROR',
  props<{ error: Error | string | null }>()
);

export const deleteProduct = createAction(
  '[Product List Page] DELETE_Product',
  props<{ Product: ProductModel }>()
);

export const deleteProductSuccess = createAction(
  '[Delete Product Effect] DELETE_Product_SUCCESS',
  props<{ Product: ProductModel }>()
);

export const deleteProductError = createAction(
  '[Delete Product Effect] DELETE_Product_ERROR',
  props<{ error: Error | string | null }>()
);
