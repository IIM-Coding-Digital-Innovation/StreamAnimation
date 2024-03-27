'use client'

import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import styles from "./assets/styles/page.module.css";
import reset from "./assets/styles/reset.css";
import { gsap} from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // useGSAP(() => {
  // gsap.to(".box", {x: 360});
  // }, { scope: container });
  //
  // useGSAP(() => {
  //   gsap.to(".box", {
  //     scrollTrigger: {
  //     trigger: '.box',
  //     start: "30% center",
  //     duration: 1,
  //     scrub: true,
  //     markers: true,
  //     toggleActions: 'play reverse play reverse',
  //     },
  //     x: "100%",
  //     opacity: 0,
  //     filter: 'blur(20px)'
  //   })
  // });

  return (
    <main className={styles.dot}>
      <div className={styles.main}>
        <div className={styles.home}>
          <div className={styles.darkPurple}>
            <p className={styles.whatIf}>
              What if ?
            </p>
          </div>
          <div className={styles.blue}>
            <p className={styles.textTwitch}>
              Que sont-ils devenus ?
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.meme} src="https://clipart-library.com/img1/1326461.png" alt="Meme" />
            <p className={styles.textSubtitle}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Utiliser les touches du clavier.
            </p>
          </div>
          <div className={styles.purple}>
            <img className={styles.logoTwitch}
                 src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Twitch_Glitch_Logo_Black.svg/878px-Twitch_Glitch_Logo_Black.svg.png"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
