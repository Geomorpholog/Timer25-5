import './index.css';
export default function Button(props){
    return <button className = "button" onClick = {props.method}>{props.dir}</button>
    
}