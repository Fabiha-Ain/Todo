import { useState,useEffect } from 'react';
import './App.css';
import Component from './component'
import Todo from './todo';

function App() {

  const [numberState, setNumberState]=useState(0)
  const [numberState2, setNumberState2]=useState(0)
  const [toggle, setToggle]=useState(false)
  useEffect(() => {
    console.log('Page Loaded')
  }, [])
  // console.log(text);

  function clickFunction(){
    // number+=1
    // setNumberState(numberState+1)
    // console.log(numberState);
    // number+=10;
  
    setToggle(!toggle)
  }

  function changeFunction(e){
    setNumberState(Number(e.target.value))
    }
  function changeFunction2(e){
    setNumberState2(Number(e.target.value))
    console.log(numberState+Number(e.target.value))
    }

  function submitFunction(e){
    e.preventDefault()

    // console.log(numberState+numberState2)
    // console.log(numberState*numberState2)
    // if(toggle===true){
    //   console.log(numberState+numberState2)
    // }
    // else{
    //   console.log(numberState-numberState2)
    // }

  }

  return (
    <div className="App">
        {/* <Component 
          toggle={toggle} 
          numberState={numberState} 
          numberState2={numberState2} 
          submitFunction={submitFunction} 
          changeFunction={changeFunction}
          changeFunction2={changeFunction2}
          clickFunction={clickFunction}
        /> */}
        <Todo/>
        
    </div>
  );
}

export default App;
