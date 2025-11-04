"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import { TestimonialsSection } from "./components/Testimonials";
import Footer from "./components/footer";
import Hero from "./components/HeroSection";
import { MenuSection } from "./components/menuSection";
import Navbar from "./components/Navbar";
import { SecondSection } from "./components/SecondSection";
import { ThirdSection } from "./components/ThirdSection";
import { Preloader } from './components/Preload';
import DealsSection from './components/DealSection';
import { WelcomePopup } from './components/Popup';

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <WelcomePopup />
      <div className="bg-[#f8f7f6] min-h-screen">
        <Navbar />
        <Hero />
        <SecondSection />
        <MenuSection />
        <ThirdSection />
        <DealsSection/>
        <TestimonialsSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
