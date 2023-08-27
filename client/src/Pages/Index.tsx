import React, { useEffect, useRef } from "react";
import Intro from "../Components/Intro/Intro";
import Description from "../Components/Description/Description";
import Projects from "../Components/Projects/Projects";

const Index = () => {
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      if (scrollContainerRef.current) {
        const locomotiveScroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true, // Enable smooth scrolling
        });

        locomotiveScroll.on('scroll', (instance) => {
          // You can add your custom scroll event handling here if needed
        });

        // Remember to clean up the LocomotiveScroll instance on unmount
        return () => {
          locomotiveScroll.destroy();
        };
      }
    })();
  }, []);

  return (
    <main ref={scrollContainerRef} className="bg-[#222]">
      <Intro/>
      <Description/>
      <Projects/>
    </main>
  );
};

export default Index;
