'use client';

import { useGSAP } from "@gsap/react";
import styles from "./assets/styles/page.module.css";
import reset from "./assets/styles/reset.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef();
  const [activeItem, setActiveItem] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(false);
  const [activePlayer, setActivePlayer] = useState(false);

  const gotagaRef = useRef(null);
  const kametoRef = useRef(null);
  const mistermvRef = useRef(null);
  const maghlaRef = useRef(null);
  const avaRef = useRef(null);

  const mp3s = {
    gotaga: 'gotaga.mp3',
    kameto: 'kameto.mp3',
    mistermv: 'mistermv.mp3',
    maghla: 'maghla.mp3',
    ava: 'ava.mp3',
  };
  
  // let activePlayer = null;
  
  // useEffect(() => {
  //   setActivePlayer(true, (activePlayer) => {
  //     console.log('activePlayer', activePlayer);
    
  //   })
  // });
// let player = new Tone();
let play = false;
const handleStart = (mp3) => {
  let player = new Tone.Player(mp3).toDestination();

  if (!play) {
    console.log(activePlayer);
    console.log('other music is playing');
    player.stop();
    player.autostart = true;
    // setActivePlayer(player);
    setCurrentMusic(mp3);
    setActivePlayer(true);
    play = true;
    console.log(activePlayer);
  } else {
    player.stop();
    setCurrentMusic(null);
    setActivePlayer(null);
}
};

  useGSAP(() => {
    gsap.from("#dark_purple", { x: -360, opacity: 0, duration: 0.5 });
    gsap.from("#light_purple", { x: -360, opacity: 0, duration: 0.5 });
    gsap.from("#what_if", { x: -200, opacity: 0, duration: 0.5, delay: 0.4 });
    gsap.from("#meme", { x: 200, opacity: 0, duration: 0.5, delay: 0.4 });
    gsap.from("#gotaga", { x: 200, opacity: 0, duration: 0.5, delay: 0.6 });
    gsap.from("#kameto", { x: 200, opacity: 0, duration: 0.5, delay: 0.6 });
    gsap.from("#mistermv", { x: 200, opacity: 0, duration: 0.5, delay: 0.6 });
    gsap.from("#maghla", { x: 200, opacity: 0, duration: 0.5, delay: 0.6 });
    gsap.from("#ava", { x: 200, opacity: 0, duration: 0.5, delay: 0.6 });
  }, { scope: container });

  const handleKeyPress = (event) => {
      console.log('event.key', event.key);
      switch (event.key) {
        case 'g':
          setActiveItem('gotaga');
          gotagaRef.current.focus();
          handleStart(mp3s.gotaga);
          break;
        case 'k':
          setActiveItem('kameto');
          kametoRef.current.focus();
          handleStart(mp3s.kameto);
          break;
        case 'v':
          setActiveItem('mistermv');
          console.log(activeItem);
          setActivePlayer(true);
          mistermvRef.current.focus();
          handleStart(mp3s.mistermv);
          break;
        case 'm':
          setActiveItem('maghla');
          maghlaRef.current.focus();
          handleStart(mp3s.maghla);
          break;
        case 'a':
          setActiveItem('ava');
          avaRef.current.focus();
          handleStart(mp3s.ava);
          break;
        default:
          break;
      }
    
  };
  
  useEffect(() => {
    document.body.addEventListener('keypress', handleKeyPress);
  
    return () => {
        document.body.removeEventListener('keypress', handleKeyPress);
      
    };
  }, []);

  const handleCloseModal = () => {
    setActiveItem(null);
  };

  return (
    <main className={`${styles.dot} ${reset}`}>
      <div className={styles.main}>
        <div className={styles.home} ref={container}>
          <div id="dark_purple" className={`${styles.glass} ${styles.darkPurple}`}>
            <p id="what_if" className={styles.whatIf}>
              What if ?
            </p>
          </div>
          <div id="light_purple" className={`${styles.lightPurple} ${styles.glass}`}>
            <p className={styles.textTwitch}>
              Que sont-ils devenus ?
            </p>
            <img id="meme" className={styles.meme} src="https://clipart-library.com/img1/1326461.png" alt="Meme" />
            <p className={styles.textSubtitle}>
              Utiliser les touches du clavier.
              activeItem: {activeItem}
            </p>
          </div>
          <div className={`${styles.purple} ${styles.glass}`}>
            <div className={styles.containerTriangle}>
              <div className={`${activeItem === 'first' ? styles.activeItem : ''}`} ref={gotagaRef} tabIndex="0">
                <div id="gotaga" className={styles.first}></div>
              </div>
              <div className={`${activeItem === 'second' ? styles.activeItem : ''}`} ref={kametoRef} tabIndex="1">
                <div id="kameto" className={styles.second}></div>
              </div>
              <div className={`${activeItem === 'third' ? styles.activeItem : ''}`} ref={mistermvRef} tabIndex="2">
                <div id="mistermv" className={styles.third}></div>
              </div>
              <div className={`${activeItem === 'fourth' ? styles.activeItem : ''}`} ref={maghlaRef} tabIndex="3">
                <div id="maghla" className={styles.fourth}></div>
              </div>
              <div className={`${activeItem === 'fifth' ? styles.activeItem : ''}`} ref={avaRef} tabIndex="4">
                <div id="ava" className={styles.fifth}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
