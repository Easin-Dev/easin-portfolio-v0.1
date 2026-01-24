"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, LayoutGrid, Search, Filter, ArrowLeft } from 'lucide-react';

const ALL_PROJECTS = [
    {
        title: "Full-Stack E-commerce Platform",
        category: "Full Stack",
        description: "A premium shopping experience with real-time inventory and secure payment ecosystem.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "#",
        live: "#",
        imageUrl: "https://i.postimg.cc/85zXp6kX/ecommerce.jpg",
        accent: "from-blue-600 to-indigo-600"
    },
    {
        title: "Real-Time Nexus Chat",
        category: "Real-time",
        description: "Low-latency communication engine featuring end-to-end encryption.",
        tech: ["Next.js", "Socket.io", "Redis"],
        github: "#",
        live: "#",
        imageUrl: "https://i.postimg.cc/9f4S9v9S/chat.jpg",
        accent: "from-emerald-500 to-teal-600"
    },
    {
        title: "AI Architect Dashboard",
        category: "AI/ML",
        description: "Enterprise-grade content generation suite using Gemini API.",
        tech: ["Next.js", "Gemini API", "TypeScript"],
        github: "#",
        live: "#",
        imageUrl: "https://i.postimg.cc/7Z9Zz9Zz/ai.jpg",
        accent: "from-purple-600 to-pink-600"
    },
    // আরও প্রজেক্ট এখানে অ্যাড করতে পারবেন
];

const Categories = ["All", "Full Stack", "Real-time", "AI/ML", "UI/UX"];

const AllProjectsPage = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All" 
        ? ALL_PROJECTS 
        : ALL_PROJECTS.filter(p => p.category === filter);

    const meshGradientBackground = {
        backgroundColor: '#ffffff',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(210, 100%, 96%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(270, 100%, 96%, 1) 0px, transparent 50%)
        `,
    };

    return (
        <div className="min-h-screen bg-white" style={meshGradientBackground}>
            <div className="mx-auto max-w-7xl px-6 py-20 relative z-10">
                
                {/* Back Button & Header */}
                <div className="mb-16">
                    <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors mb-8 group">
                        <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </a>
                    
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <Sparkles className="h-4 w-4 text-blue-600" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">Digital Archive</span>
                        </span>
                        <h1 className="text-5xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                            ALL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">PROJECTS</span>
                        </h1>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center gap-4 mb-16">
                    {Categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                                filter === cat 
                                ? 'bg-gray-900 text-white shadow-xl' 
                                : 'bg-white/50 text-gray-400 border border-gray-100 hover:border-blue-200 hover:text-gray-900'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="group relative">
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-blue-100 to-purple-100 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                            
                            <div className="relative h-full flex flex-col bg-white/40 backdrop-blur-2xl border border-white rounded-[2.2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                {/* Image Wrapper */}
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img 
                                        src={project.imageUrl} 
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-10 group-hover:opacity-30 transition-opacity`} />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-gray-900">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8 pt-4 border-t border-gray-50">
                                        {project.tech.map((tag, i) => (
                                            <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-6">
                                        <a href={project.github} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-900 hover:text-blue-600 transition-colors">
                                            <Github className="h-4 w-4" /> Repo
                                        </a>
                                        <a href={project.live} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-600 hover:text-indigo-600 transition-colors">
                                            <ExternalLink className="h-4 w-4" /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjectsPage;