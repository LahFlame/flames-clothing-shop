import cartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_SET_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_SET_STATE,action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_STATE:
         return({
            ...state,
            hidden: !state.hidden
         }); 
        case cartActionTypes.ADD_ITEM:
            return({
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            })  
        case cartActionTypes.REMOVE_ITEM:
            return({
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            })
        default:
         return state;
    }
}

export default cartReducer;

