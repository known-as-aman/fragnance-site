"use client";

import { useRef } from "react";

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  volume?: string;
  family?: string;
};

type Props = {
  products?: Product[];
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  variant?: "light" | "dark";
  viewAllHref?: string;
};

export default function ProductSlider({
  products = [],
  title = "Trending Products",
  eyebrow,
  subtitle,
  variant = "light",
  viewAllHref = "#",
}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left:
        direction === "left"
          ? -(sliderRef.current.clientWidth * 0.5)
          : sliderRef.current.clientWidth * 0.5,
      behavior: "smooth",
    });
  };

  if (!products.length) return null;

  const isDark = variant === "dark";

  return (
    <section
      className={`w-full py-20 md:py-24 ${isDark ? "bg-[#0d0d0d]" : "bg-[#F6F5F2]"}`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            {eyebrow && (
              <p
                className="text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-5"
                style={{ fontFamily: "var(--font-jost), sans-serif" }}
              >
                {eyebrow}
              </p>
            )}
            <span className="block w-8 h-px bg-[#C9A84C] mb-6" />
            <h2
              className={`text-4xl md:text-5xl font-light italic leading-[1.1] ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={`text-[11px] tracking-[0.18em] uppercase mt-4 leading-relaxed max-w-md ${isDark ? "text-[#8b8078]" : "text-[#8b7d6b]"}`}
                style={{ fontFamily: "var(--font-jost), sans-serif" }}
              >
                {subtitle}
              </p>
            )}
          </div>

          <a
            href={viewAllHref}
            className={`hidden sm:flex items-center gap-2.5 text-[10px] tracking-[0.3em] uppercase group/link transition-colors duration-200 shrink-0 pb-1 border-b ${
              isDark
                ? "text-white/40 border-white/15 hover:text-[#C9A84C] hover:border-[#C9A84C]"
                : "text-[#6b6560] border-[#6b6560]/30 hover:text-[#C9A84C] hover:border-[#C9A84C]"
            }`}
            style={{ fontFamily: "var(--font-jost), sans-serif" }}
          >
            <span>View Full Collection</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* Product grid */}
        <div className="relative">

          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className={`hidden md:flex absolute -left-5 top-[38%] -translate-y-1/2 z-10 w-10 h-10 items-center justify-center border transition-all duration-200 ${
              isDark
                ? "bg-[#161616] border-white/10 text-white/40 hover:border-[#C9A84C] hover:text-[#C9A84C]"
                : "bg-white border-[#e8e0d5] text-[#6b6560] hover:border-[#C9A84C] hover:text-[#C9A84C] shadow-sm"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={sliderRef}
            className="flex gap-4 lg:gap-5 overflow-x-auto no-scrollbar"
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
                  className="group/card cursor-pointer flex-none w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-15px)]"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden aspect-3/4 ${
                      isDark ? "bg-[#161616]" : "bg-[#f5f0e8]"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover/card:scale-105"
                    />

                    {product.badge && (
                      <span
                        className="absolute top-3 left-3 z-10 bg-[#0d0d0d] text-white text-[9px] px-2.5 py-1 tracking-[0.2em] uppercase"
                        style={{ fontFamily: "var(--font-jost), sans-serif" }}
                      >
                        {product.badge}
                      </span>
                    )}

                    {discountPct && (
                      <span
                        className="absolute top-3 right-3 z-10 bg-[#C9A84C] text-[#0d0d0d] text-[9px] px-2 py-1 tracking-widest font-medium"
                        style={{ fontFamily: "var(--font-jost), sans-serif" }}
                      >
                        −{discountPct}%
                      </span>
                    )}

                    {!discountPct && (
                      <button
                        aria-label="Add to wishlist"
                        className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 hover:text-[#C9A84C]"
                        onClick={(e) => e.preventDefault()}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
                        </svg>
                      </button>
                    )}

                    {/* Add to cart */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-out p-3">
                      <button
                        className="w-full bg-[#0d0d0d] text-white text-[9px] tracking-[0.25em] uppercase py-3 hover:bg-[#C9A84C] hover:text-[#0d0d0d] transition-colors duration-300"
                        onClick={(e) => e.preventDefault()}
                        style={{ fontFamily: "var(--font-jost), sans-serif" }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Product info */}
                  <div
                    className={`mt-4 pb-4 border-b ${
                      isDark ? "border-white/10" : "border-[#e8e0d5]"
                    }`}
                  >
                    {product.family && (
                      <p
                        className="text-[9px] tracking-[0.32em] uppercase text-[#C9A84C] mb-2"
                        style={{ fontFamily: "var(--font-jost), sans-serif" }}
                      >
                        {product.family}
                      </p>
                    )}

                    <p
                      className={`text-[13px] leading-snug line-clamp-2 tracking-wide mb-3 ${
                        isDark ? "text-white/85" : "text-[#3d3935]"
                      }`}
                      style={{ fontFamily: "var(--font-jost), sans-serif" }}
                    >
                      {product.name}
                    </p>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-2.5 h-2.5 text-[#C9A84C]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                      <span
                        className={`text-[9px] ml-1.5 tracking-wide ${
                          isDark ? "text-white/30" : "text-[#a09890]"
                        }`}
                        style={{ fontFamily: "var(--font-jost), sans-serif" }}
                      >
                        (124)
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`text-[14px] font-medium tracking-wide ${
                            isDark ? "text-white" : "text-[#1a1a1a]"
                          }`}
                          style={{ fontFamily: "var(--font-jost), sans-serif" }}
                        >
                          ₹ {product.price.toLocaleString()}
                        </span>
                        {product.oldPrice && (
                          <span
                            className={`line-through text-[12px] ${
                              isDark ? "text-white/30" : "text-[#a09890]"
                            }`}
                          >
                            ₹ {product.oldPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {product.volume && (
                        <span
                          className={`text-[9px] tracking-[0.2em] uppercase ${
                            isDark ? "text-white/25" : "text-[#a09890]"
                          }`}
                          style={{ fontFamily: "var(--font-jost), sans-serif" }}
                        >
                          {product.volume}
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
            className={`hidden md:flex absolute -right-5 top-[38%] -translate-y-1/2 z-10 w-10 h-10 items-center justify-center border transition-all duration-200 ${
              isDark
                ? "bg-[#161616] border-white/10 text-white/40 hover:border-[#C9A84C] hover:text-[#C9A84C]"
                : "bg-white border-[#e8e0d5] text-[#6b6560] hover:border-[#C9A84C] hover:text-[#C9A84C] shadow-sm"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Footer row */}
        <div className="mt-10 flex items-center justify-between">
          <p
            className={`text-[10px] tracking-[0.25em] uppercase ${
              isDark ? "text-white/20" : "text-[#b0a898]"
            }`}
            style={{ fontFamily: "var(--font-jost), sans-serif" }}
          >
            {products.length} Fragrances
          </p>
          <a
            href={viewAllHref}
            className={`sm:hidden text-[10px] tracking-[0.3em] uppercase border-b pb-0.5 transition-colors duration-200 ${
              isDark
                ? "text-[#C9A84C] border-[#C9A84C]"
                : "text-[#6b6560] border-[#6b6560]/40 hover:text-[#C9A84C]"
            }`}
            style={{ fontFamily: "var(--font-jost), sans-serif" }}
          >
            View All
          </a>
        </div>

      </div>
    </section>
  );
}
