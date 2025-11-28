import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Location = React.memo(() => {
  return (
    <section className="relative  px-8 pt-32 pb-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4 p-4 md:flex-row md:gap-16 "> 
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6,delay:0.8 }}
        className="flex-1 text-center my-20 mb-4 /62 max-w-[500px]">

        <h2 className='text-3xl font-semibold text-[#B084E1] font-lora mb-4' >We Serve All of Tamil Nadu</h2>
        <p className='text-lg text-[#B084E1] font-montserrat '  >From Chennai to Kanyakumari, our services cover every district, bringing reliability and quality wherever you are.</p>
        </motion.div>
 <motion.div 
  initial={{ opacity: 0, y: -100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="flex absolute top-0 left-0 right-0 z-10"
>
  <div className="w-full h-[120px] relative">
    <Image
      src="/images/flower.webp"
      layout="fill"
      objectFit="fill"
    />
  </div>
  <div className="w-full h-[120px] relative">
    <Image
      src="/images/flower.webp"
      layout="fill"
      objectFit="fill"
    />
  </div>
  <div className="w-full h-[120px] relative">
    <Image
      src="/images/flower.webp"
      alt="Flower"
      layout="fill"
      objectFit="fill"
    />
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: -100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  className="absolute top-[5%] right-[2%] w-[180px] md:w-[240px] h-auto"
>
  <Image
    src="/images/bell.webp"
    alt="Bell Right"
    width={240} // max width for md screen
    height={240}
    className="w-full h-auto"
  />
</motion.div>

<motion.div
  initial={{ opacity: 0, y: -100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="absolute top-[5%] left-[4%] w-[180px] md:w-[240px] h-auto"
>
  <Image
    src="/images/bell.webp"
    alt="Bell Left"
    width={240}
    height={240}
    className="w-full h-auto"
  />
</motion.div>

        <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6,delay:0.8 }}
        className=" relative w-[260px] h-[280px] md:w-[360px] md:h-[430px] ">
          <Image
            src={'/images/location.png'}
            fill
            className="object-cover "
             loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
});

export default Location;