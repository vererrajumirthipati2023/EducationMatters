import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f7fb] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
              <ShieldAlert className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c]">Disclaimer</h1>
              <p className="text-sm text-slate-500 mt-1">Last updated: October 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <h2 className="text-xl font-bold text-[#0f2b5c] mt-4 mb-3">1. Educational Purpose Only</h2>
            <p>
              The information, practice tests, games, and materials on Education Matters (accessible from https://theeducationmatters.in) are provided for <strong>general educational and informational purposes only</strong>. 
            </p>
            <p>
              While we strive to provide accurate and realistic simulations of recruitment assessments, these tools are practice simulations. They do not guarantee that you will pass any actual examination, recruitment process, or secure employment. The questions and formats on this site may not reflect the exact questions or formats used by any company.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-3">2. Trademark & Non-Affiliation Notice</h2>
            <p>
              Education Matters is an entirely independent platform. We are <strong>not affiliated with, endorsed by, sponsored by, or in any way officially connected</strong> with Accenture, or any other company, organization, or educational institution whose name may appear on this website.
            </p>
            <p>
              All product names, logos, brands, and trademarks mentioned on this site (including "Accenture") are the property of their respective owners. These names are used on our website strictly for identification and descriptive purposes (e.g., "Accenture-style practice tests") to help users understand the type of assessment being simulated.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-3">3. External Links Disclaimer</h2>
            <p>
              The Education Matters website may contain links to other websites or content belonging to or originating from third parties (such as our YouTube channel or Telegram). Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through our site.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-3">4. Errors and Omissions Disclaimer</h2>
            <p>
              The information given by Education Matters is for general guidance on matters of interest. Even though we take great care to ensure the content is accurate and up-to-date, we are not responsible for any errors or omissions, or for the results obtained from the use of this information. 
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-3">5. Limitation of Liability</h2>
            <p>
              In no event will Education Matters, its related partnerships or corporations, or the partners, agents, or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this site or for any consequential, special, or similar damages, even if advised of the possibility of such damages.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-3">6. Contact Us</h2>
            <p>
              If you have any questions or require more information about our website's disclaimer, feel free to contact us by email at <strong>edumatters2021@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}