import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component"
import "./cart-dropdown.styles.scss"
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { withRouter } from "react-router-dom";
import setToggle from "../../redux/cart/cart.action";


const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown" >
        <div className="cart-items">
            {cartItems.length ?
                cartItems.map(({id,...otherCartItems}) => (
                    <CartItem  key={id} {...otherCartItems}/>
                ))
            :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {history.push('/checkout'); dispatch(setToggle())}}>GOTO CHECKOUT</CustomButton>
    </div>)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));