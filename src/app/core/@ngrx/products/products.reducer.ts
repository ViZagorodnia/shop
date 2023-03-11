import { createReducer, on } from '@ngrx/store'

import { initialProductsState } from './products.state'
import * as ProductsActions from './products.actions'

export const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.getProducts, state => {
    console.log('GET_PRODUCTS action being handled!')
    return {
      ...state,
      loading: true
    }
  }),
  on(ProductsActions.getProductsSuccess, (state, { products }) => {
    console.log('GET_PRODUCTS_SUCCEESS action being handled!');
    const data = {...products}
    return {
      ...state,
      data,
      loading: false,
      loaded: true,
      selectedProduct: null
    }
  }),
  on(
    ProductsActions.getProductsError,
    ProductsActions.getProductError,
    (state, {error}) => {
    console.log('GET_PRODUCTS/PRODUCT_ERROR action being handled!');
    return {
      ...state,
      loading: false,
      loaded: false,
      error
    }
  }),
  on(ProductsActions.getProduct, state => {
    console.log('GET_Product action being handled!');
    return {
      ...state,
      loading: true,
      loaded: false
    };
  } ),
  on(ProductsActions.getProductSuccess, (state, {product}) => {
    console.log('GET_Product action being handled!');
    const selectedProduct = {...product}
    return {
      ...state,
      loading: false,
      loaded: true,
      selectedProduct
    }
  }),
  on(ProductsActions.createProduct, state => {
    console.log('CREATE_Product action being handled!');
    return { ...state };
  }),
  on(ProductsActions.createProductSuccess, (state, {product}) => {
    console.log('CREATE_Product_Success action being handled!');
    const data = [...state.data, {...product}]
    return {
      ...state,
      data
    }
  }),
  on(ProductsActions.updateProduct, state => {
    console.log('UPDATE_Product action being handled!');
    return { ...state };
  }),
  on(ProductsActions.updateProductSuccess, (state, {product}) => {
    console.log('UPDATE_Product_Success action being handled!')
    const data = [...state.data]
    const index = data.findIndex(p => p.id === product.id)
    data[index] = {...product}
    return {
      ...state,
      data
    }
  }),
  on(
    ProductsActions.updateProductError,
    ProductsActions.createProductError,
    ProductsActions.deleteProductError,
    (state, {error}) => {
    console.log('CREATE/UPDATE?DELETE_Product_Error action being handled!')
    return {
      ...state,
      error
    }
  }),
  on(ProductsActions.deleteProduct, state => {
    console.log('DELETE_Product action being handled!');
    return { ...state };
  }),
  on(ProductsActions.deleteProductSuccess, (state, {product}) => {
    console.log('DELETE_Product_Success action being handled!');
    const data = state.data.filter(p => p.id === product.id)
    return {
      ...state,
      data
    }
  }),
)
