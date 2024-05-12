import {useState} from 'react';
import './beep.mp3'
import './index.css';
import Elements from './Elements';
import Display from './Display.js';
import Control from './Control.js';
import Audio from './Audio.js'
import "@fontsource/raleway";
import '@fontsource/jersey-10';
import {time,playCount } from './MainScript.js'
function App() {


    let [session, setSession] = useState(25);
    let [breaking, setBreaking] = useState(5);
    let [status, setStatus] = useState('set');
    let [interval, setInt] = useState('session');
    let [second, setSecond] = useState(0);
    let [countdown, setCountdown] = useState(25);
    time(session, setSession);
    time(breaking, setBreaking);
    time(second, setSecond);
    
    return (
        
    <div className="background">
        <div className="app">
                <div id='header'>Timer 25+5 Clock</div>
            <Elements value={breaking} name="break"
                second={second}
                    methodup={(() => setBreaking(breaking += 1))}
                    methoddown={(() => setBreaking(breaking -= 1))}
                    dirUp="up"
                    dirDown="down"
                />
            <Elements value={session} name="session"
                    second={second}
                    methodup={(() => setSession(session += 1 ))}
                    methoddown={(() => setSession(session -= 1))}
                    dirUp="up"
                    dirDown="down"
            />
                <div id="timer-lable">{interval}</div>
                <Display id="time-left" status={status} interval={interval} countdown={countdown} session={session} second={second} break={breaking} />
                <Control id="controlPanel" status={status} interval={interval} countdown={countdown} session={session} second={second} break={breaking} 
                dirPlay="play"
                methodPlay={() => { playCount(second, setSecond, status, setStatus, countdown, setCountdown, session, interval, setInt, breaking,setSession, setBreaking) }}             
                dirReset="reset"
                />
                <Audio id="beep"/>
      </div>
    </div>
)
}
export default App;
