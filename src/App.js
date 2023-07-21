import Arrays from "./Arrays";
import HookCounterTwo from "./HookCounterTwo";
import Objects from './Objects';
import {useState} from 'react';
import Form from './Form'
function App() {

  return (
    <div className="App">
      <h1>React Drills</h1>
      {/* <Arrays /> */}
      {/* <Objects /> */}
      {/* <h1>{counter}</h1> */}
    <HookCounterTwo />




    <Form />
    </div>
  );
}

export default App;

// EVERYTHING BELOW THIS WENT INTO FUNCTION APP


{/* <button onClick={handleIncrement}> + </button>
    <button onClick= {()=> {setCounter(counter - 1)}}> - </button>
    <br />
    <button onClick={()=> {setCounter(0)}}>reset</button> */}
   
   
    {/* <button onClick= {()=> {setCounter(counter + 5)}}> plus 5 </button>
    <button onClick= {()=> {setCounter(counter - 5)}}> minus 5 </button> */}

//const arr = ["billy", "bob", "bobo", "brandy"]
// const bill = arr[0] //billy
// const bob = arr[1]

// const [bill, bob] = arr;

//const [counter, setCounter] = useState(0);

// const handleIncrement = () => {
// setCounter(counter +1)
// }

// const handleDecrement = () => {

// }

  // const counter = 0;