"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock recommendations
const HIGHLY_SEARCHED = [
  {
    id: "l1",
    title: "Aveline Magenta Lehenga",
    price: 22895,
    image: "/extracted_photos/heavy-sparkling-and-beautiful-wine-colour-georgette-fancy-fabric-lehenga-choli-reseller-in-surat-5067-wine/page-0.png"
  },
  {
    id: "l2",
    title: "Stunning Blue Georgette Lehenga",
    price: 18500,
    image: "/extracted_photos/navy-stunning-blue-beautiful-colour-in-soft-georgette-fabric-lehenga-choli-wholesale-in-surat-5067-blue/page-0.png"
  },
  {
    id: "l3",
    title: "Charmful Faux Georgette Lehenga",
    price: 24999,
    image: "/extracted_photos/navratri-special-charmful-and-dazziing-faux-georgette-fancy-fabric-lehenga-choli-collections-wholesale-in-surat-lw-7134/page-0.png"
  },
  {
    id: "l4",
    title: "Navratri Special Tasar Silk Lehenga",
    price: 32000,
    image: "/extracted_photos/navratri-new-and-best-collection-tasar-silk-fancy-and-beautiful-fabric-lehenga-choli-reseller-in-surat-1734/page-0.png"
  }
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4 sm:px-8"
        >
          {/* Close Backdrop Click */}
          <div className="absolute inset-0 z-0" onClick={onClose} />

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]"
          >
            {/* Search Input Area */}
            <div className="flex items-center border-b border-gray-100 p-4">
              <Search size={22} className="text-gray-400 ml-2 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search for Lehengas, Sarees, Kurtas..."
                className="w-full px-4 py-3 outline-none text-lg font-sans font-medium text-[#111111] placeholder:text-gray-300 placeholder:font-light bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-[#111111] shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            {/* Recommendations / Results Area */}
            <div className="p-6 overflow-y-auto bg-gray-50/50 flex-1 hide-scrollbar">
              {searchQuery.trim() === "" ? (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp size={18} className="text-rajgharana-gold" />
                    <h3 className="font-serif text-lg text-[#111111]">Highly Searched Lehengas</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {HIGHLY_SEARCHED.map((item) => (
                      <Link 
                        key={item.id} 
                        href={`/product/${item.id}`}
                        onClick={onClose}
                        className="group flex flex-col gap-3"
                      >
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-gray-100 border border-gray-200">
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-sans text-xs font-semibold text-[#111111] line-clamp-2 leading-snug group-hover:text-rajgharana-gold transition-colors">
                            {item.title}
                          </span>
                          <span className="font-sans text-xs text-gray-500 mt-1">₹ {item.price.toLocaleString("en-IN")}</span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Popular Categories */}
                  <div className="mt-10">
                    <h3 className="font-serif text-lg text-[#111111] mb-4">Popular Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Bridal Lehengas", "Silk Sarees", "Anarkali Suits", "Haldi Outfits", "Kundan Jewellery"].map(cat => (
                        <button 
                          key={cat}
                          onClick={() => setSearchQuery(cat)}
                          className="px-4 py-2 border border-gray-200 rounded-full text-xs font-sans font-medium text-gray-600 hover:border-rajgharana-gold hover:text-rajgharana-gold transition-colors bg-white shadow-sm"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-10 text-center animate-in fade-in">
                  <p className="text-gray-500 font-sans">
                    Searching for <span className="font-semibold text-[#111111]">"{searchQuery}"</span>...
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    (Press enter to view all mock results)
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
