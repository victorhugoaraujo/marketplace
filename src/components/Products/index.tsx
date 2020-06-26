import React from 'react';
import ProductsData from '../../database/db.json';

import { Container, Content, Title, AddToCart } from './styles';

const App: React.FC = () => {
  console.log(ProductsData);
  const { products } = ProductsData;
  return (
    <Container>
      {products.map((product) => (
        <Content key={Math.random().toString(36).substr(2, 9)}>
          <Title>{product.name}</Title>
          <img src={product.image} alt={product.name} />
          <p>{product.color}</p>
          <AddToCart>Adicionar</AddToCart>
        </Content>
      ))}
    </Container>
  );
};

export default App;
