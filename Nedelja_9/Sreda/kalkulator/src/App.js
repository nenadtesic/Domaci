import React, { useState } from "react"; 
import Deljenje from "./components/Deljenje";
import Mnozenje from "./components/Mnozenje";
import Oduzimanje from "./components/Oduzimanje";
import Sabiranje from "./components/Sabiranje";

function App() {
  
  const [rezultat, setRezultat] = useState('')
  const [inputNumber, setInputNumber] = useState()
  const [view, setView] = useState('')

  return (
    <div>
      <h1>Calculator</h1> 
      <input type="text" value={rezultat}/>
      <input type="text" value={inputNumber} onChange={(e=> {
        setInputNumber(+e.target.value)
        
      })}/>
      <button onClick={()=> {
        setRezultat(rezultat + inputNumber)
        setView(view + '+' + inputNumber)
        setInputNumber('')
      }}>+</button>
      <button onClick={()=> {
        setRezultat(rezultat - inputNumber)
        setView(view + '-' + inputNumber)
        setInputNumber('')
      }}>-</button>
      <button onClick={()=> {
        setRezultat(rezultat * inputNumber)
        setView(view + '*' + inputNumber)
        setInputNumber('')
      }}>*</button>
      <button onClick={()=> {
        setRezultat(rezultat / inputNumber)
        setView(view + '/' + inputNumber)
        setInputNumber('')
      }}>/</button>
      <button onClick={()=> {
        setRezultat(0)
        setInputNumber(0)
      }}>Clear</button>
      
      <p>{view}</p>
    </div>
  );
}

export default App;
