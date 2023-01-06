import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import setToggle from "../../redux/cart/cart.action";
import "./cart-icon.styles.scss"
import { connect } from "react-redux";


const CartIcon = ({setToggle}) => (
    <div className="cart-icon" onClick={setToggle}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch =>({
    setToggle: () => dispatch(setToggle())
})

export default connect(null,mapDispatchToProps)(CartIcon);