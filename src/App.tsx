import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import Products from './components/Products';
import Cart from './pages/Cart';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Provider store={store}>
    <Cart />
    <Products />
    <GlobalStyle />
  </Provider>
);

export default App;
