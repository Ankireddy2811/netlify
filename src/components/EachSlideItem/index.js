import {Link} from "react-router-dom"
import "./index.css"


const EachSlideItem = (props)=>{
  const {eachContent,isStyle,onSlideButtonClicked} = props 
  const specialContainer = isStyle?"special-container":""

  const onButtonSlide = ()=>{
    onSlideButtonClicked(eachContent.id)
  }

  return(
    <Link className={`red-container ${specialContainer}`} to={eachContent.id === "first"?"/":"/pairs"} onClick={onButtonSlide}>
       {eachContent.icon}
       <p className="tok-add">{eachContent.name}</p>
    </Link>

  )
}

export default EachSlideItem 