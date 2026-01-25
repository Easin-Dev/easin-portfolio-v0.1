"use client";

import React, { useState } from 'react';
import { Sparkles, Users, Shield, ArrowUpRight, Zap } from 'lucide-react';

// --- ABOUT CONTENT DATA ---
const INITIAL_ABOUT_DATA = {
    title: "From Vision to Execution",
    subtitle:
        "I am the Founder & CEO of Scaleup Web, a digital agency established in 2025. With over 3 years of hands-on experience in full-stack web development, I specialize in building scalable, high-performance digital solutions that drive real business growth.",
    badgeText: "Founder & CEO, Scaleup Web",

    approachTitle: "Technical Expertise with a Business-First Mindset",
    approachText1:
        "With over <span class='text-blue-600 font-bold'>3 years of professional experience</span>, I have developed a strong foundation in modern web technologies, focusing on clean architecture, performance, and long-term scalability.",
    approachText2:
        "My core expertise lies in the <span class='text-blue-600 font-bold'>MERN stack</span> (MongoDB, Express, React, Node.js), which I use to build secure, efficient, and production-ready applications tailored to real business needs.",

    partnerTitle: "Leading Scaleup Web with Purpose",
    strategyPoint:
        "<strong>Strategic Problem Solving:</strong> I don’t just build websites—I analyze business goals, identify core challenges, and deliver digital solutions designed to maximize long-term growth and <strong>return on investment (ROI)</strong>.",
    reliabilityPoint:
        "<strong>Scalable & Reliable Systems:</strong> Every solution I build is designed to be secure, scalable, and future-ready—ensuring reliability as your business grows.",
};

const AboutSection = ({ id }) => {
    const [aboutData] = useState(INITIAL_ABOUT_DATA);

    // Glassmorphism card styles
    const glassCardClasses =
        "backdrop-blur-xl bg-white/40 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all duration-500 hover:bg-white/60 hover:shadow-2xl hover:-translate-y-1";

    const meshGradientBackground = {
        backgroundColor: '#ffffff',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(45, 100%, 85%, 0.5) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(255, 66%, 85%, 0.5) 0px, transparent 50%)
        `,
    };

    return (
        <section id={id} className="py-24 sm:py-32 overflow-hidden relative bg-white">
            {/* Background Mesh Gradient */}
            <div
                className="absolute top-0 left-0 w-full h-[600px] z-0"
                style={meshGradientBackground}
            />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="mx-auto max-w-3xl lg:text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200 shadow-sm backdrop-blur-md mb-6 animate-fade-in">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
                            Core Identity
                        </span>
                    </div>

                    <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl mb-6">
                        {aboutData.title}
                    </h2>

                    <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                        {aboutData.subtitle}
                    </p>
                </div>

                <div className="grid gap-16 lg:grid-cols-2 items-start">
                    {/* Left: Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-[2.5rem] blur-2xl group-hover:opacity-100 transition duration-700 opacity-50"></div>

                        <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl transform transition duration-700 group-hover:scale-[1.01]">
                            <img
                                src="https://i.postimg.cc/zGkWC4JB/Easin-A_rafat-3.png"
                                alt="Easin Arafat"
                                className="w-full h-auto object-cover"
                            />

                            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/80 p-4 rounded-2xl border border-white/50 shadow-lg">
                                <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-1">
                                    {aboutData.badgeText}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-900 font-bold italic">
                                        Easin Arafat
                                    </span>
                                    <Zap className="h-4 w-4 text-amber-500 fill-amber-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col">
                        <div className="relative mb-10">
                            <div className="absolute -left-6 top-2 bottom-2 w-1.5 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full hidden lg:block"></div>
                            <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">
                                {aboutData.approachTitle}
                            </h3>
                        </div>

                        <div className="space-y-6 text-gray-600 mb-12">
                            <p
                                className="text-xl font-medium leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: aboutData.approachText1 }}
                            />
                            <p
                                className="text-lg leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: aboutData.approachText2 }}
                            />
                        </div>

                        {/* Feature Cards */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                                <Users className="h-6 w-6 text-purple-600" />
                                {aboutData.partnerTitle}
                            </h4>

                            <div className="grid gap-4">
                                <div className={`group p-6 rounded-3xl ${glassCardClasses}`}>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-2xl bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                            <ArrowUpRight className="h-6 w-6" />
                                        </div>
                                        <p
                                            className="text-base text-gray-700 leading-relaxed pt-1"
                                            dangerouslySetInnerHTML={{ __html: aboutData.strategyPoint }}
                                        />
                                    </div>
                                </div>

                                <div className={`group p-6 rounded-3xl ${glassCardClasses}`}>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Shield className="h-6 w-6" />
                                        </div>
                                        <p
                                            className="text-base text-gray-700 leading-relaxed pt-1"
                                            dangerouslySetInnerHTML={{ __html: aboutData.reliabilityPoint }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
