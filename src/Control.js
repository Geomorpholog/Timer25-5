import Button from './Button.js'
export default function Control(props) {
    return (
        <div id={props.id}>
            <Button method={props.method} dir={props.dirPlay} />
            <Button method={props.method} dir={props.dirPause} />
            <Button method={props.method} dir={props.dirReset} />
        </div>
    )
}