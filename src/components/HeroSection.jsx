"use client";
import React from "react";
import { ExternalLink, Terminal, ArrowRight } from "lucide-react";

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
            radial-gradient(at 100% 100%, hsla(45, 100%, 64%, 0.4) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(255, 55%, 63%, 0.4) 0px, transparent 50%);
          background-attachment: fixed;
        }

        .grid-overlay {
          --grid-size: 40px;
          --grid-color: rgba(30, 64, 175, 0.04);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-image: 
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
          background-size: var(--grid-size) var(--grid-size);
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-line {
          display: flex;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
          100% { transform: translateY(0px) rotate(3deg); }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite alternate;
        }
      `}</style>

      <section
        id={id}
        className="hero-background-gradient relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      >
        {/* Grid Box Background */}
        <div className="grid-overlay pointer-events-none"></div>

        {/* Floating Skill Icons */}
        {skillIcons.map((icon, index) => (
          <div
            key={index}
            className={`absolute z-10 float-animation hidden md:block ${icon.position}`}
            style={{ animationDelay: icon.delay }}
          >
            <img src={icon.src} alt={icon.alt} className={`${icon.size} object-contain opacity-30 hover:opacity-100 transition-opacity duration-500`} />
          </div>
        ))}

        <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">

          {/* প্রোফাইল ইমেজ সেকশন */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="https://i.postimg.cc/9fC6cZ6F/Easin-Arafat-CV-Photo.png"
                alt="Easin Arafat"
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-2xl object-cover transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Top Badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-blue-50 shadow-sm backdrop-blur-md">
              <Terminal className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-800">
                Full-Stack Developer <span className="mx-2 text-gray-300">|</span> Available on Freelance
              </span>
            </div>
          </div>

          <h1 className="text-xl md:text-3xl font-medium text-gray-600 mb-4 tracking-tight">
            Hello, I am <span className="text-blue-600 font-extrabold">Easin Arafat</span>
          </h1>

          <h2 className="text-5xl md:text-8xl font-black mb-8 text-gray-900 leading-[0.9] tracking-tighter">
            BUILDING DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">EXPERIENCES</span>
          </h2>

          <p className="text-lg md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Crafting high-performance <span className="text-gray-900 font-bold underline decoration-blue-500/30">MERN Stack</span> applications with pixel-perfect design and scalable architecture.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#projects"
              className="group w-full sm:w-auto px-10 py-4 text-sm font-black uppercase tracking-widest rounded-2xl text-white bg-gray-900 hover:bg-blue-700 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://www.fiverr.com/easin_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-10 py-4 text-sm font-black uppercase tracking-widest rounded-2xl border-2 border-gray-200 text-gray-900 bg-white/50 backdrop-blur-md hover:border-[#1dbf73] hover:text-[#1dbf73] transition-all flex items-center justify-center gap-2"
            >
              Hire on Fiverr
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>

        {/* Marquee Ribbon */}
        <div className="absolute bottom-12 left-0 w-full overflow-hidden opacity-30 pointer-events-none">
          <div className="marquee-line py-4 border-y border-gray-100 text-xl font-black uppercase tracking-widest text-gray-400">
            {marqueeData2} {marqueeData2} {marqueeData2}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;