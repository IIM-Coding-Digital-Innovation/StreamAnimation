'use client'

import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import { gsap} from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const GOTAGA = [
  {
    profile: {
      pseudonyme: "Gotaga",
      picture: "https://intrld.com/wp-content/uploads/2021/06/gotaga-twitch.png",
      name: "Corentin Houssein",
      age : "30"
    },
    timeline: {
      box_one: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio.",
      box_two: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio.",
      box_three: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio.",
      box_four: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio.",
      box_five: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio.",
      box_six: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
    }
  }
]

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
    <>
    <main className={styles.main}>
      <h1>Hello, Next !</h1>
      <div ref={container} className="">
        <h1 className="text-5xl">HOME PAGE </h1>
        <a href="/about" className="text-2xl">ABOUT </a>
        <div ref={circle} className="box">YOLO </div>
      </div>
    </main>
    {GOTAGA.map( ( { ...props }, index ) => (
      <div key={index} className={styles.profile}>
        <div className={styles.profile_info}>
          <p className={styles.profile_title}>What If</p>
          <div className={styles.profile_card}>
            <p className={styles.profile_pseudonyme}>{props.profile.pseudonyme}</p>
            <img className={styles.profile_picture} src={props.profile.picture} alt="Picture" />
          </div>
          <div className={styles.profile_information}>
            <div>
              <p className={styles.profile_name}>{props.profile.name}</p>
              <p className={styles.profile_age}>{props.profile.age} ans</p>
            </div>
          </div>
        </div>
        <div key={index} className={styles.profile_timeline}>
          <p className={styles.box_one}>{props.timeline.box_one}</p>
          <p className={styles.box_two}>{props.timeline.box_two}</p>
          <p className={styles.box_three}>{props.timeline.box_three}</p>
          <p className={styles.box_four}>{props.timeline.box_four}</p>
          <p className={styles.box_five}>{props.timeline.box_five}</p>
          <p className={styles.box_six}>{props.timeline.box_six}</p>
        </div>
        <span className={styles.row}>Flèche</span>
      </div>
    ) )}
    </>
  );
}
