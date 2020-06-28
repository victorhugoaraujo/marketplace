import React from 'react';
import Products from '../../components/Products';
import Header from '../../components/Header';
import Basket from '../../components/Basket';
// import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        {/* <SearchBar /> */}
        <Basket />
      </Header>
      <Products />
    </>
  );
};

export default Home;
