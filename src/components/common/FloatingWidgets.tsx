"use client";

import { useState } from "react";
import { MessageCircle, Send, X, MessageSquareText } from "lucide-react";

export function FloatingWidgets() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        
        {/* Instagram Widget */}
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>

        {/* WhatsApp Widget */}
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} />
        </a>

        {/* Helpdesk Chat Toggle */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 bg-[#111111] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform ${isChatOpen ? 'rotate-90' : 'rotate-0'}`}
        >
          {isChatOpen ? <X size={28} /> : <MessageSquareText size={28} />}
        </button>
      </div>

      {/* Chat Dialog box */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300">
          
          {/* Header */}
          <div className="bg-[#111111] text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-serif text-lg">
              N
            </div>
            <div>
              <h4 className="font-sans font-medium text-sm">Nakhrali Support</h4>
              <p className="font-sans text-xs text-gray-300">Typically replies in minutes</p>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-64 overflow-y-auto bg-gray-50 flex flex-col gap-4">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm font-sans text-gray-700 self-start max-w-[85%] border border-gray-100">
              Hello! 👋 Welcome to Nakhrali. How can we assist you with your ethnic wardrobe today?
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm font-sans outline-none focus:ring-1 focus:ring-nakhrali-gold"
            />
            <button className="w-10 h-10 rounded-full bg-nakhrali-gold text-white flex items-center justify-center hover:bg-[#d4af37]/90 transition-colors">
              <Send size={16} className="-ml-0.5 mt-0.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
