"use client";

import React from 'react';
import { Layers, Code, Cloud, Database, Shield, Cpu, Sparkles, ArrowUpRight } from 'lucide-react';

// --- NEW: SocialOrbitalAnimation Component ---
const SocialOrbitalAnimation = () => {
    const icons = [
        // Ring 1 (Inner Orbit)
        { id: 'react', url: 'https://i.postimg.cc/dtPrKyvm/react.png', ring: 1, delay: 0 },
        { id: 'tailwind', url: 'https://i.postimg.cc/qMVyd30m/tailwind.png', ring: 1, delay: 6250 },
        { id: 'html', url: 'https://i.postimg.cc/hPWTqdgV/html.png', ring: 1, delay: 12500 },
        { id: 'ai', url: 'https://i.postimg.cc/3J5mHv7b/adobe-illustrator.png', ring: 1, delay: 18750 },
        // Ring 2 (Outer Orbit)
        { id: 'js', url: 'https://i.postimg.cc/QxG1rTsp/javascript.png', ring: 2, delay: 0 },
        { id: 'figma', url: 'https://i.postimg.cc/02RDqwxX/figma.png', ring: 2, delay: 7500 },
        { id: 'vscode', url: 'https://i.postimg.cc/SNFCpMq6/visual-studio-code.png', ring: 2, delay: 15000 },
        { id: 'mongodb', url: 'https://i.postimg.cc/qR8TWSpT/mongo-db.png', ring: 2, delay: 22500 },
    ];

    return (
        <div className="absolute -top-40 -left-40 lg:-top-[350px] lg:-left-[350px] w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] flex items-center justify-center pointer-events-none z-0">
            {/* Orbit Paths */}
            <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full border border-blue-200/30 shadow-[0_0_50px_rgba(59,130,246,0.05)]"></div>
            <div className="absolute w-[450px] h-[450px] lg:w-[700px] lg:h-[700px] rounded-full border border-purple-200/30 shadow-[0_0_50px_rgba(168,85,247,0.05)]"></div>

            {icons.map((item) => (
                <div
                    key={item.id}
                    className="absolute rounded-2xl p-2.5 shadow-lg flex items-center justify-center bg-white/70 backdrop-blur-md border border-white/80"
                    style={{
                        width: item.ring === 1 ? '50px' : '65px',
                        height: item.ring === 1 ? '50px' : '65px',
                        animation: `${item.ring === 1 ? 'spin-inner' : 'spin-outer'} ${item.ring === 1 ? '30s' : '40s'} linear infinite`,
                        animationDelay: `${item.delay}ms`,
                    }}
                >
                    <img src={item.url} alt={item.id} className="w-full h-full object-contain" />
                </div>
            ))}
            <style>{`
                @keyframes spin-inner {
                    0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
                }
                @keyframes spin-outer {
                    0% { transform: rotate(0deg) translateX(225px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(225px) rotate(-360deg); }
                }
                @media (min-width: 1024px) {
                    @keyframes spin-inner {
                        0% { transform: rotate(0deg) translateX(250px) rotate(0deg); }
                        100% { transform: rotate(360deg) translateX(250px) rotate(-360deg); }
                    }
                    @keyframes spin-outer {
                        0% { transform: rotate(0deg) translateX(350px) rotate(0deg); }
                        100% { transform: rotate(360deg) translateX(350px) rotate(-360deg); }
                    }
                }
            `}</style>
        </div>
    );
};

// --- SKILL DATA ---
const SKILL_DATA = [
    {
        icon: Layers,
        title: "Full-Stack Architecture",
        description: "Building scalable end-to-end solutions using the modern MERN ecosystem with a focus on performance.",
        color: "blue",
        skills: ["React & Next.js", "MERN Stack", "REST & GraphQL", "Tailwind CSS"],
    },
    {
        icon: Code,
        title: "Software Engineering",
        description: "Crafting clean, maintainable code with a strong emphasis on data structures and efficient algorithms.",
        color: "indigo",
        skills: ["JavaScript ES6+", "C Programming", "C++", "DSA"],
    },
    {
        icon: Database,
        title: "Database Management",
        description: "Designing optimized schemas and managing data persistence across SQL and NoSQL environments.",
        color: "emerald",
        skills: ["MongoDB", "Redis", "Firebase"],
    },
    {
        icon: Cloud,
        title: "DevOps & Cloud",
        description: "Streamlining deployment cycles with automated CI/CD pipelines and robust cloud infrastructure.",
        color: "amber",
        skills: ["AWS Basics", "Docker", "Git/GitHub", "Vercel"],
    },
    {
        icon: Cpu,
        title: "Performance Tuning",
        description: "Optimizing application speed and responsiveness through advanced caching and bundle analysis.",
        color: "rose",
        skills: ["Web Audits", "Load Testing", "Caching", "Code Splitting"],
    },
    {
        icon: Shield,
        title: "Security & Integrity",
        description: "Maintaining high-quality codebases with industry-standard authentication and security protocols.",
        color: "purple",
        skills: ["OAuth/JWT", "XSS Prevention", "Unit Testing", "Jest"],
    },
];

const SkillsSection = ({ id }) => {
    const meshGradientBackground = {
        backgroundColor: '#ffffff',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(210, 100%, 95%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(270, 100%, 95%, 1) 0px, transparent 50%)
        `,
    };

    return (
        <section id={id} className="py-24 sm:py-32 overflow-hidden relative bg-white">
            <div className="absolute inset-0 z-0" style={meshGradientBackground} />
            <SocialOrbitalAnimation />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-3xl lg:text-center mb-20">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200 shadow-sm text-xs font-bold tracking-widest text-gray-800 uppercase backdrop-blur-md">
                        <Sparkles className="h-4 w-4 text-amber-500" /> Technical Arsenal
                    </span>
                    <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">
                        Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technology</span>
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
                        Bridging the gap between complex business logic and intuitive user experiences through a refined technical stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {SKILL_DATA.map((skill, index) => (
                        <div key={index} className="group relative">
                            {/* Card Background Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>

                            <div className="relative h-full p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col">
                                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-white shadow-inner transition-transform duration-500 group-hover:rotate-12`}>
                                    <skill.icon className={`h-7 w-7 text-${skill.color}-600`} />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-between">
                                    {skill.title}
                                    <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-gray-900 transition-colors" />
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-600 mb-8 flex-grow">
                                    {skill.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {skill.skills.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-white/80 border border-gray-100 text-gray-500 group-hover:text-gray-900 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;