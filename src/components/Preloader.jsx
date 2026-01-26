"use client";

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Loading progress bar simulation (Loading progress bar simulate kora hoyeche)
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        // Window load hole loader bondho hobe (Window load hoye gele loader off hobe)
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 600); // Smooth finish-er jonno ektu delay
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            clearInterval(interval);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[20000] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out">

            {/* Background Orbs (Soft background glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[120px] animate-pulse"></div>

            <div className="relative z-10 text-center">
                {/* Brand Icon (Personalized Icon) */}
                <div className="relative mb-8 inline-block">
                    <div className="w-20 h-20 rounded-[2.2rem] bg-gray-900 flex items-center justify-center shadow-2xl animate-spin-slow">
                        <Sparkles size={32} className="text-white" />
                    </div>
                    {/* Ring animation (Outer spinning ring) */}
                    <div className="absolute inset-[-10px] border-2 border-blue-100 rounded-[2.8rem] animate-ping opacity-20"></div>
                </div>

                {/* Personal Branding (Apnar Nam ekhane) */}
                <div className="space-y-2">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">
                        Easin <span className="text-blue-600">Arafat</span>
                    </h2>
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                        Full-Stack Web Architect
                    </p>
                </div>

                {/* Progress Bar (Modern thin progress bar) */}
                <div className="mt-12 w-56 h-[3px] bg-gray-100 rounded-full overflow-hidden mx-auto">
                    <div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Status Message (Initializing message) */}
                <p className="mt-6 text-[9px] font-black uppercase tracking-[0.3em] text-gray-300 animate-pulse">
                    Synchronizing Portfolio {progress}%
                </p>
            </div>

            <style jsx="true">{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Preloader;