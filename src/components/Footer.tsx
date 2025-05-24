'use client';

import Link from 'next/link';
import { Home, Info, Briefcase, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E373B] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Company Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Thomson Roofers</h2>
          <p className="text-sm text-gray-400 mt-1">
            &copy; {new Date().getFullYear()} Thomson Roofers. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex md:flex-row flex-col gap-6 justify-start md:justify-center items-start sm:pl-0 pl-6 md:w-auto w-full">
          <Link href="/" className="flex items-center gap-2 hover:scale-105 transition">
            <Home size={18} /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 hover:scale-105 transition">
            <Info size={18} /> About
          </Link>
          <Link href="/services" className="flex items-center gap-2 hover:scale-105 transition">
            <Briefcase size={18} /> Services
          </Link>
          <Link href="/contact" className="flex items-center gap-2 hover:scale-105 transition">
            <Phone size={18} /> Contact
          </Link>
        </div>
      </div>

      {/* Bottom border or divider */}
      <div className="border-t border-gray-700 mt-6">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          Designed & Developed by <span className="text-white font-semibold">Code Wizards IT</span>
        </div>
      </div>
    </footer>
  );
}
