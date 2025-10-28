"use client";
import React from "react";

// --- HeroSection Component ---
const HeroSection = ({ id }) => {
  // Data for the Marquee effect
  const marqueeData1 =
    "AY JAY GAY TIME TIME LINE TEXT ONE → AY JAY GAY TIME TIME LINE TEXT ONE → AY JAY GAY TIME TIME LINE TEXT ONE → AY JAY GAY TIME TIME LINE TEXT ONE";
  const marqueeData2 =
    "AY JAY GAY TIME TIME LINE TEXT TWO → AY JAY GAY TIME TIME LINE TEXT TWO → AY JAY GAY TIME TIME LINE TEXT TWO → AY JAY GAY TIME TIME LINE TEXT TWO";

  // Array of skill icons with their positions, sizes, and animation delays
  const skillIcons = [
    {
      src: "https://i.postimg.cc/qRCSLwny/adobe-illustrator.png",
      alt: "Adobe Illustrator",
      position: "top-[15%] left-[5%]",
      size: "w-16 h-16",
      delay: "1.5s",
    },
    {
      src: "https://i.postimg.cc/cH82mhYY/figma.png",
      alt: "Figma",
      position: "top-[30%] left-[15%]",
      size: "w-12 h-12",
      delay: "2s",
    },
    {
      src: "https://i.postimg.cc/wvsZV2JD/html.png",
      alt: "HTML",
      position: "bottom-[20%] left-[10%]",
      size: "w-20 h-20",
      delay: "1s",
    },
    {
      src: "https://i.postimg.cc/wvsZV2J2/photoshop.png",
      alt: "Adobe Photoshop",
      position: "top-[20%] right-[10%]",
      size: "w-14 h-14",
      delay: "2.5s",
    },
    {
      src: "https://i.postimg.cc/j5JmXcNf/tailwind.png",
      alt: "Tailwind CSS",
      position: "bottom-[30%] right-[5%]",
      size: "w-16 h-16",
      delay: "0.5s",
    },
    {
      src: "https://i.postimg.cc/pyNsdM14/javascript.png",
      alt: "JavaScript",
      position: "top-[45%] left-[5%]",
      size: "w-16 h-16",
      delay: "1.2s",
    },
    {
      src: "https://i.postimg.cc/14xvz1YL/react.png",
      alt: "React",
      position: "bottom-[10%] right-[20%]",
      size: "w-20 h-20",
      delay: "2.2s",
    },
    {
      src: "https://i.postimg.cc/YjcdSBsw/visual-studio-code.png",
      alt: "VS Code",
      position: "top-[5%] right-[25%]",
      size: "w-14 h-14",
      delay: "0.8s",
    },
  ];

  return (
    <>
      <style jsx="true" global="true">{`
        /* Custom CSS for the dual radial gradient background (Mesh Blob Effect) */
        .hero-background-gradient {
          background-color: hsla(0, 0%, 100%, 1); /* Shada (white) base */
          background-image:
            /* Holud-Komola Blob (Niche Daane) */ radial-gradient(
              at 100% 100%,
              hsla(45, 100%, 64%, 0.62) 0px,
              transparent 50%
            ),
            /* Beguni-Neel Blob (Niche Baame) */
            radial-gradient(
              at 0% 100%,
              hsla(255, 55%, 63%, 0.7) 0px,
              transparent 50%
            );
          background-attachment: fixed;
          /* SVG filter bebohar kore complex liquid glass effect */
          backdrop-filter: brightness(1.1) blur(2px) url(#displacementFilter);
          -webkit-backdrop-filter: brightness(1.1) blur(2px)
            url(#displacementFilter);
          /* perspective: 1000px;  3D perspective for child elements (Removed as 3D rotation is removed) */
        }

        /* Custom CSS for the Grid Overlay (Upore Baame) */
        .grid-overlay {
          /* Grid cell size */
          --grid-size: 30px;
          /* Grid line color (halka neel/transparent) */
          --grid-color: rgba(30, 64, 175, 0.1);

          /* Ekti nirdishtro elakay prayog */
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
          }
        }

        .marquee-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          height: 8rem;
          z-index: 50;
        }

        /* Liquid Glass Shajja (Marquee Ribbon-er jonno) */
        .liquid-glass {
          backdrop-filter: blur(8px) saturate(180%);
          -webkit-backdrop-filter: blur(8px) saturate(180%);
          background-color: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 8px;
          transition: all 0.3s ease-in-out;
          color: #000000;
        }

        .marquee-line {
          position: absolute;
          display: flex;
          white-space: nowrap;
          font-size: 1.5rem;
          font-weight: 800;
          padding: 0.5rem 0;
          line-height: 1.5;
          text-transform: uppercase;
          animation: marquee 30s linear infinite;
          box-shadow: none;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
        }

        /* Line 2 (Rotated Right - 'X' effect) */
        .marquee-line-2 {
          top: 4.5rem;
          transform: rotate(3deg) translateX(0);
          animation-duration: 35s;
          animation-direction: reverse;
          padding-left: 100vw;
          min-width: 200%;
        }

        /* CTA Button Liquid Glass Style */
        .liquid-glass-button {
          backdrop-filter: blur(8px) saturate(180%);
          -webkit-backdrop-filter: blur(8px) saturate(180%);
          background-color: rgba(59, 130, 246, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.7);
          color: white;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        /* --- Updated Floating Animation (No 3D rotation, no blur) --- */
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(3deg); /* Initial slight rotation */
          }
          50% {
            transform: translateY(-15px) rotate(-3deg); /* Float up and rotate */
          }
          100% {
            transform: translateY(0px) rotate(3deg); /* Back down and rotate */
          }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite alternate; /* Slower, smoother, alternates direction */
          /* filter: blur(1.5px); Removed blur */
          opacity: 0.8; /* Slightly transparent */
          transition: opacity 0.3s ease-in-out; /* Smooth transition for hover */
          will-change: transform, opacity; /* পারফরম্যান্সের জন্য */
          /* transform-style: preserve-3d; Removed 3D style */
        }

        .float-animation:hover {
            /* filter: blur(0px); Removed blur on hover */
            opacity: 1; /* হোভারে পুরোপুরি দৃশ্যমান হবে */
            cursor: pointer;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .marquee-line {
            font-size: 1rem;
            padding: 0.3rem 0;
          }
          .marquee-line-2 {
            top: 3rem;
          }
          .marquee-container {
            height: 6rem;
          }
          .float-animation {
            display: none; /* ছোট স্ক্রিনে আইকনগুলো সরিয়ে দিলাম */
          }
        }
      `}</style>

      <section
        id={id}
        className="hero-background-gradient relative h-screen flex overflow-hidden"
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

        {/* Skill Icons with Floating Animation */}
        {skillIcons.map((icon, index) => (
          <div
            key={index}
            className={`absolute z-20 float-animation ${icon.position}`}
            style={{ animationDelay: icon.delay }}
            title={icon.alt}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className={`${icon.size} object-contain rounded-xl shadow-lg`}
              loading="lazy"
            />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-30 text-center mt-16 p-8 max-w-7xl mx-auto text-gray-900">
          {/* 1. Avatar/Image Section */}
          <div className="mb-6 flex justify-center">
            <img
              src="https://i.postimg.cc/9fC6cZ6F/Easin-Arafat-CV-Photo.png"
              alt="Easin Arafat - Profile"
              className="w-28 h-28 rounded-full border-4 border-white shadow-2xl object-cover"
              loading="lazy"
            />
          </div>

          {/* 2. Main Title */}
          <h1 className="text-2xl sm:text-3xl font-light text-gray-700 mb-2">
            Hey! I'm{" "}
            <span className="font-semibold text-blue-600">Easin Arafat</span>
          </h1>

          {/* 3. Role/Tagline (Boro ebong prabhabshali) */}
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
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
              className="px-6 py-3 text-lg font-semibold rounded-lg liquid-glass-button transition duration-300 hover:scale-105"
            >
              Start a Project Now
            </a>
          </div>
        </div>

        {/* --- Marquee Achievement Ribbons (Timeline Effect) --- */}
        <div className="marquee-container">
          {/* <div className="marquee-line marquee-line-1 liquid-glass origin-center -rotate-1">
            {marqueeData1} {marqueeData1}
          </div> */}
          <div className="marquee-line marquee-line-2 liquid-glass origin-center rotate-1">
            {marqueeData2} {marqueeData2}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
