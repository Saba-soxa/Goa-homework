import { useState } from "react";
import Myimg from "./assets/k2.jpg"



export default function App() {
  
  const [counter,setcounter] = useState(0);
  const [inc,setincrease] = useState(1);

  const increase = () => {
    
    setcounter(counter + inc)
    console.log('increase',counter)
  };

  const dicrease = () => {

    setcounter(counter - inc)
    console.log('dicrease',counter )
  };
  
  const btnincrease=()=>{
    setincrease(inc + 2);
    setcounter(counter+inc);
  }
  return(
  <div>
    <img src={Myimg} alt="k2" />
    <h1>hello</h1>

    <span>{counter}</span>
    <button onClick={increase}>up</button>
    <button onClick={dicrease}>down</button>
    <button onClick={btnincrease}>+{inc}</button>
  </div>
  
  )
}