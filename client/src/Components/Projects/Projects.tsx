import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.css';

import miniqueslagoon from '../../images/miniques_lagoon.jpg';

interface Project {
  title: string;
  src: string;
}

const projects: Project[] = [
  {
    title: 'Salar de Atacama',
    src: miniqueslagoon,
  },
  {
    title: 'Valle de la luna',
    src: miniqueslagoon,
  },
  {
    title: 'Miscanti Lake',
    src: miniqueslagoon,
  },
  {
    title: 'Miniques Lagoons',
    src: miniqueslagoon,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef<HTMLDivElement | null>(null);
  const imageContainer = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current!,
      pin: true,
      start: 'top-=100px',
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <img
            src={projects[selectedProject].src}
            alt="project image"
            className={`object-cover`}
          />
        </div>
        <div className={styles.column}>
          <p>
            The flora is characterized by the presence of high elevation
            wetland, as well as yellow straw, broom sedge, tola de agua and
            tola amaia.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Some, like the southern viscacha, vicuña and Darwin's rhea, are
            classified as endangered species. Others, such as Andean goose,
            horned coot, Andean gull, puna tinamou and the three flamingo
            species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
            James's flamingo) are considered vulnerable.
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseOver={() => setSelectedProject(index)}
            className={`w-full text-white uppercase text-[3vw] border-b-[1px] border-white flex justify-end`}
          >
            <h2 className='m-0 mt-[40px] mb-[20px] cursor-default'>{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
