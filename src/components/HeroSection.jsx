"use client";
import React from "react";

const HeroSection = ({ id }) => {
  const marqueeData2 =
    "STRATEGIC DESIGN → HIGH PERFORMANCE → SCALABLE SOLUTIONS → EXPERT CODE → ";

  const skillIcons = [
    { src: "https://i.postimg.cc/qRCSLwny/adobe-illustrator.png", alt: "AI", position: "top-[12%] left-[5%]", size: "w-12 h-12 md:w-16 md:h-16", delay: "1.5s" },
    { src: "https://i.postimg.cc/cH82mhYY/figma.png", alt: "Figma", position: "top-[25%] left-[12%]", size: "w-10 h-10 md:w-12 md:h-12", delay: "2s" },
    { src: "https://i.postimg.cc/wvsZV2JD/html.png", alt: "HTML", position: "bottom-[25%] left-[8%]", size: "w-14 h-14 md:w-20 md:h-20", delay: "1s" },
    { src: "https://i.postimg.cc/wvsZV2J2/photoshop.png", alt: "PS", position: "top-[18%] right-[8%]", size: "w-12 h-12 md:w-14 md:h-14", delay: "2.5s" },
    { src: "https://i.postimg.cc/j5JmXcNf/tailwind.png", alt: "Tailwind", position: "bottom-[35%] right-[5%]", size: "w-12 h-12 md:w-16 md:h-16", delay: "0.5s" },
    { src: "https://i.postimg.cc/pyNsdM14/javascript.png", alt: "JS", position: "top-[45%] left-[4%]", size: "w-12 h-12 md:w-16 md:h-16", delay: "1.2s" },
    { src: "https://i.postimg.cc/14xvz1YL/react.png", alt: "React", position: "bottom-[15%] right-[15%]", size: "w-16 h-16 md:w-20 md:h-20", delay: "2.2s" },
    { src: "https://i.postimg.cc/YjcdSBsw/visual-studio-code.png", alt: "VS Code", position: "top-[8%] right-[22%]", size: "w-10 h-10 md:w-14 md:h-14", delay: "0.8s" },
  ];

  return (
    <>
      <style jsx="true" global="true">{`
        .hero-background-gradient {
          background-color: #ffffff;
          background-image: 
            radial-gradient(at 100% 100%, hsla(45, 100%, 64%, 0.5) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(255, 55%, 63%, 0.5) 0px, transparent 50%);
          background-attachment: fixed;
        }

        .grid-overlay {
          --grid-size: 30px;
          --grid-color: rgba(30, 64, 175, 0.05);
          width: 100%;
          height: 100%;
          position: absolute;
          background-image: 
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
          background-size: var(--grid-size) var(--grid-size);
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-container {
          position: absolute;
          bottom: 2rem;
          left: 0;
          width: 100%;
          overflow: hidden;
          z-index: 10;
        }

        .marquee-line {
          display: flex;
          white-space: nowrap;
          font-weight: 800;
          animation: marquee 25s linear infinite;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
          100% { transform: translateY(0px) rotate(3deg); }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite alternate;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .float-animation:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .float-animation {
            opacity: 0.4; /* মোবাইলে হালকা দেখা যাবে যাতে লেখায় সমস্যা না হয় */
            pointer-events: none;
          }
          .skill-icon-mobile-hide {
            display: none;
          }
        }
      `}</style>

      <section
        id={id}
        className="hero-background-gradient relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      >
        <div className="grid-overlay pointer-events-none"></div>

        {/* Skill Icons */}
        {skillIcons.map((icon, index) => (
          <div
            key={index}
            className={`absolute z-20 float-animation hidden sm:block ${icon.position}`}
            style={{ animationDelay: icon.delay }}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className={`${icon.size} object-contain opacity-80`}
            />
          </div>
        ))}

        {/* Main Content */}
        <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <img
              src="https://i.postimg.cc/9fC6cZ6F/Easin-Arafat-CV-Photo.png"
              alt="Easin Arafat"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl object-cover"
            />
          </div>

          <h1 className="text-xl md:text-3xl font-light text-gray-700 mb-2">
            Hey! I'm <span className="font-semibold text-blue-600">Easin Arafat</span>
          </h1>

          <h2 className="text-4xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-[1.1] tracking-tight">
            FULL-STACK <br className="md:hidden" /> WEB DEVELOPER
          </h2>

          <p className="text-lg md:text-2xl font-medium text-blue-700/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to <span className="text-gray-900 font-bold">Grow Your Business</span> with
            high-performance, scalable web solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/40 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-full border-2 border-blue-600 text-blue-600 bg-white/50 backdrop-blur-md hover:bg-blue-50 transition-all active:scale-95"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Marquee Ribbon */}
        <div className="marquee-container opacity-40 md:opacity-100">
          <div className="marquee-line py-3 md:py-5 text-sm md:text-xl uppercase tracking-widest rotate-1 scale-105">
            {marqueeData2} {marqueeData2} {marqueeData2}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;