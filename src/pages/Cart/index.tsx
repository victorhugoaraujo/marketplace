import React from 'react';
import { useSelector } from 'react-redux';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { AppState } from '../../store/configureStore';
import Header from '../../components/Header';

import {
  Container,
  ProdutDetailContainer,
  ProdutDetails,
  ProdutDetailsImage,
  ProductInfo,
  OrderDetails,
  ProductQuantity,
  Title,
  Price,
} from './styles';

const Cart: React.FC = () => {
  const products = useSelector((state: AppState) => state.products);

  const productPrices = products.map((product) => product.actualPrice);

  const total = productPrices.reduce((t, n) => t + n, 0);

  return (
    <>
      <Header>
        <h1>Minha Sacola</h1>
      </Header>

      <Container>
        <ProdutDetailContainer>
          {products.map(({ id, name, image, size, color, quantity }) => (
            <ProdutDetails key={id}>
              <ProdutDetailsImage src={image} alt={name} />
              <ProductInfo>
                <Title>{name}</Title>
                <p>
                  <strong>Tamanho: </strong>
                  {size}
                </p>
                <p>
                  <strong>Cor: </strong>
                  {color}
                </p>
              </ProductInfo>
              <ProductQuantity>
                Quantidade
                <button type="button" disabled={quantity <= 1}>
                  <FiMinusCircle />
                </button>
                <span>{quantity}</span>
                <button type="button">
                  <FiPlusCircle />
                </button>
              </ProductQuantity>
            </ProdutDetails>
          ))}
        </ProdutDetailContainer>
        <OrderDetails>
          <ul>
            <li>
              <span>Subtotal</span>
              <Price>R$ {total}</Price>
            </li>
            <li>
              <span>Descontos</span>
              <Price>R$ 0,00</Price>
            </li>
            <li>
              <span>Valor Total</span>
              <Price>R$ {total}</Price>
            </li>
          </ul>
        </OrderDetails>
      </Container>
    </>
  );
};

export default Cart;
