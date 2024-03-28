'use client'

import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import { gsap} from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Tooltip from "./components/tooltip";
import Modal from "./components/modal";
import Keyboard from "./components/keyboard";
import Shortcuts from "./components/shorcuts";
import ShapeCanvas from "./components/canva";

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

      </div>
      <Keyboard />
      <Shortcuts />
      <Modal />
      <ShapeCanvas />
    </main>
  );
}
