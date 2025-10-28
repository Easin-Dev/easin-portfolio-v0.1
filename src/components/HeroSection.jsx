"use client";
import React from "react";

// --- HeroSection Component ---
const HeroSection = ({ id }) => {
  // Data for the Marquee effect
  const marqueeData1 =
    "AY JAY GAY TIME TIME LINE TEXT ONE → AY JAY GAY TIME TIME LINE TEXT ONE → AY JAY GAY TIME TIME LINE TEXT ONE → AY JAY GAY TIME TIME LINE TEXT ONE";
  const marqueeData2 =
    "AY JAY GAY TIME TIME LINE TEXT TWO → AY JAY GAY TIME TIME LINE TEXT TWO → AY JAY GAY TIME TIME LINE TEXT TWO → AY JAY GAY TIME TIME LINE TEXT TWO";

  return (
    <>
      <style jsx="true" global="true">{`
        /* Custom CSS for the dual radial gradient background (Mesh Blob Effect) */
        .hero-background-gradient {
          background-color: hsla(0, 0%, 100%, 1); /* Shada (white) base */
          background-image:
                        /* Holud-Komola Blob (Niche Daane) - Updated to 100% 100% */ radial-gradient(
              at 100% 100%,
              hsla(45, 100%, 64%, 0.62) 0px,
              transparent 50%
            ),
            /* Beguni-Neel Blob (Niche Baame) - Updated HSL to 55% 63% and kept at 0% 100% */
              radial-gradient(
                at 0% 100%,
                hsla(255, 55%, 63%, 0.7) 0px,
                transparent 50%
              );
          background-attachment: fixed;
          /* SVG filter bebohar kore complex liquid glass effect (Apnar chaoa moto) */
          backdrop-filter: brightness(1.1) blur(2px) url(#displacementFilter);
          -webkit-backdrop-filter: brightness(1.1) blur(2px)
            url(#displacementFilter);
        }

        /* Custom CSS for the Grid Overlay (Upore Baame) */
        .grid-overlay {
          /* Grid cell size */
          --grid-size: 30px;
          /* Grid line color (halka neel/transparent) */
          --grid-color: rgba(30, 64, 175, 0.1);

          /* Ekti nirdishtro elakay prayog (jemon, upore baamer 50%x50%) */
          width: 50%;
          height: 50%;
          top: 0;
          left: 0;

          background-image:
                        /* Khara Rekha (Vertical Lines) */ repeating-linear-gradient(
              to right,
              transparent,
              transparent calc(var(--grid-size) - 1px),
              var(--grid-color) calc(var(--grid-size) - 1px),
              var(--grid-color) var(--grid-size)
            ),
            /* Shoa Rekha (Horizontal Lines) */
              repeating-linear-gradient(
                to bottom,
                transparent,
                transparent calc(var(--grid-size) - 1px),
                var(--grid-color) calc(var(--grid-size) - 1px),
                var(--grid-color) var(--grid-size)
              );
        }

        /* Marquee Animation Keyframes */
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          } /* Content-er ordhek proshostho scroll kore */
        }

        .marquee-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          height: 8rem; /* Dui-ti line-er jonno jaiga */
          z-index: 50;
        }

        /* Liquid Glass Shajja (Marquee Ribbon-er jonno) */
        .liquid-glass {
          backdrop-filter: blur(8px) saturate(180%);
          -webkit-backdrop-filter: blur(8px) saturate(180%);
          background-color: rgba(
            255,
            255,
            255,
            0.2
          ); /* Halka transparent base */
          border: 1px solid rgba(255, 255, 255, 0.5); /* Shada border */
          border-radius: 8px;
          transition: all 0.3s ease-in-out;
          color: #000000; /* Text shada (white) */
        }

        .marquee-line {
          position: absolute;
          display: flex;
          white-space: nowrap;
          font-size: 1.5rem; /* text-2xl */
          font-weight: 800; /* font-extrabold */
          padding: 0.5rem 0;
          line-height: 1.5;
          text-transform: uppercase;

          /* Animation set-up */
          animation: marquee 30s linear infinite;
          box-shadow: none; /* Shadow nei */
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); /* Halka text shadow */
        }

        /* Line 1 (Rotated Left) */
        .marquee-line-1 {
          top: 1rem;
          transform: rotate(-3deg) translateX(0); /* Baam-dike halka ghurano */
          animation-duration: 25s; /* Ektu beshi dhruto */
          padding-left: 100vw;
          min-width: 200%;
        }

        /* Line 2 (Rotated Right - 'X' effect) */
        .marquee-line-2 {
          top: 4.5rem; /* Line 1-er niche position */
          /* Ekhana rotation apply kora holo 'X' effect er jonno */
          transform: rotate(3deg) translateX(0);
          animation-duration: 35s; /* Ektu kom dhruto */
          animation-direction: reverse; /* Opposite dharay chola */
          padding-left: 100vw;
          min-width: 200%;
        }

        /* CTA Button Liquid Glass Style */
        .liquid-glass-button {
          backdrop-filter: blur(8px) saturate(180%);
          -webkit-backdrop-filter: blur(8px) saturate(180%);
          background-color: rgba(
            59,
            130,
            246,
            0.4
          ); /* Neel base with transparency */
          border: 1px solid rgba(255, 255, 255, 0.7);
          color: white;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .marquee-line {
            font-size: 1rem;
            padding: 0.3rem 0;
          }
          .marquee-line-1 {
            top: 0.5rem;
          }
          .marquee-line-2 {
            top: 3rem;
          }
          .marquee-container {
            height: 6rem;
          }
        }
      `}</style>

      <section
        id={id}
        className="hero-background-gradient relative h-screen flex  overflow-hidden"
      >
        {/* SVG Filter Definition for Liquid Glass Background */}
        <svg style={{ display: "none" }}>
          <filter id="displacementFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="2"
              result="turbulence"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="100" // Soft effect
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>

        {/* Grid Overlay Element (Fixed to top-left corner) */}
        <div className="grid-overlay absolute z-0 pointer-events-none opacity-50"></div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center mt-24 p-8 max-w-7xl mx-auto text-gray-900">
          {/* 1. Avatar/Image Section */}
          <div className="mb-6 flex justify-center">
            <img
              // Placeholder Image URL. Apnar ashol profile chobi diye poriborton korun.
              src="https://i.postimg.cc/bwm6t0xj/Chat-GPT-Image-Jul-3-2025-12-30-10-AM.png"
              alt="Easin Arafat - Profile"
              className="w-28 h-28 rounded-full border-4 border-white shadow-2xl object-cover"
            />
          </div>

          {/* 2. Main Title */}
          <h1 className="text-2xl sm:text-3xl font-light text-gray-700 mb-2">
            Hey! I'm{" "}
            <span className="font-semibold text-blue-600">Easin Arafat</span>
          </h1>

          {/* 3. Role/Tagline (Boro ebong prabhabshali) */}
          <h2 className="text-5xl sm:text-7xl font-extrabold mb-4 text-gray-900 leading-tight">
            FULL-STACK WEB DEVELOPER
          </h2>

          {/* 4. Client-der jonno Power Message */}
          <p className="text-xl sm:text-2xl font-medium text-blue-600 mb-8 max-w-2xl mx-auto">
            Ready to{" "}
            <strong className="font-extrabold">Grow Your Business</strong> with
            high-performance, scalable web solutions.
          </p>

          <div className="space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/50"
            >
              View Recent Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-lg font-semibold rounded-lg liquid-glass-button transition duration-300"
            >
              Start a Project Now
            </a>
          </div>
        </div>

        {/* --- Marquee Achievement Ribbons (Timeline Effect) --- */}
        <div className="marquee-container mb-20">
          <div className="marquee-line marquee-line-1 liquid-glass origin-center -rotate-1">
            {marqueeData1} {marqueeData1}
          </div>
          <div className="marquee-line marquee-line-2 liquid-glass origin-center rotate-1">
            {marqueeData2} {marqueeData2}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
