import CollectionOverview from "../../components/collection-overview/collection-overview.component"
import CollectionPage from "../collection/collection.component"
import "./shop.styles.scss"
import { Route,Switch } from "react-router-dom"


const ShopPage = ({match}) => {
    console.log(match);
        return(
            <div className="shop">
                <Switch>
                    <Route  exact path={match.path} component={CollectionOverview} />
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                </Switch>
            </div>
        )
    
}



export default ShopPage;