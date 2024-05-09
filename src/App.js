import {useState} from 'react';
import './index.css';
import Elements from './Elements';
import Button from './Button.js'
import "@fontsource/open-sans"
function App(){
    let [session,setSession] = useState('25:00');
    let [breaking,setBreaking] = useState('05:00');
return(
  
    <div className="background">
      <div className="app">
        <div>
          <Elements value={breaking} name = "break"/>
          <Button dir = {'up'} method={(()=>setBreaking(breaking = 5))}/>
        </div>
        <div>
          <Elements value={session} name = "session"/>
          <Button/>
        </div>
        
      </div>
    </div>
)
}
export default App;