"use client";   
import React, { useState, useEffect } from 'react';
// Use-usar ti lucide-react para iti icon
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Funksion tapno ma-check ti scroll position
  const toggleVisibility = () => {
    // Ipakita ti button no ti scroll ti panid ket ad-adu ngem 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Funksion tapno ma-scroll ti pinag-ngato nga addaan smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Dalusan ti event listener ti panag-unmount ti component
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 ">
      <button
        type="button"
        onClick={scrollToTop}
        // Custom color: #6B32F7 ken liquid glass styling
        className={`
          p-3 rounded-full 
          shadow-xl transition-opacity duration-300 transform 
          flex items-center justify-center space-3
          focus:outline-none focus:ring-4 focus:ring-[#6B32F7]/50
          bg-opacity-40 backdrop-filter backdrop-blur-md 
          border border-opacity-30 border-white
          text-white
          hover:bg-opacity-60
          hover:scale-105
          active:scale-95
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
        // I-apply ti espisipiko a custom color (#6B32F7)
        style={{ backgroundColor: '#6B32F7' }}
        aria-label="Scroll to Top"
      >
        <ArrowUp className="w-6 h-6" />
        Back to Top
      </button>
    </div>
  );
};

export default ScrollToTop;
