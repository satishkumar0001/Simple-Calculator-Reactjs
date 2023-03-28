import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("")

  const handle = e=> {
    setInput(e.target.value);
  }

  return (
    <div className="container">
      <div className='calculator'>
        <form>
          <div className='display'> 
            <input type="text" name='input' style={{textAlign:"end"}} value={input} onChange={handle}/>
          </div>
          <div>
          <input type="button" value='AC' onClick={()=> setInput(" ")}/>
          <input type="button" value='DE' onClick={()=> setInput(input+"")}/>
          <input type="button" value='.' onClick={()=> setInput(input+".")}/>
          <input type="button" value='/' onClick={()=> setInput(input+"/")}/>
          </div>
          <div>
          <input type="button" value='7' onClick={()=> setInput(input+"7")}/>
          <input type="button" value='8' onClick={()=> setInput(input+"8")}/>
          <input type="button" value='9' onClick={()=> setInput(input+"9")}/>
          <input type="button" value='*' onClick={()=> setInput(input+"*")}/>
          </div>
          <div>
          <input type="button" value='4' onClick={()=> setInput(input+"4")}/>
          <input type="button" value='5' onClick={()=> setInput(input+"5")}/>
          <input type="button" value='6' onClick={()=> setInput(input+"6")}/>
          <input type="button" value='_' onClick={()=> setInput(input+"-")}/>
          </div>
          <div>
          <input type="button" value='1' onClick={()=> setInput(input+"1")}/>
          <input type="button" value='2' onClick={()=> setInput(input+"2")}/>
          <input type="button" value='3' onClick={()=> setInput(input+"3")}/>
          <input type="button" value='+' onClick={()=> setInput(input+"+")}/>
          </div>
          <div>
          <input type="button" value='00' onClick={()=> setInput(input+"00")}/>
          <input type="button" value='0' onClick={()=> setInput(input+"0")}/>
          <input className='equalto' type="button" value='=' onClick={()=>setInput((eval(input)))}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
