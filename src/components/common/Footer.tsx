"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowUp, 
  Mail, 
  Clock, 
  MapPin, 
  ArrowRight,
  Send
} from "lucide-react";

export function Footer() {
  const [mumbaiTime, setMumbaiTime] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
      setMumbaiTime(formatter.format(date));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClass = "relative w-max text-gray-400 hover:text-white text-sm font-light transition-colors py-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-nakhrali-gold after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100";

  return (
    <footer className="w-full bg-[#080808] text-white pt-20 pb-8 px-6 md:px-12 border-t border-gray-900 overflow-hidden font-sans relative">
      
      {/* Decorative background grid line highlights */}
      <div className="absolute inset-0 grid grid-cols-5 pointer-events-none opacity-5">
        <div className="border-r border-gray-700 h-full"></div>
        <div className="border-r border-gray-700 h-full"></div>
        <div className="border-r border-gray-700 h-full"></div>
        <div className="border-r border-gray-700 h-full"></div>
        <div></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col">
        
        {/* Top Segment: Newsletter & Corporate Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-3xl tracking-[0.2em] text-white">NAKHRALI</h3>
              <p className="text-gray-500 text-xs font-light tracking-widest uppercase">The Essence of Indian Handloom</p>
            </div>
            
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
              Curation of premium handloom lehengas, authentic sarees, and wedding wear reflecting India's heritage craftsmanship.
            </p>

            {/* Live Clock & Coordinates */}
            <div className="flex flex-col gap-3 text-xs tracking-wider uppercase text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-nakhrali-gold" />
                <span>Mumbai, IN — 19.0760° N, 72.8777° E</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-nakhrali-gold" />
                <span className="flex items-center gap-1.5">
                  Local Time: {mumbaiTime || "Loading..."}
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                </span>
              </div>
            </div>

            {/* Modern Social Badges */}
            <div className="flex items-center gap-3 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1" aria-label="Youtube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                </svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1" aria-label="Pinterest">
                <Send size={15} className="rotate-45 -translate-x-0.5 translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Information */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-white font-medium">Information</h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className={linkClass}>Our Legacy</Link>
              <Link href="/gallery" className={linkClass}>Exquisite Gallery</Link>
              <Link href="/testimonials" className={linkClass}>Patron Stories</Link>
              <Link href="/blog" className={linkClass}>Craft Chronicles</Link>
            </div>
          </div>

          {/* Column 3: Customer Care */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-white font-medium">Concierge</h4>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className={linkClass}>Contact Lounge</Link>
              <Link href="/faq" className={linkClass}>Faq & Sizing</Link>
              <Link href="/track-order" className={linkClass}>Order Dispatch</Link>
              <Link href="/shipping" className={linkClass}>Shipping & Logistics</Link>
              <Link href="/returns" className={linkClass}>Return Protocol</Link>
              <Link href="/cancellation" className={linkClass}>Cancellation Policy</Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-white font-medium">Newsletter</h4>
            <div className="flex flex-col gap-3 max-w-sm">
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                Receive exclusive invites to private seasonal edits, handloom collection releases, and bespoke styling sessions.
              </p>
              
              <form onSubmit={handleSubscribe} className="relative mt-2 flex items-center border-b border-gray-800 focus-within:border-nakhrali-gold transition-colors py-2.5">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs text-white placeholder-gray-600 outline-none pr-8 font-light tracking-wide"
                />
                <button 
                  type="submit" 
                  aria-label="Subscribe"
                  className="absolute right-0 text-gray-500 hover:text-nakhrali-gold transition-colors duration-300"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
              
              {subscribed && (
                <span className="text-[10px] text-nakhrali-gold tracking-widest uppercase font-semibold mt-1">
                  Thank you for subscribing
                </span>
              )}
            </div>
          </div>

        </div>

        {/* Middle Segment: App Download & Luxury Badges */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Exquisite App Experience:</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-white/5 text-white px-5 py-2.5 rounded border border-gray-850 flex items-center gap-3 transition-colors duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.11.09 2.26-.57 2.95-1.39z"/>
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest mb-0.5">Download on the</span>
                <span className="text-xs font-semibold">App Store</span>
              </div>
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-white/5 text-white px-5 py-2.5 rounded border border-gray-850 flex items-center gap-3 transition-colors duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5.27v13.46c0 .82.68 1.43 1.47 1.25l13.68-6.31c.64-.29.64-1.2 0-1.5L4.47 4.02C3.68 3.84 3 4.45 3 5.27z"/>
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest mb-0.5">Get it on</span>
                <span className="text-xs font-semibold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Segment: Copyright & Payment Outlines */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-10 text-xs text-gray-500 font-light tracking-wide">
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-center">
            <span>Copyright &copy; {new Date().getFullYear()} Nakhrali. All Rights Reserved.</span>
            <Link href="/terms" className="hover:text-white transition-colors underline-offset-4 hover:underline">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors underline-offset-4 hover:underline">Privacy Policy</Link>
          </div>
          
          {/* Custom SVG outlined Payment icons */}
          <div className="flex items-center gap-3 opacity-30">
            <svg width="34" height="22" viewBox="0 0 34 22" fill="none" stroke="currentColor" strokeWidth="1" className="text-white">
              <rect x="0.5" y="0.5" width="33" height="21" rx="2" />
              <circle cx="13" cy="11" r="5" />
              <circle cx="21" cy="11" r="5" />
            </svg>
            <svg width="34" height="22" viewBox="0 0 34 22" fill="none" stroke="currentColor" strokeWidth="1" className="text-white">
              <rect x="0.5" y="0.5" width="33" height="21" rx="2" />
              <path d="M7 15L13 7M11 15L17 7M15 15L21 7" />
            </svg>
            <svg width="34" height="22" viewBox="0 0 34 22" fill="none" stroke="currentColor" strokeWidth="1" className="text-white">
              <rect x="0.5" y="0.5" width="33" height="21" rx="2" />
              <path d="M8 8H26M8 14H20" />
            </svg>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden lg:block text-gray-600">Powered by Next.js & Shopify</span>
            
            {/* Minimal Back to top button */}
            <button 
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-10 h-10 rounded-full border border-gray-800 text-gray-500 hover:text-white hover:border-white hover:bg-white/5 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm shrink-0"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Awwwards Huge Branding Typography Section */}
        <div className="w-full mt-10 pt-4 overflow-hidden select-none border-t border-white/5">
          <h1 
            className="text-[12vw] font-serif font-black text-center tracking-[0.18em] leading-none transition-all duration-1000 select-none hover:text-nakhrali-gold/15 translate-y-3 cursor-default"
            style={{ 
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)", 
              color: "transparent" 
            }}
          >
            NAKHRALI
          </h1>
        </div>

      </div>

    </footer>
  );
}
