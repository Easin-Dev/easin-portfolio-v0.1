"use client";

import React, { useState } from "react";
import HeroSection from "./HeroSection";

// --- Developer Information ---
const DEVELOPER_NAME = "Easin Arafat";
const DEVELOPER_TAGLINE = "Developer & Founder, ScaleUp Web";

// Navigation Links Array (Dynamic structure maintained)
const navLinks = [
  { name: "Skills", url: "#skills" },
  { name: "Projects", url: "#projects" },
  { name: "Services", url: "#services" }, // Agency focused
  { name: "About", url: "#about" },
  { name: "Contact", url: "#contact" },
];

// Renamed Navbar component to App (platform convention) and included main content
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Main background White
    <div className="bg-white text-gray-900 font-sans">
      {/* Global Styles for smooth scroll, font, and custom gradients */}
      <style jsx="true" global="true">{`
        html {
          scroll-behavior: smooth;
          font-family: "Inter", sans-serif;
        }
        /* Custom Gradient for Hero Section (To enhance Glassmorphism) */
        #home-gradient {
          /* UPDATED: Changed Teal/Cyan shades to Blue shades for the background gradient */
          background: radial-gradient(
              circle at 10% 90%,
              rgba(59, 130, 246, 0.1) 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(96, 165, 250, 0.1) 0%,
              transparent 40%
            ),
            linear-gradient(135deg, #ffffff, #f0f0f0);
        }
        /* UPDATED: Custom Styling for Liquid Glass Effect (Using SVG Filter) */
        .liquid-glass {
          /* Low opacity background */
          background-color: rgba(255, 255, 255, 0.1);
          /* Use both CSS blur and the SVG filter for the liquid effect */
          backdrop-filter: brightness(1.1) blur(2px) url(#displacementFilter);
          -webkit-backdrop-filter: brightness(1.1) blur(2px)
            url(#displacementFilter);

          /* Inner and Outer shadow for depth and shine */
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1),
            inset 0 0 0 1px rgba(255, 255, 255, 0.3);
          /* Subtle border highlight */
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);

          /* Ensures the glass has a clear background to distort */
          overflow: hidden;
        }

        /* NEW: Custom Styling for Liquid Glass Button */
        .liquid-glass-button {
          background-color: rgba(
            255,
            255,
            255,
            0.1
          ); /* Slightly transparent white background */
          backdrop-filter: brightness(1.1) blur(2px) url(#displacementFilter);
          -webkit-backdrop-filter: brightness(1.1) blur(2px)
            url(#displacementFilter);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1),
            inset 0 0 0 1px rgba(255, 255, 255, 0.3);
          border: none !important; /* Remove default border to use glass effect */
          color: #2563eb !important; /* Ensure blue text color */
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .liquid-glass-button:hover {
          background-color: rgba(
            255,
            255,
            255,
            0.2
          ) !important; /* Slightly more opaque on hover */
          transform: translateY(-1px);
        }
      `}</style>

      {/* SVG Filter Definition for Liquid Distortion Effect */}
      <svg style={{ display: "none" }}>
        <filter id="displacementFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.011 0.011"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="20" // Reduced scale for subtle effect (was 200, which is too strong)
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* The main Navbar component content. Uses the new 'liquid-glass' custom class. */}
      <nav className="fixed top-0 left-0 w-full z-50 liquid-glass shadow-xl">
        {/* Navigation Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative z-10">
          {/* 1. Logo and Dual Identity Brand Section (Visible on all screens) */}
          <div className="flex-shrink-0 flex flex-col items-start justify-center">
            {/* Main Title: Easin Arafat (Bigger Font, Blue color) */}
            <a
              href="/"
              className="text-xl font-extrabold text-blue-600 hover:text-blue-700 transition duration-300 leading-none"
            >
              {DEVELOPER_NAME}
            </a>

            {/* Sub Title/Tagline: Role and Agency (Smaller Font, Darker Gray) */}
            <span className="text-xs font-medium text-gray-700 leading-none mt-1">
              {DEVELOPER_TAGLINE}
            </span>
          </div>

          {/* 2. Desktop Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    // Link text color is dark on light glass background
                    className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-white/50 hover:text-gray-900"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Desktop Call to Action (CTA) Section */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Primary CTA for Agency Services (Solid Blue) */}
            <a
              href="#services"
              className="px-3 py-1.5 text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md shadow-blue-500/50"
            >
              Explore Agency
            </a>

            {/* Secondary CTA for Direct Hire / Freelance (Liquid Glass Button) */}
            <a
              href="#contact"
              className="px-3 py-1.5 text-sm font-semibold rounded-lg liquid-glass-button transition duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle Button (Visible on mobile only) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              aria-label="Toggle Menu"
            >
              {/* Menu Icon (Hamburger/Close) */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 4. Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 pb-3 border-t border-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 hover:text-gray-900 transition duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3 space-y-2 border-t border-gray-200 mt-2">
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-4 py-2 text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Explore Agency
              </a>
              {/* Mobile Hire Me button also with liquid glass effect */}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-4 py-2 text-sm font-semibold rounded-lg liquid-glass-button transition duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default App;
