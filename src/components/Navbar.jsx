"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink, Globe, ArrowRight } from "lucide-react";

const DEVELOPER_NAME = "Easin Arafat";
const DEVELOPER_TAGLINE = "Full-Stack Web Architect";

const navLinks = [
  { name: "Services", url: "/services" },
  { name: "Projects", url: "/projects" },
  { name: "Blogs", url: "/blogs" },
  { name: "About", url: "/#about" },
  { name: "Contact", url: "/#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          background: ${scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent"};
          backdrop-filter: blur(16px) saturate(180%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-container {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          transform: ${isMenuOpen ? "translateY(0)" : "translateY(-15px)"};
          opacity: ${isMenuOpen ? "1" : "0"};
          pointer-events: ${isMenuOpen ? "auto" : "none"};
        }

        .nav-underline {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #2563eb;
          transition: width 0.3s ease;
        }

        .nav-link:hover .nav-underline {
          width: 100%;
        }
      `}</style>

      {/* Navbar height reduced: h-16 for scrolled, h-20 for default */}
      <nav className={`fixed top-0 left-0 w-full z-[1000] liquid-glass-nav ${scrolled ? "h-16 shadow-sm border-b border-gray-100" : "h-20"}`}>
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between">

          {/* Brand Identity */}
          <div className="flex flex-col">
            <Link href="/" className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter leading-none hover:text-blue-600 transition-colors">
              {DEVELOPER_NAME}
            </Link>
            <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.25em] mt-1.5">
              {DEVELOPER_TAGLINE}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="nav-link relative text-[13px] font-extrabold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition-all"
              >
                {link.name}
                <span className="nav-underline"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://scaleupweb.netlify.app/"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <Globe className="h-3.5 w-3.5" />
              ScaleUp Web
            </Link>

            <Link
              href="https://www.fiverr.com/easin_dev"
              target="_blank"
              className="px-5 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl text-white bg-gray-900 hover:bg-gray-800 shadow-md transition-all active:scale-95"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button - Optimized Size */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-900"
          >
            <div className="space-y-1.2">
              <span className={`block w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className="lg:hidden absolute top-full left-0 w-full px-4 pt-3 mobile-menu-container">
          <div className="bg-white/95 backdrop-blur-3xl rounded-[2.5rem] border border-white shadow-2xl p-8">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-black uppercase tracking-widest text-gray-800 hover:text-blue-600 transition-all flex items-center justify-between"
                >
                  {link.name}
                  <ArrowRight className="h-4 w-4 opacity-20" />
                </Link>
              ))}

              <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  href="https://scaleupweb.netlify.app/"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-blue-50 text-blue-700 rounded-xl font-black text-[10px] uppercase tracking-widest"
                >
                  <Globe className="h-4 w-4" /> ScaleUp Web
                </Link>
                <Link
                  href="https://www.fiverr.com/easin_dev"
                  className="w-full flex items-center justify-center py-4 bg-gray-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg"
                >
                  Hire on Fiverr
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;