import './index.css';
import {format} from'./MainScript.js'
export default function Display(props) {
               
    return (
        
        <div id={props.id}>
            {props.status === "set" ? format(props.session, 0) : format(props.countdown,props.second)}
        </div>
    )
       
    
}