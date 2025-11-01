"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ClipboardList, Palette, Code, CheckCircle, Rocket, Shield, ArrowRight } from 'lucide-react'; // Added ArrowRight for the button

// --- Work Flow Data ---
const WORKFLOW_STEPS = [
    {
        id: 1,
        icon: ClipboardList,
        title: "Planning & Strategy",
        description: "We define objectives, analyze the market, and understand your target audience to build a solid project strategy. This is the foundation of success."
    },
    {
        id: 2,
        icon: Palette,
        title: "Design & Prototyping",
        description: "We create user-centric (UX/UI) designs and interactive prototypes. We secure your initial approval before moving into full development."
    },
    {
        id: 3,
        icon: Code,
        title: "Development & Implementation",
        description: "The solution is coded efficiently using modern, scalable technologies, strictly following the approved design and strategy documents."
    },
    {
        id: 4,
        icon: CheckCircle,
        title: "Testing & Quality Assurance (QA)",
        description: "Thorough quality assurance and testing are performed across various platforms to verify code integrity, functionality, and security standards."
    },
    {
        id: 5,
        icon: Rocket,
        title: "Deployment & Launch",
        description: "After final testing sign-off, the project is securely deployed to the live server and officially launched to the public."
    },
    {
        id: 6,
        icon: Shield,
        title: "Monitoring & Ongoing Support",
        description: "We provide continuous monitoring post-launch and offer long-term support to resolve issues and ensure the solution evolves with your business needs."
    },
];

// Helper Component for each step, handling the intersection animation and layout
const TimelineStep = ({ step, index, liquidGlassCardClasses, accentColor }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    // Determine which side the card should appear on
    const isLeft = index % 2 === 0;

    // Intersection Observer to trigger animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current); // Stop observing after animation
                }
            },
            // Trigger when 10% of the element is visible
            { threshold: 0.1 } 
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    // Animation classes: Fade in and slide from the side
    const animationClass = isVisible
        ? 'opacity-100 translate-x-0'
        // Card starts off-screen (left for even, right for odd)
        : `opacity-0 ${isLeft ? '-translate-x-1/4' : 'translate-x-1/4'}`;
    
    // Dot animation (scale up)
    const dotAnimationClass = isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0';

    return (
        <div ref={ref} className={`relative w-full mb-12 flex items-center`}>
            
            {/* Card Content (Alternates position using order-2 for right-side steps) */}
            {/* On small screens, both cards are full width and left-aligned */}
            <div className={`w-full sm:w-1/2 transform transition duration-1000 ease-out ${animationClass} ${isLeft ? 'sm:pr-12' : 'sm:pl-12 order-2'}`}>
                <div className={liquidGlassCardClasses}>
                    <div className={`flex items-start mb-4 ${isLeft ? '' : 'flex-row-reverse text-right'}`}>
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-indigo-100 border-2 border-indigo-400 ${accentColor}`}>
                            <step.icon className="h-6 w-6" />
                        </div>
                        {/* Title */}
                        <h3 className={`text-xl font-bold text-gray-900 ${isLeft ? 'ml-4' : 'mr-4'}`}>{step.title}</h3>
                    </div>
                    <p className="text-gray-700 text-base">{step.description}</p>
                </div>
            </div>
            
            {/* Central Dot Indicator */}
            {/* This is vertically centered within the parent flex item */}
            <div className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-500 border-4 border-white shadow-lg z-20 flex items-center justify-center transform transition duration-1000 ease-out ${dotAnimationClass}`}>
                <span className="text-white text-sm font-bold">{step.id}</span>
            </div>

            {/* Spacer (Hidden on mobile) */}
            {/* This maintains the w-1/2 structure for the alternating layout on desktop */}
            <div className={`hidden sm:block w-1/2 ${isLeft ? 'pl-12' : 'pr-12'}`}></div>
        </div>
    );
};


const WorkflowSection = () => {
    // Liquid Glass classes for background and card
    const liquidGlassBackground = {
        backgroundColor: 'hsla(0, 0%, 100%, 1)',
        backgroundImage: `
            radial-gradient(at 0% 100%, hsla(240, 100%, 75%, 0.1) 0px, transparent 50%),
            radial-gradient(at 100% 0%, hsla(290, 60%, 70%, 0.1) 0px, transparent 50%)
        `,
    };

    const liquidGlassCardClasses = "backdrop-filter backdrop-blur-xl bg-white/80 border border-white/90 shadow-xl rounded-2xl p-6 transition duration-300 hover:shadow-2xl hover:border-indigo-200";
    const accentColor = "text-indigo-600";
    const connectorColor = "bg-gray-300"; // Changed to gray for the dashed line
    const rocketColor = "text-red-500"; // Color for the rocket icon


    return (
        <section className="py-24 sm:py-32 relative overflow-hidden" style={liquidGlassBackground}>
            {/* Content Container */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mx-auto max-w-3xl lg:text-center mb-16">
                    <p className={`text-base font-semibold leading-7 uppercase tracking-widest inline-flex items-center justify-center backdrop-filter backdrop-blur-sm bg-white/70 px-4 py-2 rounded-full border border-white/90 shadow-lg text-gray-800`}>
                        <Rocket className="h-5 w-5 mr-2 text-indigo-500" /> Our Work Flow
                    </p>
                    <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        How We Bring Ideas to Life
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our structured, 6-step process guarantees that every project is delivered with maximum **quality**, **transparency**, and **successful outcomes**.
                    </p>
                </div>

                {/* Vertical Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    
                    {/* Central Dashed Line */}
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 border-l-2 border-dashed ${connectorColor} hidden sm:block`}></div>
                    
                    {WORKFLOW_STEPS.map((step, index) => (
                        <TimelineStep 
                            key={step.id} 
                            step={step} 
                            index={index} 
                            liquidGlassCardClasses={liquidGlassCardClasses} 
                            accentColor={accentColor} 
                        />
                    ))}

                </div>

                {/* NEW: Start Your Project Button */}
                <div className="text-center mt-20">
                    <button
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        style={{ backgroundColor: '#6434F7' }} // Custom background color
                    >
                        Start Your Project
                        <ArrowRight className="ml-3 h-6 w-6" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default WorkflowSection;
