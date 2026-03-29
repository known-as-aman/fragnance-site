"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "MEN", href: "#" },
    { label: "WOMEN", href: "#" },
    { label: "COLLECTIONS", href: "/collections" },
    { label: "GIFTING", href: "#" },
    // { label: "FASTRACK FRAGRANCES", href: "#" },
    // { label: "SKINN BLOG", href: "#" },
    // { label: "SALE", href: "#" },
  ];

  return (
    <header className="w-full">

      <div className="bg-[#0d0d0d] text-white text-xs tracking-[0.2em]">
        <div className="max-w-7xl mx-auto flex justify-center py-3 px-4">
          <p className="text-center font-light">
            MIDNIGHT SALE IS LIVE &nbsp;&nbsp;|&nbsp;&nbsp; FLAT 15% OFF OUR BEST-SELLING FRAGRANCES
          </p>
        </div>
      </div>

      <div className="bg-[#F6F5F2] border-b border-[#E2DFDA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[68px]">

            <button
              className="lg:hidden p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ATTARO" className="w-9 h-9 object-contain" />
              <span className="tracking-[0.35em] text-[15px] font-medium text-[#0d0d0d]">
                ATTARO
              </span>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.15em]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#C9A84C] after:transition-all after:duration-300 hover:after:w-full ${
                  item.label === "SALE" ? "text-[#8B1A1A]" : "text-[#1a1a1a] hover:text-[#C9A84C]"
                }`}
              >
                {item.label}
              </a>
            ))}
            </nav>

            <div className="flex items-center gap-5">

              <button className="text-[#1a1a1a] hover:text-[#C9A84C] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              <button className="text-[#1a1a1a] hover:text-[#C9A84C] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a6.5 6.5 0 0113 0" />
                </svg>
              </button>

              <button className="relative text-[#1a1a1a] hover:text-[#C9A84C] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-[#C9A84C] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-medium">
                  0
                </span>
              </button>

              <button className="relative text-[#1a1a1a] hover:text-[#C9A84C] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-[#C9A84C] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-medium">
                  0
                </span>
              </button>

            </div>
          </div>

          {menuOpen && (
            <div className="lg:hidden border-t border-[#E2DFDA] py-6">
              <nav className="flex flex-col gap-5 text-xs tracking-[0.2em]">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    item.label === "SALE" ? "text-[#8B1A1A]" : "text-[#1a1a1a] hover:text-[#C9A84C]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
