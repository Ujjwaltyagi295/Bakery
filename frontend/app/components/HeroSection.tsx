'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const waveVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sideBoxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#2c1101] min-h-[49rem] pt-8 md:pt-12 pb-8 md:pb-0"
    >
     
      <motion.div
        className="absolute inset-x-0 top-0 border-t-2 border-dashed border-white/40"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="text-center px-4">
        <motion.h1
          className="leading-[0.95] text-white font-extrabold text-[clamp(2.25rem,6vw,6rem)]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.span
            className="block"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Freshly{" "}
            <motion.span
              className="text-[#f0b21a]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Baked
            </motion.span>
          </motion.span>
          <motion.span
            className="block"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Goodness, Every Day
          </motion.span>
        </motion.h1>
      </div>
      <div className="relative mx-auto mt-6 md:mt-8 max-w-6xl px-4 md:px-6">
        
        <motion.div
          className="md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 md:w-48 md:text-right text-white/90 space-y-3 md:space-y-4 text-center mb-6 md:mb-0"
          variants={sideBoxVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="uppercase tracking-wide text-xs md:text-sm">Email</p>
            <p className="mt-1 md:mt-2 text-sm md:text-base">info@bakeryfresh.com</p>
          </motion.div>
          <motion.div
            className="h-8 w-px bg-white/30 mx-auto md:mr-0"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          />
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="uppercase tracking-wide text-xs md:text-sm">Location</p>
            <p className="mt-1 md:mt-2 text-sm md:text-base">123 Ocean Avenue, Seattle, USA</p>
          </motion.div>
        </motion.div>
             
        <motion.div
          className="flex justify-center relative top-[50%] my-6 md:my-0"
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/herocookie.png"
            alt="Chocolate cookie stack"
            width={800}
            height={800}
            priority
            className="h-auto w-[min(85vw,500px)] md:w-[min(80vw,500px)] z-10 object-contain"
          />
        </motion.div>

        <motion.div
          className="mt-6 md:mt-0 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:w-48 text-white/90 text-center md:text-left px-4 md:px-0"
          variants={sideBoxVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <motion.p
            className="text-sm md:text-base leading-relaxed"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            From warm breads to delightful pastries, made with love and the finest ingredients.
          </motion.p>
          <motion.button
            className="mt-4 md:mt-6 cursor-pointer rounded-full bg-[#f0b21a] px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base text-[#2e1e15] font-semibold block mx-auto md:mx-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            Order Now
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        variants={waveVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <svg
          viewBox="0 0 1146 230"
          preserveAspectRatio="none"
          className="w-full h-[100px] md:h-[150px] lg:h-[200px]"
        >
          <motion.path
            fill="#f8f7f6"
            d="M 0 190 C 95.5 150 286.5 230 382.0 190 C 477.5 150 668.5 230 764.0 190 C 859.5 150 1050.5 230 1146.0 190 L 1146 230 L 0 230 Z"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
