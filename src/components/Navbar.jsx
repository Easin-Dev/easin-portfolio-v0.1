"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// এখানে ArrowRight যোগ করা হয়েছে
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
          background: ${scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent"};
          backdrop-filter: blur(16px) saturate(180%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-container {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          transform: ${isMenuOpen ? "translateY(0)" : "translateY(-15px)"};
          opacity: ${isMenuOpen ? "1" : "0"};
          pointer-events: ${isMenuOpen ? "auto" : "none"};
        }
      `}</style>

      <nav className={`fixed top-0 left-0 w-full z-[1000] liquid-glass-nav ${scrolled ? "h-20 shadow-sm border-b border-gray-100" : "h-24"}`}>
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between">

          {/* Brand Identity */}
          <div className="flex flex-col">
            <Link href="/" className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter leading-none hover:text-blue-600 transition-colors">
              {DEVELOPER_NAME}
            </Link>
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.25em] mt-2">
              {DEVELOPER_TAGLINE}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="relative text-sm font-extrabold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://scaleupweb.netlify.app/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 text-[11px] font-black uppercase tracking-widest rounded-xl bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <Globe className="h-4 w-4" />
              ScaleUp Web
            </Link>

            <Link
              href="https://www.fiverr.com/easin_dev"
              target="_blank"
              className="px-6 py-3 text-[11px] font-black uppercase tracking-widest rounded-xl text-white bg-gray-900 hover:bg-gray-800 shadow-lg transition-all active:scale-95"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-900 shadow-sm"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className="lg:hidden absolute top-full left-0 w-full px-4 pt-4 mobile-menu-container">
          <div className="bg-white/95 backdrop-blur-3xl rounded-[3rem] border border-white shadow-2xl p-10">
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-black uppercase tracking-widest text-gray-800 hover:text-blue-600 transition-all flex items-center justify-between"
                >
                  {link.name}
                  <ArrowRight className="h-5 w-5 opacity-20" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;