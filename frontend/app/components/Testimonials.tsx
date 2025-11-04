'use client';

import React, { useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TestimonialsSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      comment: 'The freshest baked goods I\'ve ever tasted! Every bite is pure heaven. Highly recommend!',
      color: '#FFD4A3',
      textColor: '#2e1e15'
    },
    {
      name: 'Emily Chen',
      comment: 'Absolutely delicious! The quality and taste are unmatched. This is my go-to bakery now.',
      color: '#FFB6D9',
      textColor: '#2e1e15'
    },
    {
      name: 'Marcus Williams',
      comment: 'Outstanding service and amazing pastries! Worth every penny. Can\'t wait to come back.',
      color: '#FF9F7F',
      textColor: '#ffffff'
    },
    {
      name: 'James Rodriguez',
      comment: 'Best croissants in town! The pastry is buttery and flaky. Worth the trip!',
      color: '#FFE5B4',
      textColor: '#2e1e15'
    },
  ];

  const responsive = {
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  // GSAP stacked cards animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Only apply stacked animation on larger screens
    if (window.innerWidth < 640) return;

    const cards = cardsRef.current;
    const cardCount = cards.length;

    // Set initial stacked state
    gsap.set(cards, {
      y: (index) => index * 20,
      scale: (index) => 1 - index * 0.05,
      opacity: 1,
      rotateZ: (index) => index % 2 === 0 ? -2 : 2,
    });

    // Animate cards to spread out on scroll
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        rotateZ: (index) => index % 2 === 0 ? -2 : 2,
        scrollTrigger: {
          trigger: container,
          start: `top ${window.innerHeight * 0.6}`,
          end: `top ${window.innerHeight * 0.2}`,
          scrub: 1,
          markers: false,
        },
        delay: index * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2e1e15] mb-4">
            Sweet Words from Our
            <br />
            <span className="inline-block border-4 border-[#2e1e15] rounded-2xl px-4 md:px-6 py-1 md:py-2 bg-[#E8C8A8] -rotate-3 ml-2">
              Community
            </span>
          </h2>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
            Whether you're craving comfort food or exploring bold, new tastes. Join us and indulge in every bite
            <br className="hidden md:block" />
            Whether you're craving comfort food or exploring bold, new tastes.
          </p>
        </div>

        {/* Testimonials Grid for larger screens with stacked animation */}
        <div
          ref={containerRef}
          className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative"
            >
              <div
                className="rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[300px] md:min-h-[350px] flex flex-col justify-between"
                style={{ backgroundColor: testimonial.color }}
              >
                <div className="flex-1 flex items-center justify-center mb-6">
                  <p
                    className="text-sm md:text-base leading-relaxed font-medium text-center"
                    style={{ color: testimonial.textColor }}
                  >
                    "{testimonial.comment}"
                  </p>
                </div>
                <div
                  className="h-0.5 my-4"
                  style={{ backgroundColor: testimonial.textColor, opacity: 0.3 }}
                />
                <div className="text-center">
                  <p
                    className="font-bold text-sm md:text-base"
                    style={{ color: testimonial.textColor }}
                  >
                    {testimonial.name}
                  </p>
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{ color: testimonial.textColor }}
                        className="text-lg md:text-xl"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel for small screens */}
        <div className="block sm:hidden">
          <Carousel
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            swipeable={true}
            draggable={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="mx-4"
              >
                <div
                  className="rounded-3xl p-6 shadow-lg min-h-[300px] flex flex-col justify-between"
                  style={{
                    backgroundColor: testimonial.color,
                    transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`
                  }}
                >
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <p
                      className="text-sm leading-relaxed font-medium text-center"
                      style={{ color: testimonial.textColor }}
                    >
                      "{testimonial.comment}"
                    </p>
                  </div>
                  <div
                    className="h-0.5 my-4"
                    style={{ backgroundColor: testimonial.textColor, opacity: 0.3 }}
                  />
                  <div className="text-center">
                    <p
                      className="font-bold text-sm"
                      style={{ color: testimonial.textColor }}
                    >
                      {testimonial.name}
                    </p>
                    <div className="flex justify-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          style={{ color: testimonial.textColor }}
                          className="text-lg"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Quote/CTA below */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 text-sm md:text-base">
            Join thousands of happy customers who love our baked goods
          </p>
        </div>
      </div>
    </section>
  );
}
