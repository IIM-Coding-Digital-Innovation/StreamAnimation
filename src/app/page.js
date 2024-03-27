'use client'

import { useGSAP } from "@gsap/react";
import styles from "./assets/styles/page.module.css";
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
  const container = useRef();

  useGSAP(() => {
    gsap.from("#logo_twitch", {x: -360, y: 360, opacity: 0, duration: 0.5});
    gsap.from("#dark_purple", {x: -360, opacity: 0, duration: 0.5});
    gsap.from("#light_purple", {x: -360, opacity: 0, duration: 0.5});
    gsap.from("#what_if", {x: -200, opacity: 0, duration: 0.5, delay: 0.4});
    gsap.from("#meme", {x: 200, opacity: 0, duration: 0.5, delay: 0.4});
  }, {scope: container});

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
    <main className={styles.background}>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img id="meme" className={styles.meme} src="https://clipart-library.com/img1/1326461.png" alt="Meme" />
            <p className={styles.textSubtitle}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Utiliser les touches du clavier.
            </p>
          </div>
          <div className={`${styles.purple} ${styles.glass}`}>
            <img id={"logo_twitch"} className={styles.logoTwitch}
                  src={"https://www.edigitalagency.com.au/wp-content/uploads/Twitch-icon-purple.png"}
            />
          </div>
        </div>
      </div>
      {GOTAGA.map( ( { ...props }, index ) => (
        <div key={index} className={`${styles.profile} ${styles.background}`} id="parent_box" style={{ height: "100vh" }}>
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
    </main>
  );
}
