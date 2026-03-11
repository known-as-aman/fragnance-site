"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">SKINN</h3>
            <p className="text-gray-400 text-sm">Premium fragrances by Titan</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Deodorants</a></li>
              <li><a href="#" className="hover:text-white">Collections</a></li>
              <li><a href="#" className="hover:text-white">Women</a></li>
              <li><a href="#" className="hover:text-white">Men</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">HELP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">ABOUT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 SKINN by Titan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}