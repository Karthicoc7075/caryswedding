'use client'; // For React.memo if used

import React,{useState,useRef, useEffect} from 'react';
import PackageItem from '@/components/packageItem'; // Adjust path as needed
import { motion } from 'framer-motion';
import Image from 'next/image';
 const packages = [
        {
            id: 1,
            name: 'Standard',
            desc: 'We offer essential wedding services for up to 500 guests, including delicious catering, elegant décor, professional photography, and lively entertainment — all tailored to your needs. Our team is here to guide you through every detail, so feel free to discuss your vision with us and let’s create a celebration to remember.',
            price: '2 Lakh"s',
             bg: 'from-[#afa8ff] to-[#6661b9]',
            text: 'text-[#afa8ff]',
            services: [
                {
                    title: 'High Class Food',
                    descPoints:[
                        'Food for 500 people',
                    ],
                    image: '/images/categ-1.webp',
                    alt: 'High Class Food Service at Carys Wedding'
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine'
                    ],
                    image: '/images/categ-2.webp',
                    alt: 'DJ Setup Service at Carys Wedding'
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: '/images/categ-3.webp',
                },
                {
                    title: 'Photo & Video',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album ( upto 300 Photos )'
                    ],
                    image: '/images/categ-4.webp',
                    alt: 'Photo & Video Service at Carys Wedding'
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream ( 300 Members )'
                    ],
                    image: '/images/categ-5.webp',
                    alt: 'Snacks Counter Service at Carys Wedding'
                }
            ],
        },
         {
            id: 2,
            name: 'Premium',
            desc: 'We offer essential wedding services for up to 700 guests, including delicious catering, elegant décor, professional photography, and lively entertainment — all tailored to your needs. Our team is here to guide you through every detail, so feel free to discuss your vision with us and let’s create a celebration to remember.',
            price: '4 Lakh"s',
             bg: 'from-[#ffa8aa] to-[#ca6b6e]',
            text: 'text-[#FFA8AA]',
            services: [
                {
                    title: 'High Class Food',
                    descPoints:[
                        'Food for 700 people',
                    ],
                    image: '/images/categ-1.webp',
                    alt: 'High Class Food Service at Carys Wedding'
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine',
                        'Dance Floor'
                    ],
                    image: '/images/categ-2.webp',
                    alt: 'DJ Setup Service at Carys Wedding'
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: '/images/categ-3.webp',
                    alt: 'Stage Decor Service at Carys Wedding'
                },
                {
                    title: 'Photo & Video',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album ( upto 300 Photos )',
                      'OutDoor shoot'
                    ],
                    image: '/images/categ-4.webp',
                    alt: 'Photo & Video Service at Carys Wedding'
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream & Welcome Drink ( 700 Members )'
                    ],
                    image: '/images/categ-5.webp',
                    alt: 'Snacks Counter Service at Carys Wedding'
                },
                {
                    title: 'Welcome Girls',
                    descPoints:[
                        'Warm welcome to the wedding'
                    ],
                    image: '/images/categ-6.webp',
                    alt: 'Welcome Girls Service at Carys Wedding'
                }
            ],
        },
         {
            id: 3,
            name: 'Elite',
            desc: 'We offer essential wedding services for up to 1000 guests, including delicious catering, elegant décor, professional photography, and lively entertainment — all tailored to your needs. Our team is here to guide you through every detail, so feel free to discuss your vision with us and let’s create a celebration to remember.',
            price: '6 Lakh"s',
             bg: 'from-[#82de95] to-[#49ad60]',
            text: 'text-[#82DE95]',
            services: [
                {
                    title: 'High Class Food',
                    descPoints:[
                        'Food for 1000 people',
                    ],
                    image: '/images/categ-1.webp',
                    alt: 'High Class Food Service at Carys Wedding'
                },
                {
                    title: 'DJ Setup',
                    descPoints:[
                       'Honey comb Theme  ',
                        'Smoke Machine',
                        'Dance Floor'
                    ],
                    image: '/images/categ-2.webp',
                    alt: 'DJ Setup Service at Carys Wedding'
                },
                {
                    title: 'Stage Decor',
                    descPoints:[
                        'Design your dream decor here',
                    ],
                    image: '/images/categ-3.webp',
                    alt: 'Stage Decor Service at Carys Wedding'
                },
                {
                    title: 'Photo & Video',
                    descPoints:[
                      'Traditional Photo & Video - 1',
                      'Wedding Album - 2 ( upto 300 Photos )'
                    ],
                    image: '/images/categ-4.webp',
                    alt: 'Photo & Video Service at Carys Wedding'
                },
                {
                    title: 'Snacks Counter',
                    descPoints:[
                        'Popcorn & Cotton Candy ( 2 hours )',
                        'Ice Cream & Welcome Drink ( 1000 Members )'
                    ],
                    image: '/images/categ-5.webp',
                    alt: 'Snacks Counter Service at Carys Wedding'
                },
                {
                    title: 'Welcome Girls',
                    descPoints:[
                        'Warm welcome to the wedding'
                    ],
                    image: '/images/categ-6.webp',
                    alt: 'Welcome Girls Service at Carys Wedding'
                },
                {
                    title: 'Wedding Dance',
                    descPoints:[
                        'Special Dance Performance'
                    ],
                    image: '/images/categ-7.webp',
                    alt: 'Wedding Dance Service at Carys Wedding'
                },
                {
                    title: 'Chenda Melam',
                    descPoints:[
                        'Grand welcome with Chenda Melam'
                    ],
                    image: '/images/categ-8.webp',
                    alt: 'Chenda Melam Service at Carys Wedding'
                }
            ],
        },

                         
            ]

const Packages = React.memo(() => {

    const [activeTab, setActiveTab] = React.useState('Standard');
const [indicatorStyle, setIndicatorStyle] = useState({});
  const buttonRefs = useRef([]);

  useEffect(() => {
    const activeIndex = packages.findIndex((p) => p.name === activeTab);
    const button = buttonRefs.current[activeIndex];
    if (button) {
      setIndicatorStyle({
        left: `${button.offsetLeft}px`,
        width: `${button.offsetWidth}px`,
      });
    }
  }, [activeTab, packages]);

  const activePackage = packages.find((p) => p.name === activeTab);
  return (
    <section id="package" className="relative py-16 overflow-hidden ">
      <div className="relative text-5xl font-bold font-fraunces text-center mt-24 text-[#B084E1]">
        <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: .8 }}
        className='relative z-12'>Our Packages</motion.h2>
      </div>
 <motion.div
  initial={{ opacity: 0, x: 100, rotate: -120 }}
  whileInView={{ opacity: 1, x: 0,  }}
  transition={{ duration: 0.4, delay: 0.4 }}
  className="absolute top-0 right-[-3%] z-10 w-[140px] sm:w-[200px] md:w-[300px] h-auto mb-6"
>
  <Image
    src="/images/package-design.webp"
    alt="Package Design Right"
    width={300}
    height={300}
    className="w-full h-auto object-cover"
  />
</motion.div>

{/* Left Image */}
<motion.div
  initial={{ opacity: 0, x: -100, rotate: 120 }}
  whileInView={{ opacity: 1, x: 0, }}
  transition={{ duration: 0.4, delay: 0.2 }}
  className="absolute top-0 left-[-3%] z-10 w-[140px] sm:w-[200px] md:w-[300px] h-auto mb-6"
>
  <Image
    src="/images/package-design.webp"
    alt="Package Design Left"
    width={300}
    height={300}
    className="w-full h-auto object-cover"
     loading="lazy"
  />
</motion.div>
<div className="flex justify-center mt-12 px-4">
  <motion.div
    initial={{ opacity: 0, scale:.6 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: 1 }}
    className="relative inline-flex gap-2 p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
    {packages.map((singlePackage, index) => (
      <button
        key={singlePackage.name}
        ref={(el) => (buttonRefs.current[index] = el)}
        onClick={() => setActiveTab(singlePackage.name)}
        className={`relative text-md md:text-lg font-semibold rounded-2xl px-8 h-12 overflow-hidden transition-transform duration-200 z-10 flex items-center justify-center ${
          activeTab === singlePackage.name
            ? 'text-white scale-105'
            : 'text-gray-600 hover:text-gray-800 hover:scale-102 hover:bg-white/5'
        }`}
      >
        <span className="relative z-10">{singlePackage.name}</span>
      </button>
    ))}
    {activePackage && (
      <div
        className={`absolute rounded-2xl transition-all duration-300 ease-in-out bg-gradient-to-r ${activePackage.bg}`}
        style={{
          ...indicatorStyle,
          top: '0.5rem',
          bottom: '0.5rem',
          zIndex: 0
        }}
      />
    )}
  </motion.div>
</div>
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto mt-8 px-4">

          <PackageItem  singlePackage={packages.find(pkg => pkg.name === activeTab)} />

      </div>
    </section>
  );
});

export default Packages;