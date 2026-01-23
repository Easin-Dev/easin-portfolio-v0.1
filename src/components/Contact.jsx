"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare, Send, Calendar, Briefcase, Sparkles, ArrowRight } from 'lucide-react';

const CONTACT_INFO = [
    { icon: Mail, label: 'Email Address', value: 'hello@agency.com', link: 'mailto:hello@agency.com' },
    { icon: Phone, label: 'Phone Number', value: '+880 123 456 789', link: 'tel:+880123456789' },
    { icon: MapPin, label: 'Office Address', value: 'Dhaka, Bangladesh', link: '#' },
];

const SOCIAL_LINKS = [
    { icon: Linkedin, label: 'LinkedIn', link: '#', color: 'hover:bg-blue-600' },
    { icon: Github, label: 'GitHub', link: '#', color: 'hover:bg-gray-800' },
    { icon: Briefcase, label: 'Fiverr', link: '#', color: 'hover:bg-emerald-600' },
    { icon: MessageSquare, label: 'Upwork', link: '#', color: 'hover:bg-green-600' },
];

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const meshGradientBackground = {
        backgroundColor: '#ffffff',
        backgroundImage: `
            radial-gradient(at 100% 0%, hsla(45, 100%, 95%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(255, 100%, 95%, 1) 0px, transparent 50%)
        `,
    };

    return (
        <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-white" style={meshGradientBackground}>
            {/* Decorative Orbs */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-60"></div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-100 shadow-sm backdrop-blur-md mb-6">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span className="text-xs font-black tracking-widest text-gray-800 uppercase">Get In Touch</span>
                    </span>
                    <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-7xl mb-6 leading-[0.9]">
                        Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Business</span>
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-500 max-w-2xl mx-auto font-medium">
                        Ready to elevate your digital presence? We're here to turn your complex ideas into market-leading reality.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Contact Details */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Contact Information</h3>

                            <div className="space-y-6">
                                {CONTACT_INFO.map((item, i) => (
                                    <a key={i} href={item.link} className="flex items-center gap-5 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                            <item.icon className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.label}</p>
                                            <p className="text-gray-900 font-bold group-hover:text-blue-600 transition-colors">{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <a href="#" className="flex items-center justify-between p-5 rounded-2xl bg-gray-900 text-white hover:bg-blue-600 transition-all duration-500 group">
                                    <div className="flex items-center gap-4">
                                        <Calendar className="h-5 w-5 text-blue-300" />
                                        <span className="font-bold tracking-tight">Book a Strategy Session</span>
                                    </div>
                                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="p-8 rounded-[2rem] bg-white/20 backdrop-blur-md border border-white/40">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 text-center lg:text-left px-2">Global Network</p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                {SOCIAL_LINKS.map((social, i) => (
                                    <a key={i} href={social.link} className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-500 hover:-translate-y-2`}>
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="p-10 rounded-[3rem] bg-white/60 backdrop-blur-2xl border border-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full -mr-16 -mt-16 transition-transform duration-1000 group-hover:scale-150"></div>

                            <h3 className="text-2xl font-black text-gray-900 mb-10 tracking-tight flex items-center gap-3">
                                Send a Message <MessageSquare className="h-6 w-6 text-purple-600" />
                            </h3>

                            <form className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="relative">
                                        <input type="text" className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:border-blue-600 focus:outline-none transition-colors peer font-medium text-gray-900" placeholder=" " />
                                        <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:font-black peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Full Name</label>
                                    </div>
                                    <div className="relative">
                                        <input type="email" className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:border-blue-600 focus:outline-none transition-colors peer font-medium text-gray-900" placeholder=" " />
                                        <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:font-black peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Email Address</label>
                                    </div>
                                </div>

                                <div className="relative">
                                    <input type="text" className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:border-blue-600 focus:outline-none transition-colors peer font-medium text-gray-900" placeholder=" " />
                                    <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:font-black peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Project Scope</label>
                                </div>

                                <div className="relative">
                                    <textarea rows="4" className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:border-blue-600 focus:outline-none transition-colors peer font-medium text-gray-900 resize-none" placeholder=" "></textarea>
                                    <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:font-black peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Project Details</label>
                                </div>

                                <button className="w-full group relative inline-flex items-center justify-center px-10 py-5 text-sm font-black uppercase tracking-widest text-white overflow-hidden rounded-2xl bg-gray-900 transition-all duration-300">
                                    <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 ease-out group-hover:w-full"></div>
                                    <span className="relative z-10 flex items-center gap-3">
                                        Launch Inquiry <Send className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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