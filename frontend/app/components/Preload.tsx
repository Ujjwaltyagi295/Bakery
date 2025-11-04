"use client";

import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 30;
      });
    }, 200);

    // Complete loading after 2 seconds
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsVisible(false), 500);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.preloaderContainer}>
      <div className={styles.preloaderContent}>
        <div className={styles.progressBarContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className={styles.loadingText}>{Math.round(progress)}%</p>
      </div>
    </div>
  );
};
