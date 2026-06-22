"use client";

import { useRef } from "react";
import { ChevronRight, ShoppingBag } from "lucide-react";
import Image from "next/image";

const REELS = [
  {
    id: 1,
    title: "My Everyday दफ़्तर Fits Part 2",
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Whispers of Summer",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "#MyDaftarFits",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Luxury, kissed in gold",
    image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Festive Must-Haves",
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Bridal Elegance",
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop",
  },
];

export function ReelsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full relative bg-white py-4 lg:py-6 overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 lg:px-8 hide-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {REELS.map((reel) => (
          <div 
            key={reel.id} 
            className="relative flex-none w-[200px] h-[350px] lg:w-[260px] lg:h-[450px] snap-start rounded-2xl overflow-hidden cursor-pointer group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
              <Image 
                src={reel.image} 
                alt={reel.title} 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 200px, 260px"
              />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Shopping Bag Icon */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
              <ShoppingBag size={14} />
            </div>

            {/* Text Content */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-medium text-sm lg:text-base leading-snug drop-shadow-md">
                {reel.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Arrow */}
      <button 
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10 hidden lg:flex"
      >
        <ChevronRight size={20} className="text-gray-800" />
      </button>

    </div>
  );
}

