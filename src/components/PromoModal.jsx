"use client";

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Gift, ArrowRight, Zap } from 'lucide-react';

const PromoModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Prothom bar dhukle 3 second por popup-ti dekhabe
        const hasSeenPopup = localStorage.getItem('hasSeenPromo');

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 3000); // 3 second delay
            return () => clearTimeout(timer);
        }
    }, []);

    const closePortal = () => {
        setIsOpen(false);
        // localStorage-e save kora hobe jate bar bar na ashe
        localStorage.setItem('hasSeenPromo', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-500">
            <div className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden animate-in zoom-in-95 duration-500">

                {/* Close Button (Bondho korar button) */}
                <button
                    onClick={closePortal}
                    className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all z-20"
                >
                    <X size={20} />
                </button>

                {/* Modal Content (Popup-er bhetorer kotha) */}
                <div className="relative p-10 md:p-14 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl -ml-20 -mb-20"></div>

                    <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div className="w-20 h-20 rounded-[2rem] bg-gray-900 flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-3">
                            <Gift size={32} className="text-white animate-pulse" />
                        </div>

                        {/* Tagline */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
                            <Sparkles size={12} className="text-blue-600" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">Limited Time Offer</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4 tracking-tighter">
                            Ready to <span className="text-blue-600">Scale Up</span> Your Brand?
                        </h2>

                        <p className="text-gray-500 font-bold italic mb-8 leading-relaxed">
                            Book your project this week and get <span className="text-gray-900">Unlimited Revisions</span> + a 20% Discount on Shopify setup!
                        </p>

                        {/* Action Buttons (Kaaj korar button) */}
                        <div className="flex flex-col gap-4">
                            <a
                                href="/#contact"
                                onClick={closePortal}
                                className="group relative w-full inline-flex items-center justify-center px-8 py-5 text-xs font-black uppercase tracking-[0.3em] text-white bg-gray-900 rounded-2xl overflow-hidden transition-all active:scale-95"
                            >
                                <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
                                <span className="relative z-10 flex items-center gap-3">
                                    Claim My Offer <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </span>
                            </a>
                            <button
                                onClick={closePortal}
                                className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                No thanks, just browsing
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Strip */}
                <div className="bg-gray-50 py-4 px-10 text-center border-t border-gray-100">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em] flex items-center justify-center gap-2">
                        <Zap size={10} className="text-amber-500" /> Powered by ScaleUp Web Agency
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PromoModal;