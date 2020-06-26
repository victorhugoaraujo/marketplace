import { Product } from '../types/Product';

import { ProductActionTypes, ADD_PRODUCT } from '../types/actions';

const productsReducerDefaultState: Product[] = [];

const productReducer = (
  state = productsReducerDefaultState,
  action: ProductActionTypes,
): Product[] => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log(action.product);
      return [...state, action.product];
    default:
      return state;
  }
};

export { productReducer };
