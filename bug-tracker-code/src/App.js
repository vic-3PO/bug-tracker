import React, { useState } from 'react'; 
import AddBug from "./components/AddBug/AddBug";
import CurrentBug from "./components/CurrentBug/CurrentBug";
import './App.css';

function App() {
  const [addBug, setAddBug] = useState(false)

  function showAddBug() {
      setAddBug(true);
  }
  function showCurrentBug() {
      setAddBug(false);
  }

  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      <div className='contianer'>
        { addBug ? < AddBug/ > : <CurrentBug/>}
      </div>
      <div className='view-selection'>
        <button className="view-buttom" onClick={() => showCurrentBug()}>Lista de Bugs</button>
        <button className="view-buttom active-buttom" onClick={() => showAddBug()}>Adicionar Bug</button>
      </div>
    </div>
  );
}

export default App;
