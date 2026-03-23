'use client';

import { use, useState } from 'react';
import Headers from '../../_components/Headers';
import Footer from '../../_components/Footer';

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  tag: 'new' | 'bestseller';
  description: string;
  notes: { top: string[]; middle: string[]; base: string[] };
  concentration: string;
  volume: string;
};

const products: Product[] = [
  {
    id: 1, name: 'ATTARO Noura Nectar Eau De Parfum for Her',
    image: '/product/product-1.png', price: 999, badge: 'New Drop', tag: 'new',
    description: 'A celebration of femininity, Noura Nectar weaves together the freshness of sun-ripened peach with the timeless elegance of rose. The heart blooms with jasmine and lily of the valley, while a warm base of musk and amber ensures an unforgettable, lasting trail.',
    notes: { top: ['Rose', 'Bergamot', 'Peach'], middle: ['Jasmine', 'Lily of the Valley', 'Iris'], base: ['Musk', 'Amber', 'Sandalwood'] },
    concentration: 'Eau De Parfum', volume: '100 ml',
  },
  {
    id: 2, name: 'Classic Nova for Men — 100 ml',
    image: '/product/product-2.png', price: 999, tag: 'new',
    description: 'Classic Nova captures the essence of modern masculinity — fresh, confident, and enduring. A crisp citrus opening gives way to an aromatic heart, settling into a woody, earthy base that commands presence through every hour.',
    notes: { top: ['Bergamot', 'Lemon', 'Mint'], middle: ['Lavender', 'Geranium', 'Cedar'], base: ['Vetiver', 'Oakmoss', 'Musk'] },
    concentration: 'Eau De Parfum', volume: '100 ml',
  },
  {
    id: 3, name: 'Classic Aura for Women — 100 ml',
    image: '/product/product-3.png', price: 999, tag: 'new',
    description: 'Classic Aura is the fragrance of a woman who knows herself — warm, sophisticated, and effortlessly elegant. Floral blooms at its heart, anchored by woody warmth for a full-day, all-occasion experience.',
    notes: { top: ['Mandarin', 'Pink Pepper', 'Violet Leaf'], middle: ['Peony', 'Magnolia', 'Rose'], base: ['Patchouli', 'Cedarwood', 'White Musk'] },
    concentration: 'Eau De Parfum', volume: '100 ml',
  },
  {
    id: 4, name: 'ATTARO 24Seven Aqua 100 ml Eau De Parfum',
    image: '/product/product-4.png', price: 999, badge: 'Best-Seller', tag: 'new',
    description: '24Seven Aqua captures the freedom of open water — refreshing, clean, and endlessly versatile. A fragrance for every moment, every occasion, and every version of you.',
    notes: { top: ['Sea Salt', 'Citrus', 'Marine'], middle: ['Driftwood', 'Aquatic Florals', 'Violet'], base: ['Musk', 'Amber', 'Sandalwood'] },
    concentration: 'Eau De Parfum', volume: '100 ml',
  },
  {
    id: 5, name: 'ATTARO Noura Nectar Eau De Parfum for Her',
    image: '/product/product-5.png', price: 999, badge: 'New Drop', tag: 'bestseller',
    description: 'A celebration of femininity, Noura Nectar weaves together the freshness of sun-ripened peach with the timeless elegance of rose. The heart blooms with jasmine and lily of the valley, while a warm base of musk and amber ensures an unforgettable, lasting trail.',
    notes: { top: ['Rose', 'Bergamot', 'Peach'], middle: ['Jasmine', 'Lily of the Valley', 'Iris'], base: ['Musk', 'Amber', 'Sandalwood'] },
    concentration: 'Eau De Parfum', volume: '100 ml',
  },
  {
    id: 6, name: 'Classic Nova for Men — 100 ml',
    image: '/product/product-6.png', price: 999, tag: 'bestseller',
    description: 'Classic Nova captures the essence of modern masculinity — fresh, confident, and enduring. A crisp citrus opening gives way to an aromatic heart, settling into a woody, earthy base that commands presence through every hour.',
    notes: { top: ['Bergamot', 'Lemon', 'Mint'], middle: ['Lavender', 'Geranium', 'Cedar'], base: ['Vetiver', 'Oakmoss', 'Musk'] },
    concentration: 'Eau De Parfum', volume: '100 ml',
  },
  {
    id: 7, name: 'Classic Aura for Women — 100 ml',
    image: '/product/product-7.png', price: 999, tag: 'bestseller',
    description: 'Classic Aura is the fragrance of a woman who knows herself — warm, sophisticated, and effortlessly elegant. Floral blooms at its heart, anchored by woody warmth for a full-day, all-occasion experience.',
    notes: { top: ['Mandarin', 'Pink Pepper', 'Violet Leaf'], middle: ['Peony', 'Magnolia', 'Rose'], base: ['Patchouli', 'Cedarwood', 'White Musk'] },
    concentration: 'Eau De Parfum', volume: '100 ml',
  },
  {
    id: 8, name: 'ATTARO 24Seven Aqua 100 ml Eau De Parfum',
    image: '/product/product-8.png', price: 999, oldPrice: 1745, badge: 'Best-Seller', tag: 'bestseller',
    description: '24Seven Aqua captures the freedom of open water — refreshing, clean, and endlessly versatile. A fragrance for every moment, every occasion, and every version of you.',
    notes: { top: ['Sea Salt', 'Citrus', 'Marine'], middle: ['Driftwood', 'Aquatic Florals', 'Violet'], base: ['Musk', 'Amber', 'Sandalwood'] },
    concentration: 'Eau De Parfum', volume: '100 ml',
  },
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === Number(id));

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState<string>('about');
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fafaf8] flex flex-col">
        <Headers />
        <div className="flex-1 flex flex-col items-center justify-center py-32 text-center">
          <span className="block w-8 h-px bg-[#C9A84C] mb-8" />
          <h2 className="text-3xl font-light italic text-[#1a1a1a] mb-5">Fragrance not found</h2>
          <a href="/collections" className="text-[11px] tracking-[0.25em] uppercase text-[#C9A84C] border-b border-[#C9A84C] pb-0.5 hover:opacity-70 transition-opacity duration-200">
            Back to Collection
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const discountPct = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordion: { key: string; title: string; content: React.ReactNode }[] = [
    {
      key: 'about',
      title: 'About This Fragrance',
      content: <p className="text-[#6b6560] text-sm leading-relaxed">{product.description}</p>,
    },
    {
      key: 'details',
      title: 'Fragrance Details',
      content: (
        <div className="space-y-0">
          {[
            ['Concentration', product.concentration],
            ['Volume', product.volume],
            ['Origin', 'Crafted in France'],
            ['Longevity', '8–10 Hours'],
            ['Sillage', 'Moderate to Heavy'],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between py-3 border-b border-[#f0ebe3] last:border-none">
              <span className="text-[11px] tracking-[0.15em] uppercase text-[#a09890]">{k}</span>
              <span className="text-[13px] text-[#3d3935]">{v}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: 'delivery',
      title: 'Delivery & Returns',
      content: (
        <ul className="space-y-3">
          {[
            'Free shipping on all orders across India',
            'Delivered within 3–5 business days',
            'Hassle-free 7-day return policy',
            'All products 100% authentic & quality-checked',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#6b6560]">
              <svg className="w-3.5 h-3.5 text-[#C9A84C] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Headers />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">

        <div className="flex items-center gap-2.5 text-[11px] tracking-[0.15em] uppercase text-[#a09890] mb-10">
          <a href="/" className="hover:text-[#C9A84C] transition-colors duration-200">Home</a>
          <span>/</span>
          <a href="/collections" className="hover:text-[#C9A84C] transition-colors duration-200">Collections</a>
          <span>/</span>
          <span className="text-[#3d3935] line-clamp-1 max-w-[200px] sm:max-w-none">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          <div className="lg:sticky lg:top-28 self-start">
            <div className="relative overflow-hidden bg-[#f5f0e8] aspect-square group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 bg-[#0d0d0d] text-white text-[9px] px-3 py-1.5 tracking-[0.2em] uppercase">
                  {product.badge}
                </span>
              )}
              {discountPct && (
                <span className="absolute top-4 right-4 z-10 bg-[#C9A84C] text-[#0d0d0d] text-[9px] px-2.5 py-1.5 tracking-widest font-medium">
                  −{discountPct}%
                </span>
              )}
            </div>
          </div>

          <div>
            <span className="block w-7 h-px bg-[#C9A84C] mb-5" />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light italic text-[#1a1a1a] leading-tight mb-5">
              {product.name}
            </h1>

            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <svg className="w-3.5 h-3.5 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="text-[11px] tracking-[0.15em] text-[#a09890]">4.5 · 128 reviews</span>
            </div>

            <div className="flex items-baseline gap-3 pb-7 border-b border-[#e8e0d5]">
              <span className="text-2xl font-medium text-[#1a1a1a] tracking-wide">
                ₹ {product.price.toLocaleString()}
              </span>
              {product.oldPrice && (
                <span className="text-[#a09890] line-through text-base">
                  ₹ {product.oldPrice.toLocaleString()}
                </span>
              )}
              {discountPct && (
                <span className="text-[12px] text-[#C9A84C] tracking-wide">Save {discountPct}%</span>
              )}
            </div>

            <div className="py-6 border-b border-[#e8e0d5]">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#a09890]">
                {product.volume} · {product.concentration} · Crafted in France
              </p>
            </div>

            <div className="flex items-center gap-6 py-6 border-b border-[#e8e0d5]">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#a09890]">Quantity</span>
              <div className="flex items-center border border-[#e8e0d5]">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-[#1a1a1a] hover:text-[#C9A84C] transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M5 12h14" />
                  </svg>
                </button>
                <span className="w-10 text-center text-sm font-medium text-[#1a1a1a]">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[#1a1a1a] hover:text-[#C9A84C] transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 py-7 border-b border-[#e8e0d5]">
              <button className="flex-1 bg-[#0d0d0d] text-white text-[11px] tracking-[0.3em] uppercase py-4 hover:bg-[#C9A84C] transition-colors duration-300">
                Add to Cart
              </button>
              <button
                onClick={() => setWishlisted((w) => !w)}
                className={`flex items-center justify-center gap-2 px-7 py-4 border text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${
                  wishlisted
                    ? 'border-[#C9A84C] text-[#C9A84C]'
                    : 'border-[#e8e0d5] text-[#3d3935] hover:border-[#C9A84C] hover:text-[#C9A84C]'
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill={wishlisted ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
                </svg>
                {wishlisted ? 'Wishlisted' : 'Wishlist'}
              </button>
            </div>

            <div className="pt-8 pb-6 border-b border-[#e8e0d5]">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#a09890] mb-6">Fragrance Notes</p>
              <div className="grid grid-cols-3 gap-6">
                {([
                  { label: 'Top', notes: product.notes.top },
                  { label: 'Middle', notes: product.notes.middle },
                  { label: 'Base', notes: product.notes.base },
                ] as const).map(({ label, notes }) => (
                  <div key={label}>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-3">{label}</p>
                    <ul className="space-y-2">
                      {notes.map((note) => (
                        <li key={note} className="text-[12px] text-[#3d3935] tracking-wide leading-snug">{note}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {accordion.map(({ key, title, content }) => (
                <div key={key} className="border-b border-[#e8e0d5]">
                  <button
                    onClick={() => setOpen((o) => (o === key ? '' : key))}
                    className="w-full flex items-center justify-between py-5 text-left group/acc"
                  >
                    <span className="text-[12px] tracking-[0.2em] uppercase text-[#1a1a1a] group-hover/acc:text-[#C9A84C] transition-colors duration-200">
                      {title}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#a09890] transition-transform duration-300 ${open === key ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {open === key && <div className="pb-6">{content}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-[#e8e0d5]">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="block w-7 h-px bg-[#C9A84C] mb-4" />
              <h2 className="text-3xl md:text-4xl font-light italic text-[#1a1a1a]">You May Also Like</h2>
            </div>
            <a href="/collections" className="hidden sm:flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#6b6560] hover:text-[#C9A84C] transition-colors duration-200 group/link">
              <span>View All</span>
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {related.map((p) => {
              const dPct = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : null;
              return (
                <a key={p.id} href={`/collections/${p.id}`} className="group cursor-pointer">
                  <div className="relative overflow-hidden bg-[#f5f0e8] aspect-3/4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    {p.badge && (
                      <span className="absolute top-3 left-3 z-10 bg-[#0d0d0d] text-white text-[9px] px-2.5 py-1 tracking-[0.18em] uppercase">
                        {p.badge}
                      </span>
                    )}
                    {dPct && (
                      <span className="absolute top-3 right-3 z-10 bg-[#C9A84C] text-[#0d0d0d] text-[9px] px-2 py-1 tracking-widest font-medium">
                        −{dPct}%
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-3">
                      <div className="w-full bg-[#0d0d0d] text-white text-[10px] tracking-[0.2em] uppercase py-3 text-center">
                        View Product
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1.5">
                    <p className="text-[13px] text-[#3d3935] leading-snug line-clamp-2 tracking-wide">{p.name}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-[14px] font-medium text-[#1a1a1a]">₹ {p.price.toLocaleString()}</span>
                      {p.oldPrice && <span className="text-[#a09890] line-through text-[13px]">₹ {p.oldPrice.toLocaleString()}</span>}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
