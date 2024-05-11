import './index.css';
import Button from './Button.js'
import {format } from './MainScript.js'
export default function Elements(props) {
    
    

  return(
    <div className="elements">
      <p id={props.name+"-label"}>{(props.name[0].toUpperCase())+(props.name.slice(1,props.name.length))+" Length"}</p>
          <Button method={props.methodup} dir={props.dirUp} name={props.name+'-increment'} />
          <div>{format(props.value, 0)}</div>
          <Button method={props.methoddown} dir={props.dirDown} name={props.name + '-decrement'} /> 
    </div>
    
  )
 } 

