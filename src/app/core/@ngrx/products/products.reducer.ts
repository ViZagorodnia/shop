import { createReducer, on } from '@ngrx/store'

import { initialProductsState } from './products.state'
import * as ProductsActions from './products.actions'

const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.getProducts, state => {
    console.log('GET_PRODUCTS action being handled!')
    return {...state}
  }),
  on(ProductsActions.getProduct, state => {
    console.log('GET_Product action being handled!');
    return { ...state };
  }),
  on(ProductsActions.createProduct, state => {
    console.log('CREATE_Product action being handled!');
    return { ...state };
  }),
  on(ProductsActions.updateProduct, state => {
    console.log('UPDATE_Product action being handled!');
    return { ...state };
  }),
  on(ProductsActions.deleteProduct, state => {
    console.log('DELETE_Product action being handled!');
    return { ...state };
  })
)
