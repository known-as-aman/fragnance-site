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
    <div className="min-h-screen bg-white">

      <Headers />
      <HeroCarousel />

      <div className="mx-auto">

        <section className="py-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">

            {/* FOR HER */}
            <a
              href="/women"
              className="group relative overflow-hidden rounded-xl h-[320px] md:h-[420px]"
            >
              <img
                src="/for-her.webp"
                alt="For Her"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">

                <h2 className="text-2xl md:text-3xl tracking-widest font-light">
                  FOR HER
                </h2>

                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-sm tracking-wide">Explore Collection</span>

                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* FOR HIM */}
            <a
              href="/men"
              className="group relative overflow-hidden rounded-xl h-[320px] md:h-[420px]"
            >
              <img
                src="/for-him.webp"
                alt="For Him"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">

                <h2 className="text-2xl md:text-3xl tracking-widest font-light">
                  FOR HIM
                </h2>

                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-sm tracking-wide">Explore Collection</span>

                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
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

        <section className="pt-3 max-w-7xl mx-auto"> <ProductSlider products={newArrivals} title="New Arrivals" /></section>
        <section className="max-w-7xl mx-auto"> <ProductSlider products={bestSellers} title="Best Sellers" /></section>

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

        <section className="w-full bg-white py-20">

          <div className="max-w-7xl mx-auto px-4">


            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-semibold">
                What Our Customers Say
              </h2>
              <p className="text-gray-500 mt-3">
                Real experiences from fragrance lovers across India
              </p>
            </div>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide">

              <div className="min-w-[320px] max-w-[360px] bg-[#fafafa] p-8 rounded-xl border border-gray-300">

                <div className="flex items-center gap-4 mb-5">
                  <img
                    src="/for-him.webp"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Riya Sharma</p>
                    <p className="text-sm text-gray-500">Delhi</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  I've tried many perfumes but attaro fragrances feel incredibly premium.
                  The fragrance lasts all day and I constantly receive compliments.
                </p>

              </div>

              <div className="min-w-[320px] max-w-[360px] bg-[#fafafa] p-8 rounded-xl border border-gray-300">

                <div className="flex items-center gap-4 mb-5">
                  <img
                    src="/for-him.webp"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Arjun Mehta</p>
                    <p className="text-sm text-gray-500">Mumbai</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  The fragrance quality is outstanding. It smells luxurious and
                  performs better than many international brands I've used.
                </p>

              </div>

              <div className="min-w-[320px] max-w-[360px] bg-[#fafafa] p-8 rounded-xl border border-gray-300">

                <div className="flex items-center gap-4 mb-5">
                  <img
                    src="/for-him.webp"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Neha Kapoor</p>
                    <p className="text-sm text-gray-500">Bangalore</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Absolutely love the elegance of these perfumes. Beautiful packaging
                  and the scent lasts surprisingly long.
                </p>

              </div>

              <div className="min-w-[320px] max-w-[360px] bg-[#fafafa] p-8 rounded-xl border border-gray-300">

                <div className="flex items-center gap-4 mb-5">
                  <img
                    src="/for-him.webp"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Kabir Singh</p>
                    <p className="text-sm text-gray-500">Chandigarh</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  The fragrance profile is sophisticated and long-lasting. Definitely
                  my new everyday scent.
                </p>

              </div>

            </div>

          </div>

        </section>

        <div className="w-screen mx-auto flex gap-12 items-center bg-black text-white px-14">

          <div className="w-3/5 aspect-video py-10 h-[500px]">
            <iframe
              className="w-full h-full rounded-sm p-1 border-2 border-gray-800"
              src="https://www.youtube.com/embed/zyOdppVsPRY?si=zz8qucnmvNKDRKWx"
              title="Notes From A Perfumer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>


          <div className="w-2/5">

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              THE SCENTED <br /> WORLD OF ATTARO
            </h2>

            <p className="text-gray-300 leading-relaxed text-md">
              Perfumery is a rare art and it's time to meet an artist extraordinaire.
              Presenting #NotesFromAPerfumer, featuring principal perfumer Ilias
              Ermenidis, the creative genius behind attaro Noura perfumes, in
              conversation with yours truly Mira Kapoor.
            </p>

          </div>

        </div>

        <section className="w-full bg-gray-100">

          <div className="max-w-6xl mx-auto py-16 px-4 text-center">

            <h2 className="text-2xl md:text-3xl font-medium mb-10">
              Find a store near you
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">

              <button className="flex items-center justify-center gap-2 bg-pink-800 text-white px-10 py-4 font-medium hover:bg-pink-900 transition">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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
                  className="px-4 py-4 w-full md:w-[300px] border border-gray-300 focus:outline-none"
                />

                <button className="px-6 border border-gray-700 font-medium hover:bg-gray-900 hover:text-white transition">
                  Search
                </button>

              </div>

            </div>
          </div>

          <div className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">

              <div className="flex items-start gap-4">

                <svg
                  className="w-10 h-10 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 7l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3z" />
                </svg>

                <div>
                  <h4 className="font-semibold text-sm">100% ORIGINAL</h4>
                  <p className="text-sm text-gray-600">
                    All products are original and go through strict quality check.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <svg
                  className="w-10 h-10 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 7h13l3 3v7H3z" />
                  <path d="M7 7v5h10" />
                </svg>

                <div>
                  <h4 className="font-semibold text-sm">7 Day RETURN</h4>
                  <p className="text-sm text-gray-600">
                    Use our hassle free method to return.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <svg
                  className="w-10 h-10 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 7h13l3 3v7H3z" />
                  <path d="M16 16l2 2 3-3" />
                </svg>

                <div>
                  <h4 className="font-semibold text-sm">Shipping</h4>
                  <p className="text-sm text-gray-600">
                    Free Shipping & Returns all across India
                  </p>
                </div>

              </div>

            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-12">

            <h3 className="text-lg md:text-xl font-medium mb-4">
              Explore attaro by Titan's Perfume Collection - Premium and Long-lasting Fragrances for Every Mood
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Welcome to the world of fragrances from attaro - House of TITAN. Every fragrance in the attaro perfume collection
              is an invitation to embrace elegance and timeless luxury. Crafted in France with meticulous care, attaro perfumes
              blend premium quality with contemporary flair, offering long-lasting perfumes that redefine sophistication.
            </p>

            <div className="flex justify-end mt-6">
              <button className="text-pink-700 font-medium tracking-wide hover:underline">
                KNOW MORE
              </button>
            </div>

          </div>

        </section>

      </div>

      <Footer />

    </div>
  );
}
