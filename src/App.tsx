import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, persistor } from './store/configureStore';
import Routes from './routes';

// import Products from './components/Products';
// import Cart from './pages/Cart';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </Router>
);

export default App;
