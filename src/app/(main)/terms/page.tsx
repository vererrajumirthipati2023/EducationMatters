import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, ShieldAlert } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f7fb] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <FileText className="h-6 w-6 text-[#0f2b5c]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c]">Terms and Conditions</h1>
              <p className="text-sm text-slate-500 mt-1">Last updated: October 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              Welcome to Education Matters!
            </p>
            <p>
              These terms and conditions outline the rules and regulations for the use of Education Matters's Website, located at <strong>https://theeducationmatters.in</strong>.
            </p>
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Education Matters if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">1. Terminology</h2>
            <p>
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">2. Use License and Intellectual Property</h2>
            <p>
              Unless otherwise stated, Education Matters and/or its licensors own the intellectual property rights for all material on Education Matters. All intellectual property rights are reserved. You may access this from Education Matters for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Republish material from Education Matters (including our custom assessment games).</li>
              <li>Sell, rent, or sub-license material from Education Matters.</li>
              <li>Reproduce, duplicate, or copy material from Education Matters for commercial purposes.</li>
              <li>Redistribute content from Education Matters without explicit permission.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">3. User Accounts</h2>
            <p>
              If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. We reserve the right to terminate accounts that violate these terms.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">4. Educational Purpose & Third-Party Trademarks</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0f2b5c] m-0">Important Disclaimer</p>
                  <p className="text-sm text-slate-700 m-0 mt-1">
                    The practice tests, simulations, and study materials provided on Education Matters are for <strong>educational and preparation purposes only</strong>. They do not guarantee employment or specific results in any examination. 
                  </p>
                  <p className="text-sm text-slate-700 m-0 mt-2">
                    Education Matters is entirely independent and is <strong>not affiliated with, endorsed by, or sponsored by Accenture</strong> or any other company whose name may appear on this site. All company names, logos, and brands are the property of their respective owners and are used here strictly for identification and educational simulation purposes.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Education Matters, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Education Matters, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">6. Content Accuracy</h2>
            <p>
              While we strive to ensure that the information, practice questions, and assessment simulations on our website are accurate and up-to-date, we do not warrant its completeness or accuracy. The questions are simulated and may not reflect the exact questions asked in an actual recruitment drive.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">7. Modifications to Terms</h2>
            <p>
              Education Matters is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">8. Governing Law</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">9. Contact Information</h2>
            <p>
              If you have any queries regarding any of our terms, please contact us at <strong>edumatters2021@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}