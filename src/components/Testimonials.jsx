"use client";

import React, { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';

// --- Testimonials Data ---
const TESTIMONIALS = [
    {
        quote: "The team delivered a complex e-commerce platform three weeks ahead of schedule. Their MERN stack expertise and proactive communication were truly outstanding.",
        clientName: "Alex R.",
        clientTitle: "CTO, GlobalTech Solutions",
        rating: 5,
        avatarUrl: "https://placehold.co/100x100/A3A3A3/FFFFFF?text=AR"
    },
    {
        quote: "We saw a 40% increase in lead conversion after they redesigned our marketing site. The level of detail and commitment to performance optimization was impressive.",
        clientName: "Sarah K.",
        clientTitle: "Marketing Director, Innovate Now",
        rating: 5,
        avatarUrl: "https://placehold.co/100x100/9CA3AF/FFFFFF?text=SK"
    },
    {
        quote: "Their cloud deployment strategy saved us thousands monthly on hosting costs. Highly reliable and exceptional technical leadership.",
        clientName: "Michael J.",
        clientTitle: "CEO, DataStream Analytics",
        rating: 5,
        avatarUrl: "https://placehold.co/100x100/6B7280/FFFFFF?text=MJ"
    },
    {
        quote: "Working with them was a breeze. They quickly grasped our vision and executed flawlessly on the mobile application design and development.",
        clientName: "Jenna C.",
        clientTitle: "Product Manager, TechHub",
        rating: 5,
        avatarUrl: "https://placehold.co/100x100/4B5563/FFFFFF?text=JC"
    },
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false); // New state for fade effect
    const [slideDirection, setSlideDirection] = useState(null); // New state for slide effect

    const handleTransition = (newIndex, direction) => {
        if (isTransitioning) return; // Prevent rapid clicking

        setIsTransitioning(true); // Start fade-out
        setSlideDirection(direction); // Set slide direction

        // Step 1: Fade out (300ms duration)
        setTimeout(() => {
            setCurrentIndex(newIndex);
            
            // Step 2: Update content, then start fade-in (after a small delay)
            setTimeout(() => {
                setIsTransitioning(false); // End fade-in
                setSlideDirection(null); // Reset slide direction
            }, 50); // Small delay to ensure state update takes effect
        }, 300); // Matches transition-opacity duration below
    };

    const nextTestimonial = () => {
        const newIndex = (currentIndex + 1) % TESTIMONIALS.length;
        handleTransition(newIndex, 'left');
    };

    const prevTestimonial = () => {
        const newIndex = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
        handleTransition(newIndex, 'right');
    };

    // Liquid Glass classes for background and card
    const liquidGlassBackground = {
        backgroundColor: 'hsla(0, 0%, 100%, 1)',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(220, 100%, 64%, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(170, 66%, 56%, 0.1) 0px, transparent 50%)
        `,
    };

    const liquidGlassCardClasses = "backdrop-filter backdrop-blur-xl bg-white/90 border border-white/90 shadow-2xl rounded-3xl transition duration-300";

    const StarRating = ({ rating }) => (
        <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`h-5 w-5 ${i < rating ? 'fill-current text-amber-400' : 'text-gray-300'}`}
                />
            ))}
        </div>
    );

    const currentTestimonial = TESTIMONIALS[currentIndex];
    // Get the next two testimonials for the stacked effect
    const nextIndex1 = (currentIndex + 1) % TESTIMONIALS.length;
    const nextIndex2 = (currentIndex + 2) % TESTIMONIALS.length;

    // Adjusted translations for a more prominent "peeking out from the right corner" effect
    const stackedTestimonials = [
        // Card 3 (furthest back): More shift
        { index: nextIndex2, z: 10, scale: 'scale-[0.88]', opacity: 'opacity-50', translate: 'translate-x-16 translate-y-6 lg:translate-x-32 lg:translate-y-12' },
        // Card 2 (middle back): Less shift
        { index: nextIndex1, z: 20, scale: 'scale-[0.94]', opacity: 'opacity-75', translate: 'translate-x-8 translate-y-3 lg:translate-x-16 lg:translate-y-6' },
    ];

    // Dynamic classes for smooth slide and fade
    const slideClass = isTransitioning 
        ? (slideDirection === 'left' ? '-translate-x-4' : 'translate-x-4') // Slide out slightly
        : (slideDirection === 'left' || slideDirection === 'right' ? 'translate-x-0' : ''); // Slide back in

    const transitionClass = `transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'} ${slideClass}`;


    return (
        <section className="py-24 sm:py-32 overflow-hidden relative" style={{ minHeight: '100vh' }}>
            {/* Background Gradient */}
            <div
                className="absolute inset-0 z-0 opacity-100"
                style={liquidGlassBackground}
            />

            {/* Content Container */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mx-auto max-w-3xl lg:text-center mb-16">
                    <p className={`text-base font-semibold leading-7 uppercase tracking-widest inline-flex items-center justify-center backdrop-filter backdrop-blur-sm bg-white/70 px-4 py-2 rounded-full border border-white/90 shadow-lg text-gray-800`}>
                        <Quote className="h-5 w-5 mr-2 text-indigo-500" /> Client Success Stories
                    </p>
                    <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        What Our Partners Say
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our work is validated by the real-world success and glowing feedback from our amazing clients.
                    </p>
                </div>

                {/* Testimonial Slider / Stacked Cards */}
                <div className="relative mx-auto max-w-4xl h-[450px] lg:h-[400px]">
                    
                    {/* Stacked Back Cards */}
                    {stackedTestimonials.map((stack, i) => (
                        <div
                            key={TESTIMONIALS[stack.index].clientName}
                            // Increased padding/margin on the main card to ensure visibility
                            className={`absolute inset-0 p-8 rounded-3xl ${liquidGlassCardClasses} transform origin-top-left pointer-events-none transition-all duration-700 ease-out 
                                ${stack.scale} ${stack.opacity} ${stack.translate} z-${stack.z}`}
                        >
                            <div className="flex flex-col h-full justify-between">
                                <p className="text-gray-700 text-lg italic text-opacity-0">
                                    {/* Invisible content to maintain height */}
                                    "{TESTIMONIALS[stack.index].quote.substring(0, 150)}..." 
                                </p>
                                {/* Client Info Placeholder */}
                                <div className="mt-4 pt-4 border-t border-gray-200 text-opacity-0">
                                    <StarRating rating={TESTIMONIALS[stack.index].rating} />
                                    <p className="text-xl font-semibold text-gray-900 mt-2">{TESTIMONIALS[stack.index].clientName}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Front Testimonial Card - Now with smooth transition logic */}
                    <div
                        key={currentTestimonial.clientName + currentIndex} // Key must change for new content to mount
                        className={`absolute inset-0 p-0 rounded-3xl z-30 ${liquidGlassCardClasses} flex flex-col lg:flex-row ${transitionClass}`}
                    >
                        {/* Left Side: Avatar/Client Info */}
                        <div className="w-full lg:w-1/3 bg-indigo-500/90 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none p-8 flex flex-col items-center justify-center text-white text-center">
                            <img 
                                src={currentTestimonial.avatarUrl} 
                                alt={currentTestimonial.clientName}
                                className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/4B5563/FFFFFF?text=" + currentTestimonial.clientName.substring(0, 2); }}
                            />
                            <p className="text-3xl font-bold mt-4">{currentTestimonial.clientName}</p>
                            <p className="text-base font-medium opacity-80 mt-1">{currentTestimonial.clientTitle}</p>
                            <div className="mt-3">
                                <StarRating rating={currentTestimonial.rating} />
                            </div>
                        </div>

                        {/* Right Side: Quote */}
                        <div className="w-full lg:w-2/3 p-8 flex flex-col justify-center">
                            <Quote className="h-10 w-10 text-indigo-400 mb-6" />

                            <p className="text-gray-800 text-xl italic mb-8">
                                "{currentTestimonial.quote}"
                            </p>

                            <a
                                href="#contact"
                                className="mt-4 w-fit px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-200"
                            >
                                Read Full Case Study
                            </a>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute inset-y-0 w-full flex items-center justify-between pointer-events-none z-40 px-4">
                        <button
                            onClick={prevTestimonial}
                            className="p-3 bg-white/70 backdrop-blur-lg border border-white/90 rounded-full shadow-lg text-gray-700 hover:bg-white transition duration-200 pointer-events-auto"
                            aria-label="Previous Testimonial"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="p-3 bg-white/70 backdrop-blur-lg border border-white/90 rounded-full shadow-lg text-gray-700 hover:bg-white transition duration-200 pointer-events-auto"
                            aria-label="Next Testimonial"
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
