import Button from './Button.js'
export default function Control(props) {
    return (
        <div id={props.id}>
            <Button method={props.methodPlay} dir={props.dirPlay} name ="start_stop" />
            <Button method={props.methodReset} dir={props.dirReset} name="reset" />
        </div>
    )
}