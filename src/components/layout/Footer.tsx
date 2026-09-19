import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#071325] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-9 w-9 shrink-0 rounded-full overflow-hidden border border-amber-400/50 bg-white">
                <Image
                  src="/education-matters-logo.jpg"
                  alt="Education Matters Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white leading-tight">
                  EDUCATION <span className="text-[#fbbf24]">MATTERS</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none">
                  Assessment Platform
                </span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Interactive assessment practice platform designed to help students and job seekers prepare for cognitive, spatial, and numerical recruitment tests.
            </p>

            <div className="pt-1">
              <a
                href="https://www.youtube.com/@Education_Matters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <svg className="h-4 w-4 fill-current text-red-500" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>Education Matters on YouTube</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="hover:text-white transition-colors">
                  All Games
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Assessment Platforms */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Assessment Platforms
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/accenture" className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-white font-medium">
                  <span>Accenture</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    Live
                  </span>
                </Link>
              </li>
              <li className="text-xs text-slate-500 pt-1">
                More company platforms coming soon
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Education Matters. All rights reserved.</p>
          <p className="text-slate-500">
            Practice. Improve. Perform.
          </p>
        </div>
      </div>
    </footer>
  );
}
