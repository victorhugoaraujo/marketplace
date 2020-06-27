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
} from './styles';

const Cart: React.FC = () => {
  const products = useSelector((state: AppState) => state.products);

  return (
    <>
      <Header>
        <h1>Minha Sacola</h1>
      </Header>

      <Container>
        <ProdutDetailContainer>
          {products.map(({ id, name, image, size, actualPrice, color }) => (
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
                <button type="button">
                  <FiMinusCircle />
                </button>
                <span>2</span>
                <button type="button">
                  <FiPlusCircle />
                </button>
              </ProductQuantity>
            </ProdutDetails>
          ))}
        </ProdutDetailContainer>
        <OrderDetails>
          <div>
            <span>subtotal x itens</span>
            <span>R$ 100,00</span>
          </div>
          <div>
            <span>Valor Total</span>
            <span>R$ 100,00</span>
          </div>
        </OrderDetails>
      </Container>
    </>
  );
};

export default Cart;
