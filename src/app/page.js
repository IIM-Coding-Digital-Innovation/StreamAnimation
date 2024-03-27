'use client'

import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import { gsap} from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useKey } from "./utils/key";
import Tooltip from "./components/tooltip";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const circle = useRef();
  const container = useRef();
  // useGSAP(() => {
  // gsap.to(".box", {x: 360});
  // }, { scope: container }); 

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

  useKey('ArrowUp', (isKeyPressed) => {
    test(isKeyPressed, 'ArrowUp');
  });
  useKey('ArrowLeft', (isKeyPressed) => {
    test(isKeyPressed, 'ArrowLeft');
  });
  useKey('ArrowRight', (isKeyPressed) => {
    test(isKeyPressed, 'ArrowRight');
  });
  useKey('ArrowDown', (isKeyPressed) => {
    test(isKeyPressed, 'ArrowDown');
  });

  function test(isKeyPressed, key) {
    const keyElement = document.querySelector('[data-key="' + key + '"]');
    if (keyElement) {
      if (isKeyPressed) {
        keyElement.classList.add('active');
      } else {
        keyElement.classList.remove('active');
      }
    }
  }
  
  return (
    <main className={styles.main}>
      <h1>Hello, Next !</h1>
      <div ref={container} className="">
        <h1 className="text-5xl">HOME PAGE </h1>
        <a href="/about" className="text-2xl">ABOUT </a>
        <Tooltip text="Paix à son âme" position="top">
          Népal, de son vrai nom Clément Enzo Florian di Fiore, né le 12 octobre 1990 dans le 14e arrondissement de Paris et mort le 9 novembre 2019 à Clichy dans les Hauts-de-Seine1,2, est un rappeur et beatmaker français. L'artiste - qui attache énormément d'importance à l'anonymat et ne se montre qu'encapuchonné, masqué, cagoulé ou même maquillé - est également connu sous les noms KLM et GrandMaster Splinter3. Cofondateur du collectif de la 75e Session, il forme avec Doums le duo 2Fingz. Il est également proche du collectif L'Entourage, du groupe 1995 et du projet LesGarsLaxistes.
        </Tooltip>
        {/* <div ref={circle} className="box">YOLO </div> */}

        <div className="keyboard">
          <div className="up glass" data-key='ArrowUp'>
            <svg viewBox="0 0 8 8">
                <path d="M3.99953 1C3.83653 1 3.68353 1.0795 3.59003 1.2135L0.0900328 6.2135C-0.0169672 6.366 -0.0289672 6.5655 0.0560328 6.731C0.142533 6.8965 0.313033 7 0.499533 7H7.50003C7.68653 7 7.85753 6.8965 7.94353 6.731C8.02853 6.5655 8.01653 6.366 7.90953 6.2135L4.40953 1.2135C4.31653 1.0795 4.16353 1 4.00053 1C4.00003 1 4.00003 1 3.99953 1C4.00003 1 4.00003 1 3.99953 1Z" />
            </svg>
          </div>
          <div className="left glass" data-key='ArrowLeft'>
            <svg viewBox="0 0 8 8">
                <path d="M1 4.00053C1 4.16353 1.0795 4.31653 1.2135 4.41003L6.2135 7.91003C6.366 8.01703 6.5655 8.02903 6.731 7.94403C6.8965 7.85753 7 7.68703 7 7.50053V0.499533C7 0.313033 6.8965 0.142033 6.731 0.0560328C6.5655 -0.0289672 6.366 -0.0169672 6.2135 0.0900328L1.2135 3.59003C1.0795 3.68353 1 3.83653 1 3.99953C1 4.00003 1 4.00003 1 4.00053C1 4.00003 1 4.00003 1 4.00053Z" />
            </svg>
          </div>
          <div className="down glass" data-key='ArrowDown'>
            <svg viewBox="0 0 8 8">
                <path d="M4.00053 7C4.16353 7 4.31653 6.9205 4.41003 6.7865L7.91003 1.7865C8.01703 1.634 8.02903 1.4345 7.94403 1.269C7.85753 1.1035 7.68703 1 7.50053 1H0.499533C0.313033 1 0.142533 1.1035 0.0560328 1.269C-0.0289672 1.4345 -0.0169672 1.634 0.0900328 1.7865L3.59003 6.7865C3.68353 6.9205 3.83653 7 3.99953 7C4.00003 7 4.00003 7 4.00053 7C4.00003 7 4.00003 7 4.00053 7Z" />
            </svg>
          </div>
          <div className="right glass" data-key='ArrowRight'>
            <svg viewBox="0 0 8 8">
                <path d="M7 3.99953C7 3.83653 6.9205 3.68353 6.7865 3.59003L1.7865 0.0900328C1.6345 -0.0169672 1.4345 -0.0289672 1.269 0.0560328C1.1035 0.142533 1 0.313033 1 0.499533V7.50003C1 7.68653 1.1035 7.85753 1.269 7.94353C1.4345 8.02853 1.634 8.01653 1.7865 7.90953L6.7865 4.40953C6.9205 4.31653 7 4.16353 7 4.00053C7 4.00003 7 4.00003 7 3.99953C7 4.00003 7 4.00003 7 3.99953Z" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
