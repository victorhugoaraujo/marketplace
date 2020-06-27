import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/configureStore';

import Products from './components/Products';
import Cart from './pages/Cart';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Cart />
      <Products />
      <GlobalStyle />
    </PersistGate>
  </Provider>
);

export default App;
