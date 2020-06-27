import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Cart from '../pages/Cart';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
