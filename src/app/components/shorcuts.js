import React, { useState, useEffect } from 'react';
import styles from "../assets/styles/page.module.css";
import { useKey } from "../utils/key";

function Shortcuts() {

  // KeyQ = a   ava mind
  // KeyG = g   gogogogotagaaaa
  // KeyK = k   kameto
  // KeyV = v   mister MV
  // KeySemicolonQ = m   Maghla

  const KeyToPeople = ['KeyQ', 'KeyG', 'KeyK', 'KeyV', 'Semicolon'];

  KeyToPeople.forEach(key => {
    useKey(key, (isKeyPressed) => {
      pressing(isKeyPressed, key);
    });
  });

  function pressing(isKeyPressed, key) {
    const keyElement = document.querySelector('.keyboard [data-key="' + key + '"]');
    if (keyElement) {
      if (isKeyPressed) {
        keyElement.classList.add('active');
      } else {
        keyElement.classList.remove('active');
      }
    }
  }
    return(
      <div className={styles.shortcuts}>
        <div className={`${styles.link} ${styles.glass}`} data-key='KeyQ'>
          <p>Ava Mind</p>
        </div>
        <div className={`${styles.link} ${styles.glass}`} data-key='KeyG'>
          <p>Gotaga</p>
        </div>
        <div className={`${styles.link} ${styles.glass}`} data-key='KeyK'>
          <p>Kameto</p>
        </div>
        <div className={`${styles.link} ${styles.glass}`} data-key='KeyV'>
          <p>Mister MV</p>
        </div>
        <div className={`${styles.link} ${styles.glass}`} data-key='Semicolon'>
          <p>Maghla</p>
        </div>
      </div>
    )
}

export default Shortcuts;