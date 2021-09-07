import { combineReducers, configureStore } from '@reduxjs/toolkit';
import generalReducer from './Reducers/generalReducer';
import productsReducer from './Reducers/productsReducer';
import cartReducer from './Reducers/cartReducer';
import shoppingReducer from './Reducers/shoppingReducer';

const reducer = combineReducers({
    prods: productsReducer,
    general: generalReducer,
    cart: cartReducer,
    shopping: shoppingReducer,
});

export const store = configureStore({reducer});