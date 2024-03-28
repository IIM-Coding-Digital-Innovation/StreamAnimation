'use client';

import { useGSAP } from "@gsap/react";
import styles from "./assets/styles/page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

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

const AVAMIND = [
  {
    profile: {
      pseudonyme: "Ava Mind",
      picture: "https://actustream.fr/img/AVA-Mind-organise-tournee-clubs-tant-DJ.jpg",
      name: "Ava",
      age : "32",
      color: "#585FFA"
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

const MISTERMV = [
  {
    profile: {
      pseudonyme: "Mister MV",
      picture: "https://medias.lequipe.fr/img-photo-jpg/xavier-mister-mv-dang-l-organisateur-de-speedons-timo-verdeil-speedons/1500000001458620/72:177,1745:1293-1200-800-75/85861.jpg",
      name: "Xavier Dang",
      age : "43",
      color: "#E8684B"
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

const MAGHLA = [
  {
    profile: {
      pseudonyme: "Maghla",
      picture: "https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/113409721",
      name: "Barbara",
      age : "30",
      color: "#6C549C"
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
  useGSAP(() => {
    gsap.to("#children_box p", {
      y: -3050,
      scrollTrigger: {
          trigger: "#parent_box",
          start: "top",
          end: "+=1000",
          scrub: true,
          pin: true,
      }
    });

    gsap.from("#row", {
      scaleY: "0",
      scrollTrigger: {
        trigger: "#children_box",
        start: "top-=75px top",
        end: "bottom+=200px",
        scrub: true
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
            <img id="meme" className={styles.meme} src="https://clipart-library.com/img1/1326461.png" alt="Meme" />
            <p className={styles.textSubtitle}>
              Utiliser les touches du clavier.
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
          <span id="row" className={styles.row} style={{backgroundColor: props.profile.color}} />
          </div>
        </div>
      ) )}
    </main>
  );
}
