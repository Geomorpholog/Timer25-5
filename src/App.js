import {useState} from 'react';
import './index.css';
import Elements from './Elements';
import Button from './Button.js'
import "@fontsource/raleway";
import '@fontsource/jersey-10';
function App(){
    let [session,setSession] = useState('25:00');
    let [breaking,setBreaking] = useState('05:00');
return(
  
    <div className="background">
        <div className="app">
          <div class='header'>25+5 Clock</div>
        
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
          
        
        
      </div>
    </div>
)
}
export default App;