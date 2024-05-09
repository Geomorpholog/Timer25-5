import './index.css';


 export default function Elements(props){
  return(
    <div className="elements">
      <p>{props.header}</p>
      <div>{props.value}</div>
    </div>
    
  )
 } 
