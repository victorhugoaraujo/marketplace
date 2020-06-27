import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';
import ProductsData from '../../database/db.json';
import { addProduct } from '../../actions/products';

import { Container, Content, Title, AddToCart } from './styles';
// import { Product } from '../../types/Product';

const App: React.FC = () => {
  const { products } = ProductsData;
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');

  const addToCart = (
    id: string,
    name: string,
    image: string,
    actualPrice: string,
  ): void => {
    if (!selectedSize) {
      return;
    }
    dispatch(addProduct({ id, name, image, size: selectedSize, actualPrice }));
    setSelectedSize('');
  };

  const handleChangeSize = (size: string): void => {
    setSelectedSize(size);
  };

  return (
    <Container>
      {products.map((product) => {
        const id = uuid();
        const {
          name,
          image,
          sizes,
          regular_price: regularPrice,
          actual_price: actualPrice,
          discount_percentage: discountPercentage,
          on_sale: onSale,
        } = product;
        return (
          <Content key={uuid()}>
            <Title>{name}</Title>
            <img src={image} alt={name} />
            {regularPrice !== actualPrice && <p>{regularPrice}</p>}
            <span>{actualPrice}</span>
            <span>{discountPercentage}</span>
            <ul>
              {sizes.map((productSize) => (
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
            <span>{onSale}</span>

            <AddToCart onClick={() => addToCart(id, name, image, actualPrice)}>
              Adicionar
            </AddToCart>
          </Content>
        );
      })}
    </Container>
  );
};

export default App;
