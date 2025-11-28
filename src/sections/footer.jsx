// components/Footer.jsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Footer = React.memo(() => {
  return (
    <section className="relative bg-[#ffffff] mt-16  text-gray-700 font-lora py-6">
      <div className="absolute top-[-60px] md:top-[-90px] w-full h-16 sm:h-20 md:h-40 text-[#ffffff] z-2 overflow-hidden ">
    <div className="wave-top absolute inset-0 w-[200%] animate-wave">
      <svg className="absolute left-0 top-0 w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 151" fill="none" preserveAspectRatio="none">
        <path d="M0.775391 150.25C0.775391 150.25 0.775391 68.4443 0.775391 68.3292C0.775391 68.2849 13.9613 68.4047 21.028 67.4305C37.2691 65.199 56.9904 59.558 71.2921 51.6234C85.5938 43.6888 98.3458 35.1875 113.568 30.9369C132.307 25.7032 152.701 26.8722 170.722 34.2842C173.423 35.3912 176.089 36.569 178.745 37.7822C182.279 39.4116 185.777 41.103 189.248 42.8476C189.416 42.9361 189.593 43.0158 189.762 43.1044C190.426 43.4409 191.09 43.7774 191.754 44.105C203.435 50.0117 215.071 56.1043 227.309 60.7889C261.589 73.9305 296.311 75.1703 330.582 65.4912C365.004 55.9095 399.133 35.4886 433.262 22.6215C467.392 9.74553 501.512 4.42335 535.641 9.03709C583.258 15.4751 625.206 40.9436 670.086 56.2549C715.081 71.6015 758.048 70.6717 801.414 49.9231C831.328 35.6037 860.401 14.1822 893.521 15.7496C924.205 17.2108 949.904 38.1276 977.648 51.3135C1002.67 63.2065 1031.02 69.0423 1058.4 64.8093C1122.3 54.9177 1169.79 -5.30889 1237.49 0.606611C1296.87 5.79596 1345.3 46.195 1401.41 62.312C1413.19 65.6949 1425.33 67.8733 1437.6 68.2541C1437.76 68.2541 1441.49 68.3641 1441.49 68.3287V150.249L0.775391 150.25Z" fill="currentColor"></path>
      </svg>
      <svg className="absolute left-[calc(50%-2px)] top-0 w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 151" fill="none" preserveAspectRatio="none">
        <path d="M0.775391 150.25C0.775391 150.25 0.775391 68.4443 0.775391 68.3292C0.775391 68.2849 13.9613 68.4047 21.028 67.4305C37.2691 65.199 56.9904 59.558 71.2921 51.6234C85.5938 43.6888 98.3458 35.1875 113.568 30.9369C132.307 25.7032 152.701 26.8722 170.722 34.2842C173.423 35.3912 176.089 36.569 178.745 37.7822C182.279 39.4116 185.777 41.103 189.248 42.8476C189.416 42.9361 189.593 43.0158 189.762 43.1044C190.426 43.4409 191.09 43.7774 191.754 44.105C203.435 50.0117 215.071 56.1043 227.309 60.7889C261.589 73.9305 296.311 75.1703 330.582 65.4912C365.004 55.9095 399.133 35.4886 433.262 22.6215C467.392 9.74553 501.512 4.42335 535.641 9.03709C583.258 15.4751 625.206 40.9436 670.086 56.2549C715.081 71.6015 758.048 70.6717 801.414 49.9231C831.328 35.6037 860.401 14.1822 893.521 15.7496C924.205 17.2108 949.904 38.1276 977.648 51.3135C1002.67 63.2065 1031.02 69.0423 1058.4 64.8093C1122.3 54.9177 1169.79 -5.30889 1237.49 0.606611C1296.87 5.79596 1345.3 46.195 1401.41 62.312C1413.19 65.6949 1425.33 67.8733 1437.6 68.2541C1437.76 68.2541 1441.49 68.3641 1441.49 68.3287V150.249L0.775391 150.25Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
      <div className="max-w-6xl mx-auto overflow-hidden px-8" >
        <div className="flex flex-wrap justify-between items-end gap-8 z-10 relative">
          {/* Footer Contact */}
         

          <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="flex flex-col gap-6 md:flex-1 min-w-[280px] mx-auto"> 
            <h2 className=" text-2xl font-bold text-gray-900 font-lora ">Head Office</h2>
            <div className="footer-item flex items-start gap-4">
              <Image src="/icons/location-icon.png" alt="Location icon" width={24} height={24} className="mt-1 flex-shrink-0" />
              <a
                href="https://www.google.com/maps?q=11.9341502,79.4892896&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b084e1] font-medium leading-relaxed no-underline hover:underline"
              >
                No 64 Chidhambaranar Street,<br />Lakshmi Nagar,<br />Villupuram, 605602
              </a>
            </div>
            <div className="footer-item flex items-start gap-4">
              <Image src="/icons/call-icon.png" alt="Call icon" width={24} height={24} className="mt-1 flex-shrink-0" />
              <div className="flex flex-col gap-2 ">
                <a href="tel:8122697732" className="tet-base  text-[#b084e1] font-medium no-underline hover:underline">+91 81226 97732</a>
                <a href="tel:9514441965" className="text-base text-[#b084e1] font-medium no-underline hover:underline">+91 95144 41965</a>
                <a href="tel:9514419941" className="text-base text-[#b084e1] font-medium no-underline hover:underline">+91 95144 19941</a>
              </div>
            </div>
            
            <div
            className="footer-item flex items-start gap-4">
              <Image src="/icons/mail-icon.png" alt="Mail icon" width={24} height={24} className="mt-1 flex-shrink-0" />
              <a
                href="mailto:carysweddingevent@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b084e1] font-medium leading-relaxed no-underline hover:underline"
              >
                carysweddingevent@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, delay: .4 }}
          className="flex flex-col items-center flex-1 min-w-[300px]">
            <Image src="/images/logo.png" alt="Carys Wedding" width={120} height={150} className="mb-4" />
            <h4 className="font-montserrat text-center text-base font-semibold text-[#b084e1] leading-tight">
              LUXURY WEDDING<br />PLANNERS & CONSULTANTS
            </h4>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, delay: .8 }}
          className="flex flex-col  items-center text-center flex-1 min-w-[280px]">

          <Image src="/images/footer.webp" alt="wedding couple  "  width={240} height={200} className="object-cover mb-6" />

            
            <div className="flex gap-4 mb-4">
              <a
                href="https://wa.me/9514419941?text=Hi, I'm interested in your wedding planning services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mx-1"
              >
                <Image src="/icons/Whatsapp Icon (1).png" alt="WhatsApp icon" width={28} height={28} className="transition-transform hover:scale-110" />
              </a>
              <a
                href="https://www.instagram.com/caryswedding_event"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mx-1"
              >
                <Image src="/icons/insta-icon.png" alt="Instagram icon" width={28} height={28} className="transition-transform hover:scale-110" />
              </a>
              <a
                href="mailto:carysweddingevent@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mx-1"
              >
                <Image src="/icons/Email Icon.png" alt="Mail icon" width={28} height={28} className="transition-transform hover:scale-110" />
              </a>
            </div>
            <p className="text-md font-medium text-gray-500">© 2025 Caryswedding. All rights reserved.</p>
          </motion.div>
        </div>
      </div>

     <motion.div
      whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
     className="whatsapp-btn group">
  <a target="_blank"
  href={`https://wa.me/9514419941?text=Hi, I\'m interested in your wedding planning services.`}
  rel="noopener noreferrer">
    <Image
      src={'/icons/Whatsapp Icon.png'}
      width={40}
      height={40}
      quality={100}
      alt="WhatsApp icon"
      className="w-8 h-8 md:w-8  transition-transform duration-300 "
    />
  </a>
</motion.div>

    </section>
  );
});

export default Footer;