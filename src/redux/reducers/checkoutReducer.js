
import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function checkoutReducer(state = initialState.checkoutList, action) {
switch(action.type) {
    case types.CHECKOUT_PIZZA: 
        return [...state, action.pizza];
    default:
    return state;
}
}