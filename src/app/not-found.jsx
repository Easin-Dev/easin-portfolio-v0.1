"use client";

import React from 'react';
import { Home, ArrowLeft, AlertCircle, Sparkles } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden selection:bg-blue-100 font-sans">
      
      {/* Background Decorative Orbs (Alonkoron kora background) */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Animated Icon (Animated Icon section) */}
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-xl relative animate-bounce">
          <AlertCircle size={48} className="text-blue-600" />
          <div className="absolute -top-2 -right-2 bg-white p-2 rounded-full shadow-lg border border-gray-50">
            <Sparkles size={16} className="text-amber-500" />
          </div>
        </div>

        {/* Big 404 Heading (Boro 404 heading) */}
        <h1 className="text-[15vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 select-none">
          404
        </h1>

        {/* Message (Message section) */}
        <div className="max-w-xl mx-auto mt-8">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase mb-4">
            Lost in <span className="text-blue-600">Space?</span>
          </h2>
          <p className="text-gray-500 font-bold text-lg leading-relaxed px-4 italic">
            Oops! The page you are looking for has been moved or doesn't exist in our ecosystem.
            (Oops! Apni jei page-ti khujchen seta hoyto shoriye fela hoyeche ba amader system-e nei.)
          </p>
        </div>

        {/* Action Buttons (Action button gulo) */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="/" 
            className="group relative inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-[0.3em] text-white overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transition-all duration-300 active:scale-95"
          >
            <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 ease-out group-hover:w-full"></div>
            <span className="relative z-10 flex items-center gap-3">
              <Home size={16} /> Back to Home (Home-e firun)
            </span>
          </a>

          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-3 px-10 py-5 text-xs font-black uppercase tracking-[0.3em] text-gray-900 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95"
          >
            <ArrowLeft size={16} /> Go Back (Pichone firun)
          </button>
        </div>

        {/* Footer info (Nicher information) */}
        <div className="mt-24 text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">
            ScaleUp Web • Easin Arafat System
        </div>
      </div>
    </div>
  );
};

export default NotFound;