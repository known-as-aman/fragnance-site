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
    sliderRef.current.scrollBy({
      left: direction === "left" ? -(sliderRef.current.clientWidth * 0.5) : sliderRef.current.clientWidth * 0.5,
      behavior: "smooth",
    });
  };

  if (!products.length) return null;

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between mb-10 pb-7 border-b border-[#e8e0d5]">
          <div>
            <span className="block w-7 h-px bg-[#C9A84C] mb-4" />
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.06em] text-[#1a1a1a]">
              {title}
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#6b6560] hover:text-[#C9A84C] transition-colors duration-200 group/link"
          >
            <span>View All</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="relative">

          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="hidden md:flex lg:hidden absolute -left-5 top-[42%] -translate-y-1/2 z-10 bg-white border border-[#e8e0d5] w-10 h-10 items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto no-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {products.map((product) => {
              const discountPct = product.oldPrice
                ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
                : null;

              return (
                <a
                  key={product.id}
                  href={`/collections/${product.id}`}
                  className="group/card cursor-pointer flex-none w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="relative overflow-hidden bg-[#f5f0e8] aspect-3/4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover/card:scale-105"
                    />

                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 bg-[#0d0d0d] text-white text-[9px] px-2.5 py-1 tracking-[0.18em] uppercase">
                        {product.badge}
                      </span>
                    )}

                    {discountPct && (
                        <span className="absolute top-3 right-3 z-10 bg-[#C9A84C] text-[#0d0d0d] text-[9px] px-2 py-1 tracking-widest font-medium">
                        −{discountPct}%
                      </span>
                    )}

                    {!discountPct && (
                      <button
                        aria-label="Add to wishlist"
                        className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 hover:text-[#C9A84C]"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
                        </svg>
                      </button>
                    )}

                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-out p-3">
                      <button className="w-full bg-[#0d0d0d] text-white text-[10px] tracking-[0.2em] uppercase py-3 hover:bg-[#C9A84C] transition-colors duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
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
                </a>
              );
            })}
          </div>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="hidden md:flex lg:hidden absolute -right-5 top-[42%] -translate-y-1/2 z-10 bg-white border border-[#e8e0d5] w-10 h-10 items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a href="#" className="text-[11px] tracking-[0.25em] uppercase text-[#6b6560] border-b border-[#6b6560]/40 pb-0.5">
            View All
          </a>
        </div>

      </div>
    </section>
  );
}
