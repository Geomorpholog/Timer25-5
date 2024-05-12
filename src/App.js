import {useState} from 'react';
import './index.css';
import Elements from './Elements';
import Display from './Display.js';
import Control from './Control.js';
import Audio from './Audio.js'
import "@fontsource/raleway";
import '@fontsource/jersey-10';
import {startStop,reset } from './MainScript.js'
function App() {
    let [session, setSession] = useState(25);
    let [breaking, setBreaking] = useState(5);
    let [status, setStatus] = useState('set');
    let [interval, setInt] = useState('Session');
    let [second, setSecond] = useState(0);
    let [countdown, setCountdown] = useState(25);
   
    return (<div className="background">
            <div className="app">
                <div id='header'>Timer 25+5 Clock</div>
            <Elements value={breaking} name="break"
                second={second}
                methodup={(() => breaking < 60 ? setBreaking(breaking += 1) : null)}
                methoddown={(() => breaking > 1 ? setBreaking(breaking -= 1) : null)}
                    dirUp="up"
                    dirDown="down"
                />
            <Elements value={session} name="session"
                    second={second}
                methodup={(() =>  session<60 ? setSession(session += 1):null )}
                methoddown={(() =>  session > 1 ? setSession(session -= 1) : null )}
                    dirUp="up"
                    dirDown="down"
            />
                <div id="timer-label">{interval}</div>
                <Display id="time-left" status={status} interval={interval} countdown={countdown} session={session} second={second} break={breaking} />
            <Control id="controlPanel" status={status} interval={interval} countdown={countdown} session={session} second={second} break={breaking}
                dirPlay="play"
                methodPlay={() => { startStop(second, setSecond, status, setStatus, countdown, setCountdown, session, interval, setInt, breaking, setSession, setBreaking) }}
                dirReset="reset"
                methodReset={() => {reset(second, setSecond, status, setStatus, countdown, setCountdown, session, interval, setInt, breaking, setSession, setBreaking) } }
                />
                <Audio id="beep"/>
      </div>
    </div>)
        
    

}
export default App;
