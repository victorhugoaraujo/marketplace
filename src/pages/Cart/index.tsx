import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/configureStore';

const Cart: React.FC = () => {
  const products = useSelector((state: AppState) => state.products);
  const cartLength = products.length;
  // const { name, image, price } = products;
  console.log('products', products);

  return (
    <>
      <h1>Cart {cartLength}</h1>
      {products.map(({ id, name, image, size, actualPrice }) => (
        <div key={id}>
          <p>{name}</p>
          <img src={image} alt={name} />
          <span>{size}</span>
          <span>{actualPrice}</span>
        </div>
      ))}
    </>
  );
};

export default Cart;
