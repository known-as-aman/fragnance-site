"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "MEN",
    "WOMEN",
    "COLLECTIONS",
    "GIFTING",
    "FASTRACK FRAGRANCES",
    "SKINN BLOG",
    "SALE",
  ];

  return (
    <header className="w-full border-b">

      {/* Top Announcement Bar */}
      <div className="bg-pink-800 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-center py-2.5 px-4">
          <p className="text-center">
            Midnight Sale is LIVE &nbsp; | &nbsp; Flat 15% Off Our Best-Selling
            Fragrances
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="border rounded-full w-7 h-7 flex items-center justify-center text-sm">
              S
            </div>
            <span className="font-semibold tracking-widest text-lg">
              SKINN
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`hover:text-pink-700 transition ${
                  item === "SALE" ? "text-red-600" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <line
                  x1="21"
                  y1="21"
                  x2="16.65"
                  y2="16.65"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {/* Account */}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="7" r="4" strokeWidth="2" />
                <path
                  strokeWidth="2"
                  d="M5.5 21a6.5 6.5 0 0113 0"
                />
              </svg>
            </button>

            {/* Wishlist */}
            <button className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"
                />
              </svg>

              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </button>

            {/* Cart */}
            <button className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path
                  strokeWidth="2"
                  d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"
                />
              </svg>

              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col gap-3 text-sm font-medium">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`hover:text-pink-700 ${
                    item === "SALE" ? "text-red-600" : ""
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}