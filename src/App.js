import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [activeButton, setActiveButton] = useState("")

  function handleClick(e){
    let id = e.target.id;
    setActiveButton(id);
  }

  //condition ? outcomeIfTrue : outcomeIfFalse

  return (
    <div className="App">
    <button id="first"className={(activeButton == "first") ? "Active": ""}  onClick={handleClick}>First Button</button>
    <button id="second"className={(activeButton == "second") ? "Active": ""} onClick={handleClick}>Second Button</button>
    <button id="third"className={(activeButton == "third") ? "Active": ""} onClick={handleClick}>Third Button</button>
    {activeButton}

    </div>
  );
}

export default App;
