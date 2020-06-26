import React from 'react';
import Products from './components/Products';
import Cart from './pages/Cart';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Cart />
    <Products />
    <GlobalStyle />
  </>
);

export default App;
