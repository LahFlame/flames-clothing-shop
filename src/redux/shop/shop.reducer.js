import SHOP_DATA from "./shop.data"
const INITIAL_SET_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state=INITIAL_SET_STATE,action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default shopReducer;