import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

const About = React.memo(() => {
  const MotionImage = motion(Image);
  return (
    <section id="about" className="relative py-32 sm:px-8  flex flex-col items-center justify-center w-full z-[1]">
    
      <div className="flex items-center justify-center flex-col gap-8 max-w-[1440px] w-full overflow-hidden mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-5xl font-fraunces font-bold text-center mb-8 text-[#B084E1] ">
          <h2>About Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 my-28  md:mb-24 md:mt-10 lg:grid-cols-[1fr_2fr] xl:grid-cols-[25%_50%] items-center justify-center gap-4 z-[2] text-center lg:gap-8 ">
          <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8, delay:.4}}
          className="relative  w-[300px] mx-auto lg:mx-0 mb-4 lg:mb-0 ">
           
              <Image
                src={'/images/about-image.webp'}
                alt="Balaji Ragupathi - Event Director at Carys Wedding"
                width={250}
                height={250}
                className="relative z-10 w-[200px] h-[260px]  sm:w-[220px] sm:h-[290px]  rounded-r-[100px] object-cover mx-auto"
                 loading="lazy"
              />

            <MotionImage
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 70 }}
            transition={{ duration: .8, delay: .6 }}
            width={380}
            height={380}
            className="absolute top-[-32%] left-[-2%] w-[320px] sm:w-[380px] h-auto object-cover mb-6 rotate-[70deg]" src={'/images/about-design.webp'} alt="Design Image" />


            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: .6 }}
            className="text-2xl font-fraunces font-bold mt-4 text-[#333] text-center ">Balaji Ragupathi</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: .8 }}
            className="text-base font-[300] font-wix font-medium text-[#4a4a4a] mt-2 text-center ">Event Director</motion.p>
          </motion.div>
          <div className="text-left lg:text-left text-center grid gap-8 px-4 sm:px-0">
            <motion.p 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8, delay: .6 }}
            className="text-lg font-[300] font-wix text-[#555] leading-[1.6]">Weddings are not just events—they are stories of love, traditions, and celebrations that last a lifetime. At Cary’s Wedding Event, we specialize in bringing those stories to life with elegance, creativity, and flawless execution.</motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, delay: .7 }}
              className="text-lg font-[300] font-wix text-[#555] leading-[1.6]">We are a passionate team dedicated to crafting weddings that reflect your unique journey. From vibrant haldi ceremonies to soulful chenda melam processions, and from royal stage décor to unforgettable photography—we transform every moment into a lasting memory.</motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, delay: .8 }}
              className="text-lg font-[300] font-wix text-[#555] leading-[1.6]">With expertise in catering, photography, decoration, entertainment, and complete wedding management, we ensure that every detail is taken care of. Our goal is simple: to make your big day stress-free, beautiful, and truly unforgettable.</motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, delay: .9 }}
              className="text-lg font-[300] font-wix text-[#555] leading-[1.6]">At Cary’s Wedding Event, we don’t just plan weddings—we create experiences that your family and friends will cherish forever.</motion.p>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About