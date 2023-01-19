import MenuItem from "../menu-item/menu-item.component"
import "./directory.styles.scss"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectSectionItems } from "../../redux/directory/directory.selectors"

const Directory = ({sectionItems}) => 
        (
            <div className="directory-menu">
                {sectionItems.map(sectionItem => {
                    return (
                        <MenuItem 
                            title={sectionItem.title} 
                            imageUrl={sectionItem.imageUrl} 
                            key={sectionItem.id}
                            size={sectionItem.size}
                            link={sectionItem.linkUrl}
                        />
                    )
                })}    
            </div>
            )     
 const mapStateToProps = createStructuredSelector({
    sectionItems: selectSectionItems
 })

export default connect(mapStateToProps)(Directory);