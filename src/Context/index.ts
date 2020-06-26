interface Product {
  name: string;
}

interface Cart {
  products: Product[];
}

type CartActionType = {
  type: 'ADD_PRODUCT';
};

function productReducer(state: Cart, action: CartActionType): Cart {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products],
      };
    default:
      return state;
  }
}

export default productReducer;
