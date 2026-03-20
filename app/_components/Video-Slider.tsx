"use client";

import { useRef } from "react";

type Video = {
  id: number;
  title: string;
  thumbnail: string;
};

const videos: Video[] = [
  { id: 1, title: "Sumeet and Nidhi", thumbnail: "/videos/v1.jpg" },
  { id: 2, title: "ATTARO x Jim Sarbh", thumbnail: "/videos/v2.jpg" },
  { id: 3, title: "Attaro Classics", thumbnail: "/videos/v3.jpg" },
  { id: 4, title: "View", thumbnail: "/videos/v4.jpg" },
  { id: 5, title: "24seven Floral x Alaya", thumbnail: "/videos/v5.jpg" },
  { id: 6, title: "24seven Woody x Shantanu", thumbnail: "/videos/v6.jpg" },
];

export default function VideoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -width * 0.7 : width * 0.7,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-16 px-6 bg-[#fafaf8]">

      <div className="text-center mb-10">
        <span className="gold-line" />
        <h2 className="text-3xl md:text-4xl font-light tracking-[0.08em] text-[#1a1a1a]">
          Stories of Scent
        </h2>
      </div>

      <div className="relative">

        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#e8e0d5] w-10 h-10 items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative shrink-0 w-[210px] md:w-[240px] lg:w-[270px] h-[360px] overflow-hidden cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center backdrop-blur-sm bg-black/20 group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white text-[12px] tracking-widest uppercase font-light">
                {video.title}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#e8e0d5] w-10 h-10 items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </section>
  );
}
