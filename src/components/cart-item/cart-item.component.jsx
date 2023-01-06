import "./cart-item.styles.scss"

const CartItem = ({imageUrl,name,price,quantity}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="cart items" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span>{quantity} x {price}</span>
        </div>
    </div>
)
export default CartItem;