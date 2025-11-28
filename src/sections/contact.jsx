'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import { collection, addDoc } from 'firebase/firestore';
import  db  from '@/lib/firebase'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
const Contact = React.memo(({ isMobile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    district: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.district ||
      !formData.message
    ) {
      toast.error('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'Clients'), {
        ...formData,
        timestamp: new Date(),
        status: 'new',
      });

      const result = await emailjs.send(
        'service_v1vu43h',
        'template_yda97um',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_district: formData.district,
          message: formData.message,
        },
        '0tcKlvlqB5B7MeM5I',
      );

      console.log(result.text);

  

      console.log('Document written with ID: ', docRef.id);

      setFormData({
        name: '',
        email: '',
        phone: '',
        district: '',
        message: '',
      });

      toast.success('Thank you! Your message has been sent successfully.');
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative flex justify-center py-16 px-8 bg-[#F0EEFE]">
      <div className="flex flex-col items-center gap-8  bg-white p-8 md:p-12 rounded-3xl  max-w-4xl mx-auto w-full">
        {/* Heading */}
        <div className="text-center max-w-[900px]">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold text-[#B084E1] font-fraunces mb-4">Connect with Us Now</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl font-montserrat text-[#c7a4f3]">We're just a message away from bringing your dream event to life. Reach out today — let's start planning something unforgettable together.</motion.p>
        </div>

        {/* Contact Group */}
        <div className="grid grid-cols-1   w-full items-center">

          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center    md:flex w-full">
            <Image
              src="/images/contact-img.webp" 
              alt="wedding planner discussing with a couple"
              width={440}
              height={450}
              className=" md:block   " 
               loading="lazy"
            />
          </motion.div>

   
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5 w-full">
           <div className='flex gap-6 sm:gap-20 w-full flex-col sm:flex-row'>
             <div className="w-full">
              <motion.label 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              htmlFor="name" className="block text-md font-fraunces font-medium text-gray-500 mb-2">
                Name:
              </motion.label>
              <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full p-4 border rounded-lg  border-[#B084E1] bg-transparent text-[#9b63c9] placeholder:text-[#9b63c9]  text-base font-fraunces   outline-none   focus:border-[#B084E1]"
              
              />
            </div>
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay:isMobile ? 0.4 : 0.6 }}
            className="w-full">
              <label htmlFor="name" className="block text-md font-fraunces font-medium text-gray-500 mb-2">
                Email:
              </label>
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: isMobile ? 0.4 : 0.8 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-4 border rounded-lg  border-[#B084E1] bg-transparent text-[#9b63c9] placeholder:text-[#9b63c9]  text-base font-fraunces   outline-none focus:border-[#B084E1]"
              />
            </motion.div>
           </div>
           <div className='flex gap-6 sm:gap-20 w-full flex-col sm:flex-row'>

              <div className="w-full">
              <motion.label 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? .4 : 1.0 }}
              htmlFor="name" className="block text-md font-fraunces font-medium text-gray-500 mb-2">
                Phone:
              </motion.label>
              <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? .5 : 1.2 }}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full p-4 border rounded-lg  border-[#B084E1] bg-transparent text-[#9b63c9] placeholder:text-[#9b63c9]  text-base font-fraunces   outline-none focus:border-[#B084E1]"
              
              />
            </div>
            <div className="w-full">
              <motion.label
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? .6: 1.4 }}
              htmlFor="name" className="block text-md font-fraunces font-medium text-gray-500 mb-2">
                District:
              </motion.label>
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: isMobile ? .7 : 1.6 }}
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
                placeholder="Enter your district"
                className="w-full p-4 border rounded-lg  border-[#B084E1] bg-transparent text-[#9b63c9] placeholder:text-[#9b63c9]  text-base font-fraunces   outline-none focus:border-[#B084E1]"
              />
            </div>
            </div>
            <div className="w-full">
              <motion.label
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? 0.8 : 1.6 }}
              htmlFor="name" className="block text-md font-fraunces font-medium text-gray-500 mb-2">
               Message
              </motion.label>
              <motion.textarea
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: isMobile ? 1 : 1.8 }}
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message"
                className="w-full p-4 border rounded-lg  border-[#B084E1] bg-transparent text-[#9b63c9] placeholder:text-[#9b63c9]  text-base font-fraunces   outline-none focus:border-[#B084E1]"
              />
            </div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay:isMobile ? 1 : 1.8 }}
              type="submit"
              className="mx-auto font-semibold text-md max-w-[180px] bg-[#B084E1] text-white px-6 py-4 rounded-lg  font-medium font-fraunces cursor-pointer transition-colors hover:bg-[#9b63c9] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;