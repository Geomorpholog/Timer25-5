import './index.css';
import UP from './UP.png'
import Down from './Down.png'
export default function Button(props){
    return <button className = "button" onClick = {props.method}> 
        {props.dir == "up" && <img src={UP}></img>}
        {props.dir == "down" && <img src={Down}></img>}
    </button>
    
}