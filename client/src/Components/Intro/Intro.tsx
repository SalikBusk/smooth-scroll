import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import backgroundImage from "../../images/background.jpeg";
import intro from "../../images/intro.png";

const Intro: React.FC = () => {
  const background = useRef<HTMLDivElement | null>(null);
  const introImage = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    });

    if (background.current) {
      timeline.from(background.current, { clipPath: `inset(15%)` });
    }

    if (introImage.current) {
      timeline.to(introImage.current, { height: "200px" }, 0);
    }
  }, []);

  return (
    <div className={styles.homeHeader}>
      <div
        className={styles.backgroundImage}
        ref={background}
      >
        <img
          src={backgroundImage}
          alt="background image"
        />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <img
            src={intro}
            alt="intro image"
            className={`object-cover object-top`}
          />
          <h1
            className="text-white text-[7vw] z-[3] text-center"
            data-scroll
            data-scroll-speed="0.7"
          >
            SMOOTH SCROLL
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
