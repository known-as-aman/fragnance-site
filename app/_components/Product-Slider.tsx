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
    <section className="py-16 px-6">
      <div className="relative">

        <div className="text-center mb-10">
          <span className="gold-line" />
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.08em] text-[#1a1a1a]">
            {title}
          </h2>
        </div>

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
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="shrink-0 w-[240px] md:w-[260px] lg:w-[280px] group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-[#f5f0e8]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-contain transition-transform duration-700 group-hover:scale-105"
                />

                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#0d0d0d] text-white text-[10px] px-3 py-1 tracking-[0.15em] uppercase">
                    {product.badge}
                  </span>
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100">
                  <button className="bg-[#0d0d0d] text-white text-[10px] tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#C9A84C] transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                <p className="text-[13px] text-[#3d3935] leading-snug line-clamp-2 tracking-wide">
                  {product.name}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-medium text-[#1a1a1a] tracking-wide">
                    ₹ {product.price.toLocaleString()}
                  </span>
                  {product.oldPrice && (
                    <span className="text-[#a09890] line-through text-[13px]">
                      ₹ {product.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
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
