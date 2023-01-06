import cartActionTypes from "./cart.types";

const INITIAL_SET_STATE = {
    hidden: true
}

const cartReducer = (state=INITIAL_SET_STATE,action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_STATE:
         return({
            ...state,
            hidden: !state.hidden
         });   
        default:
         return state;
    }
}

export default cartReducer;

