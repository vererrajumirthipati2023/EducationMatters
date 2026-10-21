import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f7fb] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
      

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <Lock className="h-6 w-6 text-[#0f2b5c]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c]">Privacy Policy</h1>
              <p className="text-sm text-slate-500 mt-1">Last updated: October 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              At <strong>Education Matters</strong> (accessible from <strong>https://theeducationmatters.in</strong>), the privacy of our visitors is one of our main priorities. This Privacy Policy document contains types of information that is collected and recorded by Education Matters and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>edumatters2021@gmail.com</strong>.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">1. Information We Collect</h2>
            <p>
              When you use our platform, we may ask you to provide certain personally identifiable information, such as your <strong>email address</strong> when you create an account to access full mock tests. We also collect non-personal data through standard web analytics tools to understand how visitors interact with our site.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">2. Log Files and Cookies</h2>
            <p>
              Education Matters follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. 
            </p>
            <p>
              Like any other website, Education Matters uses "cookies." These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">3. Google DoubleClick DART Cookie & AdSense</h2>
            <p>
              Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. 
            </p>
            <p>
              Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-[#d97706] font-semibold hover:underline">https://policies.google.com/technologies/ads</a>.
            </p>
            <p>
              Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Education Matters, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. 
            </p>
            <p className="font-semibold text-slate-800">
              Note that Education Matters has no access to or control over these cookies that are used by third-party advertisers.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">4. Third Party Privacy Policies</h2>
            <p>
              Education Matters's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">5. Account Data and Security</h2>
            <p>
              If you register for an account, we securely store your email and hashed passwords in our database. We implement industry-standard security measures to protect your data. We do not sell, trade, or rent users' personal identification information to others. 
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">6. Children's Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Education Matters does not knowingly collect any Personal Identifiable Information from children under the age of 13.
            </p>

            <h2 className="text-xl font-bold text-[#0f2b5c] mt-8 mb-4">7. Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}