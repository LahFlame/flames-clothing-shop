import "./collection-item.styles.scss"
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";


const CollectionItem = ({item,addItem}) => {
    const {name,imageUrl,price} = item;
    return (
        <div className="collection-item" onClick={() => addItem(item)}>
            <div className="image"
                style={{backgroundImage: `url(${imageUrl})`}} 
            ></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted>ADD TO CART</CustomButton>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);