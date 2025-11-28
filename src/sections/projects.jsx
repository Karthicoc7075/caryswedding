import React,{useState,useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


function projects() {
        const [projects, setProjects] = useState([]);
        const [selectedProject, setSelectedProject] = useState(null);
        const [modelOpen, setModelOpen] = useState(false);
        const [fullscreenImage, setFullscreenImage] = useState(null);
        const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };
        useEffect(() => {
           const fetchProjects = async () => {
             try {
               const response = await fetch('api/data');
               const data = await response.json();
               setProjects(data.works);
             } catch (error) {
               console.error('Error fetching projects:', error);
             } 
              };
           fetchProjects();
        },[])


  return (
    <section id="package" className="relative py-16  ">
      <div className="relative text-5xl font-bold font-fraunces text-center  text-[#B084E1]">
        <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: .8 }}
        className='relative z-12'>Projects</motion.h2>
      </div>



     <div className="relative max-w-6xl mx-auto px-12">
         
            <button
                onClick={scrollLeft}
                className="absolute left-[26px] top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70  rounded-2xl p-3 shadow-md transition-all"
                aria-label="Scroll left"
            >
                <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div
                ref={sliderRef}
                className="flex mt-14 gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0 w-60 snap-start"
                        onClick={() => {
                            setSelectedProject(project);
                            setModelOpen(true);
                        }}
                    >
                        <div className="relative w-full h-[300px]">
                            <Image
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                fill
                            />
                        </div>
                               <span className="absolute   inset-x-0 top-[76%] bottom-[-10%] bg-black/70 blur-[20px] z-1"></span>
                        <div className="absolute bottom-0 left-0 right-0 p-4 font-montserrat z-11">
                            <h3 className="text-md font-semibold text-white  ">
                                {project.title}
                            </h3>
                            <h4 className="text-gray-300 text-sm font-bold ">{project.images.length} Photos</h4>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={scrollRight}
                className="absolute right-[26px] top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70  rounded-2xl p-3 shadow-md transition-all"
                aria-label="Scroll right"
            >
                <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>  
                {
        modelOpen && selectedProject && (

    <>
      <div className="fixed inset-0 bg-black/50 z-[1001]"></div>
      
      <div className="fixed inset-0 flex items-center justify-center z-[1002] p-4">
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden">
          

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
                  <div 
                    key={index} 
                    className="relative w-full aspect-square shadow-md rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setFullscreenImage({ url: imageUrl, index })}
                  >
                    <Image
                      src={imageUrl}
                      alt={`Project Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
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

        
          <div className="relative w-full h-full p-8 flex items-center justify-center">
            <Image
              src={fullscreenImage.url}
              alt={`Fullscreen Image ${fullscreenImage.index + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
        )
    }

    </section>
  )
}

export default projects