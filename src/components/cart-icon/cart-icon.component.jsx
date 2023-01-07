import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import setToggle from "../../redux/cart/cart.action";
import "./cart-icon.styles.scss"
import { connect } from "react-redux";
import { selectCartItemCount } from "../../redux/cart/cart.selector";


const CartIcon = ({setToggle,count}) => (
    <div className="cart-icon" onClick={setToggle}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{count}</span>
    </div>
)

const mapDispatchToProps = dispatch =>({
    setToggle: () => dispatch(setToggle())
});
const mapStateToProps = (state) => ({
    count: selectCartItemCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);