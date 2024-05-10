import './index.css';

export default function Display(props) {
    return (
        <div id={props.id}>
            {props.status === "session" ? props.session:props.break}
        </div>
    )
       
    
}