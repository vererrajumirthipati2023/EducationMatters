"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Mail, 
  Send, 
  MessageSquare, 
  Clock, 
  PlayCircle, 
  CheckCircle2,
  ShieldAlert
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // UPDATED: Removed "Email: ${formData.email}" from the body
    const mailtoLink = `mailto:edumatters2021@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Inquiry from Education Matters"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    // Reset the form after 5 seconds so they can send another message if needed
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f7fb]">
   

      {/* MAIN CONTENT */}
      <main className="flex-1 relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
        
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f2b5c] shadow-md mb-5">
              <MessageSquare className="h-7 w-7 text-amber-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5c] tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-base text-slate-600">
              Have a question about a practice test, a bug to report, or just want to say hi? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* LEFT COLUMN: Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#0f2b5c] mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Mail className="h-5 w-5 text-[#0f2b5c]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Email Us</h3>
                      <p className="text-sm text-slate-500 mt-1 mb-2">We typically reply within 24-48 hours.</p>
                      <a href="mailto:edumatters2021@gmail.com" className="text-sm font-semibold text-[#d97706] hover:underline">
                        edumatters2021@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                      <Send className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Direct Message</h3>
                      <p className="text-sm text-slate-500 mt-1 mb-2">Have a quick question? Drop us a direct message on Telegram for faster responses.</p>
                      <a href="https://t.me/edumatters2021" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#d97706] hover:underline">
                        @edumatters2021
                      </a>
                    </div>
                  </div>

                  {/* YouTube */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                      <PlayCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">YouTube Channel</h3>
                      <p className="text-sm text-slate-500 mt-1 mb-2">Watch our latest preparation videos.</p>
                      <a href="https://www.youtube.com/@Education_Matters" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#d97706] hover:underline">
                        @Education_Matters
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#0f2b5c] mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Email Client Opened</h3>
                  <p className="text-sm text-slate-500">
                    Your default email app should have opened. If not, please email us directly at edumatters2021@gmail.com.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#0f2b5c] focus:outline-none focus:ring-2 focus:ring-[#0f2b5c]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#0f2b5c] focus:outline-none focus:ring-2 focus:ring-[#0f2b5c]/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#0f2b5c] focus:outline-none focus:ring-2 focus:ring-[#0f2b5c]/20 transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#0f2b5c] focus:outline-none focus:ring-2 focus:ring-[#0f2b5c]/20 transition-all resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0f2b5c] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#163b78] transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}