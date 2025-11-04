'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Variants } from 'framer-motion';

export function MenuSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const menuItems = [
    {
      title: 'Appetizers',
      description: 'Start your meal with flavorful small plates like crispy calamari, loaded nachos, or fresh garden salads.'
    },
    {
      title: 'Main Courses',
      description: 'Start your meal with flavorful small plates like crispy calamari, loaded nachos, or fresh garden salads.'
    },
    {
      title: 'Desserts',
      description: 'Start your meal with flavorful small plates like crispy calamari, loaded nachos, or fresh garden salads.'
    }
  ];

  const rightMenuItems = [
    {
      title: 'Beverages',
      description: 'Start your meal with flavorful small plates like crispy calamari, loaded nachos, or fresh garden salads.'
    },
    {
      title: "Kids' Menu",
      description: 'Start your meal with flavorful small plates like crispy calamari, loaded nachos, or fresh garden salads.'
    },
    {
      title: 'Seasonal Specials',
      description: 'Start your meal with flavorful small plates like crispy calamari, loaded nachos, or fresh garden salads.'
    }
  ];

  // TypeScript typed variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const decorativeVariants: Variants = {
    hidden: { opacity: 0, rotate: -90 },
    visible: {
      opacity: 1,
      rotate: -90,
      transition: {
        duration: 0.8,
        delay: 0.1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div ref={ref} className="bg-[#f8f7f6] py-12 md:py-20 px-4 md:px-6 relative">

      <motion.div
        className="absolute z-20 -rotate-90 left-2 md:left-10 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
        variants={decorativeVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <Image
          src="/cookiesm.png"
          alt="Cookie"
          width={128}
          height={128}
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-8xl mx-auto">
        <motion.div
          className="bg-[#FFB8A0] rounded-2xl md:rounded-[3rem] p-6 md:p-8 lg:p-12 relative overflow-hidden"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
         
          <div className="text-center mb-8 md:mb-12">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl title3 font-bold text-[#2e1e15] mb-3 md:mb-4 flex flex-wrap items-center justify-center gap-2 md:gap-3"
              variants={headerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <span>Crafted Menus for Every</span>
              <motion.span
                className="inline-block -rotate-2 rounded-lg bg-[#2e1e15] text-white px-4 py-1.5 md:px-6 md:py-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Moment
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-gray-700 title4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              From savory appetizers to indulgent desserts, every dish is made to tantalize your taste buds.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
          
            <motion.div
              className="space-y-4 md:space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-2 md:gap-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#2e1e15] flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl title4 font-bold text-[#2e1e15] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 title4 text-sm md:text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center justify-center order-first lg:order-none my-4 lg:my-0"
              variants={imageVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <motion.div
                className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[900px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/doughnut1.png"
                  alt="Stacked doughnuts"
                  width={800}
                  height={900}
                  className="object-contain w-full h-auto"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="space-y-4 md:space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {rightMenuItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-2 md:gap-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#2e1e15] flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold title4 text-[#2e1e15] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 title4 text-sm md:text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="text-center mt-8 md:mt-12"
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.button
              className="bg-[#2e1e15] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#3e2e25] transition-colors"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Explore the Menu
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
