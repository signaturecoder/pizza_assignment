import * as types from './actionTypes';
import * as pizzaApi from '../../api/userApi';

export function loadPizzaSuccess(pizzas) {
    return { type: types.LOAD_PIZZA_SUCCESS, pizzas };
  }

  export function loadPizzas() {
    return function(dispatch) {
      return pizzaApi
        .getPizza()
        .then(pizza => {
          dispatch(loadPizzaSuccess(pizza));
        })
        .catch(error => {
          throw error;
        });
    };
  }