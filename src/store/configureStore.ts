import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { productReducer } from '../reducers/products';
import { ProductActionTypes } from '../types/actions';

const persistConfig = {
  key: 'root',
  storage,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  products: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<AppState, ProductActionTypes>),
  ),
);
const persistor = persistStore(store);

export { store, persistor };
