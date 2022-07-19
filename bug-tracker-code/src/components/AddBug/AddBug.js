import React, { useState } from 'react'; 
import "./AddBug.css"

function AddBug() {
    const [description, setDescription] = useState(true)
    const [jedi, setJedi] = useState(true)  
    const [priority, setPriority] = useState(true)

    //const addToLocalStorage = () => {

        //let newBug = {
        //    "description": description,
        //    "jedi": jedi,
        //    "priority": priority,                
        //}

        //localStorage.setItem('Bug', 
        //    JSON.stringify(newBug),
        // )
    //}

  return( 
  <div className="Add-Bug">
    <form>
        <label>Descrição<input id='description' type="text" placeholder='Descreva o bug...' onKeyUp={() => setDescription(document.getElementById("description").value)}/></label>
        <label>Mande para
            <select name="ParaJedi" id="ParaJedi" onChange={() => setJedi(document.getElementById("ParaJedi").value)}>
                <option value="Obi-Wan Kenobi">Obi-Wan Kenobi</option>
                <option value="Leia Organa Solo">Leia Organa Solo</option>
                <option value="Darth Vader">Darth Vader</option>
                <option value="Palpatine">Palpatine</option>
            </select>
        </label>
        <label>Prioridade 
            <select name="priority" id="priority" onChange={() => setPriority(document.getElementById("priority").value)}>
                <option value="Baixa">Baixa</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
                <option value="Estrela-Morte">Estrela da Morte</option>
            </select>
        </label>
        <button type='submit'>Adicionar</button>
    </form>
  </div> 
  );
}

export default AddBug;
