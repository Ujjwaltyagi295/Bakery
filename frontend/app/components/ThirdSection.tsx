'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Variants } from 'framer-motion';

export function ThirdSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
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
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay: 0.1,
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
        delay: 0.4,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-[#f8f7f6] py-12 mt-12 md:py-20 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
     
        <motion.div
          className="relative bg-[#3a2620] rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-12 overflow-hidden"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div
            className="absolute -top-1 -right-2 md:top-1 md:-right-4 w-20 h-20 md:w-32 md:h-32 z-20"
            initial={{ opacity: 0, rotate: 0 }}
            animate={inView ? { opacity: 1, rotate: 12 } : { opacity: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            <Image
              src="/lava.png"
              alt="Cookie decoration"
              width={128}
              height={128}
              className="object-contain"
            />
          </motion.div>

          <div className="absolute inset-0 opacity-5">
            <div className="absolute right-0 bottom-0 w-1/1 h-full">
              <Image
                src="/cookiesm.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

        
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
    
            <motion.div
              className="order-2 lg:order-1"
              variants={imageVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-[#4a3630] aspect-[4/3]">
                <Image
                  src="/bakery1.webp"
                  alt="Baker preparing dough"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 text-white space-y-4 md:space-y-6"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={containerVariants}
            >
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                Baking with Passion
                <br />
                <motion.span
                  className="text-[#f0b21a]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                >
                  & Purpose
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                That's why every loaf, pastry, and cake we create is made with care, using time-honored recipes and wholesome ingredients. For us, baking is not just about taste — it's about creating moments of joy and comfort that last beyond the last bite.
              </motion.p>

              <motion.div
                className="pt-2 md:pt-4"
                variants={buttonVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <motion.button
                  className="bg-[#f0b21a] text-[#2e1e15] px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-[#e5a615] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Read a tales
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
