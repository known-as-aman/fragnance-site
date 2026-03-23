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

        {/* <VideoSlider /> */}

        <ProductSlider products={newArrivals} title="New Arrivals" />
        <ProductSlider products={bestSellers} title="Best Sellers" />

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

            <section className="w-full bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[640px]">

            <div className="relative overflow-hidden h-[280px] sm:h-[380px] lg:h-auto">
              {data.map((item, i) => (
                <img
                  key={item.image}
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                  style={{ opacity: i === index ? 1 : 0 }}
                />
              ))}
              <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-r from-transparent to-[#0d0d0d] hidden lg:block" />
            </div>

            <div className="bg-[#0d0d0d] text-white relative flex items-center px-10 sm:px-14 lg:px-16 py-14 lg:py-0">

              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-2 lg:left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/35 hover:text-white border border-white/10 hover:border-white/40 transition-all duration-300"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              <div key={index} className="hero-text-enter w-full max-w-sm lg:max-w-md mx-auto lg:mx-0">

                <div className="flex items-center gap-3 mb-8 text-white/30">
                  <span
                    className="text-3xl font-light leading-none"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="w-6 h-px bg-white/20" />
                  <span className="text-xs tracking-[0.2em]">
                    {String(data.length).padStart(2, "0")}
                  </span>
                </div>

                <span className="block w-8 h-px bg-[#C9A84C] mb-6" />

                <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-light italic leading-tight mb-6 text-white">
                  {data[index].title}
                </h2>

                <p className="text-[#a8a09a] text-sm leading-relaxed mb-10">
                  {data[index].description}
                </p>

                <div className="flex items-center gap-3">
                  {data.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    >
                      <span
                        className={`block h-px transition-all duration-300 ${
                          i === index
                            ? "w-10 bg-[#C9A84C]"
                            : "w-5 bg-white/25 hover:bg-white/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-2 lg:right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/35 hover:text-white border border-white/10 hover:border-white/40 transition-all duration-300"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-4 h-4 rotate-180">
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

          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

              <div>
                <span className="block w-8 h-px bg-[#C9A84C] mb-7" />
                <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-light italic text-[#1a1a1a] leading-[1.1] mb-6">
                  Join the House<br />of ATTARO
                </h2>
                <p className="text-[#6b6560] text-sm leading-relaxed max-w-sm">
                  Be the first to discover new arrivals, member-only offers, and curated stories from the world of fine fragrance — delivered with the elegance of the house itself.
                </p>

                <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-[#e8e0d5]">
                  {[
                    { stat: "12,000+", label: "Community\nMembers" },
                    { stat: "Weekly", label: "Curated\nUpdates" },
                    { stat: "Exclusive", label: "Early\nAccess" },
                  ].map(({ stat, label }) => (
                    <div key={stat}>
                      <p
                        className="text-2xl font-light italic text-[#1a1a1a] leading-none mb-2"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        {stat}
                      </p>
                      <p
                        className="text-[10px] tracking-[0.18em] uppercase text-[#8b7d6b] leading-relaxed whitespace-pre-line"
                        style={{ fontFamily: "var(--font-jost), sans-serif" }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:pl-8">
                <p
                  className="text-[11px] tracking-[0.25em] uppercase text-[#8b7d6b] mb-6"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  Subscribe to our newsletter
                </p>

                <div className="flex flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-5 py-4 border border-[#d4c9b8] bg-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-200"
                  />
                  <button className="px-8 py-4 bg-[#0d0d0d] text-white text-[11px] tracking-[0.25em] uppercase hover:bg-[#C9A84C] transition-colors duration-300 whitespace-nowrap mt-3 sm:mt-0">
                    Subscribe
                  </button>
                </div>

                <p
                  className="text-[11px] text-[#a09890] tracking-wide mt-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  No spam. Unsubscribe anytime. By subscribing you agree to our&nbsp;
                  <a href="#" className="underline underline-offset-2 hover:text-[#C9A84C] transition-colors duration-200">
                    Privacy Policy
                  </a>.
                </p>

                <div className="mt-12 space-y-5">
                  {[
                    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Early access to new collections & limited drops" },
                    { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "Exclusive member discounts & private sale access" },
                    { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", text: "Curated fragrance stories & perfumer insights" },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                      </svg>
                      <p
                        className="text-[13px] text-[#4a4540] leading-snug"
                        style={{ fontFamily: "var(--font-jost), sans-serif" }}
                      >
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
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
              Explore ATTARO's Perfume Collection — Premium and Long-lasting Fragrances for Every Mood
            </h3>

            <p className="text-[#6b6560] leading-relaxed text-sm max-w-4xl">
              Welcome to the world of fragrances from ATTARO. Every fragrance in the ATTARO perfume collection
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
