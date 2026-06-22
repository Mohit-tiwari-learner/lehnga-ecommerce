"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">Contact Us</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#111111] tracking-wide mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-500 font-sans max-w-lg mx-auto">
            Have a question about your order, need styling advice, or want to know more about our products? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 font-sans">
          
          {/* Contact Information */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-serif text-[#111111] mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8 text-[15px] leading-relaxed">
                Our customer service team is available Monday through Saturday, from 10:00 AM to 7:00 PM IST. We aim to respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-none">
                <MapPin size={20} className="text-rajgharana-gold" />
              </div>
              <div>
                <h3 className="font-medium text-[#111111] mb-1">Our Store / Headquarters</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Rajgharana Fashions Pvt. Ltd.<br />
                  123 Fashion Street, Cyber Hub<br />
                  Gurugram, Haryana 122002<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-none">
                <Phone size={20} className="text-rajgharana-gold" />
              </div>
              <div>
                <h3 className="font-medium text-[#111111] mb-1">Phone / WhatsApp</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  +91 98765 43210<br />
                  Toll Free: 1800 123 4567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-none">
                <Mail size={20} className="text-rajgharana-gold" />
              </div>
              <div>
                <h3 className="font-medium text-[#111111] mb-1">Email</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Support: care@rajgharana.com<br />
                  Wholesale: business@rajgharana.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-10">
            <h2 className="text-2xl font-serif text-[#111111] mb-8">Send us a Message</h2>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-700 tracking-wider uppercase">First Name *</label>
                  <input type="text" required className="w-full border border-gray-200 p-3 outline-none focus:border-rajgharana-gold transition-colors bg-white" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-700 tracking-wider uppercase">Last Name *</label>
                  <input type="text" required className="w-full border border-gray-200 p-3 outline-none focus:border-rajgharana-gold transition-colors bg-white" />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700 tracking-wider uppercase">Email Address *</label>
                <input type="email" required className="w-full border border-gray-200 p-3 outline-none focus:border-rajgharana-gold transition-colors bg-white" />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700 tracking-wider uppercase">Phone Number</label>
                <input type="tel" className="w-full border border-gray-200 p-3 outline-none focus:border-rajgharana-gold transition-colors bg-white" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700 tracking-wider uppercase">Message *</label>
                <textarea required rows={5} className="w-full border border-gray-200 p-3 outline-none focus:border-rajgharana-gold transition-colors bg-white resize-none"></textarea>
              </div>

              <button type="submit" className="bg-[#111111] text-white py-4 mt-2 font-medium tracking-widest uppercase hover:bg-rajgharana-gold transition-colors text-sm">
                Submit Message
              </button>
            </form>
          </div>

        </div>
        
      </div>
    </div>
  );
}
