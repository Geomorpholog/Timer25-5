import {useState} from 'react';
import './index.css';
import Elements from './Elements';
import "@fontsource/open-sans"
function App(){
    const [session,setSession] = useState('25:00');
    const [breaking,setBreaking] = useState('05:00');
return(
    <div className="background">
      <div className="app">
        <Elements value={breaking} header="break"/>
        <Elements value={session} header="session"/>
      </div>
    </div>
)
}
export default App;