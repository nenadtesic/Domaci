import React, { useState } from "react"; 
import Deljenje from "./components/Deljenje";
import Mnozenje from "./components/Mnozenje";
import Oduzimanje from "./components/Oduzimanje";
import Sabiranje from "./components/Sabiranje";

function App() {
  
  const [vrednost, setVrednost] = useState('')
  const [sabiranje, setSabiranje] = useState()

  const unosVrednosti = (e) => {
    setVrednost(+e.target.value)
  }


  return (
    <div>
      <h1>Calculator</h1> 
      <input type="text" value={setVrednost}/>
      <input type="text" value={vrednost} onChange={unosVrednosti}/>
      <button onClick={()=> {
        setSabiranje(sabiranje + vrednost)
      }}>+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
      <button>Clear</button>
      
      <p>{vrednost}</p>
    </div>
  );
}

export default App;
