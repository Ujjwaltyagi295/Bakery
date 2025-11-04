'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { OurStorySection } from './OurStorySection';

export function SecondSection(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const products = [
    {
      name: 'Cupcakes',
      color: '#FFD4B3',
      image: '/category/cupcake.png'
    },
    {
      name: 'Peanut Cookies',
      color: '#FF9999',
      image: '/category/cookiebisc.png'
    },
    {
      name: 'Doughnuts',
      color: '#FFB380',
      image: '/category/doughnut.png'
    },
    {
      name: 'Pastries',
      color: '#A8D8EA',
      image: '/category/pastry.png'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const productCardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <div className="relative">
      <div ref={ref} className="min-h-screen bg-[#f8f7f6] pb-32 md:pb-20 relative">
        <div className="max-w-7xl mt-20 md:mt-32 mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-6">
          
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={headingVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#2e1e15] mb-2">
                <motion.span
                  className="inline-block border-4 text-3xl md:text-4xl -rotate-3 rounded-lg border-[#2e1e15] px-3 md:px-4 py-1.5 md:py-2 pb-3 md:pb-4 bg-[#FFD4B3] mr-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Explore
                </motion.span>
                Our Delicious
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2e1e15]">
                Creations
              </h2>
            </motion.div>
            
            <motion.div
              className="max-w-md"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={descriptionVariants}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-gray-800 title4 text-sm md:text-lg leading-relaxed">
                Since our first loaf came out of the oven, we've been dedicated to bringing you fresh, wholesome, and delicious baked goods.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="relative mt-8 md:mt-[8rem] px-2 md:px-12"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="overflow-hidden">
              <div 
                className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3 + 2)}%)`
                }}
              >
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: 'calc(33.333% - 1rem)',
                      minWidth: '250px'
                    }}
                    variants={productCardVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    
                    <motion.div 
                      className="rounded-2xl md:rounded-3xl border-2 cursor-pointer md:border-3 border-white p-6 md:p-8 aspect-square flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: product.color }}
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.div
                        className="z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="h-auto w-full max-w-[250px] md:max-w-[300px] object-contain"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-[#2e1e15] mt-3 md:mt-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    >
                      {product.name}
                    </motion.h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {currentIndex > 0 && (
              <motion.button
                onClick={prevSlide}
                className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-50 transition-colors z-30"
                aria-label="Previous"
                variants={buttonVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#2e1e15]" />
              </motion.button>
            )}
            
            {currentIndex < products.length - 3 && (
              <motion.button
                onClick={nextSlide}
                className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-50 transition-colors z-30"
                aria-label="Next"
                variants={buttonVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#2e1e15]" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
      
      <OurStorySection/>
    </div>
  );
}
