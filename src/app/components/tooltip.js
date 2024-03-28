import React, { useState, useEffect } from 'react';
import styles from "../assets/styles/page.module.css";

function Tooltip({ children, text, position = 'top' }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    
    function handleKeyPress(event) {
        if (KeyToDisable.includes(event.key)) {
          disableToolTip();
        }
        if (event.key === KeyToAbleAgain) {
            AbleToolTipAgain();
        }
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const KeyToDisable = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'Escape'];
  const KeyToAbleAgain = 'Backspace'

  function disableToolTip() {
    document.querySelectorAll('.tooltipText').forEach(tooltip => {
        tooltip.classList.add('disabled')
        setTimeout(() => {
            if (tooltip.classList.contains('disabled')) {
                tooltip.classList.remove('disabled')
            }
        }, 15000);
    });
  }

  function AbleToolTipAgain() {
    document.querySelectorAll('.tooltipText').forEach(tooltip => {
        if (tooltip.classList.contains('disabled')) {
            tooltip.classList.remove('disabled')
        }
    });
  }

  return (
    <div className={`${styles.tooltip} ${styles.tooltip--}${position}`}>
      {children}
      {show && (
        <div className={`${styles.tooltipText} ${styles.glass}`}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default Tooltip;
