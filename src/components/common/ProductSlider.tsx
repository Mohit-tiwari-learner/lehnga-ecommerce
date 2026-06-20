"use client";

import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { ProductCard, Product } from "@/components/product/ProductCard";

type ProductSliderProps = {
  title: string;
  subtitle?: string;
  products: Product[];
};

export function ProductSlider({ title, subtitle, products }: ProductSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#111111] mb-2">{title}</h2>
          {subtitle && (
            <p className="text-sm tracking-widest uppercase font-sans text-gray-500">{subtitle}</p>
          )}
        </div>

        <div className="relative group/slider">
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-4 top-[40%] -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors z-10 opacity-0 group-hover/slider:opacity-100 disabled:opacity-0 hidden lg:flex"
          >
            <ChevronLeft size={20} className="text-gray-800" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div key={product.id} className="snap-start w-[65vw] sm:w-[240px] md:w-[280px] lg:w-[320px] flex-none">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll("right")}
            className="absolute -right-4 top-[40%] -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors z-10 opacity-0 group-hover/slider:opacity-100 hidden lg:flex"
          >
            <ChevronRight size={20} className="text-gray-800" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
