import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview";

const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {
                    collections.map(({id,...otherCollection}) => (
                        <CollectionPreview key={id} {...otherCollection}/>
                    ))
                }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);