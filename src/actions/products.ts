import { Dispatch } from 'redux';
import { Product } from '../types/Product';
import { ADD_PRODUCT, ProductActionTypes } from '../types/actions';
import { AppState } from '../store/configureStore';

export const addProduct = (product: Product): ProductActionTypes => ({
  type: ADD_PRODUCT,
  product,
});

export const startAddProduct = (productData: { name: string }) => {
  return (dispatch: Dispatch<ProductActionTypes>, getState: () => AppState) => {
    const { name = '' } = productData;
    const expense = { name };

    // const id = Math.random().toString(36).substr(2, 9);

    return dispatch(
      addProduct({
        // id,
        ...expense,
      }),
    );
  };
};
