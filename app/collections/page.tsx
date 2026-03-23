'use client';

import { useState } from 'react';
import Headers from '../_components/Headers';
import Footer from '../_components/Footer';

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  tag: 'new' | 'bestseller';
};

type Filter = 'all' | 'new' | 'bestseller';
type Sort = 'featured' | 'low' | 'high';

const products: Product[] = [
  { id: 1, name: 'ATTARO Noura Nectar Eau De Parfum for Her', image: '/product/product-1.png', price: 999, badge: 'New Drop', tag: 'new' },
  { id: 2, name: 'Classic Nova for Men — 100 ml', image: '/product/product-2.png', price: 999, tag: 'new' },
  { id: 3, name: 'Classic Aura for Women — 100 ml', image: '/product/product-3.png', price: 999, tag: 'new' },
  { id: 4, name: 'ATTARO 24Seven Aqua 100 ml Eau De Parfum', image: '/product/product-4.png', price: 999, badge: 'Best-Seller', tag: 'new' },
  { id: 5, name: 'ATTARO Noura Nectar Eau De Parfum for Her', image: '/product/product-5.png', price: 999, badge: 'New Drop', tag: 'bestseller' },
  { id: 6, name: 'Classic Nova for Men — 100 ml', image: '/product/product-6.png', price: 999, tag: 'bestseller' },
  { id: 7, name: 'Classic Aura for Women — 100 ml', image: '/product/product-7.png', price: 999, tag: 'bestseller' },
  { id: 8, name: 'ATTARO 24Seven Aqua 100 ml Eau De Parfum', image: '/product/product-8.png', price: 999, oldPrice: 1745, badge: 'Best-Seller', tag: 'bestseller' },
];

const tabs: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All Fragrances' },
  { key: 'new', label: 'New Arrivals' },
  { key: 'bestseller', label: 'Best Sellers' },
];

export default function Collections() {
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<Sort>('featured');

  const visible = products
    .filter((p) => filter === 'all' || p.tag === filter)
    .sort((a, b) => {
      if (sort === 'low') return a.price - b.price;
      if (sort === 'high') return b.price - a.price;
      return a.id - b.id;
    });

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Headers />

      <div className="w-full bg-[#0d0d0d] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A84C 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#C9A84C] mb-5">
        House of ATTARO
        </p>
        <h1 className="text-5xl md:text-7xl font-light italic text-white leading-none mb-6">
          The Collection
        </h1>
        <div className="flex items-center justify-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-white/30">
          <a href="/" className="hover:text-white/60 transition-colors duration-200">Home</a>
          <span className="text-white/20">/</span>
          <span className="text-white/50">Collections</span>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-[#fafaf8]/95 backdrop-blur-sm border-b border-[#e8e0d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            <div className="flex items-center">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`relative px-3 sm:px-5 h-14 text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                    filter === tab.key ? 'text-[#1a1a1a]' : 'text-[#a09890] hover:text-[#3d3935]'
                  }`}
                >
                  {tab.label}
                  {filter === tab.key && (
                    <span className="absolute bottom-0 left-3 sm:left-5 right-3 sm:right-5 h-px bg-[#C9A84C]" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="hidden sm:block text-[11px] tracking-[0.15em] text-[#a09890]">
                {visible.length} {visible.length === 1 ? 'product' : 'products'}
              </span>
              <span className="hidden sm:block w-px h-4 bg-[#e8e0d5]" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="text-[11px] tracking-widest uppercase text-[#3d3935] bg-transparent border-none focus:outline-none cursor-pointer py-1"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {visible.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
            {visible.map((product) => {
              const discountPct = product.oldPrice
                ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
                : null;

              return (
                <a key={product.id} href={`/collections/${product.id}`} className="group cursor-pointer">

                  <div className="relative overflow-hidden bg-[#f5f0e8] aspect-3/4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
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
                        className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-[#C9A84C]"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
                        </svg>
                      </button>
                    )}

                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-3">
                      <button className="w-full bg-[#0d0d0d] text-white text-[10px] tracking-[0.2em] uppercase py-3 hover:bg-[#C9A84C] transition-colors duration-300">
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

                </a>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <span className="block w-8 h-px bg-[#C9A84C] mb-8" />
            <h2 className="text-3xl font-light italic text-[#1a1a1a] mb-4">No fragrances found</h2>
            <p className="text-[#a09890] text-sm tracking-wide mb-8">Try a different filter.</p>
            <button
              onClick={() => setFilter('all')}
              className="text-[11px] tracking-[0.25em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a]/40 pb-0.5 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors duration-200"
            >
              View All
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
