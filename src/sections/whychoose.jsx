import { useInView,motion, animate } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
const Whychoose = React.memo(({ isMobile }  ) => {

const ref = useRef(null);
  const designCountRef = useRef(null);
  const satisfactionRateRef = useRef(null);
 const text ="Trusted"
 const title = ["Why" ,"Choose", "Us"]
 const desc = ["Not", "just", "a", "Planner." ,"A", "Partner."]
const isInView = useInView(ref, { once: true, margin: "-100px" }); 
  useEffect(() => {

    const designCountNode = designCountRef.current;

    if(!isInView || !designCountNode) return;

    const controls = animate(0, 300, {
      duration: 2,
      delay: .2,
      onUpdate(value) {
        designCountNode.textContent = `${Math.round(value).toLocaleString()}+`; 
      },
    });

    return () => controls.stop();

   
  },[isInView]);

  useEffect(() => {

    const satisfactionRateNode = satisfactionRateRef.current;
    if(!isInView || !satisfactionRateNode) return;

    const controls = animate(0, 99, {
      duration: 2,
      delay: .4,
      onUpdate(value) {
        satisfactionRateNode.textContent = `${Math.round(value)}%`; 
      },
    });

    return () => controls.stop();
  }, [isInView]);

  return (
    <section className="relative p-12 px-8  flex items-center justify-center bg-[#B084E1] w-full ">

<div className="absolute top-[-60px]  md:top-[-80px] w-full h-16 sm:h-20 md:h-40 text-[#B084E1] z-2 overflow-hidden">  
    <div className="wave-top absolute inset-0 w-[200%] animate-wave">
      <svg className="absolute left-0 top-0 w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 151" fill="none" preserveAspectRatio="none">
        <path d="M0.775391 150.25C0.775391 150.25 0.775391 68.4443 0.775391 68.3292C0.775391 68.2849 13.9613 68.4047 21.028 67.4305C37.2691 65.199 56.9904 59.558 71.2921 51.6234C85.5938 43.6888 98.3458 35.1875 113.568 30.9369C132.307 25.7032 152.701 26.8722 170.722 34.2842C173.423 35.3912 176.089 36.569 178.745 37.7822C182.279 39.4116 185.777 41.103 189.248 42.8476C189.416 42.9361 189.593 43.0158 189.762 43.1044C190.426 43.4409 191.09 43.7774 191.754 44.105C203.435 50.0117 215.071 56.1043 227.309 60.7889C261.589 73.9305 296.311 75.1703 330.582 65.4912C365.004 55.9095 399.133 35.4886 433.262 22.6215C467.392 9.74553 501.512 4.42335 535.641 9.03709C583.258 15.4751 625.206 40.9436 670.086 56.2549C715.081 71.6015 758.048 70.6717 801.414 49.9231C831.328 35.6037 860.401 14.1822 893.521 15.7496C924.205 17.2108 949.904 38.1276 977.648 51.3135C1002.67 63.2065 1031.02 69.0423 1058.4 64.8093C1122.3 54.9177 1169.79 -5.30889 1237.49 0.606611C1296.87 5.79596 1345.3 46.195 1401.41 62.312C1413.19 65.6949 1425.33 67.8733 1437.6 68.2541C1437.76 68.2541 1441.49 68.3641 1441.49 68.3287V150.249L0.775391 150.25Z" fill="currentColor"></path>
      </svg>
      <svg className="absolute left-[calc(50%-2px)] top-0 w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 151" fill="none" preserveAspectRatio="none">
        <path d="M0.775391 150.25C0.775391 150.25 0.775391 68.4443 0.775391 68.3292C0.775391 68.2849 13.9613 68.4047 21.028 67.4305C37.2691 65.199 56.9904 59.558 71.2921 51.6234C85.5938 43.6888 98.3458 35.1875 113.568 30.9369C132.307 25.7032 152.701 26.8722 170.722 34.2842C173.423 35.3912 176.089 36.569 178.745 37.7822C182.279 39.4116 185.777 41.103 189.248 42.8476C189.416 42.9361 189.593 43.0158 189.762 43.1044C190.426 43.4409 191.09 43.7774 191.754 44.105C203.435 50.0117 215.071 56.1043 227.309 60.7889C261.589 73.9305 296.311 75.1703 330.582 65.4912C365.004 55.9095 399.133 35.4886 433.262 22.6215C467.392 9.74553 501.512 4.42335 535.641 9.03709C583.258 15.4751 625.206 40.9436 670.086 56.2549C715.081 71.6015 758.048 70.6717 801.414 49.9231C831.328 35.6037 860.401 14.1822 893.521 15.7496C924.205 17.2108 949.904 38.1276 977.648 51.3135C1002.67 63.2065 1031.02 69.0423 1058.4 64.8093C1122.3 54.9177 1169.79 -5.30889 1237.49 0.606611C1296.87 5.79596 1345.3 46.195 1401.41 62.312C1413.19 65.6949 1425.33 67.8733 1437.6 68.2541C1437.76 68.2541 1441.49 68.3641 1441.49 68.3287V150.249L0.775391 150.25Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
<div className="absolute bottom-[-60px] md:bottom-[-80px] w-full h-16 sm:h-20. md:h-40  left-0 right-0 text-[#B084E1]  overflow-hidden">
    <div className="wave-bottom absolute inset-0 w-[200%] animate-wave-reverse">
      <svg className="absolute left-0 top-0 w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 151" fill="none" preserveAspectRatio="none">
        <path d="M0.775391 0.403137C0.775391 0.403137 0.775391 82.2085 0.775391 82.3236C0.775391 82.3679 13.9613 82.2482 21.028 83.2223C37.2691 85.4539 56.9904 91.0949 71.2921 99.0294C85.5938 106.964 98.3458 115.465 113.568 119.716C132.307 124.95 152.701 123.781 170.722 116.369C173.423 115.262 176.089 114.084 178.745 112.871C182.279 111.241 185.777 109.55 189.248 107.805C189.416 107.717 189.593 107.637 189.762 107.548C190.426 107.212 191.09 106.875 191.754 106.548C203.435 100.641 215.071 94.5485 227.309 89.8639C261.589 76.7223 296.311 75.4825 330.582 85.1616C365.004 94.7433 399.133 115.164 433.262 128.031C467.392 140.907 501.512 146.229 535.641 141.616C583.258 135.178 625.206 109.709 670.086 94.398C715.081 79.0513 758.048 79.9811 801.414 100.73C831.328 115.049 860.401 136.471 893.521 134.903C924.205 133.442 949.904 112.525 977.648 99.3394C1002.67 87.4464 1031.02 81.6106 1058.4 85.8435C1122.3 95.7352 1169.79 155.962 1237.49 150.046C1296.87 144.857 1345.3 104.458 1401.41 88.3408C1413.19 84.958 1425.33 82.7795 1437.6 82.3987C1437.76 82.3987 1441.49 82.2887 1441.49 82.3241V0.403564L0.775391 0.403137Z" fill="currentColor"></path>
      </svg>
      <svg className="absolute left-[calc(50%-2px)] top-0 w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 151" fill="none" preserveAspectRatio="none">
        <path d="M0.775391 0.403137C0.775391 0.403137 0.775391 82.2085 0.775391 82.3236C0.775391 82.3679 13.9613 82.2482 21.028 83.2223C37.2691 85.4539 56.9904 91.0949 71.2921 99.0294C85.5938 106.964 98.3458 115.465 113.568 119.716C132.307 124.95 152.701 123.781 170.722 116.369C173.423 115.262 176.089 114.084 178.745 112.871C182.279 111.241 185.777 109.55 189.248 107.805C189.416 107.717 189.593 107.637 189.762 107.548C190.426 107.212 191.09 106.875 191.754 106.548C203.435 100.641 215.071 94.5485 227.309 89.8639C261.589 76.7223 296.311 75.4825 330.582 85.1616C365.004 94.7433 399.133 115.164 433.262 128.031C467.392 140.907 501.512 146.229 535.641 141.616C583.258 135.178 625.206 109.709 670.086 94.398C715.081 79.0513 758.048 79.9811 801.414 100.73C831.328 115.049 860.401 136.471 893.521 134.903C924.205 133.442 949.904 112.525 977.648 99.3394C1002.67 87.4464 1031.02 81.6106 1058.4 85.8435C1122.3 95.7352 1169.79 155.962 1237.49 150.046C1296.87 144.857 1345.3 104.458 1401.41 88.3408C1413.19 84.958 1425.33 82.7795 1437.6 82.3987C1437.76 82.3987 1441.49 82.2887 1441.49 82.3241V0.403564L0.775391 0.403137Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
      <div className="max-w-[1200px] w-full mx-auto py-4 ">

        <div className="relative text-5xl font-fraunces font-bold text-white text-center z-10 mb-[2.4rem] " >
          {title.map((word, index) => (
            <motion.h2 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay:isMobile ? 0.2 + index * 0.2 : 0.2 + index * 0.2 }}
            className="inline-block mx-2"
            >
              {word}
            </motion.h2>
          ))}
        </div>
        <div className="text-center text-white">

    {
  desc.map((word, index) => {
    return (
      <motion.h4
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay:isMobile ? .8 + index * 0.1 : .6 + index * 0.1 }}
        className="inline-block mx-2 font-dancing-script text-5xl font-extrabold md:text-4xl mb-4 text-[#fdfdfd]"
      >
        {word}
      </motion.h4>
    );
  })
}

          <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: isMobile ? .8 : 1.2 }}
          className="font-montserrat text-lg mb-8 text-[#fdfdfd]">
            A wedding isn’t about putting on a show. It’s about what feels right for you. Who’s in the room. What kind of love you’re celebrating. We get that. And we’ll help you plan something that feels as honest, warm, and personal as it should.
          </motion.p>
          <div className="flex flex-wrap justify-between md:flex-row flex-col items-center">
            <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: isMobile ? 1 : 1.4 }}
            className="flex-1 basis-[30%] m-4 p-4 rounded-[8px] text-center max-w-[400px] md:max-w-none">
              <h3 ref={designCountRef} className="font-montserrat text-5xl font-bold mb-2">300+</h3>
              <p className="text-[1.4rem] font-normal font-fraunces uppercase text-[#fdfdfd]">EVENTS DESIGNED</p>
            </motion.div>
            <motion.div 
             initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: isMobile ? 1: 1.6 }}
            className="flex-1 basis-[30%] m-4 p-4 rounded-[8px] text-center max-w-[400px] md:max-w-none">
              <h3 ref={satisfactionRateRef} className="font-montserrat text-5xl font-bold mb-2">99%</h3>
              <p className="text-[1.4rem] font-normal font-fraunces uppercase text-[#fdfdfd]">Client Satisfaction Rate</p>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: isMobile ? 1 : 1.8}}
            className="flex-1 basis-[30%] m-4 p-4 rounded-[8px] text-center max-w-[400px] md:max-w-none">
              <div className="flex justify-center"> 
                 {text.split("").map((char, index) => (
               <motion.h3 
               initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay:isMobile ? 1 + index * 0.1 : 1.7 + index * 0.1 }}
               className="font-montserrat text-5xl font-bold mb-2" key={index}>{char}</motion.h3>
              ))}
              </div>
              <p className="text-[1.4rem] font-normal font-fraunces uppercase text-[#fdfdfd]">Bridal Team</p>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
});

export default Whychoose;