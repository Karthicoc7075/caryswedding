import React from 'react'
import { motion ,} from 'framer-motion';

const Hero = React.memo(() => {

  
  return (
    <section
      className="relative flex items-end  h-[100dvh] overflow-hidden transition-all duration-700"
    >
    <motion.div 
  className="absolute inset-0 -z-10 overflow-hidden"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <img 
    src={'/images/hero-background.webp'} 
    alt="Traditional wedding mandap decoration in TamilNadu" 
    className='w-full h-full object-cover'
    fetchPriority='high'
  />
</motion.div>

      <motion.div 
          initial={{ opacity: 0, y: 80 }}     
          animate={{ opacity: 1, y: 0 }}      
          transition={{ duration: 0.8,delay:.8 }}   
          className='flex justify-center items-center w-full '
          >
        <div
         className="relative w-full text-white text-center translate-y-[-20%]  md:translate-y-[-18%] px-4">
       <span className="absolute   inset-x-0 top-0 bottom-[-10%] bg-black/80 blur-[80px] z-10"></span>
         <h1 className="relative lg:text-[3rem]   leading-tight font-fraunces font-bold md:text-[2.8rem] text-[2.2rem]  mb-5 text-[#e7e7e7f1] z-20 ">
          You won’t feel like a client. <br /> You’ll feel like family.
        </h1>
        <p className="relative  text-[.9rem] md:text-[1.1rem] sm:text-[1rem] md:font-medium text-[#cccccc] max-w-[600px] mx-auto mb-10 z-20 font-montserrat px-0 md:px-2 sm:px-2 xs:px-1">
          We capture beautiful wedding moments that you’ll cherish forever. From smiles to celebrations, we turn your special day into lasting memories.
        </p>
        </div>
       
      </motion.div>
    </section>
  )
})

export default Hero