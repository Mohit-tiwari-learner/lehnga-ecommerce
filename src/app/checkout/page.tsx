"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CreditCard, ShoppingBag, ChevronDown } from "lucide-react";

export default function CheckoutPage() {
  const [email, setEmail] = useState("");
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("card"); // card, upi, cod

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row min-h-screen">
        
        {/* Left Form Area */}
        <div className="flex-1 p-6 lg:p-12 lg:pr-16 border-r border-gray-100">
          
          {/* Header */}
          <div className="hidden lg:block mb-8">
            <Link href="/" className="font-serif text-3xl tracking-widest text-[#111111]">
              NAKHRALI
            </Link>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-8 uppercase tracking-wider">
            <Link href="/cart" className="hover:text-black transition-colors">Cart</Link>
            <ChevronRight size={12} />
            <span className="text-black font-medium">Information</span>
            <ChevronRight size={12} />
            <span>Shipping</span>
            <ChevronRight size={12} />
            <span>Payment</span>
          </div>

          {/* Contact Info */}
          <section className="mb-10">
            <h2 className="text-lg font-sans font-medium text-[#111111] mb-4">Contact</h2>
            <input 
              type="email" 
              placeholder="Email or mobile phone number" 
              className="w-full border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold focus:ring-1 focus:ring-nakhrali-gold transition-shadow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="flex items-center gap-2 mt-3 cursor-pointer">
              <input type="checkbox" className="accent-nakhrali-gold w-4 h-4" defaultChecked />
              <span className="font-sans text-sm text-gray-600">Email me with news and offers</span>
            </label>
          </section>

          {/* Shipping Address */}
          <section className="mb-10">
            <h2 className="text-lg font-sans font-medium text-[#111111] mb-4">Delivery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1 md:col-span-2">
                <select className="w-full border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold focus:ring-1 focus:ring-nakhrali-gold bg-white">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Canada</option>
                </select>
              </div>
              <input 
                type="text" 
                placeholder="First name (optional)" 
                className="w-full border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold focus:ring-1 focus:ring-nakhrali-gold"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Last name" 
                className="w-full border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold focus:ring-1 focus:ring-nakhrali-gold"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <div className="col-span-1 md:col-span-2">
                <input 
                  type="text" 
                  placeholder="Address" 
                  className="w-full border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold focus:ring-1 focus:ring-nakhrali-gold"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <input 
                type="text" 
                placeholder="City" 
                className="w-full border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold focus:ring-1 focus:ring-nakhrali-gold"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="State" 
                className="w-full border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold focus:ring-1 focus:ring-nakhrali-gold"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <div className="col-span-1 md:col-span-2">
                <input 
                  type="text" 
                  placeholder="PIN code" 
                  className="w-full border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold focus:ring-1 focus:ring-nakhrali-gold"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold focus:ring-1 focus:ring-nakhrali-gold"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <label className="flex items-center gap-2 mt-3 cursor-pointer">
              <input type="checkbox" className="accent-nakhrali-gold w-4 h-4" />
              <span className="font-sans text-sm text-gray-600">Save this information for next time</span>
            </label>
          </section>

          {/* Payment Method */}
          <section className="mb-10">
            <h2 className="text-lg font-sans font-medium text-[#111111] mb-4">Payment</h2>
            <p className="font-sans text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>
            
            <div className="border border-gray-300 rounded overflow-hidden">
              {/* Credit Card Option */}
              <div 
                className={`p-4 border-b border-gray-300 cursor-pointer ${paymentMethod === 'card' ? 'bg-gray-50' : 'bg-white'}`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" checked={paymentMethod === 'card'} onChange={() => {}} className="accent-nakhrali-gold w-4 h-4" />
                    <span className="font-sans text-sm font-medium">Credit / Debit Card</span>
                  </label>
                  <CreditCard size={20} className="text-gray-400" />
                </div>
                {paymentMethod === 'card' && (
                  <div className="mt-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <input type="text" placeholder="Card number" className="w-full border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold" />
                    <div className="flex gap-3">
                      <input type="text" placeholder="Expiration date (MM / YY)" className="flex-1 border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold" />
                      <input type="text" placeholder="Security code" className="flex-1 border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold" />
                    </div>
                    <input type="text" placeholder="Name on card" className="w-full border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold" />
                  </div>
                )}
              </div>

              {/* UPI Option */}
              <div 
                className={`p-4 border-b border-gray-300 cursor-pointer ${paymentMethod === 'upi' ? 'bg-gray-50' : 'bg-white'}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" checked={paymentMethod === 'upi'} onChange={() => {}} className="accent-nakhrali-gold w-4 h-4" />
                  <span className="font-sans text-sm font-medium">UPI / QR (GPay, PhonePe, Paytm)</span>
                </label>
                {paymentMethod === 'upi' && (
                  <div className="mt-4 p-4 flex flex-col items-center border border-gray-200 rounded bg-white animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-sm font-sans text-gray-500 mb-2">Scan QR code using any UPI app</p>
                    <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-400">QR CODE</span>
                    </div>
                  </div>
                )}
              </div>

              {/* COD Option */}
              <div 
                className={`p-4 cursor-pointer ${paymentMethod === 'cod' ? 'bg-gray-50' : 'bg-white'}`}
                onClick={() => setPaymentMethod('cod')}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" checked={paymentMethod === 'cod'} onChange={() => {}} className="accent-nakhrali-gold w-4 h-4" />
                  <span className="font-sans text-sm font-medium">Cash on Delivery (COD)</span>
                </label>
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <button className="w-full bg-[#111111] text-white py-4 rounded font-sans tracking-widest text-sm uppercase hover:bg-nakhrali-gold transition-colors shadow-lg">
            Pay Now
          </button>
          
          <div className="mt-8 pt-8 border-t border-gray-100 flex gap-4 text-xs font-sans text-gray-500">
            <Link href="/refunds" className="hover:text-black">Refund policy</Link>
            <Link href="/shipping" className="hover:text-black">Shipping policy</Link>
            <Link href="/privacy" className="hover:text-black">Privacy policy</Link>
            <Link href="/terms" className="hover:text-black">Terms of service</Link>
          </div>
        </div>

        {/* Right Order Summary Area */}
        <div className="w-full lg:w-[45%] bg-[#f9f8f6] p-6 lg:p-12 lg:pl-12 border-b lg:border-b-0 lg:border-l border-gray-200">
          
          {/* Mobile Order Summary Toggle */}
          <div 
            className="lg:hidden flex items-center justify-between mb-6 pb-6 border-b border-gray-200 cursor-pointer"
            onClick={() => setIsSummaryOpen(!isSummaryOpen)}
          >
            <div className="flex items-center gap-2 text-[#111111] font-sans font-medium">
              <ShoppingBag size={20} className="text-nakhrali-gold" /> {isSummaryOpen ? "Hide" : "Show"} order summary <ChevronDown size={16} className={`transition-transform ${isSummaryOpen ? "rotate-180" : ""}`} />
            </div>
            <span className="font-sans font-medium text-lg">₹ 8,995</span>
          </div>

          <div className={`${isSummaryOpen ? "flex" : "hidden"} lg:flex flex-col h-full animate-in fade-in slide-in-from-top-2 duration-300`}>
            {/* Cart Items List */}
            <div className="flex flex-col gap-4 mb-6 flex-1">
              <div className="flex items-center gap-4 relative">
                <div className="relative w-16 h-16 bg-white border border-gray-200 rounded flex-none">
                  <Image 
                    src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=200&auto=format&fit=crop"
                    alt="Product"
                    fill
                    className="object-cover rounded"
                  />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white text-xs rounded-full flex items-center justify-center font-sans">1</span>
                </div>
                <div className="flex-1 font-sans">
                  <p className="text-sm font-medium text-[#111111] line-clamp-1">Karismatic Blue Silk Kurta Set</p>
                  <p className="text-xs text-gray-500">M / Blue</p>
                </div>
                <div className="font-sans font-medium text-sm">
                  ₹ 8,995
                </div>
              </div>
            </div>

            {/* Discount Code */}
            <div className="flex gap-2 mb-6 pt-6 border-t border-gray-200">
              <input 
                type="text" 
                placeholder="Discount code or gift card" 
                className="flex-1 border border-gray-300 rounded p-3 font-sans text-sm outline-none focus:border-nakhrali-gold focus:ring-1 focus:ring-nakhrali-gold bg-white"
              />
              <button className="bg-gray-200 text-gray-500 px-4 py-3 rounded font-sans font-medium text-sm transition-colors hover:bg-gray-300">Apply</button>
            </div>

            {/* Subtotal & Total */}
            <div className="flex flex-col gap-3 font-sans text-sm mb-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-[#111111]">₹ 8,995</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-[#111111]">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center font-sans pt-6 border-t border-gray-200">
              <span className="text-lg font-medium text-[#111111]">Total</span>
              <div className="flex items-end gap-2">
                <span className="text-xs text-gray-500 mb-1">INR</span>
                <span className="text-2xl font-medium text-[#111111]">₹ 8,995</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
