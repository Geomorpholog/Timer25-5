import './index.css';
import Button from './Button.js'

 export default function Elements(props){
  return(
    <div className="elements">
      <p>{props.header}</p>
      <div>{props.value}</div>
    </div>
    
  )
 } 
