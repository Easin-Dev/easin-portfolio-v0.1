"use client";

import React from 'react';
import { Briefcase, Code, Cloud, Database, MessageSquare, ArrowRight } from 'lucide-react';

// --- Agency Services Data ---
const AGENCY_SERVICES = [
    {
        icon: Code,
        title: "Custom Web Development",
        description: "Building bespoke, high-performance web applications and marketing sites tailored to unique business needs using modern stacks (MERN, MEVN, Next.js, etc.).",
        color: "text-indigo-600",
        bgColor: "bg-indigo-50"
    },
    {
        icon: Database,
        title: "E-commerce & CMS Solutions",
        description: "Full-cycle development including secure payment integration (Stripe, PayPal), custom shopping cart logic, and scalable CMS implementations (Strapi/Sanity).",
        color: "text-green-600",
        bgColor: "bg-green-50"
    },
    {
        icon: Cloud,
        title: "Cloud & DevOps Integration",
        description: "Setting up CI/CD pipelines, optimizing deployments on platforms like AWS, GCP, and Vercel, and ensuring infrastructure scalability and security.",
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: MessageSquare,
        title: "Ongoing Maintenance & Support",
        description: "Comprehensive maintenance packages covering security patches, performance monitoring, bug fixing, and continuous feature enhancements.",
        color: "text-purple-600",
        bgColor: "bg-purple-50"
    },
];

const AgencyServicesSection = () => {
    // Liquid Glass classes for background and card
    const liquidGlassBackground = {
        backgroundColor: 'hsla(0, 0%, 100%, 1)',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(220, 100%, 64%, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(170, 66%, 56%, 0.1) 0px, transparent 50%)
        `,
    };

    const liquidGlassCardClasses = "backdrop-filter backdrop-blur-md bg-white/50 border border-white/90 shadow-2xl transition duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-400/50";
    const liquidGlassBadgeClasses = "backdrop-filter backdrop-blur-sm bg-white/70 px-4 py-2 rounded-full border border-white/90 shadow-lg";

    return (
        <section className="py-24 sm:py-32 overflow-hidden relative" style={{ minHeight: '80vh' }}>
            {/* Background Gradient */}
            <div
                className="absolute inset-0 z-0 opacity-100"
                style={liquidGlassBackground}
            />

            {/* Content Container */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mx-auto max-w-3xl lg:text-center mb-16">
                    <p className={`text-base font-semibold leading-7 uppercase tracking-widest inline-flex items-center justify-center ${liquidGlassBadgeClasses} text-gray-800`}>
                        <Briefcase className="h-5 w-5 mr-2 text-sky-500" /> Agency Services
                    </p>
                    <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Comprehensive Solutions for Digital Growth
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We partner with you to deliver end-to-end digital services, from initial concept and custom development to long-term cloud maintenance and support.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {AGENCY_SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-3xl ${liquidGlassCardClasses} flex flex-col items-start h-full transform`}
                        >
                            {/* Icon */}
                            <div className={`p-4 rounded-xl ${service.bgColor}`}>
                                <service.icon className={`h-8 w-8 ${service.color}`} />
                            </div>

                            {/* Title */}
                            <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">{service.title}</h4>

                            {/* Description */}
                            <p className="text-sm text-gray-600 mb-6 flex-grow">{service.description}</p>

                            {/* CTA Link (Visual only) */}
                            <button className="flex items-center text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors duration-200 mt-auto">
                                Learn More
                                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-20 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full bg-[#6434F7] text-white shadow-2xl hover:bg-sky-700 transition-all duration-300 transform liquid-glass-cta"
                    >
                        Start Your Project Today
                        <ArrowRight className="h-5 w-5 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AgencyServicesSection;
