'use client'

import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import { gsap} from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const circle = useRef();
  const container = useRef();
  useGSAP(() => {
  gsap.to(".box", {x: 360});
  }, { scope: container }); 

  useGSAP(() => {
    gsap.to(".box", {
      scrollTrigger: {
      trigger: '.box',
      start: "30% center",
      duration: 1,
      markers: true,
      toggleActions: 'play reverse play reverse',
      },
      x: "100%",
      opacity: 0,
      filter: 'blur(20px)'
    })
  });

  return (
    <main className={styles.main}>
      <h1>Hello, Next !</h1>
      <div ref={container} className="">
        <h1 className="text-5xl">HOME PAGE </h1>
        <a href="/about" className="text-2xl">ABOUT </a>
        <div ref={circle} className="box">YOLO </div>
      </div>
    </main>
  );
}
