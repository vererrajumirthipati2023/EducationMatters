"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ShieldAlert, 
  Zap, 
  Target, 
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  PlayCircle,
  Clock3,
  HelpCircle,
  Network,
  Globe,
  Shield,
  Layers
} from "lucide-react";
import { TechnicalPractice } from "@/components/technical/TechnicalPractice";
import { networkingQuestions } from "@/data/technical/networking";

export default function NetworkingPracticePage() {
  const [hasStarted, setHasStarted] = useState(false);

  // =========================================================================
  // VIEW 1: THE QUIZ
  // =========================================================================
  if (hasStarted) {
    return (
      <div className="flex flex-col min-h-screen bg-[#f4f7fb]">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
          <button
            onClick={() => setHasStarted(false)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#0f2b5c] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Prep Guide
          </button>
        </div>

        <TechnicalPractice
          title="Fundamentals of Networking"
          subtitle="Round 2 Technical Assessment Practice"
          category="Accenture Technical Assessment"
          questions={networkingQuestions}
          backHref="/accenture"
        />
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: THE PREP GUIDE
  // =========================================================================
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f7fb] py-6 sm:py-8">
      
      {/* TOP NAVIGATION */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mb-4 sm:mb-6">
        <Link
          href="/accenture"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#0f2b5c] transition-colors"
        >
          <ArrowLeft className="h-4 w-4 text-[#d97706]" />
          Back to Assessment
        </Link>
      </div>

      {/* 1. THE PREP GUIDE */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-[#0f2b5c] p-5 sm:p-10 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Guide
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-bold border border-white/20">
                  <HelpCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400" /> 14 Questions
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-bold border border-white/20">
                  <Clock3 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400" /> Approx 14 Minutes
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Mastering Networking & Cloud
              </h2>
              <p className="text-blue-100 mt-3 sm:mt-4 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed">
                The Networking & Cloud round tests your understanding of how data travels across networks. You must know the OSI layers, standard protocols, and basic cloud concepts. Read the guide, then test yourself.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-8 md:p-12 space-y-8 sm:space-y-12">
            
            {/* The 4 Pillars Grid */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0f2b5c] mb-4 sm:mb-6 flex items-center gap-2">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-[#d97706]" /> 
                The 4 Core Pillars
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                {/* OSI Model */}
                <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4">
                    <div className="p-1.5 sm:p-2 bg-emerald-100 rounded-lg text-emerald-700">
                      <Layers className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h4 className="font-bold text-[#0f2b5c] text-base sm:text-lg">OSI & TCP/IP Models</h4>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm flex-1">
                    <div>
                      <strong className="text-slate-900 block mb-0.5">7 Layers of OSI:</strong>
                      <span className="text-slate-600 leading-relaxed">Physical, Data Link, Network, Transport, Session, Presentation, Application.</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Layer 3 (Network):</strong>
                      <span className="text-slate-600">IP Addressing and Routing.</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Layer 2 (Data Link):</strong>
                      <span className="text-slate-600">MAC Addresses and Switches.</span>
                    </div>
                  </div>
                </div>

                {/* Protocols */}
                <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4">
                    <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg text-blue-700">
                      <Network className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h4 className="font-bold text-[#0f2b5c] text-base sm:text-lg">Protocols & Ports</h4>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm flex-1">
                    <div>
                      <strong className="text-slate-900 block mb-0.5">HTTP/HTTPS:</strong>
                      <span className="text-slate-600">Port 80 and Port 443.</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">FTP/SSH:</strong>
                      <span className="text-slate-600">Port 21 (File) and Port 22 (Secure Shell).</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">TCP vs UDP:</strong>
                      <span className="text-slate-600">TCP is reliable (handshakes), UDP is fast/connectionless.</span>
                    </div>
                  </div>
                </div>

                {/* IP Addressing */}
                <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4">
                    <div className="p-1.5 sm:p-2 bg-amber-100 rounded-lg text-amber-700">
                      <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h4 className="font-bold text-[#0f2b5c] text-base sm:text-lg">IP Addressing</h4>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm flex-1">
                    <div>
                      <strong className="text-slate-900 block mb-0.5">IPv4 vs IPv6:</strong>
                      <span className="text-slate-600">32-bit vs 128-bit addresses.</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">DHCP:</strong>
                      <span className="text-slate-600">Automatically assigns IP addresses to devices.</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">DNS:</strong>
                      <span className="text-slate-600">Translates domain names into IP addresses.</span>
                    </div>
                  </div>
                </div>

                {/* Cloud & Security */}
                <div className="bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-purple-300 transition-colors flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4">
                    <div className="p-1.5 sm:p-2 bg-purple-100 rounded-lg text-purple-700">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h4 className="font-bold text-[#0f2b5c] text-base sm:text-lg">Devices & Cloud</h4>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm flex-1">
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Devices:</strong>
                      <span className="text-slate-600">Routers (Layer 3), Switches (Layer 2), Hubs.</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Topologies:</strong>
                      <span className="text-slate-600">Star, Mesh, Bus, Ring.</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Cloud Models:</strong>
                      <span className="text-slate-600">Public, Private, Hybrid clouds.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy / Pro Tips Section */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 bg-indigo-200 rounded-lg text-indigo-800">
                  <Zap className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#0f2b5c]">Exam Strategy & Pro-Tips</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 sm:mb-2 flex items-center gap-2">
                    <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
                    Memorize Port Numbers
                  </h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                    They will absolutely ask for port numbers. Remember: HTTP (80), HTTPS (443), FTP (21), SSH (22), DNS (53), and Telnet (23).
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 sm:mb-2 flex items-center gap-2">
                    <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
                    TCP vs UDP Trap
                  </h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                    If the question mentions "reliability", "ordered delivery", or "retransmission", the answer is TCP. If it mentions "streaming", "gaming", or "speed", the answer is UDP.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 sm:mb-2 flex items-center gap-2">
                    <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
                    Layer 2 vs Layer 3
                  </h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                    Know the devices. A Switch operates at Layer 2 (MAC addresses). A Router operates at Layer 3 (IP addresses). 
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 sm:mb-2 flex items-center gap-2">
                    <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
                    Cloud Deployment Models
                  </h4>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                    A "Public" cloud is owned by a third party (AWS). A "Private" cloud is for one organization. A "Hybrid" cloud is a mix of both. 
                  </p>
                </div>
              </div>
            </div>

            {/* THE BIG START BUTTON */}
            <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ready to test your knowledge?</h3>
                <p className="text-slate-400 mb-6 sm:mb-8 max-w-lg text-xs sm:text-base">
                  You have reviewed the core concepts and exam traps. It is time to put your skills to the test with our simulated assessment.
                </p>
                <button
                  onClick={() => {
                    setHasStarted(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base sm:text-lg rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
                >
                  <PlayCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                  Start Practice Test
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 mt-2 sm:mt-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <ShieldAlert className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[10px] sm:text-xs md:text-sm text-amber-900 m-0 leading-relaxed">
                  <strong>Disclaimer:</strong> Education Matters is an independent educational platform. We are not affiliated with, endorsed by, or sponsored by Accenture or any other company. All company names and trademarks are the property of their respective owners. Our practice tests are simulations designed for educational purposes only.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}