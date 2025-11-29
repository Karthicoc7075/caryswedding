import React,{useState,useEffect, useRef } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import Image from 'next/image'


function projects() {
        const [projects, setProjects] = useState([]);
        const [selectedProject, setSelectedProject] = useState(null);
        const [modelOpen, setModelOpen] = useState(false);
        const [fullscreenImage, setFullscreenImage] = useState(null);
        const sliderRef = useRef(null);
     const [currentIndex, setCurrentIndex] = useState(0);
   const [resumeTimeout, setResumeTimeout] = useState(null);

    const RESUME_DELAY = 1000;
    const [isPaused, setIsPaused] = useState(false);
    
    const itemsPerView = 1;
    const itemWidth = 240;
    const gap = 16;
    const totalItems = projects.length;
    const maxIndex = totalItems - 1;

   // Auto-scroll effect - pauses when isPaused is true
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev >= maxIndex) {
                    return 0;
                }
                return prev + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [maxIndex, isPaused]);

    // Clean up timeout on unmount
    useEffect(() => {
        return () => {
            if (resumeTimeout) {
                clearTimeout(resumeTimeout);
            }
        };
    }, [resumeTimeout]);

    const handleMouseEnter = () => {
        // Clear any existing resume timeout
        if (resumeTimeout) {
            clearTimeout(resumeTimeout);
            setResumeTimeout(null);
        }
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        // Set a timeout before resuming auto-scroll
        const timeout = setTimeout(() => {
            setIsPaused(false);
        }, RESUME_DELAY);
        setResumeTimeout(timeout);
    };

   
    const scrollLeft = () => {
        setCurrentIndex((prev) => {
            if (prev === 0) {
                return maxIndex;
            }
            return Math.max(0, prev - itemsPerView);
        });
    };

    const scrollRight = () => {
        setCurrentIndex((prev) => {
            if (prev >= maxIndex) {
                return 0;
            }
            return Math.min(maxIndex, prev + itemsPerView);
        });
    };

const findWidth = window.innerWidth;
    console.log('Window width:', findWidth);

    const projectsData = findWidth < 640 ? [...projects] : [...projects, ...projects];
 
   
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/data'); // Added leading slash
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setProjects(data.works);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };
  
  fetchProjects();
}, []); 


  return (
    <section id="package" className="relative py-16  ">
      <div className="relative text-5xl font-bold font-fraunces text-center  text-[#B084E1]">
        <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: .8 }}
        className='relative z-12'>Projects</motion.h2>
      </div>


               <div 
            className="relative max-w-6xl mx-auto px-12"
            onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
        >
            <button
                onClick={scrollLeft}
                className="absolute left-[26px] top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-2xl p-3 shadow-md transition-all"
                aria-label="Scroll left"
            >
                <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div className="relative overflow-hidden mt-14">
                <motion.div
                    className="flex gap-4"
                    animate={{
                        x: -(currentIndex * (itemWidth + gap)),
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                    {projectsData.map((project, index) => (
<motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    key={index}
    className="relative bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0 w-60 cursor-pointer group"
    onClick={() => {
        setSelectedProject(project);
        setModelOpen(true);
    }}
>
    <div className="relative w-full h-[300px] overflow-hidden">
        <Image
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            fill
        />
    </div>
    <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]"></span>
    <div className="absolute bottom-0 left-0 right-0 p-4 font-montserrat z-[11] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <h3 className="text-md font-semibold text-white transition-all duration-300 group-hover:text-lg">
            {project.title}
        </h3>
        <h4 className="text-gray-300 text-sm font-bold transition-colors duration-300 group-hover:text-white">
            {project.images.length} Photos
        </h4>
    </div>
</motion.div>
                    ))}
                </motion.div>

              
            </div>

            <button
                onClick={scrollRight}
                 onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute right-[26px] top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-2xl p-3 shadow-md transition-all"
                aria-label="Scroll right"
            >
                <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>

<AnimatePresence>
  {modelOpen && selectedProject && (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/50 z-[1001]"
        onClick={() => { setModelOpen(false); setSelectedProject(null); }}
      />
      
      <div className="fixed inset-0 flex items-center justify-center z-[1002] p-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden pointer-events-auto"
        >
          <div className='flex justify-between items-center p-4 md:p-6 border-b-2 flex-shrink-0 min-w-0'>
            <div className='flex flex-col font-montserrat'>
              <h3 className="text-xl font-bold text-black">
                {selectedProject.title}
              </h3>
              <h4 className="text-gray-500 text-md font-bold">
                {selectedProject.images.length} Photos
              </h4>
            </div>
           
            <button
              className="text-gray-600 hover:text-gray-800 flex-shrink-0 ml-4"
              aria-label="Close modal"
              onClick={() => { setModelOpen(false); setSelectedProject(null); }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="overflow-y-auto flex-1 min-w-0">
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {selectedProject.images.map((imageUrl, index) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ delay: index * 0.1,duration: 0.4 }}       
                    key={imageUrl} 
                    className="relative w-[230px] h-[230px] shadow-md rounded-lg overflow-hidden cursor-pointer "
                    onClick={() => setFullscreenImage({ url: imageUrl, index })}
                  >
                    <Image
                      src={imageUrl}
                      alt={`Project Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>


      {fullscreenImage && (
        <div className="fixed inset-0 bg-black z-[1003] flex items-center justify-center">
      
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-[1005] bg-black/50 rounded-full p-2"
            aria-label="Close fullscreen"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

       
          {fullscreenImage.index > 0 && (
            <button
              onClick={() => setFullscreenImage({ 
                url: selectedProject.images[fullscreenImage.index - 1], 
                index: fullscreenImage.index - 1 
              })}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[1005] bg-black/50 rounded-full p-3"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

     
          {fullscreenImage.index < selectedProject.images.length - 1 && (
            <button
              onClick={() => setFullscreenImage({ 
                url: selectedProject.images[fullscreenImage.index + 1], 
                index: fullscreenImage.index + 1 
              })}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[1005] bg-black/50 rounded-full p-3"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

        
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full z-[1005]">
            {fullscreenImage.index + 1} / {selectedProject.images.length}
          </div>

        
          <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6,  }}
          className="relative w-full h-full p-8 flex items-center justify-center">
            <Image
              src={fullscreenImage.url}
              alt={`Fullscreen Image ${fullscreenImage.index + 1}`}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      )}
    </>
        )
    }
</AnimatePresence>
    </section>
  )
}

export default projects