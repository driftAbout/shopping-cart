import {combineReducers} from 'redux';
import cartReducer from './cart-reducer';
import productReducer from './product-reducer';
import filterReducer from './filter-reducer';

export default combineReducers({
  cart: cartReducer,
  products: productReducer,
  filter: filterReducer,
});


