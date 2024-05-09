import './index.css';
import UP from'./UP.png'
export default function Button(props){
    return <button className = "button" onClick = {props.method}> 
        <img src = {UP}></img>
    </button>
    
}