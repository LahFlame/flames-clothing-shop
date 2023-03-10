import "./collection-preview.styles.scss"
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({title,items,history,match}) => {
    return(
        <div className="collection-preview">
            <h1 className="title" ><span onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>{title.toUpperCase()}</span></h1>
            <div className="preview">
                {
                    items.filter((item,i) => i<4).map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);