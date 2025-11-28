// components/PackageItem.jsx
import React,{ useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PackageItem = React.memo(({ singlePackage }) => {
  const isEven = singlePackage.id % 2 === 0;
  const headerLayoutClass = !isEven ? 'flex-row-reverse' : 'flex-row';
const MotionImage = useMemo(() => motion(Image), []);
  

  const packageNameBg = singlePackage.id === 2 ? 'bg-[#FFA8AA]' : singlePackage.id === 3 ? 'bg-[#82DE95]' : 'bg-[#AFA8FF]';
  const packageBg = singlePackage.id === 2 ? 'bg-[#FF4C5122]' : singlePackage.id === 3 ? 'bg-[#28A74522]' : 'bg-[#6C63FF22]';
  const priceFilter = singlePackage.id === 2 ? 'hue-[100deg] brightness-125 saturate-[1.8]' : singlePackage.id === 3 ? 'hue-[230deg] brightness-125 saturate-[0.8]' : '';

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: .2 }}
    className={`relative my-6 px-6 py-12 ${packageBg} rounded-[1rem] shadow-[0px_4px_15px_-1px_rgba(0,0,0,0.1)] w-full`}>
      <div className={`flex  flex-col items-center gap-16 justify-between ${headerLayoutClass} mb-14 `}>
        <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: .4 }}
        className="flex justify-center items-center m-5">
          <div
            className={`relative w-[190px] h-[190px] flex items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:scale-110   md:w-[220px] md:h-[220px]`}
            style={{
              backgroundImage: `url(/images/design-${singlePackage.id}.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 rounded-full flex items-center justify-center flex-col `}> ">
              <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: .5 }}
              className=" text-xl md:text-2xl font-bold text-white font-montserrat leading-[1] m-0 ">₹ {singlePackage.price}</motion.h3>
              <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: .6 }}
              className="text-md font-medium text-white/90 font-montserrat mt-[5px]">Starting from</motion.span>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: .7 }}
        className={`${packageNameBg}  text-white px-8 py-6 flex justify-center items-center rounded-[1.2rem] shadow-[3px_2px_4px_-1px_rgba(0,0,0,0.1)] md:p-8`}>
          <h3 className=" font-semibold  font-lora m-0 text-2xl md:text-3xl">{singlePackage.name} Package</h3>
        </motion.div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-16 p-4  max-w-[1200px] w-full ">
          {singlePackage.services.map((service, idx) => (
            <div key={idx} className="flex items-center gap-[.8rem] md:gap-6">
              <div className="rounded-[30px] overflow-hidden flex-shrink-0">

                 <div
                
                 className='relative w-[120px] h-[120px]'>
                  <MotionImage
                   initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: .4 + idx * 0.1}}
                    src={service.image}
                    alt={service.alt} 
                   fill
                   loading='lazy'
                  className=" object-fit-cover rounded-[32px]"/>
    </div>
           
              </div>
              <div className="flex flex-col gap-[0.4rem]">
                <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: .6 + idx * 0.2 }}
                className="text-2xl font-semibold font-fraunces  text-gray-700">{service.title}</motion.h4>
                <div className="space-y-[0.2rem]">
                  {service.descPoints.map((point, i) => (
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: .8 + idx * 0.2 }}
                    key={i} className="text-base font-normal font-lora text-gray-600 m-0">{point}</motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center font-montserrat">
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        className="px-4 pt-12 text-center max-w-[800px] w-full">
          <p className='text-base font-normal text-gray-600 m-0'>{singlePackage.desc}</p>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default PackageItem;