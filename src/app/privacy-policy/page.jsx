"use client";

import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Sparkles } from 'lucide-react';

const PrivacyPolicy = () => {
    const sections = [
        {
            icon: <Eye className="text-blue-600" size={24} />,
            title: "Information Collection",
            subtitle: "What Data We Gather",
            content: "When you use our contact form, we collect personal details like your Name, Email address, and WhatsApp number. This is necessary to communicate with you regarding your project inquiries."
        },
        {
            icon: <FileText className="text-purple-600" size={24} />,
            title: "Data Utilization",
            subtitle: "How We Use Your Data",
            content: "We use your information strictly to respond to your messages, provide project quotes, and offer our services. We do not sell or share your personal data with third-party marketers."
        },
        {
            icon: <Lock className="text-indigo-600" size={24} />,
            title: "Security Protocols",
            subtitle: "Protection of Information",
            content: "Your data security is our priority. We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure."
        },
        {
            icon: <ShieldCheck className="text-emerald-600" size={24} />,
            title: "External Connections",
            subtitle: "Third-Party Platform Links",
            content: "Our website contains links to external sites like LinkedIn, GitHub, and Fiverr. We are not responsible for the privacy practices or content of those external platforms."
        }
    ];

    return (
        <div className="min-h-screen bg-white py-24 relative overflow-hidden selection:bg-blue-100 font-sans">

            {/* Background Decorative Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 mb-8 hover:gap-4 transition-all"
                    >
                        <ArrowLeft size={14} /> Back to Home
                    </a>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm mb-6">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-800">Trust & Transparency</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase mb-6">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Policy</span>
                    </h1>
                    <p className="text-gray-500 font-bold text-lg italic max-w-2xl mx-auto">
                        Last Updated: January 2026. Your privacy is a priority for Easin Arafat & ScaleUp Web.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="p-10 rounded-[3rem] bg-white border border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8">
                                {section.icon}
                            </div>
                            <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">
                                {section.title}
                            </h3>
                            <h4 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">
                                {section.subtitle}
                            </h4>
                            <p className="text-gray-500 font-medium leading-relaxed italic text-sm">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact System Note */}
                <div className="max-w-3xl mx-auto mt-20 p-12 rounded-[3.5rem] bg-gray-900 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-2xl font-black text-white mb-4 relative z-10">Have Any Questions?</h3>
                    <p className="text-gray-400 mb-8 relative z-10 italic">
                        If you have any concerns or questions regarding this privacy policy, please feel free to reach out to us through our contact system.
                    </p>
                    <a
                        href="/#contact"
                        className="relative z-10 inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95"
                    >
                        Inquiry System <ShieldCheck size={16} />
                    </a>
                </div>

                {/* Footer Branding */}
                <div className="mt-20 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">
                        ScaleUp Web • Easin Arafat • Security Ecosystem
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;