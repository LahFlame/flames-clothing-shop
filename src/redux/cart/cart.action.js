import cartActionTypes from "./cart.types";

const setToggle = () => ({
    type: cartActionTypes.TOGGLE_STATE
})
const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})
const decreaseQuantity = (item) => ({
    type: cartActionTypes.DECREASE_QUANTITY,
    payload: item
})
export default setToggle;
export {addItem,removeItem,decreaseQuantity};