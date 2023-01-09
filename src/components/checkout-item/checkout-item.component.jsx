import "./checkout-item.styles.scss"
import { connect } from "react-redux";
import { removeItem,addItem,decreaseQuantity } from "../../redux/cart/cart.action";

const CheckoutItem = ({item,remove,increase,decrease}) => {
    const {imageUrl,name,price,quantity} = item;
    console.log(item);
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="checkout" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decrease(item)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => increase(item)}>&#10095;</div>
            </span>
            <span  className="price">{price}</span>
            <div className="remove-button" onClick={() => remove(item)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    remove: (item) => dispatch(removeItem(item)),
    increase: (item) => dispatch(addItem(item)),
    decrease: (item) => dispatch(decreaseQuantity(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);