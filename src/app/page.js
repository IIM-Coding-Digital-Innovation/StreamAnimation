'use client'

import { useState, useEffect, useRef } from 'react';
import styles from "./page.module.css";
import * as Tone from 'tone';

const mp3 = 'http://localhost:3000/gotaga.mp3';
const handleStart = () => {
  const player = new Tone.Player(mp3).toDestination();
  player.autostart = true;
};


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const gotagaRef = useRef(null);
  const kametoRef = useRef(null);
  const mistermvRef = useRef(null);
  const maghlaRef = useRef(null);
  const avaRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!showModal) {
        switch (event.key) {
          case 'g':
            setActiveItem('gotaga');
            gotagaRef.current.focus();
            setShowModal(true);
            handleStart();
            break;
          case 'k':
            setActiveItem('kameto');
            kametoRef.current.focus();
            setShowModal(true);
            handleStart();
            break;
          case 'v':
            setActiveItem('mistermv');
            mistermvRef.current.focus();
            setShowModal(true);
            handleStart();
            break;
          case 'm':
            setActiveItem('maghla');
            maghlaRef.current.focus();
            setShowModal(true);
            handleStart();
            break;
          case 'a':
            setActiveItem('ava');
            avaRef.current.focus();
            setShowModal(true);
            handleStart();
            break;
          default:
            break;
        }
      }
    };
  
    document.body.addEventListener('keyup', handleKeyPress);
  
    return () => {
      document.body.removeEventListener('keyup', handleKeyPress);
    };
  }, [showModal]);

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveItem(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h2>Pour voir vos streamers préféres dans 25 ans voici ce que vous devez faire :</h2>
        <h3>Pour Gotaga : appuyer sur g</h3>
        <h3>Pour Kameto : appuyer sur k</h3>
        <h3>Pour Mistermv : appuyer sur v</h3>
        <h3>Pour Maghla : appuyer sur m</h3>
        <h3>Pour AvaMind : appuyer sur a</h3>
      </div>
      <div className={styles.containerTriangle}>
        <div className={`${activeItem === 'first' ? styles.activeItem : ''}`} ref={gotagaRef} tabIndex="0">
          <div className={styles.first}></div>
        </div>
        <div className={`${activeItem === 'second' ? styles.activeItem : ''}`} ref={kametoRef} tabIndex="1">
          <div className={styles.second}></div>
        </div>
        <div className={`${activeItem === 'third' ? styles.activeItem : ''}`} ref={mistermvRef} tabIndex="2">
          <div className={styles.third}></div>
        </div>
        <div className={`${activeItem === 'fourth' ? styles.activeItem : ''}`} ref={maghlaRef} tabIndex="3">
          <div className={styles.fourth}></div>
        </div>
        <div className={`${activeItem === 'fifth' ? styles.activeItem : ''}`} ref={avaRef} tabIndex="4">
          <div className={styles.fifth}></div>
        </div>
      </div>
    </div>
  );
}
