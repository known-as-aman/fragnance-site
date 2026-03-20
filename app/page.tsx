'use client';

import { useState } from 'react';
import Headers from './_components/Headers';
import HeroCarousel from './_components/Carousel';
import Footer from './_components/Footer';
import VideoSlider from './_components/Video-Slider';
import ProductSlider, { Product } from './_components/Product-Slider';


type Slide = {
  image: string;
  title: string;
  description: string;
};

type Props = {
  slides?: Slide[];
};


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [index, setIndex] = useState(0);

  const data = [
    {
      image: "/art-of-perfume.webp",
      title: "THE ART OF PERFUMES",
      description:
        "Are you aware that the way you smell is equally important as the way you dress? According to science, the sense of smell is something that evokes strong emotions. That’s how significant perfume is! Therefore, you should be paying more attention to the kind of fragrances you choose to wear for different occasions.",
    },
    {
      image: "/art-of-perfume-2.webp",
      title: "THE SCIENCE OF FRAGRANCE",
      description:
        "Fragrance creation blends art and chemistry. Each perfume note is designed carefully to unfold beautifully over time, creating a unique sensory experience.",
    },
  ];

  const prev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  // const trendingProducts = [
  //   { name: 'attaro Noura Nectar Eau De Parfum for her - 100 ml', price: '₹ 3,295', image: '/product1.jpg' },
  //   { name: 'Classic Nova for Men- 100 ml', price: '₹ 3,095', image: '/product2.jpg' },
  //   { name: 'Classic Aura for Women- 100 ml', price: '₹ 3,095', image: '/product3.jpg' },
  //   { name: 'attaro 247 Aqua 100 ml Eau De Parfum', price: '₹ 1,396', oldPrice: '₹ 1,745', discount: '20% Off', image: '/product4.jpg' },
  // ];

  // const topSellers = [
  //   { name: 'attaro Nox Oud 100 ml Eau De Parfum For him', price: '₹ 4,995', image: '/product5.jpg' },
  //   { name: 'attaro by Titan Nude 100 ML Perfume for Women EDP', price: '₹ 2,795', image: '/product6.jpg' },
  //   { name: 'attaro Noura Iris Eau De Parfum For her', price: '₹ 3,295', image: '/product7.jpg' },
  //   { name: 'attaro by Titan Steele 100 ML Perfume for Men EDP', price: '₹ 2,795', image: '/product8.jpg' },
  // ];

  const newArrivals: Product[] = [
    {
      id: 1,
      name: "ATTARO Noura Nectar Eau De Parfum for Her",
      image: "/product/product-1.png",
      price: 999,
      badge: "New Drop",
    },
    {
      id: 2,
      name: "Classic Nova for Men - 100 ml",
      image: "/product/product-2.png",
      price: 999,
    },
    {
      id: 3,
      name: "Classic Aura for Women - 100 ml",
      image: "/product/product-3.png",
      price: 999,
    },
    {
      id: 4,
      name: "ATTARO 24Seven Aqua 100 ml Eau De Parfum",
      image: "/product/product-4.png",
      price: 999,
      // oldPrice: 999,
      badge: "Best-Seller",
    },
  ];

  const bestSellers: Product[] = [
    {
      id: 1,
      name: "ATTARO Noura Nectar Eau De Parfum for Her",
      image: "/product/product-5.png",
      price: 999,
      badge: "New Drop",
    },
    {
      id: 2,
      name: "Classic Nova for Men - 100 ml",
      image: "/product/product-6.png",
      price: 999,
    },
    {
      id: 3,
      name: "Classic Aura for Women - 100 ml",
      image: "/product/product-7.png",
      price: 999,
    },
    {
      id: 4,
      name: "ATTARO 24Seven Aqua 100 ml Eau De Parfum",
      image: "/product/product-8.png",
      price: 999,
      oldPrice: 1745,
      badge: "Best-Seller",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8]">

      <Headers />
      <HeroCarousel />

      <div className="mx-auto">

        <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-3">

            <a
              href="/women"
              className="group relative overflow-hidden h-[400px] md:h-[560px]"
            >
              <img
                src="/for-her.webp"
                alt="For Her"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-transparent" />

              <div className="relative z-10 h-full flex flex-col items-center justify-end pb-12 text-white text-center">

                <h2 className="text-4xl md:text-5xl tracking-[0.3em] font-thin italic mb-4">
                  For Her
                </h2>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  <span className="text-[11px] tracking-[0.25em] uppercase border-b border-white/50 pb-0.5">Explore Collection</span>
                  <svg
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            <a
              href="/men"
              className="group relative overflow-hidden h-[400px] md:h-[560px]"
            >
              <img
                src="/for-him.webp"
                alt="For Him"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-transparent" />

              <div className="relative z-10 h-full flex flex-col items-center justify-end pb-12 text-white text-center">

                <h2 className="text-4xl md:text-5xl tracking-[0.3em] font-thin italic mb-4">
                  For Him
                </h2>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  <span className="text-[11px] tracking-[0.25em] uppercase border-b border-white/50 pb-0.5">Explore Collection</span>
                  <svg
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

          </div>
        </section>

        <VideoSlider />

        <section className="max-w-7xl mx-auto"><ProductSlider products={newArrivals} title="New Arrivals" /></section>
        <section className="max-w-7xl mx-auto"><ProductSlider products={bestSellers} title="Best Sellers" /></section>

        <section className="w-full relative">

          <div className="relative w-full h-[520px] md:h-[620px] backgroud-image-custom">

            <div className="absolute inset-0 flex items-center">

              <div className="max-w-7xl mx-auto w-full px-6">

                <div className="max-w-lg text-white flex flex-col items-center justify-center">

                  <h2 className="text-4xl md:text-4xl font-semibold leading-tight mb-2 text-center">
                    SOME GIFTS SPEAK <br /> BEYOND WORDS
                  </h2>

                  <p className="text-white/90 leading-relaxed text-md mb-6 text-center">
                    A gift that captures every feeling unexpressed, every word unsaid
                    and every emotion unknown, is a gift that lasts forever. Show your
                    loved ones how much they mean to you with fragrances as unique as
                    your bond, because some things are #BestSaidWithattaro
                  </p>

                  <button className="px-14 py-2.5 font-medium border border-white rounded-full hover:bg-white hover:text-black transition">
                    Gift Now
                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="w-full bg-[#2c2c2c] mb-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center">
            <div className="w-full h-[520px]">
              <img
                src={data[index].image}
                className="w-full h-[130%]"
              />
            </div>

            <div className="bg-[#2c2c2c] text-white h-[520px] flex items-center justify-center relative px-10">
              <button
                onClick={prev}
                className="absolute left-6 text-2xl opacity-70 hover:opacity-100"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              <div className="max-w-md text-center">
                <h2 className="text-3xl font-semibold mb-6">
                  {data[index].title}
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  {data[index].description}
                </p>

                <div className="flex justify-center gap-3 mt-10">
                  {data.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full ${i === index ? "bg-white" : "bg-gray-500"
                        }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={next}
                className="absolute right-6 text-2xl opacity-70 hover:opacity-100"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#faf8f4] py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">
              <span className="gold-line" />
              <h2 className="text-4xl md:text-5xl font-light italic text-[#1a1a1a]">
                What Our Customers Say
              </h2>
              <p className="text-[#8b7d6b] mt-4 text-xs tracking-[0.22em] uppercase">
                Real experiences from fragrance lovers across India
              </p>
            </div>

            <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4">

              {[
                { name: "Riya Sharma", city: "Delhi", review: "I've tried many perfumes but ATTARO fragrances feel incredibly premium. The fragrance lasts all day and I constantly receive compliments." },
                { name: "Arjun Mehta", city: "Mumbai", review: "The fragrance quality is outstanding. It smells luxurious and performs better than many international brands I've used." },
                { name: "Neha Kapoor", city: "Bangalore", review: "Absolutely love the elegance of these perfumes. Beautiful packaging and the scent lasts surprisingly long." },
                { name: "Kabir Singh", city: "Chandigarh", review: "The fragrance profile is sophisticated and long-lasting. Definitely my new everyday signature scent." },
              ].map((t) => (
                <div key={t.name} className="min-w-[290px] max-w-[320px] bg-white p-8 border border-[#e8e0d5]">

                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[#4a4540] text-sm leading-relaxed mb-6">
                    "{t.review}"
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-[#f0ebe3]">
                    <img
                      src="/for-him.webp"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-[#C9A84C]/20"
                    />
                    <div>
                      <p className="text-sm font-medium tracking-wide text-[#1a1a1a]">{t.name}</p>
                      <p className="text-[10px] text-[#8b7d6b] tracking-[0.2em] uppercase">{t.city}</p>
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        <div className="w-full flex flex-col lg:flex-row gap-16 items-center bg-[#0d0d0d] text-white px-8 lg:px-20 py-20">

          <div className="w-full lg:w-3/5 h-[340px] lg:h-[440px]">
            <iframe
              className="w-full h-full border border-[#C9A84C]/20"
              src="https://www.youtube.com/embed/zyOdppVsPRY?si=zz8qucnmvNKDRKWx"
              title="Notes From A Perfumer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="w-full lg:w-2/5">

            <span className="block w-10 h-px bg-[#C9A84C] mb-7" />

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 italic">
              The Scented <br /> World of Attaro
            </h2>

            <p className="text-[#a8a09a] leading-relaxed text-sm">
              Perfumery is a rare art and it's time to meet an artist extraordinaire.
              Presenting #NotesFromAPerfumer, featuring principal perfumer Ilias
              Ermenidis, the creative genius behind ATTARO Noura perfumes, in
              conversation with yours truly Mira Kapoor.
            </p>

          </div>

        </div>

        <section className="w-full bg-[#faf8f4]">

          <div className="max-w-6xl mx-auto py-20 px-6 text-center">

            <span className="gold-line" />
            <h2 className="text-3xl md:text-4xl font-light italic text-[#1a1a1a] mb-12">
              Find a Store Near You
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">

              <button className="flex items-center justify-center gap-2.5 bg-[#0d0d0d] text-white px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#C9A84C] transition-colors duration-300">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
                Use My Current Location
              </button>

              <div className="flex w-full md:w-auto">

                <input
                  type="text"
                  placeholder="Enter a pincode or city"
                  className="px-5 py-4 w-full md:w-[280px] border border-[#d4c9b8] bg-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-200"
                />

                <button className="px-7 bg-[#0d0d0d] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#C9A84C] transition-colors duration-300">
                  Search
                </button>

              </div>

            </div>
          </div>

          <div className="bg-[#0d0d0d]">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

              <div className="flex items-start gap-5">
                <svg
                  className="w-9 h-9 text-[#C9A84C] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 7l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3z" />
                </svg>
                <div>
                  <h4 className="text-[11px] tracking-[0.2em] uppercase text-white mb-2" style={{ fontFamily: 'var(--font-jost), sans-serif' }}>100% Original</h4>
                  <p className="text-sm text-[#8b8078] leading-relaxed">
                    All products are original and go through strict quality checks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <svg
                  className="w-9 h-9 text-[#C9A84C] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 7h13l3 3v7H3z" />
                  <path d="M7 7v5h10" />
                </svg>
                <div>
                  <h4 className="text-[11px] tracking-[0.2em] uppercase text-white mb-2" style={{ fontFamily: 'var(--font-jost), sans-serif' }}>7-Day Return</h4>
                  <p className="text-sm text-[#8b8078] leading-relaxed">
                    Use our hassle-free method to return.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <svg
                  className="w-9 h-9 text-[#C9A84C] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 7h13l3 3v7H3z" />
                  <path d="M16 16l2 2 3-3" />
                </svg>
                <div>
                  <h4 className="text-[11px] tracking-[0.2em] uppercase text-white mb-2" style={{ fontFamily: 'var(--font-jost), sans-serif' }}>Free Shipping</h4>
                  <p className="text-sm text-[#8b8078] leading-relaxed">
                    Free shipping & returns all across India.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-14">

            <h3 className="text-xl md:text-2xl font-light italic text-[#1a1a1a] mb-5">
              Explore ATTARO by Titan's Perfume Collection — Premium and Long-lasting Fragrances for Every Mood
            </h3>

            <p className="text-[#6b6560] leading-relaxed text-sm max-w-4xl">
              Welcome to the world of fragrances from ATTARO — House of TITAN. Every fragrance in the ATTARO perfume collection
              is an invitation to embrace elegance and timeless luxury. Crafted in France with meticulous care, ATTARO perfumes
              blend premium quality with contemporary flair, offering long-lasting perfumes that redefine sophistication.
            </p>

            <div className="flex justify-end mt-6">
              <button className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase hover:opacity-70 transition-opacity duration-200 border-b border-[#C9A84C] pb-0.5">
                Know More
              </button>
            </div>

          </div>

        </section>

      </div>

      <Footer />

    </div>
  );
}
