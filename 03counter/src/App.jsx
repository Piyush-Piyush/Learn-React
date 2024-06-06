import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 15;

  // Using hook to update value
  let [counter, setCounter] = useState(0)     
  // useState hook : returns two things, i) a variable (here counter but can be named anything) that will be managed & ii) a function (here setCounter but can be named anything) that will manage the variable (everywhere wherever it is present) and display it on the UI.


  
  //Function to increase the value
  const addValue = () => {          
    if(counter === 20) return;  
    else{
      counter = counter + 1;
      console.log("Add Click", counter);
      setCounter(counter);           // Using the function provided by the hook.
    }
  };


  // Function to decrement the value
  const removeValue = () => {
    if(counter === 0) return;
    else{
      setCounter(counter - 1);          // Using the function provided by the hook.
      console.log("Remove Click", counter);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <p>Current counter value : {counter}</p>
      <button onClick={addValue}>Add value : {counter}</button>
      <br />
      <button onClick = {removeValue}>Remove value : {counter}</button>
    </>
  );
}

export default App;
