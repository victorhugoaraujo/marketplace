import { Product } from '../types/Product';
import { ADD_PRODUCT, ProductActionTypes } from '../types/actions';

export const addProduct = (product: Product): ProductActionTypes => ({
  type: ADD_PRODUCT,
  product,
});
