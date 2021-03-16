import { combineReducers } from 'redux';
import pizzas from './pizzaReducer'
const rootReducer = combineReducers({
  pizzas
});

export default rootReducer;
