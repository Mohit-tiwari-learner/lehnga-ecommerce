"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function TrackOrderPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8">
      <div className="max-w-[600px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">Track Order</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif text-[#111111] tracking-wide mb-4">
            Track Your Order
          </h1>
          <p className="text-gray-500 font-sans text-sm">
            Enter your order details below to see the current status of your shipment.
          </p>
        </div>

        {/* Tracking Form */}
        <div className="bg-gray-50 p-8 md:p-10 font-sans">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700 tracking-wider uppercase">Order Number *</label>
              <input 
                type="text" 
                placeholder="e.g. NAK12345678"
                required 
                className="w-full border border-gray-200 p-3 outline-none focus:border-nakhrali-gold transition-colors bg-white" 
              />
              <span className="text-[10px] text-gray-400">Find this in your order confirmation email.</span>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700 tracking-wider uppercase">Email Address or Phone Number *</label>
              <input 
                type="text" 
                required 
                className="w-full border border-gray-200 p-3 outline-none focus:border-nakhrali-gold transition-colors bg-white" 
              />
            </div>

            <button type="submit" className="flex items-center justify-center gap-2 bg-[#111111] text-white py-4 mt-4 font-medium tracking-widest uppercase hover:bg-nakhrali-gold transition-colors text-sm">
              <Search size={16} /> Track Order
            </button>
          </form>

          <div className="mt-8 text-center border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600 mb-2">Need help with your order?</p>
            <Link href="/contact" className="text-sm font-medium border-b border-black pb-0.5 hover:text-nakhrali-gold hover:border-nakhrali-gold transition-colors">
              Contact Support
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
