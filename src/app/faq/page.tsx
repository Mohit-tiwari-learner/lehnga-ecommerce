"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long will my order take to arrive?",
        a: "Domestic orders typically take 3-5 business days for ready-to-ship items. Custom orders or heavy bridal pieces may take 14-21 days. International shipping generally takes 7-10 business days."
      },
      {
        q: "Do you offer international shipping?",
        a: "Yes, we ship worldwide! Shipping costs and delivery times will be calculated at checkout based on your location. Please note that customs duties may apply depending on your country's regulations."
      },
      {
        q: "How can I track my order?",
        a: "Once your order is shipped, you will receive an email and SMS with the tracking details and a link to track your package in real-time."
      }
    ]
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 7-day return policy for unused, unworn, and unwashed items with all tags intact. Custom-made, altered, or bridal wear items are not eligible for return."
      },
      {
        q: "How do I initiate an exchange?",
        a: "To initiate an exchange, please contact our customer care team at care@rajgharana.com within 48 hours of receiving your order, providing your order number and the reason for exchange."
      }
    ]
  },
  {
    category: "Product & Sizing",
    questions: [
      {
        q: "How do I know what size to order?",
        a: "We provide a detailed size chart on every product page. If you are between sizes, we recommend sizing up or opting for our custom tailoring service."
      },
      {
        q: "Can I customize the color or fit of a design?",
        a: "Yes! Many of our lehengas and bridal pieces can be customized. Please reach out to our styling team via WhatsApp before placing your order to discuss customization options."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8">
      <div className="max-w-[800px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">FAQ</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#111111] tracking-wide mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 font-sans">
            Find answers to common questions about orders, shipping, and more.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-12 font-sans">
          {FAQS.map((section, sIdx) => (
            <div key={section.category}>
              <h2 className="text-xl font-serif text-[#111111] mb-6 pb-2 border-b border-gray-200">
                {section.category}
              </h2>
              <div className="flex flex-col border border-gray-200 rounded-sm overflow-hidden">
                {section.questions.map((faq, qIdx) => {
                  const id = `${sIdx}-${qIdx}`;
                  const isOpen = openIndex === id;
                  
                  return (
                    <div key={id} className="border-b border-gray-200 last:border-b-0">
                      <button 
                        onClick={() => toggleFAQ(id)}
                        className={cn(
                          "w-full flex items-center justify-between p-5 text-left transition-colors",
                          isOpen ? "bg-gray-50" : "bg-white hover:bg-gray-50"
                        )}
                      >
                        <span className="font-medium text-[#111111] pr-8">{faq.q}</span>
                        <ChevronDown 
                          size={18} 
                          className={cn(
                            "text-gray-500 transition-transform duration-300 flex-none",
                            isOpen && "rotate-180"
                          )} 
                        />
                      </button>
                      <div 
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="p-5 pt-0 bg-gray-50 text-sm text-gray-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center font-sans">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link href="/contact" className="inline-block bg-[#111111] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-rajgharana-gold transition-colors">
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  );
}
