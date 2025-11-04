'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function OurStorySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const descriptionRef = useRef(null);

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (!descriptionRef.current) return;

    const paragraphs = descriptionRef.current.querySelectorAll('.reveal-text');

    paragraphs.forEach((paragraph) => {

      const text = paragraph.textContent;
      const words = text.split(' ');
      
      paragraph.innerHTML = words
        .map((word) => `<span class="word-span">${word}</span>`)
        .join(' ');

      const wordSpans = paragraph.querySelectorAll('.word-span');

  
      gsap.to(wordSpans, {
        color: '#2e1e15',
        duration: 0.8,
        stagger: 0.08,
        scrollTrigger: {
          trigger: paragraph,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          markers: false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={ref} className="bg-[#f8f7f6] mt-[1rem] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-[#2e1e15] mb-8 flex flex-wrap items-center justify-center gap-3"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span>Our Story,</span>
          <motion.span
            className="inline-block border-4 -rotate-3 rounded-lg border-[#2e1e15] px-6 py-3 bg-[#FFD4B3]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Baked
          </motion.span>
          <span>with Love</span>
        </motion.h2>
        <div
          ref={descriptionRef}
          className="text-xl md:text-2xl title4 font-bold text-gray-400 leading-relaxed"
        >
          <p className="reveal-text inline-flex flex-wrap items-center justify-center gap-2">
            Since our first loaf came out of the oven, we've been dedicated to bringing you fresh, wholesome, and delicious baked goods. Every recipe is made from scratch using premium ingredients and lots of love.
          </p>
        </div>
      </div>
    </div>
  );
}
