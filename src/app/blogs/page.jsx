"use client";

import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, ArrowLeft, Sparkles, BookOpen, Search } from 'lucide-react';
import Link from 'next/link'; // Next.js Navigation এর জন্য
import BlogNewsletter from './Subscription-box';

// --- রিয়েল এবং SEO অপ্টিমাইজড ব্লগ ডাটা ---
const BLOG_POSTS = [
    {
        id: "react-vs-nextjs-2026-guide",
        title: "React vs Next.js: Which One Should You Choose in 2026?",
        excerpt: "Choosing between a library and a framework can be tough. We break down Server Components, SEO capabilities, and Performance metrics to help you decide.",
        date: "Jan 22, 2026",
        readTime: "10 min read",
        category: "Development",
        imageUrl: "https://i.postimg.cc/14xvz1YL/react.png",
        accent: "from-blue-600 to-cyan-500"
    },
    {
        id: "will-ai-replace-developers-truth",
        title: "Will AI Replace Developers? The Brutal Truth for 2026",
        excerpt: "AI is writing code faster than humans. Explore why the role of a developer is shifting from 'Coder' to 'Architect' and how to stay relevant in the AI era.",
        date: "Jan 18, 2026",
        readTime: "12 min read",
        category: "Career",
        imageUrl: "https://i.postimg.cc/dtPrKyvm/react.png",
        accent: "from-purple-600 to-pink-600"
    },
    {
        id: "impact-of-web-performance-on-business",
        title: "How a High-Performance Website Can Scale Your Business 10x",
        excerpt: "Speed is money. Learn how optimizing your Core Web Vitals directly impacts conversion rates, user retention, and Google Search rankings.",
        date: "Jan 15, 2026",
        readTime: "8 min read",
        category: "Business",
        imageUrl: "https://i.postimg.cc/j5JmXcNf/tailwind.png",
        accent: "from-emerald-500 to-teal-600"
    }
];

const BlogPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = BLOG_POSTS.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const meshGradientBackground = {
        backgroundColor: '#ffffff',
        backgroundImage: `
            radial-gradient(at 0% 0%, hsla(210, 100%, 97%, 1) 0px, transparent 50%),
            radial-gradient(at 100% 100%, hsla(270, 100%, 97%, 1) 0px, transparent 50%)
        `,
    };

    return (
        <div className="min-h-screen bg-white" style={meshGradientBackground}>
            <div className="mx-auto max-w-7xl px-6 py-20 relative z-10">

                {/* Back Button & Header */}
                <div className="mb-20">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors mb-8 group">
                        <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-10 items-end">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                                <Sparkles className="h-4 w-4 text-indigo-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-700">Expert Insights</span>
                            </span>
                            <h1 className="text-5xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase">
                                Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Blog</span>
                            </h1>
                        </div>

                        {/* Search Bar */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles (e.g. Next.js, AI, Business)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/50 backdrop-blur-md border border-gray-100 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all font-medium text-gray-900 shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredPosts.map((post, index) => (
                        <Link
                            key={index}
                            href={`/blogs/${post.id}`} // ডাইনামিক ইউআরএল
                            className="group"
                        >
                            <article className="relative h-full flex flex-col bg-white/40 backdrop-blur-2xl border border-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                                {/* Image Wrapper */}
                                <div className="aspect-[16/9] overflow-hidden relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${post.accent} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                    <div className="absolute inset-0 flex items-center justify-center p-12">
                                        <img
                                            src={post.imageUrl}
                                            alt={post.category}
                                            className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-700 opacity-80"
                                        />
                                    </div>
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                                        <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {post.date}</span>
                                        <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {post.readTime}</span>
                                    </div>

                                    <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-xs font-black uppercase tracking-widest text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                            Read Full Case Study <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                                        </span>
                                        <BookOpen className="h-5 w-5 text-gray-200 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {/* Empty Search State */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-40 bg-gray-50/50 rounded-[3rem] border border-dashed border-gray-200">
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No articles found matching "{searchQuery}"</p>
                    </div>
                )}

                {/* Subscription Box */}
                <div className="mt-32">
                    <BlogNewsletter />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;