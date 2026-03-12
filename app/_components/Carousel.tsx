"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/banner-1.jpeg",
  },
  {
    id: 2,
    image: "/slide-2.webp",
  },
  {
    id: 3,
    image: "/slide-3.webp",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  // const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    // if (paused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  // }, [paused]);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      // onMouseEnter={() => setPaused(true)}
      // onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0"
          >
            <img
              src={slide.image}
              className="w-full h-[420px] md:h-[520px] lg:h-[600px] object-cover"
              alt="carousel"
            />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all ${
              current === index
                ? "w-6 bg-white"
                : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}