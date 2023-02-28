import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import CounterInterview from './components/CounterInterview';
import { UseState } from './components/UseState';
import { ObjectUseState } from './components/ObjectUseState';
import NoofRenders from './components/NoofRenders';
import RefForms from './components/RefForms';
import UseReducer from './components/UseReducer';

function App() {
  const [first, setfirst] = useState(0);
  useEffect( ()=>{

  },[first]);
  
  function onButton(){
    setfirst(first+1);
  }
  return (
    <div className="App">
      {/* {first}
      <button onClick={onButton}>Click Me!!</button> */}
      {/* <CounterInterview></CounterInterview> */}
      {/* <UseState></UseState> */}
      {/* <ObjectUseState></ObjectUseState> */}
      {/* <NoofRenders></NoofRenders> */}
      {/* <RefForms></RefForms> */}
      <UseReducer></UseReducer>
    </div>
  );
}

export default App;
