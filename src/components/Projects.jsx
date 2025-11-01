"use client";

import React, { useState } from 'react'; // Added useState
// Imported necessary icons
import { Code, ExternalLink, Github, Briefcase, User, Layers } from 'lucide-react';

// --- Project Dummy Data (Titles and details translated to English) ---
const PERSONAL_PROJECTS = [
    {
        title: "Full-Stack E-commerce Platform",
        description: "A complete e-commerce site featuring dynamic product listing, user authentication (JWT), and a custom admin dashboard.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/your-username/ecommerce-repo",
        live: "https://live-demo.com/ecommerce-platform",
        // ADDED IMAGE URLS
        imageUrl: "https://placehold.co/600x300/1e40af/ffffff?text=E-commerce+Platform"
    },
    {
        title: "Real-Time Chat Application",
        description: "A fast chat application built with WebSocket, supporting instant messaging, group chat, and online status.",
        tech: ["Next.js", "Socket.IO", "PostgreSQL", "Prisma"],
        github: "https://github.com/your-username/realtime-chat-app",
        live: "https://live-demo.com/chat-app",
        // ADDED IMAGE URLS
        imageUrl: "https://placehold.co/600x300/059669/ffffff?text=Real-Time+Chat+App"
    },
    {
        title: "AI-Powered Content Generator",
        description: "A tool built using the Gemini API that can quickly generate various types of creative content from user input.",
        tech: ["Next.js", "Gemini API", "TypeScript", "Vercel"],
        github: "https://github.com/your-username/ai-content-generator",
        live: "https://live-demo.com/ai-content",
        // ADDED IMAGE URLS
        imageUrl: "https://placehold.co/600x300/9333ea/ffffff?text=AI+Content+Generator"
    }
];

const AGENCY_WORK = [
    {
        title: "SaaS Analytics Dashboard Optimization",
        challenge: "The challenge was to integrate data from five separate client APIs to build a fast dashboard, which was previously taking too long to load.",
        solution: "Implemented a Node.js microservices architecture and Redis caching, resulting in a 75% reduction in dashboard load time.",
        result: "Daily Active Users (DAU) increased by 40%, and the client renewed the contract for three years.",
        tech: ["React", "Redux", "Node.js", "Redis", "AWS Lambda"],
    },
    {
        title: "Non-Profit Donation & Event Portal",
        challenge: "The legacy portal was slow, leading to a high abandonment rate in the donation process.",
        solution: "Redesigned the portal with a fully responsive UI/UX and simplified the donation pipeline using Firebase Functions.",
        result: "Mobile donation conversion rate increased by 55% during peak campaign periods.",
        tech: ["Next.js", "Firebase", "Stripe", "Tailwind CSS"],
    }
];

// --- ProjectsSection Component ---
const ProjectsSection = ({ id }) => {
    // State for Custom Cursor
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = useState(false);

    // Handlers for Custom Cursor
    const handleMouseMove = (e) => {
        // Only update position if the cursor is currently visible
        if (cursorVisible) {
            setCursorPos({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);


    // Liquid Glass effect classes taken from SkillsSection
    const liquidGlassClasses = "liquid-glass border-2 border-white/90 shadow-2xl transform transition duration-500 hover:scale-[1.01] hover:shadow-purple-300/50";
    const liquidGlassBadgeClasses = "liquid-glass px-4 py-2 rounded-full border border-white/90 shadow-lg";

    // User-provided mesh gradient for light background
    const meshGradientBackground = {
        backgroundColor: 'hsla(0, 0%, 100%, 1)',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(200, 100%, 64%, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(150, 66%, 56%, 0.1) 0px, transparent 50%)
        `,
    };

    const LinkButton = ({ icon: Icon, href, label, color }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full ${color === 'live' ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} transition-colors duration-200 shadow-md`}
        >
            <Icon className="h-4 w-4 mr-2" />
            {label}
        </a>
    );

    return (
        <section
            id={id}
            className="py-24 sm:py-32 overflow-hidden relative"
        >
            {/* Custom Cursor Element - Fixed position to follow mouse */}
            <div
                className="fixed w-28 h-28 rounded-full flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider transition-opacity duration-300 ease-out"
                style={{
                    top: cursorPos.y,
                    left: cursorPos.x,
                    transform: 'translate(-50%, -50%)', // Center the cursor on the mouse point
                    pointerEvents: 'none', // Critical: ensures clicks pass through to the card
                    opacity: cursorVisible ? 1 : 0,
                    zIndex: 9999,
                    // UPDATED Liquid glass style for a softer, watercolor-like effect
                    backgroundColor: 'rgba(120, 180, 255, 0.4)', // Softer blue with increased transparency
                    backdropFilter: 'blur(15px) saturate(150%)', // Increased blur and saturation
                    border: '2px solid rgba(255, 255, 255, 0.7)', // Slightly softer border
                    boxShadow: '0 0 30px rgba(120, 180, 255, 0.7), inset 0 0 15px rgba(255, 255, 255, 0.8)', // Softer shadow
                }}
            >
                Live Demo
            </div>

            {/* Background Gradient */}
            <div
                className="absolute inset-0 z-0 opacity-100"
                style={meshGradientBackground}
            />

            {/* Content Container */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-3xl lg:text-center mb-16">
                    <p className={`text-base font-semibold leading-7 uppercase tracking-widest inline-flex items-center justify-center ${liquidGlassBadgeClasses} text-gray-800`}>
                        <Layers className="h-5 w-5 mr-2 text-indigo-400" /> PORTFOLIO & WORK EXPERIENCE
                    </p>
                    <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Code, Creativity, and Client Success
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Here is a compilation of selected personal and agency work demonstrating my design and development proficiency.
                    </p>
                </div>

                {/* --- 1. Personal Projects Section --- */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-gray-800 flex items-center mb-8 border-b border-gray-200 pb-3">
                        <User className="h-7 w-7 mr-3 text-purple-600" /> Personal Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PERSONAL_PROJECTS.map((project, index) => (
                            <div
                                key={index}
                                className={`p-0 rounded-3xl ${liquidGlassClasses} flex flex-col h-full bg-white/50 backdrop-blur-md overflow-hidden`}
                                // Attach custom cursor handlers to the card
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                // Hide the default cursor when hovering over the card
                                style={{ cursor: 'none' }}
                            >
                                {/* 1. Project Title Area (with top padding) */}
                                <div className="px-6 pt-6 pb-4">
                                    <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                                </div>

                                {/* 2. Project Image - Added rounded-2xl, display:block, and mx-auto for centering */}
                                <img
                                    src={project.imageUrl}
                                    alt={`Screenshot of ${project.title}`}
                                    className="block mx-auto w-[calc(100%-3rem)] h-40 object-cover mb-4 shadow-lg rounded-2xl"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x300/f0f0f0/333?text=Project+Image'; }}
                                />

                                {/* 3. Description and bottom content (with side padding) */}
                                <div className="px-6 flex flex-col flex-grow">
                                    <p className="text-sm text-gray-600 mb-4 flex-grow">{project.description}</p>

                                    {/* Technology Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/80 w-full">
                                        {project.tech.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-700 backdrop-blur-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-3 mt-auto pb-6">
                                        <LinkButton icon={Github} href={project.github} label="GitHub Code" color="github" />
                                        <LinkButton icon={ExternalLink} href={project.live} label="Live Demo" color="live" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- 2. Agency Work Section (Case Studies) --- */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-800 flex items-center mb-8 border-b border-gray-200 pb-3">
                        <Briefcase className="h-7 w-7 mr-3 text-emerald-600" /> Agency Work (Client Case Studies)
                    </h3>
                    <div className="grid grid-cols-1 gap-10">
                        {AGENCY_WORK.map((caseStudy, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-3xl ${liquidGlassClasses} flex flex-col lg:flex-row h-full bg-white/50 backdrop-blur-md`}
                            >
                                {/* Left Side: Challenge & Solution */}
                                <div className="lg:w-2/3 lg:pr-8 mb-6 lg:mb-0 border-b lg:border-b-0 lg:border-r border-white/80">
                                    <h4 className="text-2xl font-extrabold text-gray-900 mb-4 text-emerald-600">{caseStudy.title}</h4>

                                    <div className="mb-4">
                                        <p className="font-semibold text-gray-800">Challenge:</p>
                                        <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                                    </div>

                                    <div className="mb-4">
                                        <p className="font-semibold text-gray-800">Our Solution:</p>
                                        <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <p className="font-semibold text-gray-800 mr-2">Technologies Used:</p>
                                        {caseStudy.tech.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-700 backdrop-blur-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Result */}
                                <div className="lg:w-1/3 lg:pl-8 flex items-center justify-center">
                                    <div className="p-4 bg-emerald-500/10 rounded-xl w-full text-center">
                                        <p className="text-lg font-bold text-emerald-800 mb-2">Key Result:</p>
                                        <p className="text-sm font-medium text-emerald-700">{caseStudy.result}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
