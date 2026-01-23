"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Sparkles, ArrowRight } from 'lucide-react';

const PERSONAL_PROJECTS = [
    {
        title: "Full-Stack E-commerce Platform",
        description: "A premium shopping experience with real-time inventory and secure payment ecosystem.",
        tech: ["React", "Node.js", "MongoDB"],
        github: "#",
        live: "#",
        imageUrl: "https://i.postimg.cc/85zXp6kX/ecommerce.jpg",
        accent: "from-blue-600 to-indigo-600"
    },
    {
        title: "Real-Time Nexus Chat",
        description: "Low-latency communication engine featuring end-to-end encryption.",
        tech: ["Next.js", "Socket.io", "Redis"],
        github: "#",
        live: "#",
        imageUrl: "https://i.postimg.cc/9f4S9v9S/chat.jpg",
        accent: "from-emerald-500 to-teal-600"
    }
];

const ProjectsSection = ({ id }) => {
    const cursorRef = useRef(null);
    const sectionRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (cursorRef.current && isHovering) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isHovering]);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`py-24 relative bg-white overflow-hidden transition-all duration-500 ${isHovering ? 'cursor-none' : ''}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Optimized High-Performance Cursor */}
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 will-change-transform ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                style={{ backfaceVisibility: 'hidden' }}
            >
                <div className="w-20 h-20 rounded-full bg-black/90 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">View</span>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Header Section - Now Centered */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                        <Sparkles className="h-4 w-4 text-blue-600" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">Portfolio</span>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Works</span>
                    </h2>
                    <p className="mt-6 text-gray-500 font-medium max-w-xl mx-auto italic">
                        A curated showcase of professional full-stack applications and experimental digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {PERSONAL_PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center py-10 border-b border-gray-100 last:border-0"
                        >
                            {/* Project Info */}
                            <div className="flex-1 space-y-4">
                                <h3 className="text-3xl lg:text-5xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 font-medium max-w-md italic leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-6 pt-4">
                                    <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">
                                        <Github className="h-4 w-4" /> Code
                                    </a>
                                    <a href={project.live} className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">
                                        Live Demo <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="flex-1 w-full relative overflow-hidden rounded-[2rem] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        loading="lazy"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;