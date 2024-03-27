import React, { useState, useEffect } from 'react';

function Tooltip({ children, text, position = 'top' }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
  }, []);

  let KeyToDisable = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'Escape']

  KeyToDisable.forEach(key => {
    useKey(key, (isKeyPressed) => {
        disableToolTip(isKeyPressed, key);
    });
  });
 
  function disableToolTip(key, isKeyPressed) {
    console.log(isKeyPressed)
  }

  return (
    <div className={`tooltip tooltip--${position}`}>
      {children}
      {show && (
        <div className="tooltip-text glass">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default Tooltip;