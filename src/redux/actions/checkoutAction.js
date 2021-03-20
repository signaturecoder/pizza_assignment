import * as types from "./actionTypes";

export function checkoutPizza(pizza) {
  return { type: types.CHECKOUT_PIZZA, pizza };
}

export function increaseQuantity(quantity) {
  return { type: types.INCREASE_QUANTITY, quantity}
}

export function decreaseQuantity(quantity) {
  return { type: types.INCREASE_QUANTITY, quantity}
}