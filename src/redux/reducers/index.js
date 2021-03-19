import { combineReducers } from 'redux';
import pizzas from './pizzaReducer'
import checkoutList from './checkoutReducer'
const rootReducer = combineReducers({
  pizzas,
  checkoutList
});

export default rootReducer;
