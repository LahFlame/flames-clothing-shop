import "./menu-item.styles.scss"
import { withRouter } from "react-router-dom";

const MenuItem = ({title,imageUrl,size,link,history}) => {
    return (
        <div  className= {`menu-item ${size}`} onClick={() => history.push(link)}>
            <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image">
            </div>
            <div  className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);