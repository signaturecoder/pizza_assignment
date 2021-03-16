import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function pizzaReducer(state = initialState.pizzas, action) {
  switch (action.type) {
    case types.LOAD_PIZZA_SUCCESS:
      return action.pizzas;

    default:
      return state;
  }
}