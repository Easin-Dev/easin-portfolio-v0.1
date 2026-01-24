"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Sparkles, Linkedin, Twitter } from 'lucide-react';

// --- রিয়েল এবং এসইও অপ্টিমাইজড ব্লগ ডাটাবেস ---
const BLOG_DATABASE = {
    "react-vs-nextjs-2026-guide": {
        title: "React vs Next.js: Which One Should You Choose in 2026?",
        category: "Development",
        date: "Jan 22, 2026",
        readTime: "10 min read",
        author: "Easin Arafat",
        content: `
            <p>2026 সালে এসে React এবং Next.js এর মধ্যকার পার্থক্য আরও স্পষ্ট হয়েছে। এখন আর প্রশ্নটি "কোনটি ভালো" তা নয়, বরং "আপনার প্রজেক্টের জন্য কোনটি সঠিক" সেটিই প্রধান।</p>
            
            <h2>১. সার্ভার কম্পোনেন্টস (Server Components)</h2>
            <p>Next.js 15+ এখন ডিফল্টভাবে সার্ভার কম্পোনেন্ট ব্যবহার করে, যা ক্লায়েন্ট সাইডে জাভাস্ক্রিপ্ট বান্ডেল সাইজ কমিয়ে দেয়। যেখানে সাধারণ React অ্যাপে সবকিছু ক্লায়েন্টে রেন্ডার হয়।</p>
            
            <pre class="bg-gray-900 text-blue-300 p-4 rounded-xl overflow-x-auto my-6 font-mono text-sm">
// Next.js Server Component Example
async function BlogPost({ id }) {
  const post = await db.post.findUnique({ where: { id } });
  return &lt;div&gt;{post.title}&lt;/div&gt;;
}
            </pre>

            <h2>২. এসইও এবং পারফরম্যান্স</h2>
            <p>Next.js বিল্ট-ইন SSR (Server Side Rendering) এবং Static Generation প্রদান করে, যা সার্চ ইঞ্জিন অপ্টিমাইজেশনের জন্য অপরিহার্য। আপনি যদি একটি বিজনেস ল্যান্ডিং পেজ বা ব্লগ তৈরি করেন, তবে Next.js ই আপনার প্রথম পছন্দ হওয়া উচিত।</p>

            <blockquote>"React একটি লাইব্রেরি যা আপনাকে স্বাধীনতা দেয়, আর Next.js একটি ফ্রেমওয়ার্ক যা আপনাকে পূর্ণাঙ্গ সলিউশন দেয়।"</blockquote>
        `
    },
    "will-ai-replace-developers-truth": {
        title: "Will AI Replace Developers? The Brutal Truth for 2026",
        category: "Career",
        date: "Jan 18, 2026",
        readTime: "12 min read",
        author: "Easin Arafat",
        content: `
            <p>AI এখন আর শুধু চ্যাটবট নয়, এটি এখন কমপ্লেক্স লজিক লিখতে এবং ডিবাগ করতে সক্ষম। তাহলে কি ডেভেলপারদের চাকরি বিপদে?</p>
            
            <h2>ডেভলপার থেকে আর্কিটেক্ট</h2>
            <p>২০২৬ সালে একজন সফল ডেভেলপার মানে শুধু কোড লিখতে পারা নয়, বরং AI কে সঠিক "Prompt" দিয়ে আর্কিটেকচার ডিজাইন করা। জুনিয়র লেভেলের সাধারণ কোডিং জবগুলো এখন AI টুলস যেমন <b>GitHub Copilot X</b> দিয়ে রিপ্লেস হচ্ছে।</p>
            
            <h2>কেন আপনার ভয় পাওয়ার কিছু নেই?</h2>
            <p>AI লজিক তৈরি করতে পারে, কিন্তু এটি মানুষের ব্যবসার প্রয়োজন বা জটিল ইউজার সাইকোলজি পুরোপুরি বোঝে না। আপনাকে ফোকাস করতে হবে প্রবলেম সলভিং এবং সিস্টেম ডিজাইনে।</p>

            <pre class="bg-gray-900 text-green-300 p-4 rounded-xl overflow-x-auto my-6 font-mono text-sm">
// Future-proof coding style
// AI generates the utility, you manage the flow
const systemFlow = (aiOutput) => {
  if (validateSecurity(aiOutput)) {
    integrateToBusinessLogic(aiOutput);
  }
};
            </pre>
        `
    },
    "impact-of-web-performance-on-business": {
        title: "How a High-Performance Website Can Scale Your Business 10x",
        category: "Business",
        date: "Jan 15, 2026",
        readTime: "8 min read",
        author: "Easin Arafat",
        content: `
            <p>একটি স্লো ওয়েবসাইট আপনার ব্যবসার জন্য নীরব ঘাতকের মতো। গুগলের রিসার্চ অনুযায়ী, যদি একটি পেজ লোড হতে ৩ সেকেন্ডের বেশি সময় নেয়, তবে ৪০% ইউজার বাউন্স ব্যাক করে।</p>
            
            <h2>১. কনভার্সন রেট এবং স্পিড</h2>
            <p>আপনার ওয়েবসাইটের স্পিড ১ সেকেন্ড বাড়লে কনভার্সন রেট ৭% পর্যন্ত বাড়তে পারে। ই-কমার্স সাইটের জন্য এটি কয়েক লক্ষ টাকার ডিফারেন্স তৈরি করতে পারে।</p>

            <h2>২. কোর ওয়েব ভাইটালস (Core Web Vitals)</h2>
            <p>গুগল এখন র‍্যাঙ্কিংয়ের জন্য LCP (Largest Contentful Paint) এবং CLS (Cumulative Layout Shift) কে গুরুত্ব দেয়। পারফেক্ট অপ্টিমাইজেশন মানেই সার্চ রেজাল্টে সবার উপরে থাকা।</p>

            <pre class="bg-gray-900 text-amber-300 p-4 rounded-xl overflow-x-auto my-6 font-mono text-sm">
// Image Optimization in Next.js for Performance
import Image from 'next/image';

&lt;Image 
  src="/hero-banner.jpg" 
  width={1200} 
  height={600} 
  priority 
  alt="Scaleup Web Business" 
/&gt;
            </pre>
        `
    }
};

const BlogDetails = () => {
    const params = useParams();
    const blogId = params.id;
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setProgress((currentScroll / totalHeight) * 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ডাটা না পেলে প্রথম ব্লগটি দেখাবে
    const post = BLOG_DATABASE[blogId] || BLOG_DATABASE["react-vs-nextjs-2026-guide"];

    return (
        <div className="min-h-screen bg-white selection:bg-blue-100">
            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 z-[100] transition-all duration-150"
                style={{ width: `${progress}%` }}
            />

            <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
                {/* Back Button */}
                <button
                    onClick={() => window.history.back()}
                    className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-all mb-12"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </button>

                <header className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 rounded-xl bg-blue-600 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
                            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-[1] tracking-tighter mb-10">
                        {post.title}
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-y border-gray-100 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gray-100 overflow-hidden border-2 border-white shadow-md">
                                <img src="https://i.postimg.cc/9fC6cZ6F/Easin-Arafat-CV-Photo.png" alt="Easin" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-sm font-black text-gray-900 uppercase tracking-tight">{post.author}</p>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full-Stack Developer</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="p-3 rounded-xl bg-white border border-gray-100 hover:text-blue-600 transition-all shadow-sm"><Linkedin className="h-4 w-4" /></button>
                            <button className="p-3 rounded-xl bg-white border border-gray-100 hover:text-sky-500 transition-all shadow-sm"><Twitter className="h-4 w-4" /></button>
                            <button className="p-3 rounded-xl bg-white border border-gray-100 hover:text-purple-600 transition-all shadow-sm"><Bookmark className="h-4 w-4" /></button>
                        </div>
                    </div>
                </header>

                {/* Main Content Area with Prose Styling */}
                <main
                    className="prose prose-lg max-w-none 
                    prose-headings:text-gray-900 prose-headings:font-black prose-headings:tracking-tighter
                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-lg
                    prose-strong:text-gray-900
                    prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-3xl prose-blockquote:italic
                    mb-24"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Engagement Card */}
                <footer className="relative p-12 rounded-[3.5rem] bg-gray-900 overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32 transition-opacity group-hover:opacity-40"></div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <Sparkles className="h-10 w-10 text-amber-400 mb-6 animate-pulse" />
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Looking for a professional developer?</h3>
                        <p className="text-gray-400 font-medium mb-10 max-w-md">Let’s turn your vision into a scalable digital product with MERN stack expertise.</p>
                        <a href="/#contact" className="px-10 py-5 bg-white text-gray-900 font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105">
                            Start a Project Today
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default BlogDetails;