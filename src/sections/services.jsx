import React, { useRef, useEffect, useState } from "react";

import Image from "next/image";
import {motion} from 'framer-motion'
const services = [
  {
    id: 1,
    title: "Photography",
    image: "/images/photograph.webp",
    alt: "Wedding Photography Service  at Carys Wedding"
  },
  {
    id: 2,
    title: "Catering Services",
    image: "/images/catering.webp",
    alt: "Wedding Catering Service at Carys Wedding"
  },
  {
    id: 3,
    title: "DJ & Entertainment",
    image: "/images/dj.webp",
    alt: "Wedding DJ & Entertainment Service at Carys Wedding"
  },
  {
    id: 4,
    title: "Stage Decoration",
    image: "/images/stageDecor.webp",
    alt: "Wedding Stage Decoration Service at Carys Wedding"
  },
  {
    id: 5,
    title: "Snacks Counter",
    image: "/images/snack.webp",
    alt: "Wedding Snacks Counter Service at Carys Wedding"
  },
  {
    id: 6,
    title: "Traditional Chenda Melam",
    image: "/images/chendaMelam.webp",
    alt: "Traditional Chenda Melam Service at Carys Wedding"
  },
];

const ServicesSection = React.memo(({ isMobile }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(performance.now());


  const renderedServices = isMobile ? services : [...services, ...services];

 
  const startAnimation = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTimeRef.current) / 1000; 
      lastTimeRef.current = currentTime;

      const speed = 50;
      scrollContainer.scrollLeft += speed * deltaTime;

      const singleListWidth = scrollContainer.scrollWidth / 2;
      if (scrollContainer.scrollLeft >= singleListWidth) {
        scrollContainer.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    lastTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 640) {
      startAnimation();
      return () => stopAnimation();
    }
  }, []);

  return (
    <section className="relative px-8  py-20 flex items-center justify-center  w-full">
      <div className="max-w-[1200px] w-full mx-auto">
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.4 ,delay:.2}}
        className="text-5xl font-bold font-fraunces text-[#B084E1] text-center mt-20 mb-20">
          <h2>Our Services</h2>
        </motion.div>
      
        <div className="service-content mb-20">
          <ul
            ref={scrollRef}
            className="
            scrollbar
    flex flex-col 
    sm:flex-row 
    gap-6 
    overflow-x-scroll 
    sm:pb-[10px] 
    list-none 
    p-0 m-0 
    transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] 
    scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
  "
            style={{ scrollBehavior: "auto" }}
          >
            {renderedServices.map((service, index) => (
              <motion.li
                 initial={{opacity:0,scale:0.2}}
                 whileInView={{opacity:1,scale:1}}
                  transition={{duration:.4 ,delay: index*.2}}
                key={`${service.id}-${index}`}
                className="flex items-center flex-col rounded-[20px] p-4 text-center  md:min-w-[240px] md:flex-shrink-0"
              >
                  <div className="relative w-[250px] h-[320px] mb-4 bg-gray-100 min-h-[200px] sm:w-[190px] sm:h-[300px] md:w-[240px] md:h-[330px] rounded-[16px] overflow-hidden ">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover rounded-[16px]"
                    sizes="(max-width: 768px) 190px, 240px"
                    loading="lazy"
  />
                </div>
                <h3 className="font-montserrat text-base font-medium text-gray-900">
                  {service.title}
                </h3>
              
                
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

export default ServicesSection;
