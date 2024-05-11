import './index.css';
import UP from './image/UP.png'
import Down from './image/Down.png'
import Play from './image/Play.png'
import Pause from './image/Pause.png'
import Reset from './image/Reset.png'
export default function Button(props){
    return <button className="button" onClick={props.method} id={props.name}> 
        {props.dir === "up" && <img src={UP} alt="buttons" ></img>}
        {props.dir === "down" && <img src={Down} alt="buttons" ></img>}
        {props.dir === "play" && <><img src={Play} alt="buttons"></img> <img src={Pause} alt="buttons" id="pause" ></img></>}
        {props.dir === "reset" && <img src={Reset} alt="buttons" id = "reset"></img>}
          </button>
    
}
