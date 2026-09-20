import Image from "next/image";
import Link from "next/link";
import { Mail, Send } from "lucide-react";

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

              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Interactive assessment practice platform designed to help students and job seekers prepare for cognitive, spatial, and numerical recruitment tests.
            </p>

            {/* Contact Message */}
            <div className="pt-2">
              <p className="text-sm font-semibold text-slate-200">
                Have any doubts or suggestions?
              </p>

              <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Feel free to send us a message. We would love to hear from you.
              </p>
            </div>

            {/* Social & Contact Links - Single Line */}
            <div className="flex flex-wrap items-center gap-3 pt-1">

              {/* Email */}
              <a
                href="mailto:edumatters2021@gmail.com"
                className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-amber-400/10 hover:text-white transition-all"
              >
                <Mail className="h-5 w-5 text-amber-400" />
                <span>edumatters2021@gmail.com</span>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Education_Matters"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-red-500/10 hover:text-white transition-all"
              >
                <svg
                  className="h-5 w-5 fill-current text-red-500"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>

                <span>YouTube</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/edumatters2021"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-sky-400/10 hover:text-white transition-all"
              >
                <Send className="h-5 w-5 text-sky-400" />
                <span>Telegram</span>
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
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/practice"
                  className="hover:text-white transition-colors"
                >
                  Game Practice
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
                <Link
                  href="/accenture"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-white font-medium"
                >
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
          <p>
            © {new Date().getFullYear()} Education Matters. All rights reserved.
          </p>

          <p className="text-slate-500">
            Practice. Improve. Perform.
          </p>
        </div>
      </div>
    </footer>
  );
}