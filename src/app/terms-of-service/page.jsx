"use client";

import React from 'react';
import { Scale, RefreshCw, CreditCard, ShieldAlert, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';

const TermsOfService = () => {
    const terms = [
        {
            icon: <RefreshCw className="text-blue-600" size={24} />,
            title: "Revision Policy",
            subtitle: "Unlimited Revisions Guarantee",
            content: "We believe in perfection. That's why we offer unlimited revisions for our projects until the initial project scope is met. Your satisfaction is our primary metric for success."
        },
        {
            icon: <Scale className="text-purple-600" size={24} />,
            title: "Service Delivery",
            subtitle: "Project Scope & Execution",
            content: "All services provided by ScaleUp Web are executed based on the agreed-upon project brief. Any changes outside the initial scope may require additional time and budget adjustments."
        },
        {
            icon: <CreditCard className="text-indigo-600" size={24} />,
            title: "Payment Terms",
            subtitle: "Billing & Transactions",
            content: "Payments are typically structured in milestones. Work begins after the initial deposit is confirmed. All payments are non-refundable once the production phase has commenced."
        },
        {
            icon: <ShieldAlert className="text-emerald-600" size={24} />,
            title: "Intellectual Property",
            subtitle: "Ownership of Work",
            content: "Upon full payment, the client owns the final assets produced. However, we reserve the right to display the completed work in our portfolio for promotional purposes."
        }
    ];

    return (
        <div className="min-h-screen bg-white py-24 relative overflow-hidden selection:bg-blue-100 font-sans">

            {/* Background Decorative Glows (Background alonkoron) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header Section (Header ongsho) */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 mb-8 hover:gap-4 transition-all"
                    >
                        <ArrowLeft size={14} /> Back to Home
                    </a>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm mb-6">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-800">Legal Agreement</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase mb-6">
                        Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Service</span>
                    </h1>
                    <p className="text-gray-500 font-bold text-lg italic max-w-2xl mx-auto">
                        Last Updated: January 2026. Please read these terms carefully before engaging with our services.
                    </p>
                </div>

                {/* Content Grid (Terms gulo ekhane grid hishebe thakbe) */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {terms.map((term, index) => (
                        <div
                            key={index}
                            className="p-10 rounded-[3rem] bg-white border border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8">
                                {term.icon}
                            </div>
                            <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">
                                {term.title}
                            </h3>
                            <h4 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">
                                {term.subtitle}
                            </h4>
                            <p className="text-gray-500 font-medium leading-relaxed italic text-sm">
                                {term.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Commitment Banner (Unlimited revisions highlight) */}
                <div className="max-w-4xl mx-auto mt-20 p-12 rounded-[3.5rem] bg-blue-600 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                        <RefreshCw size={120} />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Our Quality Commitment</h3>
                            <p className="text-blue-100 font-bold italic leading-relaxed">
                                We provide unlimited revisions because we believe in the value we deliver. We don't stop until you are 100% satisfied with the result.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl">
                                100% Satisfaction
                            </div>
                        </div>
                    </div>
                </div>

                {/* Agency Note (ScaleUp Web branding) */}
                <div className="mt-20 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">
                        ScaleUp Web • Easin Arafat • Service Ecosystem
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;