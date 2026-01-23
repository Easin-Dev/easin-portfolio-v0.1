"use client";

import React, { useState, useEffect } from "react";

// --- Developer Information ---
const DEVELOPER_NAME = "Easin Arafat";
const DEVELOPER_TAGLINE = "Developer & Founder, ScaleUp Web";

const navLinks = [
  { name: "Skills", url: "#skills" },
  { name: "Projects", url: "#projects" },
  { name: "Services", url: "#services" },
  { name: "About", url: "#about" },
  { name: "Contact", url: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // স্ক্রল করলে নববারের ব্যাকগ্রাউন্ড কিছুটা পরিবর্তন হবে (UX ভালো করার জন্য)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx="true">{`
        .liquid-glass-nav {
          background: ${scrolled ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.3)"};
          backdrop-filter: blur(12px) saturate(180%) url(#displacementFilterNavbar);
          -webkit-backdrop-filter: blur(12px) saturate(180%) url(#displacementFilterNavbar);
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease-in-out;
        }

        .liquid-glass-btn {
          background: rgba(59, 130, 246, 0.1);
          backdrop-filter: blur(5px) url(#displacementFilterNavbar);
          -webkit-backdrop-filter: blur(5px) url(#displacementFilterNavbar);
          border: 1px solid rgba(59, 130, 246, 0.3) !important;
          transition: all 0.3s ease;
        }

        .liquid-glass-btn:hover {
          background: rgba(59, 130, 246, 0.2) !important;
          transform: translateY(-1px);
        }
      `}</style>

      {/* SVG Filter: এই ফিল্টারটি নববারের ভেতরেই রাখা হয়েছে যাতে অন্য কম্পোনেন্টে ঝামেলা না করে */}
      <svg className="hidden">
        <filter id="displacementFilterNavbar">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
        </filter>
      </svg>

      <nav className={`fixed top-0 left-0 w-full z-[1000] liquid-glass-nav ${scrolled ? "h-16 shadow-lg" : "h-20"}`}>
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">

          {/* Brand Identity */}
          <div className="flex flex-col">
            <a href="/" className="text-xl md:text-2xl font-black text-blue-600 tracking-tighter leading-none">
              {DEVELOPER_NAME}
            </a>
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mt-1">
              {DEVELOPER_TAGLINE}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-800 text-sm font-bold hover:text-blue-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:width-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#services" className="px-5 py-2 text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all">
              Agency
            </a>
            <a href="#contact" className="px-5 py-2 text-sm font-bold rounded-full liquid-glass-btn text-blue-600">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-2xl overflow-hidden">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <a href="#services" className="text-center py-3 bg-blue-600 text-white rounded-xl font-bold text-sm">Agency</a>
                <a href="#contact" className="text-center py-3 liquid-glass-btn text-blue-600 rounded-xl font-bold text-sm">Hire Me</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;