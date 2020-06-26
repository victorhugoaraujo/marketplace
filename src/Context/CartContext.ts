import { createContext } from 'react';

interface Product {
  name: string;
}

interface Cart {
  products?: Product[];
}

const CartContext = createContext<Cart>({});

export default CartContext;
