'use client'

import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import styles from "./assets/styles/page.module.css";
import "./assets/styles/reset.css";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import Tooltip from "./components/tooltip";
import Modal from "./components/modal";
import Keyboard from "./components/keyboard";
import Shortcuts from "./components/shorcuts";
import ShapeCanvas from "./components/canva";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef();
  const [isModalOpen, setIsModalOpen] = useState(true)
  // useGSAP(() => {
  // gsap.to(".box", {x: 360});
  // }, { scope: container }); 

  useGSAP(() => {
    gsap.from("#logo_twitch", { x: -360, y: 360, opacity: 0, duration: 0.5 });
    gsap.from("#dark_purple", { x: -360, opacity: 0, duration: 0.5 });
    gsap.from("#light_purple", { x: -360, opacity: 0, duration: 0.5 });
    gsap.from("#what_if", { x: -200, opacity: 0, duration: 0.5, delay: 0.4 });
    gsap.from("#meme", { x: 200, opacity: 0, duration: 0.5, delay: 0.4 });
  }, { scope: container });

  // useGSAP(() => {
  //   gsap.to(".box", {
  //     scrollTrigger: {
  //     trigger: '.box',
  //     start: "30% center",
  //     duration: 1,
  //     markers: true,
  //     toggleActions: 'play reverse play reverse',
  //     },
  //     x: "100%",
  //     opacity: 0,
  //     filter: 'blur(20px)'
  //   })
  // });

  return (
    <main className={`${styles.dot}`}>
      <div className={styles.main}>
        <div className={styles.home} ref={container}>
          <div id="dark_purple" className={`${styles.glass} ${styles.darkPurple}`}>
            <p id="what_if" className={styles.whatIf}>
              What if ?
            </p>
          </div>
          <div id="light_purple" className={`${styles.lightPurple} ${styles.glass}`}>
            {/*<span>*/}
            <p className={styles.textTwitch}>
              Que sont-ils devenus ?
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img id="meme" className={styles.meme} src="https://clipart-library.com/img1/1326461.png" alt="Meme" />
            <p className={styles.textSubtitle}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Utiliser les touches du clavier.
            </p>
            {/*</span>*/}
          </div>
          <div className={`${styles.purple} ${styles.glass}`}>
            <img id={"logo_twitch"} className={styles.logoTwitch}
              src={"https://www.edigitalagency.com.au/wp-content/uploads/Twitch-icon-purple.png"}
            />
          </div>
        </div>
      </div>
      <Keyboard />
      <Shortcuts />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ShapeCanvas />
    </main>
  );
}
