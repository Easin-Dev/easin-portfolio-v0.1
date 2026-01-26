"use client";

import React from 'react';
import {
    ShoppingCart,
    Layout,
    Code,
    Megaphone,
    Search,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    ShoppingBag,
    Server,
    Palette,
    ShieldCheck
} from 'lucide-react';

const SERVICES = [
    {
        title: "E-commerce Solutions",
        description: "Full-scale online stores with secure payments, inventory management, and seamless user experience to boost your sales.",
        icon: ShoppingCart,
        features: ["Multi-vendor Support", "Payment Gateway Integration", "Custom Admin Dashboard"],
        accent: "from-blue-600 to-indigo-600",
        delay: "0.1s"
    },
    {
        title: "Shopify Store Expert",
        description: "Building high-performance Shopify stores with custom themes and app integrations for a scalable dropshipping or retail business.",
        icon: ShoppingBag,
        features: ["Theme Customization", "Dropshipping Setup", "Shopify App Integration"],
        accent: "from-green-500 to-emerald-600",
        delay: "0.15s"
    },
    {
        title: "Custom Web Development",
        description: "Tailor-made web applications built with the MERN stack (Next.js), ensuring scalability, security, and unique branding.",
        icon: Code,
        features: ["MERN/Next.js Stack", "Scalable Architecture", "API Integration"],
        accent: "from-emerald-600 to-teal-600",
        delay: "0.2s"
    },
    {
        title: "Domain & Hosting Support",
        description: "Taking the technical headache away. I will manage your domain purchase and cloud hosting setup for maximum uptime.",
        icon: Server,
        features: ["Cloud Server Setup", "Domain Migration", "SSL & Email Setup"],
        accent: "from-indigo-600 to-purple-700",
        delay: "0.25s"
    },
    {
        title: "High-Converting Landing Pages",
        description: "Pixel-perfect, high-performance landing pages designed to turn your visitors into loyal customers.",
        icon: Layout,
        features: ["A/B Testing Ready", "Fast Loading Speed", "Mobile Responsive"],
        accent: "from-purple-600 to-pink-600",
        delay: "0.3s"
    },
    {
        title: "FB & Meta Marketing",
        description: "Data-driven marketing strategies to scale your brand on Facebook and Instagram using advanced ad campaigns.",
        icon: Megaphone,
        features: ["Targeted Ads", "Pixel Integration", "ROAS Optimization"],
        accent: "from-sky-600 to-blue-700",
        delay: "0.35s"
    },
    {
        title: "SEO Optimization",
        description: "Rank higher on Google with on-page, off-page, and technical SEO strategies that drive organic traffic.",
        icon: Search,
        features: ["Keyword Research", "Technical Audit", "Backlink Strategy"],
        accent: "from-orange-500 to-red-600",
        delay: "0.4s"
    },
    {
        title: "Modern UI/UX Design",
        description: "Crafting visually stunning and intuitive user interfaces that define your brand identity and improve user retention.",
        icon: Palette,
        features: ["Figma Prototyping", "Design Systems", "User-Centric Flow"],
        accent: "from-pink-500 to-rose-600",
        delay: "0.45s"
    },
    {
        title: "Maintenance & Support",
        description: "Continuous monitoring, security patches, and performance optimization to keep your web apps running smoothly.",
        icon: ShieldCheck,
        features: ["24/7 Monitoring", "Security Updates", "Speed Optimization"],
        accent: "from-gray-700 to-gray-900",
        delay: "0.5s"
    }
];

const ServicesPage = () => {
    const meshGradient = {
        background: `radial-gradient(at 0% 0%, hsla(210, 100%, 98%, 1) 0px, transparent 50%),
                     radial-gradient(at 100% 100%, hsla(270, 100%, 98%, 1) 0px, transparent 50%)`,
    };

    return (
        <div className="min-h-screen bg-white" style={meshGradient}>
            <div className="mx-auto max-w-7xl px-6 py-24 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-24">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-100 shadow-sm backdrop-blur-md mb-6 animate-fade-in">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span className="text-[10px] font-black tracking-widest text-gray-800 uppercase">Growth Engine</span>
                    </span>
                    <h1 className="text-5xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8 uppercase">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Services</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto italic">
                        Transforming your vision into digital excellence with our premium development and marketing solutions.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-10 rounded-[3rem] bg-white border border-gray-50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                            style={{ animationDelay: service.delay }}
                        >
                            {/* Accent Glow Overlay */}
                            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.accent}`}></div>

                            {/* Icon Box */}
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 shadow-sm flex items-center justify-center mb-8 border border-gray-100 group-hover:scale-110 group-hover:bg-gray-900 transition-all duration-500">
                                <service.icon className="h-8 w-8 text-gray-900 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight uppercase">{service.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed mb-8 text-sm">{service.description}</p>

                            {/* Features List */}
                            <ul className="space-y-3 mb-10">
                                {service.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-gray-400">
                                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="/#contact"
                                className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 hover:text-blue-600 transition-colors group/link"
                            >
                                Discuss Project <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* CTA Bottom Section */}
                <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-gray-900 text-white relative overflow-hidden text-center shadow-2xl">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight">Ready to scale <br /> your business?</h2>
                        <p className="text-gray-400 font-medium mb-12 max-w-xl mx-auto text-lg italic">I specialize in creating custom solutions tailored to your unique business challenges. Let's make it happen.</p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/#contact" className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-white hover:text-blue-600 transition-all transform active:scale-95 shadow-xl">
                                Start Consultation
                            </a>
                            <a href="https://www.fiverr.com/easin_dev" target="_blank" className="px-10 py-5 bg-white/10 text-white border border-white/20 font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-white hover:text-gray-900 transition-all active:scale-95">
                                Hire Me on Fiverr
                            </a>
                        </div>
                    </div>
                </div>

                {/* Trust Footer */}
                <div className="mt-20 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">
                        ScaleUp Web • Easin Arafat • Service Ecosystem
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;