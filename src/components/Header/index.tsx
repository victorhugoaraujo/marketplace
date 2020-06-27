import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo } from './styles';
import logoImg from '../../assets/logo.jpg';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Logo src={logoImg} alt={Logo} />
      </Link>
      {children}
    </Container>
  );
};

export default Header;
