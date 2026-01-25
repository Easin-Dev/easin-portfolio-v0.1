"use client";

import React, { useState, useEffect } from 'react';
import {
    Mail, Phone, MapPin, Linkedin, Github,
    MessageSquare, Send, Sparkles, MessageCircle,
    ArrowUpRight, AlertCircle, Briefcase, X, CheckCircle2
} from 'lucide-react';

const CONTACT_INFO = [
    {
        icon: Mail,
        label: 'Email Address',
        value: 'mdeasinarafat016456@gmail.com',
        link: 'mailto:mdeasinarafat016456@gmail.com'
    },
    {
        icon: MessageCircle,
        label: 'WhatsApp Chat',
        value: '+880 1645 650504',
        link: 'https://wa.me/8801645650504'
    },
    {
        icon: MapPin,
        label: 'Office Location',
        value: 'Tejkunipara, Farmgate, Dhaka',
        link: '#'
    },
];

const SOCIAL_LINKS = [
    { icon: Linkedin, label: 'LinkedIn', link: '#', color: 'hover:bg-blue-600' },
    { icon: Github, label: 'GitHub', link: 'https://github.com/Easin-Dev', color: 'hover:bg-gray-800' },
    { icon: Briefcase, label: 'Freelancer', link: 'https://www.freelancer.com/u/easin6', color: 'hover:bg-blue-500' },
    { icon: Briefcase, label: 'Fiverr', link: 'https://www.fiverr.com/easin_dev', color: 'hover:bg-emerald-600' },
];

const ContactSection = () => {
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [notification, setNotification] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        subject: '',
        message: ''
    });

    // Auto-hide notification
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setNotification({
                    message: "Thank you! Your message has been successfully submitted.",
                    type: "success"
                });
                setFormData({ name: '', email: '', whatsapp: '', subject: '', message: '' });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                throw new Error("Failed to send");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus("error");
            setNotification({
                message: "Sorry! There was a problem sending the message. Please try again.",
                type: "error"
            });
        }
    };

    const meshGradientBackground = {
        backgroundColor: '#ffffff',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(45, 100%, 96%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(255, 100%, 96%, 1) 0px, transparent 50%)
        `,
    };

    return (
        <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-white selection:bg-blue-100" style={meshGradientBackground}>

            {/* Notification Popup */}
            {notification && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-md px-6 animate-in slide-in-from-top duration-500">
                    <div className={`flex items-center justify-between p-4 rounded-2xl shadow-2xl border backdrop-blur-xl ${notification.type === 'success' ? 'bg-emerald-50/90 border-emerald-200 text-emerald-800' : 'bg-red-50/90 border-red-200 text-red-800'
                        }`}>
                        <div className="flex items-center gap-3">
                            {notification.type === 'success' ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
                            <p className="text-sm font-bold">{notification.message}</p>
                        </div>
                        <button onClick={() => setNotification(null)} className="p-1 hover:bg-black/5 rounded-lg"><X className="h-4 w-4" /></button>
                    </div>
                </div>
            )}

            {/* Background Orbs - pointer-events-none is mandatory to allow input focus */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] z-0 pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-purple-50/30 rounded-full blur-[120px] z-0 pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="mx-auto max-w-4xl text-center mb-20">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-8">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span className="text-[10px] font-black tracking-[0.2em] text-gray-800 uppercase">Available for Hire</span>
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900 leading-[0.9] mb-8 uppercase">
                        Let's build <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Greatness</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-stretch">
                    {/* Left Column */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Emergency Call Card */}
                        <a href="tel:+8801645650504" className="group relative p-8 rounded-[2.5rem] bg-gray-900 text-white shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Phone className="h-20 w-20 rotate-12" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                        <AlertCircle className="h-5 w-5 text-amber-400" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Emergency Call</span>
                                </div>
                                <h3 className="text-3xl font-black mb-2 tracking-tight">+880 1645 650504</h3>
                                <p className="text-gray-400 font-medium text-sm">Need an immediate response? Call me directly for urgent project discussions.</p>
                            </div>
                        </a>

                        <div className="grid gap-4 flex-grow">
                            {CONTACT_INFO.map((item, i) => (
                                <a key={i} href={item.link} className="group flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                                        <p className="text-gray-900 font-bold text-lg leading-tight break-all">{item.value}</p>
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-gray-300 ml-auto group-hover:text-blue-600 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        <div className="h-full p-10 md:p-14 rounded-[3.5rem] bg-white/70 backdrop-blur-3xl border border-white shadow-2xl relative">
                            <h3 className="text-3xl font-black text-gray-900 mb-10 tracking-tight flex items-center gap-3 uppercase">
                                Send a Message <MessageSquare className="h-7 w-7 text-indigo-600" />
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-10 relative z-50">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="relative group border-b-2 border-gray-100 focus-within:border-blue-600 transition-all">
                                        <input
                                            required name="name" value={formData.name} onChange={handleChange}
                                            type="text" placeholder=" " autoComplete="off"
                                            className="w-full bg-transparent py-3 focus:outline-none font-bold text-gray-900 peer"
                                        />
                                        <label className="absolute left-0 top-3 text-gray-400 font-black uppercase text-[10px] tracking-widest transition-all pointer-events-none peer-focus:-top-5 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-5">Full Name *</label>
                                    </div>
                                    <div className="relative group border-b-2 border-gray-100 focus-within:border-blue-600 transition-all">
                                        <input
                                            required name="email" value={formData.email} onChange={handleChange}
                                            type="email" placeholder=" " autoComplete="off"
                                            className="w-full bg-transparent py-3 focus:outline-none font-bold text-gray-900 peer"
                                        />
                                        <label className="absolute left-0 top-3 text-gray-400 font-black uppercase text-[10px] tracking-widest transition-all pointer-events-none peer-focus:-top-5 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-5">Email Address *</label>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="relative group border-b-2 border-gray-100 focus-within:border-green-600 transition-all">
                                        <input
                                            name="whatsapp" value={formData.whatsapp} onChange={handleChange}
                                            type="text" placeholder=" " autoComplete="off"
                                            className="w-full bg-transparent py-3 focus:outline-none font-bold text-gray-900 peer"
                                        />
                                        <label className="absolute left-0 top-3 text-gray-400 font-black uppercase text-[10px] tracking-widest transition-all pointer-events-none peer-focus:-top-5 peer-focus:text-green-600 peer-[:not(:placeholder-shown)]:-top-5">WhatsApp Number (Optional)</label>
                                    </div>
                                    <div className="relative group border-b-2 border-gray-100 focus-within:border-blue-600 transition-all">
                                        <input
                                            required name="subject" value={formData.subject} onChange={handleChange}
                                            type="text" placeholder=" "
                                            className="w-full bg-transparent py-3 focus:outline-none font-bold text-gray-900 peer"
                                        />
                                        <label className="absolute left-0 top-3 text-gray-400 font-black uppercase text-[10px] tracking-widest transition-all pointer-events-none peer-focus:-top-5 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-5">Project Scope *</label>
                                    </div>
                                </div>

                                <div className="relative group border-b-2 border-gray-100 focus-within:border-blue-600 transition-all">
                                    <textarea
                                        required name="message" value={formData.message} onChange={handleChange}
                                        rows="4" placeholder=" "
                                        className="w-full bg-transparent py-3 focus:outline-none font-bold text-gray-900 peer resize-none"
                                    ></textarea>
                                    <label className="absolute left-0 top-3 text-gray-400 font-black uppercase text-[10px] tracking-widest transition-all pointer-events-none peer-focus:-top-5 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4">Project Brief *</label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="group relative inline-flex items-center justify-center px-12 py-5 text-xs font-black uppercase tracking-[0.3em] text-white overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transition-all duration-300 w-full md:w-auto active:scale-95 disabled:opacity-50"
                                >
                                    <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 ease-out group-hover:w-full"></div>
                                    <span className="relative z-10 flex items-center gap-4">
                                        {status === "loading" ? "Sending..." : "Send Message"} <Send className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;