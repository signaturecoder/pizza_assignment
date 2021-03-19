import * as types from "./actionTypes";

export function checkoutPizza(pizza) {
  return { type: types.CHECKOUT_PIZZA, pizza };
}
