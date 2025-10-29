"use client";

import React from 'react';
// Added social media icons for the orbital animation
// Substituting Behance with "Twitter" (now X) as a generic social icon, which is available.
import { Layers, Code, Cloud, Database, BarChart3, Shield, Cpu, Terminal, Sparkles } from 'lucide-react';

// --- NEW: SocialOrbitalAnimation Component Definition ---
// Daytoy a componente ti mangaramid kadagiti dua a nagtitimbukel nga agguygoy nga addaan kadagiti icon.
const SocialOrbitalAnimation = () => {
    // Defines the icons, their ring assignment, and a staggered delay
    // UPDATED: Icons reduced from 5 to 4 per ring to increase the gap (Angular Gap is now 90 degrees).
    const icons = [
        // Ring 1 (Inner Orbit - 4 items, 25s rotation)
        { id: 'react', url: 'https://i.postimg.cc/dtPrKyvm/react.png', ring: 1, delay: 0, size: 'h-10 w-10' }, // 0ms
        { id: 'tailwind', url: 'https://i.postimg.cc/qMVyd30m/tailwind.png', ring: 1, delay: 6250, size: 'h-10 w-10' }, // 6250ms (25000ms/4)
        { id: 'html', url: 'https://i.postimg.cc/hPWTqdgV/html.png', ring: 1, delay: 12500, size: 'h-10 w-10' }, // 12500ms
        { id: 'ai', url: 'https://i.postimg.cc/3J5mHv7b/adobe-illustrator.png', ring: 1, delay: 18750, size: 'h-10 w-10' }, // 18750ms

        // Ring 2 (Outer Orbit - 4 items, 30s rotation)
        { id: 'js', url: 'https://i.postimg.cc/QxG1rTsp/javascript.png', ring: 2, delay: 0, size: 'h-16 w-16' }, // 0ms
        { id: 'figma', url: 'https://i.postimg.cc/02RDqwxX/figma.png', ring: 2, delay: 7500, size: 'h-16 w-16' }, // 7500ms (30000ms/4)
        { id: 'vscode', url: 'https://i.postimg.cc/SNFCpMq6/visual-studio-code.png', ring: 2, delay: 15000, size: 'h-16 w-16' }, // 15000ms
        { id: 'mongodb', url: 'https://i.postimg.cc/qR8TWSpT/mongo-db.png', ring: 2, delay: 22500, size: 'h-16 w-16' }, // 22500ms
    ];

    return (
        // UPDATED: Container size and offset are adjusted to fit the new max radius of 400px.
        // Max Radius is 400px, so container size should be 800px, and offset -400px.
        <div className="absolute -top-32 -left-32 lg:-top-[400px] lg:-left-[400px] w-96 h-96 lg:w-[800px] lg:h-[800px] flex items-center justify-center pointer-events-none z-0">
            {/* UPDATED: Orbit path sizes to match new radii: 600px and 800px on lg screens */}
            {/* Inner orbit path (subtle border) - Fixed size for radius 300px on lg (600x600 container) */}
            <div className="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full border border-blue-300/50"></div>
            {/* Outer orbit path (subtle border) - Fixed size for radius 400px on lg (800x800 container) */}
            <div className="absolute w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full border border-purple-300/50"></div>

            {icons.map((item) => (
                <div
                    key={item.id}
                    className={`absolute rounded-full p-2 shadow-xl flex items-center justify-center bg-white/50 backdrop-blur-sm`}
                    style={{
                        width: item.ring === 1 ? '48px' : '56px',
                        height: item.ring === 1 ? '48px' : '56px',
                        // Ring 1 (25s) is slightly faster than Ring 2 (30s)
                        animation: `${item.ring === 1 ? 'spin-inner' : 'spin-outer'} ${item.ring === 1 ? '25s' : '30s'} linear infinite`,
                        animationDelay: `${item.delay}ms`, // Staggered start for even distribution
                    }}
                >
                    <img
                        src={item.url}
                        alt={`${item.id} icon`}
                        className={`${item.size} object-contain`}
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/24x24/f0f0f0/333?text=Err'; }} // Fallback for image loading error
                    />
                </div>
            ))}

            {/* Custom CSS for orbits - embedded style tag for keyframes */}
            <style>
                {`
                /* UPDATED: Increased translation distance for greater icon spacing */
                /* Small Screen Keyframes (Radius 200px and 300px) */
                @keyframes spin-inner {
                    0% {
                        transform: rotate(0deg) translateX(200px) rotate(0deg); /* Radius 200px */
                    }
                    100% {
                        transform: rotate(360deg) translateX(200px) rotate(-360deg);
                    }
                }

                @keyframes spin-outer {
                    0% {
                        transform: rotate(0deg) translateX(300px) rotate(0deg); /* Radius 300px */
                    }
                    100% {
                        transform: rotate(360deg) translateX(300px) rotate(-360deg);
                    }
                }

                /* Responsive adjustments for larger screens (lg breakpoint) */
                @media (min-width: 1024px) { 
                    @keyframes spin-inner {
                        0% {
                            transform: rotate(0deg) translateX(300px) rotate(0deg); /* Radius 300px */
                        }
                        100% {
                            transform: rotate(360deg) translateX(300px) rotate(-360deg);
                        }
                    }

                    @keyframes spin-outer {
                        0% {
                            transform: rotate(0deg) translateX(400px) rotate(0deg); /* Radius 400px (100px gap from inner orbit) */
                        }
                        100% {
                            transform: rotate(360deg) translateX(400px) rotate(-360deg);
                        }
                    }
                }
                `}
            </style>
        </div>
    );
};
// --- END SocialOrbitalAnimation Component Definition ---


// --- SKILL DATA ---
const SKILL_DATA = [
    {
        icon: Layers,
        title: "Full-Stack Architecture & Ecosystem",
        description: "Designing and implementing robust, end-to-end solutions for scalability and high performance.",
        color: "indigo",
        skills: ["MERN Stack (Deep Expertise)", "React & Next.js", "RESTful & GraphQL APIs", "Microservices (Conceptual)", "Tailwind CSS"],
    },
    {
        icon: Code,
        title: "Core Programming & Problem-Solving",
        description: "A strong foundation in algorithmic thinking and solving complex software challenges efficiently.",
        color: "blue",
        skills: ["JavaScript (ES6+)", "TypeScript", "Python (Intermediate)", "Data Structures", "Algorithms"],
    },
    {
        icon: Database,
        title: "Data Management & Storage",
        description: "Expertise in designing efficient schema and managing data persistence across different environments.",
        color: "green",
        skills: ["MongoDB (Primary)", "PostgreSQL", "Firebase/Firestore", "Redis (Caching)", "SQL Query Optimization"],
    },
    {
        icon: Cloud,
        title: "DevOps, CI/CD, & Cloud Infrastructure",
        description: "Implementing automated pipelines to ensure fast, reliable, and secure deployment lifecycle.",
        color: "yellow",
        skills: ["AWS Basics (S3, EC2)", "Docker", "Git/GitHub Actions", "CI/CD Pipelines", "Vercel/Netlify"],
    },
    {
        icon: Cpu,
        title: "System Performance & Optimization",
        description: "Focussing on maximizing application speed, responsiveness, and resource efficiency.",
        color: "red",
        skills: ["Web Performance Audits", "Load Testing", "Caching Strategies", "Bundle Analysis", "Code Splitting"],
    },
    {
        icon: Shield,
        title: "Security & Code Integrity",
        description: "Adhering to security best practices and maintaining high-quality, maintainable codebases.",
        color: "purple",
        skills: ["Authentication (OAuth, JWT)", "Input Validation", "Cross-Site Scripting (XSS) Prevention", "Unit Testing (Jest)"],
    },
];

// --- SkillsSection Component ---
const SkillsSection = ({ id }) => {
    // Added explicit border-2 and shadow-lg to make the card outline clear against the background.
    const liquidGlassClasses = "liquid-glass border-2 border-white/90 shadow-lg transform transition duration-500 hover:scale-[1.03]";

    // UPDATED: Adjusted for the new image-based style
    const liquidGlassBadgeClasses = "liquid-glass px-4 py-2 rounded-full border border-white/90 shadow-lg";

    // Function to generate ring color for icons
    const getRingColor = (color) => `ring-${color}-600/50`;
    // Changed from 400 to 600 for better contrast on light background
    const getTextColor = (color) => `text-${color}-600`;
    const getBgColor = (color) => `bg-${color}-500`;

    // User-provided mesh gradient for light background
    const meshGradientBackground = {
        backgroundColor: 'hsla(0, 0%, 100%, 1)',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(45, 100%, 64%, 0.1) 0px, transparent 50%), /* Top Right (Yellow/Orange) - Opacity reduced slightly for subtlety */
            radial-gradient(at 0% 0%, hsla(255, 66%, 56%, 0.1) 0px, transparent 50%) /* Top Left (Purple/Blue) - Opacity reduced slightly for subtlety */
        `,
    };

    return (
        <section
            id={id}
            // Light background
            className="py-24 sm:py-32 overflow-hidden relative bg-white"
        >
            {/* Background Gradient: Using the user-provided light mesh gradient */}
            <div
                className="absolute inset-0 z-0 opacity-100"
                style={meshGradientBackground}
            />

            {/* NEW: Social Orbital Animation - positioned at the top-left corner */}
            <SocialOrbitalAnimation />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-3xl lg:text-center mb-16">
                    {/* UPDATED: Text color, icon color, and shadow adjusted to match the image */}
                    <p className={`text-base font-semibold leading-7 uppercase tracking-widest inline-flex items-center justify-center ${liquidGlassBadgeClasses} text-gray-800`}>
                        <Sparkles className="h-5 w-5 mr-2 text-purple-400" /> CORE EXPERTISE
                    </p>

                    {/* Text color to dark gray */}
                    <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Skills and Technology: My Technical Foundation
                    </h2>
                    {/* Text color to medium gray */}
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Explore my extensive expertise in building, scaling, and managing applications across diverse platforms, all designed to achieve strategic business objectives.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {SKILL_DATA.map((skill, index) => (
                        // Liquid Glass Card for each skill
                        <div
                            key={index}
                            // Using the custom 'liquid-glass' class with added border and shadow
                            className={`p-6 rounded-3xl ${liquidGlassClasses} flex flex-col justify-start items-start text-center h-full`}
                        >
                            {/* Icon with Liquid Glass Ring */}
                            <div className={`p-3 rounded-full ${getBgColor(skill.color)}/10 ring-4 ${getRingColor(skill.color)} mb-4`}>
                                <skill.icon className={`h-8 w-8 ${getTextColor(skill.color)}`} />
                            </div>

                            {/* Text color to dark gray */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">
                                {skill.title}
                            </h3>

                            {/* Text color to medium gray */}
                            <p className="text-sm text-gray-600 mb-4 text-left flex-grow">
                                {skill.description}
                            </p>

                            {/* Skill Tags */}
                            <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/80 w-full">
                                {skill.skills.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className={`px-3 py-1 text-xs font-medium rounded-full ${getBgColor(skill.color)}/10 ${getTextColor(skill.color)} backdrop-blur-sm`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
