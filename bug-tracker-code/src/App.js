import React, { useState, useEffect } from 'react'; 
import AddBug from "./components/AddBug/AddBug";
import CurrentBug from "./components/CurrentBug/CurrentBug";
import './App.css';

function App() {
  const [addBug, setAddBug] = useState(true)
  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      <div className='contianer'>
        { addBug ? < AddBug/ > : <CurrentBug/>}
      </div>
      <div className='view-selection'>
        <button class="view-buttom">Bug Atual</button>
        <button class="view-buttom active-buttom">Adicionar Bug</button>
      </div>
    </div>
  );
}

export default App;
