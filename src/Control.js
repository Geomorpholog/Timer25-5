import Button from './Button.js'
export default function Control(props) {
    return (
        <div id={props.id}>
            <Button method={props.methodPlay} dir={props.dirPlay} />
            <Button method={props.methodPause} dir={props.dirPause} />
            <Button method={props.methodReset} dir={props.dirReset} />
        </div>
    )
}