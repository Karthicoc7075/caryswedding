
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Highlight = React.memo(() => {
  return (
    <div className="relative flex items-end w-full h-[600px] overflow-hidden md:h-[600px] sm:h-[400px]">
      {/* Background Image */}
      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: .6 }}
      className="absolute inset-0 -z-10">
        <Image
          src={'/images/highlight-background.webp'}
          alt="Wedding celebration highlight with traditional decor"
          fill
          className="w-screen h-[100vh] object-cover will-change-auto"
          sizes="100vw"
          loading="lazy"
        />
      </motion.div>


     <motion.span
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: .4, delay: 0.5 }}
     className="absolute left-0 right-0 top-80 bottom-[-20%] bg-black/80 blur-[80px] z-10 "></motion.span>


      <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .4, delay: .8 }}
      className="relative w-full p-12 z-20 sm:p-8">
        <h2 className="relative font-lora text-5xl font-bold text-white z-20 md::ml-16 max-w-xs md:text-6xl md:ml-16 md:max-w-sm sm:text-4xl sm:ml-4 sm:max-w-[300px]">
          Love & celebration, made special.
        </h2>
      </motion.div>
    </div>
  );
});

Highlight.displayName = 'Highlight';

export default Highlight;