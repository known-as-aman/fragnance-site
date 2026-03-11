"use client";

import { useRef } from "react";

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: string;
};

type Props = {
  products?: Product[];
  title?: string;
};

export default function ProductSlider({ products = [], title = "Trending Products" }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const width = sliderRef.current.clientWidth;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -width * 0.8 : width * 0.8,
      behavior: "smooth",
    });
  };

  if (!products.length) return null;

  return (
    <section className="py-16">
      <div className="relative">

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-medium mb-10">
          {title}
        </h2>

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
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="shrink-0 w-[240px] md:w-[260px] lg:w-[280px]"
            >
              {/* Image */}
              <div className="relative group overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[280px] object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />

                {product.badge && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-800 line-clamp-2">
                  {product.name}
                </p>

                <div className="flex items-center gap-2">
                  <span className="font-medium">
                    ₹ {product.price.toLocaleString()}
                  </span>

                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ₹ {product.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
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