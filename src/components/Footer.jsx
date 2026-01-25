"use client";

import React from 'react';
import {
    Linkedin,
    Github,
    Facebook,
    Youtube,
    ExternalLink,
    Heart,
    ArrowUp
} from 'lucide-react';

const Footer = () => {
    // Social Links Data
    const SOCIAL_LINKS = [
        {
            name: 'LinkedIn',
            icon: <Linkedin size={20} />,
            url: 'https://linkedin.com/in/easin-arafat',
            color: 'hover:bg-[#0077B5]'
        },
        {
            name: 'GitHub',
            icon: <Github size={20} />,
            url: 'https://github.com/Easin-Dev',
            color: 'hover:bg-[#333]'
        },
        {
            name: 'Fiverr',
            icon: <span className="font-black text-xs">fi</span>,
            url: 'https://www.fiverr.com/easin_dev',
            color: 'hover:bg-[#1dbf73]'
        },
        {
            name: 'Freelancer',
            icon: <span className="font-black text-[10px]">fl</span>,
            url: 'https://www.freelancer.com/u/easin6',
            color: 'hover:bg-[#29b2fe]'
        },
        {
            name: 'Facebook',
            icon: <Facebook size={20} />,
            url: 'https://facebook.com/scaleupweb',
            color: 'hover:bg-[#1877F2]'
        },
        {
            name: 'YouTube',
            icon: <Youtube size={20} />,
            url: 'https://youtube.com/@scaleupweb',
            color: 'hover:bg-[#FF0000]'
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-gray-50">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Top Section: Large Name Branding */}
                <div className="text-center mb-20">
                    <div className="inline-block relative">
                        <h2 className="text-[12vw] md:text-[10vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 select-none">
                            Easin Arafat
                        </h2>
                        {/* Tagline below name */}
                        <div className="absolute -bottom-4 left-0 w-full flex justify-between items-center px-2">
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-gray-400">Full-Stack Architect</span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-gray-400">ScaleUp Web</span>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Navigation and Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-12 border-y border-gray-100">

                    {/* Agency Link */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <p className="text-xs font-black uppercase tracking-widest text-gray-400">The Agency</p>
                        <a
                            href="https://scaleupweb.netlify.app/"
                            target="_blank"
                            className="group flex items-center gap-3 text-2xl font-black text-gray-900 hover:text-blue-600 transition-colors"
                        >
                            ScaleUp Web <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                        </a>
                    </div>

                    {/* Social Media Grid */}
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-xs font-black uppercase tracking-widest text-gray-400">Digital Footprints</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {SOCIAL_LINKS.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 transition-all duration-500 shadow-sm border border-gray-100 ${social.color} hover:text-white hover:-translate-y-2`}
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Scroll to Top */}
                    <div className="hidden md:flex flex-col items-center md:items-end gap-4">
                        <p className="text-xs font-black uppercase tracking-widest text-gray-400">Back to Top</p>
                        <button
                            onClick={scrollToTop}
                            className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-all group"
                        >
                            <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                        © 2026 All Rights Reserved
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
                        Designed with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by Easin
                    </div>
                    <div className="flex gap-8">
                        <a href="/privacy-policy" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors">Privacy Policy</a>
                        <a href="/terms-of-service" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;