import { createAction, props } from '@ngrx/store'

import type { ProductModel } from "src/app/products"

export const getProducts = createAction('[Products list page (App)] GET_PRODUCTS');

export const getProductsSuccess = createAction(
  '[Get Products Effect] GET_PRODUCTS_SUCCEESS',
  props<{ products: ProductModel[] }>()
);

export const getProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{ error: Error | string | null }>()
);

export const createProduct = createAction(
  '[Product Admin Page] CREATE_PRODUCT',
  props<{ product: ProductModel }>()
);

export const createProductSuccess = createAction(
  '[Create Product Effect] CREATE_PRODUCT_SUCCESS',
  props<{ product: ProductModel }>()
);

export const createProductError = createAction(
  '[Create Product Effect] CREATE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);


export const updateProduct = createAction(
  '[Product Admin Page] UPDATE_Product',
  props<{ product: ProductModel }>()
);

export const updateProductSuccess = createAction(
  '[Update Product Effect] UPDATE_PRODUCT_SUCCESS',
  props<{ product: ProductModel }>()
);

export const updateProductError = createAction(
  '[Update Product Effect] UPDATE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);

export const deleteProduct = createAction(
  '[Product List Page] DELETE_PRODUCT',
  props<{ product: ProductModel }>()
);

export const deleteProductSuccess = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_SUCCESS',
  props<{ product: ProductModel }>()
);

export const deleteProductError = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);

export const getProduct = createAction(
  '[Add/Edit Product Page (App)] GET_PRODUCT',
  props<{ productID: number }>()
);

export const getProductSuccess = createAction(
  '[Get Product Effect] GET_PRODUCT_SUCCESS',
  props<{ product: ProductModel }>()
);

export const getProductError = createAction(
  '[Get Product Effect] GET_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
);
