"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ClipboardList, Palette, Code, CheckCircle, Rocket, Shield, ArrowRight, Sparkles } from 'lucide-react';

const WORKFLOW_STEPS = [
    { id: 1, icon: ClipboardList, title: "Planning & Strategy", description: "We define objectives and analyze the market to build a solid project foundation.", color: "from-blue-500 to-cyan-500" },
    { id: 2, icon: Palette, title: "Design & Prototyping", description: "Crafting user-centric UI/UX designs and interactive prototypes for your approval.", color: "from-purple-500 to-pink-500" },
    { id: 3, icon: Code, title: "Development", description: "Efficient coding using modern, scalable technologies tailored to your vision.", color: "from-indigo-500 to-blue-600" },
    { id: 4, icon: CheckCircle, title: "Quality Assurance", description: "Rigorous testing across platforms to ensure security and flawless functionality.", color: "from-emerald-500 to-teal-600" },
    { id: 5, icon: Rocket, title: "Deployment", description: "Secure deployment to live servers and official launch to your audience.", color: "from-orange-500 to-red-500" },
    { id: 6, icon: Shield, title: "Ongoing Support", description: "Post-launch monitoring and long-term support to ensure continuous evolution.", color: "from-gray-700 to-gray-900" },
];

const TimelineStep = ({ step, index }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const isLeft = index % 2 === 0;

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(ref.current);
            }
        }, { threshold: 0.2 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="relative w-full mb-20 sm:mb-32 flex items-center justify-center">
            {/* Step Card */}
            <div className={`w-full sm:w-[45%] transition-all duration-1000 ease-out 
                ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`}
                ${isLeft ? 'sm:mr-auto' : 'sm:ml-auto'}`}>

                <div className="group relative p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color} rounded-t-full`}></div>

                    <div className={`flex items-center gap-4 mb-4 ${!isLeft && 'sm:flex-row-reverse sm:text-right'}`}>
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm ring-1 ring-gray-100 group-hover:scale-110 transition-transform duration-500`}>
                            <step.icon className="h-7 w-7 text-gray-800" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">{step.title}</h3>
                    </div>

                    <p className={`text-gray-600 font-medium leading-relaxed ${!isLeft && 'sm:text-right'}`}>
                        {step.description}
                    </p>
                </div>
            </div>

            {/* Central Circle Indicator */}
            <div className={`absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-xl z-20 flex items-center justify-center border-4 border-gray-50 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-sm shadow-inner`}>
                    {step.id}
                </div>
            </div>
        </div>
    );
};

const WorkflowSection = () => {
    const meshGradientBackground = {
        backgroundColor: '#ffffff',
        backgroundImage: `
            radial-gradient(at 0% 100%, hsla(240, 100%, 96%, 1) 0px, transparent 50%),
            radial-gradient(at 100% 0%, hsla(290, 100%, 96%, 1) 0px, transparent 50%)
        `,
    };

    return (
        <section className="py-24 sm:py-32 relative overflow-hidden bg-white" style={meshGradientBackground}>
            <div className="mx-auto max-w-7xl px-6 relative z-10">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-28">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-100 shadow-sm backdrop-blur-md mb-6">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span className="text-xs font-black tracking-widest text-gray-800 uppercase">Process</span>
                    </span>
                    <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-7xl mb-6 leading-[0.9]">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Bring Ideas</span> to Life
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-500 max-w-2xl mx-auto font-medium">
                        A structured, transparent journey from initial concept to a market-ready digital masterpiece.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Continuous Progress Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gray-100 rounded-full hidden sm:block overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 opacity-20"></div>
                    </div>

                    {WORKFLOW_STEPS.map((step, index) => (
                        <TimelineStep key={step.id} step={step} index={index} />
                    ))}
                </div>

                {/* Modernized CTA */}
                <div className="text-center mt-20">
                    <button className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-black uppercase tracking-widest text-white overflow-hidden rounded-full bg-gray-900 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(100,52,247,0.3)]">
                        <div className="absolute inset-0 w-0 bg-[#6434F7] transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                        <span className="relative z-10 flex items-center gap-3">
                            Start Your Project Today
                            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;