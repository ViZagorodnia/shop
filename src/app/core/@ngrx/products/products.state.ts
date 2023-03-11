import { type ProductModel } from "src/app/products";

export interface ProductsState {
  data: ReadonlyArray<ProductModel>;
  selectedProduct: Readonly<ProductModel> | null;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string | null;
}

export const initialProductsState: ProductsState = {
  data: [],
  selectedProduct: null,
  loading: false,
  loaded: false,
  error: null
}
