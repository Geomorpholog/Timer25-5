import './index.css';

 export default function Elements(props){
  return(
    <div className="elements">
      <p id={props.name+"-label"}>{(props.name[0].toUpperCase())+(props.name.slice(1,props.name.length))+" Length"}</p>
      <div>{props.value}</div>
    </div>
    
  )
 } 
