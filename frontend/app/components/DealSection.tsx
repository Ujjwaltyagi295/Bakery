'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DealsSection() {
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !leftCardRef.current || !rightCardRef.current) return;

    gsap.set(leftCardRef.current, {
      clipPath: 'inset(0% 100% 0% 0%)',
      opacity: 1,
    });

    gsap.set(rightCardRef.current, {
      clipPath: 'inset(0% 0% 0% 100%)',
      opacity: 1,
    });

    gsap.to(leftCardRef.current, {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
        markers: false,
      },
    });

    gsap.to(rightCardRef.current, {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
        markers: false,
      },
    });

    const contentLeft = leftCardRef.current?.querySelector('.content-left') as HTMLElement | null;
    if (contentLeft) {
      gsap.set(contentLeft, {
        opacity: 0,
        y: 30,
      });

      gsap.to(contentLeft, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'top 40%',
          scrub: 1,
        },
      });
    }

    const rightContent = rightCardRef.current?.querySelectorAll('.animate-item') as NodeListOf<HTMLElement> | null;
    if (rightContent && rightContent.length > 0) {
      gsap.set(rightContent, {
        opacity: 0,
        y: 20,
      });

      gsap.to(rightContent, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 65%',
          end: 'top 35%',
          scrub: 1,
        },
      });
    }

    const personImage = leftCardRef.current?.querySelector('.person-image') as HTMLElement | null;
    if (personImage) {
      gsap.set(personImage, {
        opacity: 0,
        scale: 0.8,
      });

      gsap.to(personImage, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 45%',
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-3 my-[5rem] gap-4 md:h-[35rem] p-4"
    >
      <div
        ref={leftCardRef}
        className="md:col-span-2 bg-gradient-to-br from-orange-200 to-orange-100 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden h-auto md:h-full will-change-clip"
      >
        <div className="content-left max-w-xs z-10 w-full md:w-auto">
          <div className="mb-6">
            <svg
              className="w-12 h-12 opacity-80"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle cx="25" cy="25" r="20" stroke="#d4a574" strokeWidth="2" />
              <circle cx="20" cy="20" r="2" fill="#d4a574" />
              <circle cx="28" cy="25" r="2" fill="#d4a574" />
              <circle cx="22" cy="32" r="2" fill="#d4a574" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
            Sweet Deals, Fresh Savings
          </h2>

          <p className="text-xs text-gray-700 mb-4 leading-relaxed">
            Enjoy our daily discounts and seasonal promotions. Because good food
            tastes even better when it's a great deal!
          </p>

          <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-gray-800 transition inline-flex items-center gap-2 hover:scale-105 duration-300">
            VIEW OFFERS
            <span>→</span>
          </button>
        </div>

        <Image
          src="/person.png"
          alt="person"
          width={500}
          height={500}
          className="person-image hidden md:block absolute -right-32 -bottom-20 w-full h-full object-contain"
          priority
        />
      </div>

      <div
        ref={rightCardRef}
        className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-3xl p-6 flex flex-col justify-between h-auto md:h-full will-change-clip"
      >
        <div className="animate-item inline-flex w-fit">
          <span className="bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Paris, France
          </span>
        </div>

        <h2 className="animate-item text-lg font-bold text-gray-900 my-4 leading-tight">
          10% Off All<br />
          Cakes<br />
          (Weekends)
        </h2>

        <div className="flex flex-wrap gap-2">
          <span className="animate-item bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-semibold hover:scale-110 transition duration-300">
            Bakery
          </span>
          <span className="animate-item bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-semibold hover:scale-110 transition duration-300">
            Social
          </span>
          <span className="animate-item bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-semibold hover:scale-110 transition duration-300">
            Advance
          </span>
          <span className="animate-item bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-semibold hover:scale-110 transition duration-300">
            Green Viper Grill
          </span>
          <span className="animate-item bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-semibold hover:scale-110 transition duration-300">
            Advance
          </span>
        </div>
      </div>
    </div>
  );
}
