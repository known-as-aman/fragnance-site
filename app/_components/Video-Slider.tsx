"use client";

import { useRef } from "react";

type Video = {
  id: number;
  title: string;
  thumbnail: string;
};

const videos: Video[] = [
  {
    id: 1,
    title: "Sumeet and Nidhi",
    thumbnail: "/videos/v1.jpg",
  },
  {
    id: 2,
    title: "SKINN x Jim Sarbh",
    thumbnail: "/videos/v2.jpg",
  },
  {
    id: 3,
    title: "Skinn Classics",
    thumbnail: "/videos/v3.jpg",
  },
  {
    id: 4,
    title: "View",
    thumbnail: "/videos/v4.jpg",
  },
  {
    id: 5,
    title: "24seven Floral x Alaya",
    thumbnail: "/videos/v5.jpg",
  },
  {
    id: 6,
    title: "24seven Woody x Shantanu",
    thumbnail: "/videos/v6.jpg",
  },
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
    <section className="relative w-full py-12">

      <div className="relative">

        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 items-center justify-center"
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

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative shrink-0 w-[220px] md:w-[250px] lg:w-[280px] h-[360px] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm md:text-base font-medium">
                {video.title}
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 items-center justify-center"
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

      </div>
    </section>
  );
}