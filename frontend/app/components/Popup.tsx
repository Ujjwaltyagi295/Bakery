'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Variants } from 'framer-motion';

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // 1 second delay

    // Cleanup function to clear the timeout if component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.75, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      y: 50,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="bg-[#fff7e4] rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-5 h-5 text-gray-600" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2e1e15] mb-3">
                Need a Website Like This?
              </h2>
              <div className="h-1 w-16 bg-[#f0b21a] rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-gray-700 text-base leading-relaxed mb-6"
            >
              We craft stunning, high-performance websites tailored to your business. From concept to launch, we deliver elegant digital experiences that engage your audience and drive results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="bg-[#FFF8F0] rounded-2xl p-4 mb-6 border-l-4 border-[#f0b21a]"
            >
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-[#2e1e15]">Let's Build Together</span>
                <br />
                Contact us at{' '}
                <a
                  href="mailto:thebuilditagency@gmail.com"
                  className="text-[#f0b21a] font-semibold hover:underline"
                >
                  thebuilditagency@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.button
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#f0b21a] text-[#2e1e15] py-3 rounded-full font-semibold hover:bg-[#e5a615] transition text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Get in Touch
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="text-xs text-gray-500 text-center mt-4"
            >
              Click anywhere to dismiss
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
