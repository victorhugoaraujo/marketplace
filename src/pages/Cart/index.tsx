import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/configureStore';
import Header from '../../components/Header';

const Cart: React.FC = () => {
  const products = useSelector((state: AppState) => state.products);

  return (
    <>
      <Header>
        <h1>Minha Sacola</h1>
      </Header>

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
