import { Dispatch } from 'redux';
import { Product } from '../types/Product';
import { ADD_PRODUCT, ProductActionTypes } from '../types/actions';
import { AppState } from '../store/configureStore';

export const addProduct = (product: Product): ProductActionTypes => ({
  type: ADD_PRODUCT,
  product,
});

// export const startAddProduct = (productData: {
//   name: string;
//   size: string;
// }) => {
//   return (dispatch: Dispatch<ProductActionTypes>): ProductActionTypes => {
//     console.log('startadd');
//     const { name = '', size = '' } = productData;
//     const product = { name, size };

//     return dispatch(
//       addProduct({
//         ...product,
//       }),
//     );
//   };
// };
