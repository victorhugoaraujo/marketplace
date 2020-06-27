import React from 'react';
import Products from '../../components/Products';
import Header from '../../components/Header';
import Basket from '../../components/Basket';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <Basket />
      </Header>
      <Products />
    </>
  );
};

export default Home;
