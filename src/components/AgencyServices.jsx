"use client";

import React from 'react';
import { Briefcase, Code, Cloud, Database, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

// --- Agency Services Data ---
const AGENCY_SERVICES = [
    {
        icon: Code,
        title: "Custom Web Development",
        description: "Bespoke, high-performance applications tailored to your business needs using modern MERN & Next.js stacks.",
        color: "text-blue-600",
        glow: "group-hover:shadow-blue-200/50"
    },
    {
        icon: Database,
        title: "E-commerce Solutions",
        description: "Secure payment systems and scalable CMS implementations like Strapi for seamless digital commerce.",
        color: "text-emerald-600",
        glow: "group-hover:shadow-emerald-200/50"
    },
    {
        icon: Cloud,
        title: "Cloud & DevOps",
        description: "Automated CI/CD pipelines and optimized infrastructure on AWS, Vercel, and GCP for peak reliability.",
        color: "text-rose-600",
        glow: "group-hover:shadow-rose-200/50"
    },
    {
        icon: MessageSquare,
        title: "Support & Maintenance",
        description: "Continuous monitoring, security patches, and feature updates to keep your platform future-proof.",
        color: "text-purple-600",
        glow: "group-hover:shadow-purple-200/50"
    },
];

const AgencyServicesSection = () => {
    // Liquid Glass Background
    const liquidGlassBackground = {
        backgroundColor: '#ffffff',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(220, 100%, 95%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(170, 100%, 95%, 1) 0px, transparent 50%)
        `,
    };

    return (
        <section className="py-24 sm:py-32 overflow-hidden relative" style={liquidGlassBackground}>
            {/* Soft decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 z-0"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-100 shadow-sm backdrop-blur-md mb-6 animate-fade-in">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">Agency Expertise</span>
                    </span>
                    <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl mb-6">
                        Scaling Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Mastery</span>
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto font-medium">
                        We don't just build websites; we engineer scalable digital ecosystems that drive growth and maximize efficiency.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {AGENCY_SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className={`group p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${service.glow} flex flex-col h-full relative overflow-hidden`}
                        >
                            {/* Decorative gradient flare in card */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            {/* Icon Wrapper */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm ring-1 ring-gray-100 group-hover:scale-110 transition-transform duration-500 mb-8`}>
                                <service.icon className={`h-7 w-7 ${service.color}`} />
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h4>

                            <p className="text-sm leading-relaxed text-gray-500 mb-8 flex-grow font-medium">
                                {service.description}
                            </p>

                            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-all">
                                Learn More
                                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Modern CTA Section */}
                <div className="mt-24 relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-[3rem] blur-3xl opacity-5"></div>
                    <div className="relative p-12 rounded-[3rem] bg-gradient-to-r from-gray-900 to-blue-900 text-center overflow-hidden shadow-2xl">
                        {/* Mesh Overlay inside CTA */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to elevate your digital presence?</h3>
                            <p className="text-blue-100/70 mb-10 max-w-xl mx-auto font-medium">Let's discuss how our technical expertise can turn your vision into a market-leading platform.</p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-10 py-4 text-sm font-black uppercase tracking-widest rounded-full bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-white/20 transform hover:scale-105"
                            >
                                Get a Free Consultation
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgencyServicesSection;