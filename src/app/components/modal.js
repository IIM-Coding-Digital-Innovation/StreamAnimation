import React, { useState, useEffect } from 'react';

function Modal() {
    useEffect(() => {
      
      function handleKeyPress(event) {
        if (KeyToDisable.includes(event.key)) {
            disableModal();
          }
      }
  
      document.addEventListener('keydown', handleKeyPress);
  
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
    const KeyToDisable = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'Enter'];
  
    function disableModal() {
        document.querySelector('.modal').classList.add('disabled')
        document.querySelector('.keyboard').classList.add('normal')
        // document.querySelector('body').style.overflowY = 'auto'
    }

    return(
        <div className='modal'>
            <div className='modal-content glass'>
                
                <p>Hello toi</p>

                <p>Bienvenu sur ce wiki des streamers / streameuses !</p>
                <p>LACHE TA SOURIS !! ELLE NE TE SERS À RIEN ICI (;</p>

                <p>Si tu manges des cartes graphiques appuye sur ENTRER</p>
            </div>
            <div className='modal-outer'></div>
        </div>
    )
}

export default Modal;