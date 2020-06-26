import { Product } from './Product';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export interface AddToCartAction {
  type: typeof ADD_PRODUCT;
  product: Product;
}

export type ProductActionTypes = AddToCartAction;
