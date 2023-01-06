import cartActionTypes from "./cart.types";

const setToggle = () => ({
    type: cartActionTypes.TOGGLE_STATE
})
const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})
export default setToggle;
export {addItem};