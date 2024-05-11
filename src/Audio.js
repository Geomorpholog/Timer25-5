import './beep.mp3'
export default function Audio(props) {
    return (
        <audio id={props.id} src='./beep.mp3'></audio>
    )

}