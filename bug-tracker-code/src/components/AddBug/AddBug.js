import React, { useState, useEffect } from 'react'; 
import "./AddBug.css"

function AddBug() {
  const [addBug, setAddBug] = useState(true)

  return( 
  <div className="Add-Bug">
    <form>
        <label>Descrição<input type="text" placeholder='Descreva o bug...'/></label>
        <label>Mande para
            <select name="ParaJedi" id="ParaJedi">
                <option value="Obi-Wan Kenobi">Obi-Wan Kenobi</option>
                <option value="Leia Organa Solo">Leia Organa Solo</option>
                <option value="Darth Vader">Darth Vader</option>
                <option value="Palpatine">Palpatine</option>
            </select>
        </label>
        <label>Prioridade 
            <select name="priority" id="priority">
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
