"use client";

import React from 'react';
import {
    GraduationCap,
    Award,
    Sparkles,
    ExternalLink,
    CheckCircle2,
    MapPin,
    Link as LinkIcon,
    Code2,
    Monitor
} from 'lucide-react';

const EDUCATION = [
    {
        degree: "B.Sc in Computer Science & Engineering",
        institution: "International University of Scholars",
        duration: "2026 - Present",
        description: "Starting the journey as a CSE student to master software architecture and deep-tech problem solving.",
        portal: "https://ius.edu.bd/",
        imageUrl: "https://i.postimg.cc/wxnWrmPn/2022-01-08.webp",
        accent: "bg-blue-600"
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Jhalakathi NS Kamil Madrasah",
        duration: "2022 - 2024",
        description: "Successfully completed higher secondary education with a focus on science and logic.",
        portal: "https://www.nskamil.com/",
        imageUrl: "https://i.postimg.cc/D0SqgxnQ/25289272-2044570952496350-202333745789792376-n2.jpg",
        accent: "bg-indigo-600"
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "Tejgaon Govt. High School",
        duration: "2020 - 2022",
        description: "Built a solid foundation in science and mathematics during the secondary school years.",
        portal: "#",
        imageUrl: "https://i.postimg.cc/D0SqgxnQ/25289272-2044570952496350-202333745789792376-n2.jpg",
        accent: "bg-purple-600"
    }
];

const CERTIFICATIONS = [
    {
        title: "Complete Web Development",
        platform: "Programming Hero",
        year: "2024",
        link: "https://web.programming-hero.com/home",
        skills: ["HTML", "CSS", "JS", "React", "Node.js", "Tailwind", "Express", "MongoDB", "Next.js"],
        icon: <Code2 size={20} className="text-emerald-500" />
    },
    {
        title: "CS Fundamentals & DSA",
        platform: "Phitron",
        year: "2024",
        link: "https://phitron.io/",
        skills: ["C", "C++", "DSA", "Algorithm", "Problem Solving"],
        icon: <Code2 size={20} className="text-blue-500" />
    },
    {
        title: "Digital Marketing & Graphics",
        platform: "E-learning and Earning Ltd",
        year: "2025",
        link: "https://e-laeltd.com/",
        skills: ["SEO", "Ad Strategy", "UI/UX Design", "Graphic Design"],
        icon: <Monitor size={20} className="text-orange-500" />
    }
];

const EducationSection = () => {
    return (
        <section id="education" className="py-24 relative bg-white overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50/40 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm mb-6">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-800">Academic Journey</span>
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase mb-6">
                        Education <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">& Milestones</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Education Timeline */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-100">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Formal Education</h3>
                        </div>

                        <div className="relative border-l-2 border-gray-100 ml-6 space-y-12">
                            {EDUCATION.map((edu, index) => (
                                <div key={index} className="relative pl-10 group">
                                    {/* Timeline Dot */}
                                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white shadow-sm transition-transform group-hover:scale-150 ${edu.accent}`}></div>

                                    <div className="p-0 rounded-[2.5rem] bg-white border border-gray-50 shadow-sm group-hover:shadow-2xl group-hover:border-blue-100 transition-all duration-500 overflow-hidden">
                                        {/* Institution Image Wrapper */}
                                        <div className="h-44 w-full relative overflow-hidden">
                                            <img
                                                src={edu.imageUrl}
                                                alt={edu.institution}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                                        </div>

                                        <div className="p-8 -mt-12 relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest">
                                                    {edu.duration}
                                                </span>
                                                {edu.portal !== "#" && (
                                                    <a href={edu.portal} target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">
                                                        <LinkIcon size={16} />
                                                    </a>
                                                )}
                                            </div>

                                            <h4 className="text-xl font-black text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                                                {edu.degree}
                                            </h4>
                                            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-4 uppercase tracking-tight">
                                                <MapPin size={14} className="text-blue-600" />
                                                {edu.institution}
                                            </div>
                                            <p className="text-sm text-gray-400 leading-relaxed italic">{edu.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Certifications Grid */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-purple-600 rounded-2xl text-white shadow-lg shadow-purple-100">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Specialized Training</h3>
                        </div>

                        <div className="grid gap-6">
                            {CERTIFICATIONS.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group p-8 rounded-[2.5rem] bg-white border border-gray-50 shadow-sm hover:shadow-2xl hover:border-purple-100 transition-all duration-500 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ExternalLink size={18} className="text-purple-600" />
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 text-[10px] font-black text-purple-600 uppercase tracking-widest mb-2">
                                                {cert.icon} {cert.platform} • {cert.year}
                                            </div>
                                            <h4 className="text-xl font-black text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                                                {cert.title}
                                            </h4>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {cert.skills.map((skill, sIndex) => (
                                                    <span key={sIndex} className="text-[9px] font-bold px-2 py-1 bg-gray-50 text-gray-400 rounded-md uppercase tracking-tighter border border-gray-100">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            className="whitespace-nowrap px-6 py-3 rounded-xl bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-purple-600 transition-all text-center"
                                        >
                                            Credential
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EducationSection;