"use client";

import React, { useState } from 'react';
import { Mail, Send, Sparkles } from 'lucide-react';

const BlogNewsletter = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success

    const handleSubscribe = (e) => {
        e.preventDefault();
        setStatus("loading");

        // সিমুলেটেড সাবস্ক্রিপশন লজিক
        setTimeout(() => {
            console.log("Subscribed:", email);
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <div className="mt-32 relative group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>

            <div className="relative p-12 rounded-[3rem] bg-white/40 backdrop-blur-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-40 -mr-32 -mt-32"></div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                    {/* Left Side: Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
                            <Sparkles className="h-4 w-4 text-blue-600" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Stay Updated</span>
                        </span>
                        <h3 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tighter leading-tight">
                            Get Tech Insights <br /> <span className="text-gray-400">Directly in Your Inbox</span>
                        </h3>
                        <p className="text-gray-500 font-medium max-w-md mx-auto lg:mx-0 italic">
                            Subscribe to receive notifications about new full-stack tutorials, performance tips, and AI trends.
                        </p>
                    </div>

                    {/* Right Side: Form */}
                    <div className="flex-1 w-full max-w-md">
                        {status === "success" ? (
                            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 text-center animate-in zoom-in-95 duration-500">
                                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                    <Send className="h-6 w-6" />
                                </div>
                                <h4 className="text-xl font-bold text-emerald-900 mb-1">Check your inbox!</h4>
                                <p className="text-emerald-700 text-sm font-medium">Thank you for joining the newsletter.</p>
                                <button onClick={() => setStatus("idle")} className="mt-4 text-xs font-black uppercase tracking-widest text-emerald-600 hover:underline">Subscribe another email</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="space-y-4">
                                <div className="relative group/input">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-blue-600 transition-colors">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="yourname@email.com"
                                        className="w-full pl-16 pr-6 py-5 rounded-2xl bg-white border border-gray-100 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all font-medium text-gray-900 shadow-sm"
                                    />
                                </div>
                                <button
                                    disabled={status === "loading"}
                                    className="w-full group relative inline-flex items-center justify-center px-8 py-5 text-xs font-black uppercase tracking-[0.2em] text-white overflow-hidden rounded-2xl bg-gray-900 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 active:scale-95 disabled:opacity-70"
                                >
                                    <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 ease-out group-hover:w-full"></div>
                                    <span className="relative z-10 flex items-center gap-3">
                                        {status === "loading" ? "Processing..." : "Join Newsletter"}
                                        <Send className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </button>
                                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">No Spam. Secure & Encrypted.</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogNewsletter;