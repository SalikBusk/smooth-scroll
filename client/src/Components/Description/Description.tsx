import React, { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

interface AnimatedTextProps {
  children: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children }) => {
  const text = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])

  return <p ref={text} className="m-0 relative">{children}</p>;
};

const phrases = [
  'Los Flamencos National Reserve',
  'is a nature reserve located',
  'in the commune of San Pedro de Atacama',
  'The reserve covers a total area',
  'of 740 square kilometres (290 sq mi)',
];

export default function Description() {
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => (
        <AnimatedText key={index}>{phrase}</AnimatedText>
      ))}
    </div>
  );
}
