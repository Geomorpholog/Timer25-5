import {useState} from 'react';
import './index.css';
import Elements from './Elements';
<<<<<<< HEAD
import Display from './Display.js';
import Control from './Control.js';
=======
>>>>>>> 0ff6fbe93bcda92741f25fa925cba7544fdc51db
import "@fontsource/raleway";
import '@fontsource/jersey-10';
function App(){
    let [session,setSession] = useState('25:00');
    let [breaking, setBreaking] = useState('05:00');
    let [status, setStatus] = useState('session');
return(
  
    <div className="background">
        <div className="app">
                <div id='header'>Timer 25+5 Clock</div>
                <Elements value={breaking} name="break"
                    methodup={(() => setBreaking(breaking = 5))}
                    methoddown={(() => setBreaking(breaking = -5))}
                    dirUp="up"
                    dirDown="down"
                />
                <Elements value={session} name="session"
                    methodup={(() => setSession(session = 50))}
                    methoddown={(() => setSession(session = -50))}
                    dirUp="up"
                    dirDown="down"
            />
            <Display id="timer-lable" status={status} session="Session" break="Break" />
            <Display id="time-left" status={status} session={session} break={breaking} />
            <Control id="controlPanel"
                dirPlay="play"
                dirPause="pause"
                dirReset = "reset"
            />
      </div>
    </div>
)
}
export default App;
