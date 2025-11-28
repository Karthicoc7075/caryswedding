'use client'; // For client-side state and effects

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion,AnimatePresence } from 'framer-motion';

const Header = React.memo(({ scrollToSection, activeSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-[1000]">
           <motion.div initial={{ opacity: 0, y: -200 }}     
          animate={{ opacity: 1, y: 0 }}      
          transition={{ duration: .8 }}    
  className={`flex justify-between items-center px-8 py-8 w-full md:px-4 lg:px-8  ease-in-out
   md:mt-12
    ${scrolled ? 'h-[120px] bg-[#b7b7b751] backdrop-blur-md shadow-md' : 'h-[120px]'}
    md:h-[100px]
     md:bg-transparent md:backdrop-blur-none md:shadow-none
    max-w-6xl mx-auto`}
>

        <span className={`box w-[50px] h-[50px]  z-[1003]  md:hidden`} />


        <a  onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection(refs.heroRef);
                }} className="flex justify-center px-5  items-center bg-white w-[100px] h-[100px] rounded-full z-[1001] shadow-xl    md:w-[132px] md:h-[132px] md:rounded-xl">
          <Image
            src="/images/logo.webp"
            alt="Carys Wedding Logo"
            width="120"
            height="120"
            className="h-[88px] w-[88px] md:h-[120px] md:w-[120px] object-fit-cover"
             fetchpriority="high"
    
          />
        </a>

        <button className="menu-toggle text-white  md:hidden z-[1002]" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="16" y2="12" />
              <line x1="3" y1="18" x2="12" y2="18" />
            </svg>
          )}
        </button>

    <nav
  className={`fixed top-32 mx-6 flex justify-center items-center z-[1001] left-0 right-0
    md:relative md:top-0
    transition-all duration-[800ms] ease-in-out
    transform
    ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}
      md:translate-y-0 md:opacity-100 md:visible
  `}
>
          <ul className="nav-list flex  flex-col items-center gap-4 bg-white   py-8  w-full rounded-xl shadow-lg md:flex-row md:gap-8 md:px-6 md:py-4  lg:gap-16">
            <li className="nav-item">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection(refs.heroRef);
                }}
                className={`relative  font-readex text-base text-gray-700 text-[.9rem] overflow-hidden py-1 px-0  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-[#B084E1] after:bg-[length:200%_auto] after:rounded-lg after:transition-all after:duration-500 after:translate-x-[-100%] hover:text-[#B084E1] hover:after:translate-x-0 ${activeSection === 'hero' ? '!text-[#B084E1] after:!translate-x-0 ' : ''}`}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection(refs.aboutRef);
                }}
                className={`relative  font-readex text-base text-gray-700 text-[.9rem] overflow-hidden py-1 px-0  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-[#B084E1] after:bg-[length:200%_auto] after:rounded-lg after:transition-all after:duration-500 after:translate-x-[-100%] hover:text-[#B084E1] hover:after:translate-x-0 ${activeSection === 'about' ? '!text-[#B084E1] after:!translate-x-0 ' : ''}`}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection(refs.servicesRef);
                }}
                className={`relative  font-readex text-base text-gray-700 text-[.9rem] overflow-hidden py-1 px-0  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-[#B084E1] after:bg-[length:200%_auto] after:rounded-lg after:transition-all after:duration-500 after:translate-x-[-100%] hover:text-[#B084E1] hover:after:translate-x-0 ${activeSection === 'service' ? '!text-[#B084E1] after:!translate-x-0 ' : ''}`}
              >
                What we do
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection(refs.packagesRef);
                }}
                className={`relative  font-readex text-base text-gray-700 text-[.9rem] overflow-hidden py-1 px-0  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-[#B084E1] after:bg-[length:200%_auto] after:rounded-lg after:transition-all after:duration-500 after:translate-x-[-100%] hover:text-[#B084E1] hover:after:translate-x-0 ${activeSection === 'package' ? '!text-[#B084E1] after:!translate-x-0 ' : ''}`}
              >
                Package
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection(refs.contactRef);
                }}
                className={`contact-link flex items-center gap-1 bg-[#B084E1] text-white font-readex  font-light text-[.9rem] px-4 py-1  rounded-full transition-colors hover:bg-[#9b6fd8] ${activeSection === 'contact' ? 'active' : ''}`}
              >
                <Image src="/icons/send-icon.png" alt="Send Icon" width={14} height={14} className="send-icon w-[14px] h-[14px] md:w-[14px] md:h-[14px] xs:w-[12px] xs:h-[12px]" />
                <span>Get in Touch</span>
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
});


export default Header;