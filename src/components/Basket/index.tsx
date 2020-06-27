import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { AppState } from '../../store/configureStore';

import { Container, Badge } from './styles';

const Basket: React.FC = () => {
  const products = useSelector((state: AppState) => state.products);
  const cartLength = products.length;
  return (
    <Container>
      <Link to="/cart">
        <FiShoppingBag color="#ff8080" />
        <Badge>{cartLength} </Badge>
      </Link>
    </Container>
  );
};

export default Basket;
