"use client";

import { useEffect, useState, useCallback } from "react";

const DURATION = 5000;

const slides = [
  {
    id: 1,
    image: "/banner-1.jpeg",
    eyebrow: "New Collection",
    title: "The Art of\nRefined Scent",
    subtitle: "Where craftsmanship meets desire",
    cta: "Explore Now",
  },
  {
    id: 2,
    image: "/slide-2.webp",
    eyebrow: "For Her",
    title: "Timeless\nFemininity",
    subtitle: "Fragrances crafted for the modern woman",
    cta: "Shop Women",
  },
  {
    id: 3,
    image: "/slide-3.webp",
    eyebrow: "For Him",
    title: "Bold &\nDistinctive",
    subtitle: "Scents that command presence",
    cta: "Shop Men",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goTo = (i: number) => setCurrent(i);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, DURATION);
    return () => clearInterval(timer);
  }, [nextSlide, paused]);

  return (
    <section
      className="relative w-full h-[88vh] min-h-[580px] overflow-hidden bg-[#0d0d0d]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.eyebrow}
            className="w-full h-full object-cover"
            style={{
              transform: i === current ? "scale(1)" : "scale(1.07)",
              transition: i === current ? "transform 5500ms ease-out" : "none",
            }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute top-8 left-10 md:left-16 flex items-center gap-3 text-white/45">
        <span
          className="text-3xl font-light leading-none"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="w-8 h-px bg-white/25" />
        <span className="text-xs tracking-[0.2em]">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {slides.map(
        (slide, i) =>
          i === current && (
            <div
              key={`text-${slide.id}-${current}`}
              className="absolute inset-0 flex items-end pb-28 md:pb-32 px-10 md:px-16 hero-text-enter"
            >
              <div className="max-w-xl text-white">
                <p className="text-[11px] tracking-[0.35em] uppercase text-[#C9A84C] mb-5">
                  {slide.eyebrow}
                </p>

                <h1 className="text-5xl md:text-7xl font-light italic leading-[1.05] mb-5 whitespace-pre-line">
                  {slide.title}
                </h1>

                <p className="text-white/55 text-[11px] tracking-[0.2em] uppercase mb-10">
                  {slide.subtitle}
                </p>

                <a
                  href="#"
                  className="inline-block text-[11px] tracking-[0.3em] uppercase border border-white/45 px-10 py-3.5 hover:bg-white hover:text-[#0d0d0d] transition-all duration-300"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          )
      )}

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/45 hover:text-white border border-white/15 hover:border-white/50 transition-all duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/45 hover:text-white border border-white/15 hover:border-white/50 transition-all duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-12 right-10 md:right-16 flex items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`block h-px transition-all duration-500 ${
                i === current
                  ? "w-10 bg-[#C9A84C]"
                  : "w-5 bg-white/35 hover:bg-white/65"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10">
        <div
          key={current}
          className="h-full bg-[#C9A84C] hero-progress"
          style={{
            animationDuration: `${DURATION}ms`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
      </div>
    </section>
  );
}
