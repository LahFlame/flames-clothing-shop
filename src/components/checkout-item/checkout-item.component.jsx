import "./checkout-item.styles.scss"
import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({item,remove}) => {
    const {imageUrl,name,price,quantity} = item;
    console.log(item);
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="checkout" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => remove(item)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    remove: (item) => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);