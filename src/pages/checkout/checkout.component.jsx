
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selector";
import "./checkout.styles.scss"
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({cartItems,cartTotal}) => {
    return(
        <div className="checkout">
            <div className="checkout-header">
                <div className="header-block">
                    <span>product</span>
                </div>
                <div className="header-block">
                    <span>description</span>
                </div>
                <div className="header-block">
                    <span>quantity</span>
                </div>
                <div className="header-block">
                    <span>price</span>
                </div>
                <div className="header-block">
                    <span>remove</span>
                </div>
            </div>
                {
                    cartItems.map(cartItem => 
                        <CheckoutItem key={cartItem.id} item={cartItem}/>
                        )

                }
            <div className="total">
                <span>TOTAL: ${cartTotal}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage);