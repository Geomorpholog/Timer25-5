import './index.css';
import UP from './image/UP.png'
import Down from './image/Down.png'
import Play from './image/Play.png'
import Pause from './image/Pause.png'
import Reset from './image/Reset.png'
export default function Button(props){
    return <button className = "button" onClick = {props.method}> 
<<<<<<< HEAD
        {props.dir === "up" && <img src={UP} alt="buttons"></img>}
        {props.dir === "down" && <img src={Down} alt="buttons"></img>}
        {props.dir === "play" && <img src={Play} alt="buttons"></img>}
        {props.dir === "pause" && <img src={Pause} alt="buttons"></img>}
        {props.dir === "reset" && <img src={Reset} alt="buttons"></img>}
=======
        {props.dir === "up" && <img src={UP} alt = "Up arrow"></img>}
        {props.dir === "down" && <img src={Down} alt = "Down arrow" ></img>}
>>>>>>> 0ff6fbe93bcda92741f25fa925cba7544fdc51db
    </button>
    
}
