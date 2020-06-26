import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { productReducer } from '../reducers/products';
import { ProductActionTypes } from '../types/actions';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  products: productReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<AppState, ProductActionTypes>),
  ),
);
