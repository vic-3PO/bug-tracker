import React, { useState, useEffect } from 'react'; 
import "./CurrentBug.css"

function CurrentBug() {
  const [addBug, setAddBug] = useState(true)

  return <div className="current-bug">
    <div className='individual-bug'>
        <p className='close-bug'>Bug Resolvido</p>
        <p>Para<spam>Username</spam></p>
        <p>Prioridade<spam>Alta</spam></p>
        <p>Descrição</p>
        <p className='description-text'>It is a period of civil war. Rebel spaceships, striking from a hidden base, 
            have won their first victory against the evil Galactic Empire. During the 
            battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon, 
            the DEATH STAR, and space station with enough power to destroy an entire planet.
        </p>
        <hr />
    </div>
    <div className='individual-bug'>
        <p className='close-bug'>Bug Resolvido</p>
        <p>Para<spam>Username</spam></p>
        <p>Prioridade<spam>Alta</spam></p>
        <p>Descrição</p>
        <p className='description-text'>It is a period of civil war. Rebel spaceships, striking from a hidden base, 
            have won their first victory against the evil Galactic Empire. During the 
            battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon, 
            the DEATH STAR, and space station with enough power to destroy an entire planet.
        </p>
        <hr />
    </div>
    <div className='individual-bug'>
        <p className='close-bug'>Bug Resolvido</p>
        <p>Para<spam>Username</spam></p>
        <p>Prioridade<spam>Alta</spam></p>
        <p>Descrição</p>
        <p className='description-text'>It is a period of civil war. Rebel spaceships, striking from a hidden base, 
            have won their first victory against the evil Galactic Empire. During the 
            battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon, 
            the DEATH STAR, and space station with enough power to destroy an entire planet.
        </p>
        <hr />
    </div>
  </div>
}

export default CurrentBug;
