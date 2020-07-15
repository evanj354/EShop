import { useReducer } from "react";
import {REHYDRATE, PERSIST} from 'redux-persist'

const initialState = {
    cart: []
};

const itemReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_ITEM': {
            return { cart: [...state.cart, action.item]} ;
        }
        case 'CLEAR_ITEM':  {
            return { cart: state.cart.filter( (item, index) => index !== action.index ) }
        }
        case 'CLEAR_ITEMS': {
            return { cart: [] };
        }
        default: {
            return state;
        }
    }
};

export default itemReducer;