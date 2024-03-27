'use client'

import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";
import { gsap} from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const GOTAGA = [
  {
    profile: {
      pseudonyme: "Gotaga",
      picture: "https://intrld.com/wp-content/uploads/2021/06/gotaga-twitch.png",
      name: "Corentin Houssein",
      age : "30",
      color: "#C51A26"
    },
    timeline: [
      {
        box_number: "box_one",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      },
      {
        box_number: "box_two",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      },
      {
        box_number: "box_three",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      },
      {
        box_number: "box_four",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      },
      {
        box_number: "box_five",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      },
      {
        box_number: "box_six",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      }
    ]
  }
]

const KAMETO = [
  {
    profile: {
      pseudonyme: "Kameto",
      picture: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2023/3/12/cn2fwwvzlzu2d8c960sp/kameto-commentateur-esport",
      name: "Kamel Kebir",
      age : "28",
      color: "#004687"
    },
    timeline: [
      {
        box_number: "box_one",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      },
      {
        box_number: "box_two",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      },
      {
        box_number: "box_three",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      },
      {
        box_number: "box_four",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      },
      {
        box_number: "box_five",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      },
      {
        box_number: "box_six",
        year: "2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id enim sit amet massa efficitur pretium quis sed odio."
      }
    ]
  }
]

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
      toggleActions: 'play reverse play reverse',
      },
      x: "100%",
      opacity: 0,
      filter: 'blur(20px)'
    })
  });

  useGSAP(() => {
    gsap.to("#children_box p", {
      y: -3050,
      scrollTrigger: {
          trigger: "#parent_box",
          start: "top 75",
          end: "+=1000",
          scrub: true,
          markers: true,
          pin: true,
      }
    });

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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
        <div key={index} className={styles.profile} id="parent_box" style={{ height: "100vh" }}>
          <div className={styles.profile_info} style={{backgroundColor: props.profile.color}}>
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
          <div className={styles.profile_timeline} id="children_box" style={{ height: "80vh" }}>
          {props.timeline.map( ( { ...data }, index ) => (
            <div key={index} className={styles[data.box_number]}>
              <p className={styles.box_year}>{data.year}</p>
              <p className={styles.box_text}>{data.text}</p>
            </div>
          ) )}
          </div>
          <span className={styles.row} style={{backgroundColor: props.profile.color}} />
        </div>
      ) )}
    </>
  );
}
