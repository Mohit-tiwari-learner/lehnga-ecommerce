"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full font-sans flex flex-col">
      
      {/* Newsletter Section (White Background) */}
      <div className="bg-white py-12 px-4 border-t border-gray-100 flex flex-col items-center justify-center">
        <h3 className="text-xl md:text-2xl font-serif text-[#111111] mb-6 text-center">
          Subscribe to our Newsletter:
        </h3>
        <form className="flex w-full max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email address" 
            required
            className="flex-1 bg-white border border-gray-300 px-4 py-3.5 outline-none focus:border-nakhrali-gold transition-colors font-sans text-sm"
          />
          <button 
            type="submit"
            className="bg-[#333333] text-white px-8 py-3.5 font-sans text-sm tracking-widest uppercase hover:bg-black transition-colors"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>

      {/* Main Footer (Blue Patterned Background) */}
      <div className="relative w-full text-white">
        {/* Background Pattern Image (Simulated with dark blue/indigo overlay) */}
        <div className="absolute inset-0 bg-[#1e3452] z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1920&auto=format&fit=crop" 
            alt="Pattern" 
            fill 
            className="object-cover mix-blend-multiply opacity-60" 
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pt-10 pb-6 flex flex-col">
          
          {/* Download App Section */}
          <div className="flex flex-col items-center justify-center mb-16 border-b border-white/20 pb-10">
            <h4 className="text-lg font-medium mb-4">Download Our App</h4>
            <div className="flex items-center gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-900 transition-colors border border-gray-800">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM15.4 17.5C14.7 17.8 13.5 18 12.3 18C8.8 18 6.5 15.6 6.5 12C6.5 8.4 8.8 6 12.3 6C13.5 6 14.6 6.2 15.3 6.5L14.7 7.9C14.1 7.7 13.2 7.5 12.3 7.5C9.6 7.5 7.9 9.3 7.9 12C7.9 14.7 9.6 16.5 12.3 16.5C13.2 16.5 14.1 16.3 14.8 16.1L15.4 17.5Z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-tight text-gray-300">Download on the</span>
                  <span className="text-sm font-medium leading-tight">App Store</span>
                </div>
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-900 transition-colors border border-gray-800">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2.5L16.5 12L4 21.5V2.5Z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-tight text-gray-300">GET IT ON</span>
                  <span className="text-sm font-medium leading-tight">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Logo & Socials */}
            <div className="flex flex-col items-start lg:items-center justify-center">
              <div className="flex flex-col items-center mb-6">
                <div className="w-12 h-12 bg-[url('https://cdn.shopify.com/s/files/1/0550/5669/5469/files/Nakhrali_logo_1.png?v=1661338600')] bg-contain bg-center bg-no-repeat rounded-full border border-white/40 flex items-center justify-center invert opacity-80 mb-3">
                  <span className="sr-only">Nakhrali</span>
                </div>
                <h4 className="font-serif text-2xl tracking-widest text-white">NAKHRALI</h4>
              </div>
              
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" className="w-8 h-8 rounded-full bg-white text-[#1e3452] flex items-center justify-center hover:bg-nakhrali-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://facebook.com" className="w-8 h-8 rounded-full bg-white text-[#1e3452] flex items-center justify-center hover:bg-nakhrali-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://youtube.com" className="w-8 h-8 rounded-full bg-white text-[#1e3452] flex items-center justify-center hover:bg-nakhrali-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href="https://pinterest.com" className="w-8 h-8 rounded-full bg-white text-[#1e3452] flex items-center justify-center hover:bg-nakhrali-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.84-.13-2.13.03-3.05.15-.84 1-4.22 1-4.22s-.26-.5-.26-1.25c0-1.17.68-2.05 1.53-2.05.72 0 1.07.54 1.07 1.19 0 .73-.46 1.81-.7 2.82-.2.84.42 1.53 1.25 1.53 1.5 0 2.65-1.58 2.65-3.86 0-2.02-1.45-3.43-3.52-3.43-2.39 0-3.8 1.8-3.8 3.65 0 .72.28 1.5.63 1.92.07.08.08.16.06.25-.07.28-.22.9-.25 1.03-.04.14-.14.17-.28.11-1.05-.49-1.7-2.02-1.7-3.26 0-2.65 1.93-5.08 5.56-5.08 2.92 0 5.18 2.08 5.18 4.86 0 2.9-1.83 5.23-4.37 5.23-.85 0-1.65-.44-1.92-.96l-.52 2c-.19.73-.7 1.64-1.04 2.2a12 12 0 1 0 5.8-22.9z"></path></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Information */}
            <div className="flex flex-col">
              <h4 className="font-medium text-lg mb-6 tracking-wide">Information</h4>
              <div className="flex flex-col space-y-3 text-[14px] text-gray-200">
                <Link href="/about" className="hover:text-white hover:underline underline-offset-4 transition-all">About Us</Link>
              </div>
            </div>

            {/* Column 3: Our Company */}
            <div className="flex flex-col">
              <h4 className="font-medium text-lg mb-6 tracking-wide">Our Company</h4>
              <div className="flex flex-col space-y-3 text-[14px] text-gray-200">
                <Link href="/gallery" className="hover:text-white hover:underline underline-offset-4 transition-all">Photo Gallery</Link>
                <Link href="/testimonials" className="hover:text-white hover:underline underline-offset-4 transition-all">Testimonial</Link>
                <Link href="/blog" className="hover:text-white hover:underline underline-offset-4 transition-all">Blog</Link>
              </div>
            </div>

            {/* Column 4: Customer Service */}
            <div className="flex flex-col">
              <h4 className="font-medium text-lg mb-6 tracking-wide">Customer Service</h4>
              <div className="flex flex-col space-y-3 text-[14px] text-gray-200">
                <Link href="/contact" className="hover:text-white hover:underline underline-offset-4 transition-all">Contact</Link>
                <Link href="/faq" className="hover:text-white hover:underline underline-offset-4 transition-all">FAQ</Link>
                <Link href="/shipping" className="hover:text-white hover:underline underline-offset-4 transition-all">Shipping Policy</Link>
                <Link href="/returns" className="hover:text-white hover:underline underline-offset-4 transition-all">Exchange/Refund/Return Policy</Link>
                <Link href="/cancellation" className="hover:text-white hover:underline underline-offset-4 transition-all">Cancellation Policy</Link>
                <Link href="/track-order" className="hover:text-white hover:underline underline-offset-4 transition-all">Track Order</Link>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Payments */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-white/20 text-xs text-gray-300">
            
            <div className="flex items-center gap-2">
              <span>Copyright &copy; {new Date().getFullYear()} Nakhrali. All Right Reserved</span>
              <Link href="/terms" className="hover:text-white ml-2">Terms of service</Link>
              <Link href="/privacy" className="hover:text-white ml-2">Privacy Policy</Link>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="bg-white px-2 py-1 rounded shadow-sm text-black font-bold text-[10px] uppercase">MasterCard</div>
              <div className="bg-white px-2 py-1 rounded shadow-sm text-black font-bold text-[10px] uppercase">VISA</div>
              <div className="bg-white px-2 py-1 rounded shadow-sm text-black font-bold text-[10px] uppercase">Maestro</div>
              <div className="bg-white px-2 py-1 rounded shadow-sm text-[#003366] font-bold text-[10px] uppercase flex items-center gap-1">
                <span>Net</span>
                <span>Banking</span>
              </div>
            </div>
            
            <div className="hidden lg:block">
              Powered by Shopify
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
