"use client";

import React, { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

// --- Testimonials Data ---
const TESTIMONIALS = [
    {
        quote: "The team delivered a complex e-commerce platform three weeks ahead of schedule. Their MERN stack expertise was truly outstanding.",
        clientName: "Alex R.",
        clientTitle: "CTO, GlobalTech Solutions",
        rating: 5,
        avatarUrl: "https://i.postimg.cc/85zXp6kX/ecommerce.jpg"
    },
    {
        quote: "We saw a 40% increase in lead conversion after they redesigned our marketing site. The level of performance optimization was impressive.",
        clientName: "Sarah K.",
        clientTitle: "Marketing Director, Innovate Now",
        rating: 5,
        avatarUrl: "https://i.postimg.cc/9f4S9v9S/chat.jpg"
    },
    {
        quote: "Their cloud deployment strategy saved us thousands monthly. Highly reliable and exceptional technical leadership.",
        clientName: "Michael J.",
        clientTitle: "CEO, DataStream Analytics",
        rating: 5,
        avatarUrl: "https://i.postimg.cc/7Z9Zz9Zz/ai.jpg"
    }
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
            setIsTransitioning(false);
        }, 400);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
            setIsTransitioning(false);
        }, 400);
    };

    const liquidGlassBackground = {
        backgroundColor: '#ffffff',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(220, 100%, 95%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(170, 100%, 95%, 1) 0px, transparent 50%)
        `,
    };

    return (
        <section className="py-24 sm:py-32 overflow-hidden relative" style={liquidGlassBackground}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-100 shadow-sm backdrop-blur-md mb-6 animate-fade-in">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">Trust & Success</span>
                    </span>
                    <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Partners Say</span>
                    </h2>
                </div>

                {/* Main Card Container */}
                <div className="relative mx-auto max-w-5xl px-4">

                    {/* Background Stacked Cards Effect */}
                    <div className="absolute top-4 left-8 right-8 bottom-0 bg-white/40 border border-white/60 rounded-[3rem] -z-10 blur-sm translate-y-4 lg:translate-y-8 lg:left-16 lg:right-16"></div>
                    <div className="absolute top-2 left-4 right-4 bottom-0 bg-white/60 border border-white/60 rounded-[3rem] -z-20 translate-y-2 lg:translate-y-4 lg:left-8 lg:right-8"></div>

                    {/* Active Testimonial Card */}
                    <div className={`relative z-30 transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                        <div className="grid lg:grid-cols-5 bg-white/40 backdrop-blur-3xl border border-white/80 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] overflow-hidden">

                            {/* Left Side: Profile */}
                            <div className="lg:col-span-2 p-12 bg-gradient-to-br from-indigo-600 to-blue-700 flex flex-col items-center justify-center text-center text-white relative">
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                                <div className="relative">
                                    <div className="w-28 h-28 rounded-full border-4 border-white/20 p-1 mb-6 relative group overflow-hidden">
                                        <img
                                            src={TESTIMONIALS[currentIndex].avatarUrl}
                                            alt={TESTIMONIALS[currentIndex].clientName}
                                            className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <h4 className="text-3xl font-black mb-1">{TESTIMONIALS[currentIndex].clientName}</h4>
                                    <p className="text-sm font-medium text-indigo-100/80 mb-4">{TESTIMONIALS[currentIndex].clientTitle}</p>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Quote */}
                            <div className="lg:col-span-3 p-12 lg:p-16 flex flex-col justify-center bg-white/30 relative">
                                <Quote className="h-16 w-16 text-indigo-100 absolute top-8 right-8 -z-10 rotate-180" />
                                <p className="text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed italic mb-8 relative">
                                    "{TESTIMONIALS[currentIndex].quote}"
                                </p>
                                <div className="h-px w-20 bg-indigo-600 mb-6"></div>
                                <span className="text-xs font-black uppercase tracking-widest text-indigo-600">Client Statement</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={handlePrev}
                            className="p-4 rounded-2xl bg-white shadow-xl hover:bg-gray-50 border border-gray-100 text-gray-900 transition-all hover:-translate-x-1"
                            aria-label="Previous"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-4 rounded-2xl bg-gray-900 shadow-xl hover:bg-black text-white transition-all hover:translate-x-1"
                            aria-label="Next"
                        >
                            <ArrowRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;