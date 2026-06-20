"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartCount } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 translate-x-0">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-serif text-2xl text-[#111111]">Your Cart ({cartCount})</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Cart Body */}
        {cartCount === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <h3 className="font-sans font-medium text-lg mb-2">Your cart is empty</h3>
            <p className="text-gray-500 text-sm mb-8">Looks like you haven't added anything to your cart yet.</p>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="bg-[#111111] text-white px-8 py-4 font-sans tracking-widest text-sm uppercase hover:bg-nakhrali-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              
              {/* Dummy Cart Item */}
              <div className="flex gap-4">
                <div className="relative w-24 aspect-[3/4] bg-gray-100 rounded">
                  <Image 
                    src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=200&auto=format&fit=crop"
                    alt="Cart Item"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-sans font-medium text-sm text-[#111111] line-clamp-2">Karismatic Blue Silk Kurta Set</h4>
                    <button className="text-gray-400 hover:text-red-500 transition-colors"><X size={16} /></button>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">Size: M</p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex border border-gray-200 h-8 items-center">
                      <button className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50"><Minus size={14} /></button>
                      <span className="w-8 text-center font-sans text-xs">1</span>
                      <button className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50"><Plus size={14} /></button>
                    </div>
                    <span className="font-sans font-medium">₹ 8,995</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 p-6 bg-gray-50">
              <div className="flex justify-between items-center mb-2 font-sans">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-lg">₹ 8,995</span>
              </div>
              <p className="text-xs text-gray-500 mb-6 font-sans">Tax included. Shipping calculated at checkout.</p>
              
              <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                <button className="w-full bg-[#111111] text-white py-4 font-sans tracking-widest text-sm uppercase hover:bg-nakhrali-gold transition-colors">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
