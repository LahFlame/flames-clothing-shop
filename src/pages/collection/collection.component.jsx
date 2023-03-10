import { selectShopCollection } from "../../redux/shop/shop.selector"
import { connect } from "react-redux"
import CollectionItem from "../../components/collection-item/collection-item.component"
import "./collection.styles.scss"

const CollectionPage = ({collection}) => {
    const {title,items} = collection
    return (
        <div className="collection-page">
            <h1 className="title">{title}</h1>
            <div className="items">
                {
                    items.map(item => 
                        <CollectionItem key={item.id} item={item}/>    
                    )
                }
            </div>
        </div>      
    ) 
}

const mapStateToProps = (state,ownProps) =>{ 
    return({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})};

export default connect(mapStateToProps)(CollectionPage);