"use client";

import React, { useState } from 'react';
import { Sparkles, Users, Code, Shield } from 'lucide-react';

// --- প্রাথমিক ডাটা (কম্পোনেন্টের উপরে সংজ্ঞায়িত) ---
const INITIAL_ABOUT_DATA = {
    title: "My Journey & Scaleup Web: Vision to Execution",
    subtitle: "I am the CEO and Founder of Scaleup Web, a venture I initiated in 2025. My practice is built on 3 years of deep technical expertise in full-stack architecture and strategic digital leadership.",
    badgeText: "CEO & Founder, Scaleup Web",

    approachTitle: "Architectural Excellence & Technical Mastery",
    // 3 years এবং MERN stack এর জন্য নীল ব্যাকগ্রাউন্ড গ্লাস হাইলাইট
    approachText1: "With <span class='bg-blue-100/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-blue-800 font-semibold'>3 years</span> of focused, high-impact development, I've cultivated a deep technical foundation. I specialize in turning complex challenges into robust, production-ready systems, ensuring engineering integrity is paramount.",
    approachText2: "My expertise centers around the <span class='bg-blue-100/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-blue-800 font-semibold'>MERN stack</span> (MongoDB, Express, React, Node.js), leveraged to architect high-performance, scalable applications. I prioritize clean code and efficient system design to guarantee sustained performance and minimal technical debt.",

    partnerTitle: "CEO & Founder: Guiding Scaleup Web's Vision",
    // Strategic Leadership এবং ROI এর জন্য বেগুনি ব্যাকগ্রাউন্ড গ্লাস হাইলাইট
    strategyPoint: "<span class='bg-purple-100/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-purple-800 font-semibold'>Strategic Leadership:</span> Beyond development, I provide C-level guidance to align digital strategy with business goals. My focus is maximizing client <span class='bg-purple-100/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-purple-800 font-semibold'>Return on Investment (ROI)</span> by ensuring technical execution supports market vision.",
    reliabilityPoint: "<span class='bg-purple-100/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-purple-800 font-semibold'>Architectural Resilience:</span> I leverage combined technical and entrepreneurial insight to build platforms for the long term, ensuring they are scalable, secure, and future-proof against evolving industry best practices.",
};


// --- AboutSection Component ---
const AboutSection = ({ id }) => {
    const [aboutData] = useState(INITIAL_ABOUT_DATA);

    // --- লিকুইড গ্লাস ব্যাজ এবং কার্ডের জন্য একই স্টাইল ব্যবহার করা হলো ---
    // এই ক্লাসগুলোই লিকুইড গ্লাস ইফেক্ট দিচ্ছে
    const liquidGlassCommonClasses = "backdrop-filter backdrop-blur-xl bg-white/10 border border-white/30 shadow-2xl transition duration-300 hover:bg-white/20";

    // উপরের ব্যাজের জন্য প্যাডিং এবং শ্যাডো সামান্য ভিন্ন রাখা হয়েছে
    const liquidGlassBadgeClasses = `${liquidGlassCommonClasses} px-4 py-1 rounded-full shadow-lg`;


    // New Mesh Gradient Style Object: Top Left (0% 0%) and Top Right (100% 0%)
    const meshGradientBackground = {
        backgroundColor: 'hsla(0, 0%, 100%, 1)',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(45, 100%, 64%, 0.62) 0px, transparent 50%), /* Top Right (Yellow/Orange) */
            radial-gradient(at 0% 0%, hsla(255, 66%, 56%, 0.7) 0px, transparent 50%) /* Top Left (Purple/Blue) */
        `,
    };

    const darkTextColor = "text-gray-900";
    const lightTextColor = "text-gray-600";

    return (
        <section
            id={id}
            className="py-24 sm:py-32 overflow-hidden relative bg-white"
        >
            <div
                className="absolute top-0 left-0 w-full h-96 z-0"
                style={meshGradientBackground}
            />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    {/* গ্লাস ব্যাজ: এখন কার্ডের মতো একই লিকুইড গ্লাস স্টাইল */}
                    <p className={`text-base font-semibold leading-7 uppercase tracking-widest inline-flex items-center justify-center ${liquidGlassBadgeClasses} ${darkTextColor}`}>
                        <Sparkles className="h-5 w-5 mr-2 text-purple-400" /> {/* Sparkles আইকনের রঙ পরিবর্তন */}
                        Our Core Identity
                    </p>

                    <h2 className={`mt-2 text-4xl font-extrabold tracking-tight ${darkTextColor} sm:text-5xl`}>
                        {aboutData.title}
                    </h2>
                    <p className={`mt-6 text-lg leading-8 ${lightTextColor}`}>
                        {aboutData.subtitle}
                    </p>
                </div>

                <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="flex justify-center lg:justify-start">
                        <div className="max-w-sm lg:max-w-md">
                            <div className="rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white transform transition duration-500 hover:shadow-blue-500/50">
                                <img
                                    src="https://i.postimg.cc/zGkWC4JB/Easin-Arafat-3.png"
                                    alt="Easin Arafat - CEO & Founder, Scaleup Web"
                                    className="w-full h-auto object-cover transform transition duration-500 hover:scale-[1.02]"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x600/6b7280/ffffff?text=Easin+Arafat" }}
                                />
                                <div className="absolute bottom-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full font-semibold text-sm shadow-lg">
                                    {aboutData.badgeText}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className={`text-3xl font-bold mb-6 ${darkTextColor} flex items-center`}>
                            <Code className="h-6 w-6 text-blue-600 mr-2" />
                            {aboutData.approachTitle}
                        </h3>

                        <p className={`text-xl mb-6 ${lightTextColor} font-medium`} dangerouslySetInnerHTML={{ __html: aboutData.approachText1 }}>
                        </p>

                        <p className={`text-lg mb-6 ${lightTextColor}`} dangerouslySetInnerHTML={{ __html: aboutData.approachText2 }}>
                        </p>

                        <h4 className={`text-xl font-semibold mt-8 mb-4 ${darkTextColor} flex items-center`}>
                            <Users className="h-6 w-6 text-purple-600 mr-2" />
                            {aboutData.partnerTitle}
                        </h4>

                        <div className="space-y-6">
                            {/* ফিচার ১: কৌশলগত নেতৃত্ব কার্ড - এখন লিকুইড গ্লাস */}
                            <div className={`p-6 rounded-2xl ${liquidGlassCommonClasses}`}>
                                <div className="flex items-start">
                                    <Users className="h-8 w-8 text-purple-700 mt-0.5 flex-shrink-0" />
                                    <p
                                        className={`ml-4 text-base ${darkTextColor}`}
                                        dangerouslySetInnerHTML={{ __html: aboutData.strategyPoint }}
                                    />
                                </div>
                            </div>

                            {/* ফিচার ২: স্থাপত্য স্থিতিস্থাপকতা কার্ড - এখন লিকুইড গ্লাস */}
                            <div className={`p-6 rounded-2xl ${liquidGlassCommonClasses}`}>
                                <div className="flex items-start">
                                    <Shield className="h-8 w-8 text-purple-700 mt-0.5 flex-shrink-0" />
                                    <p
                                        className={`ml-4 text-base ${darkTextColor}`}
                                        dangerouslySetInnerHTML={{ __html: aboutData.reliabilityPoint }}
                                    />
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
