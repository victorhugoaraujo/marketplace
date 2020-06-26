import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductsData from '../../database/db.json';
import { addProduct } from '../../actions/products';

import { Container, Content, Title, AddToCart } from './styles';
import { Product } from '../../types/Product';

const App: React.FC = () => {
  const { products } = ProductsData;
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');

  const addToCart = ({ name }: Product): void => {
    if (!selectedSize) {
      return;
    }
    dispatch(addProduct({ name, size: selectedSize }));
    setSelectedSize('');
  };

  const handleChangeSize = (size: string): void => {
    console.log('change size', size);
    setSelectedSize(size);
  };

  return (
    <Container>
      {products.map((product) => (
        <Content key={Math.random().toString(36).substr(2, 9)}>
          <Title>{product.name}</Title>
          {/* <img src={product.image} alt={product.name} /> */}
          {/* <p>{product.regular_price}</p>
          <span>{product.actual_price}</span>
          <span>{product.discount_percentage}</span> */}
          <ul>
            {product.sizes.map((productSize) => (
              <li key={productSize.size}>
                <button
                  type="button"
                  onClick={() => handleChangeSize(productSize.size)}
                >
                  {productSize.size}
                </button>
              </li>
            ))}
          </ul>
          {/* <span>{product.on_sale}</span> */}

          <AddToCart onClick={() => addToCart(product)}>Adicionar</AddToCart>
        </Content>
      ))}
    </Container>
  );
};

export default App;
