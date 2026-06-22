"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Banga",
    image: "/extracted_photos/navratri-special-charmful-and-dazziing-faux-georgette-fancy-fabric-lehenga-choli-collections-wholesale-in-surat-lw-7134/page-0.png",
    rating: 5,
    text: "The saree is absolutely gorgeous and the fabric is so comfortable. Wore it to a wedding and everyone asked me about it. Very happy with the purchase!",
  },
  {
    id: 2,
    name: "Aarchi Patel",
    image: "/extracted_photos/navy-stunning-blue-beautiful-colour-in-soft-georgette-fabric-lehenga-choli-wholesale-in-surat-5067-blue/page-0.png",
    rating: 5,
    text: "Loved the fitting of this lehenga. The quality and finishing is amazing. Truly an authentic piece from Nakhrali.",
  },
  {
    id: 3,
    name: "Kritika Sinha",
    image: "/extracted_photos/new-launch-soft-and-pure-tissue-silk-fabric-with-beautiful-embroidery-work-on-lehenga-choli-supplier-in-surat-haji/page-0.png",
    rating: 5,
    text: "I bought this for my Haldi ceremony and it was the best decision. Such vibrant colors and perfect stitching.",
  },
  {
    id: 4,
    name: "Arushi Midha",
    image: "/extracted_photos/new-navratri-collection-made-of-soft-chinon-fabric-ready-to-wear-your-perfect-garba-look-awaits-wholesale-in-surat-1768/page-0.png",
    rating: 5,
    text: "The jewelry is stunning! It looks exactly like the picture, if not better. It paired perfectly with my outfit.",
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#f9f8f6] py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-center text-[#111111] mb-12">
          She Wore Nakhrali. The Compliments Followed.
        </h2>

        <div className="relative group/slider">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors z-10 opacity-0 group-hover/slider:opacity-100 disabled:opacity-0 hidden lg:flex"
          >
            <ChevronLeft size={20} className="text-gray-800" />
          </button>

          {/* Slider */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 pt-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="snap-start flex-none w-[85vw] md:w-[350px]">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center h-full group hover:shadow-md transition-shadow">
                  
                  {/* Customer Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 relative ring-4 ring-[#f9f8f6]">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-3 text-nakhrali-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < testimonial.rating ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4 flex-1">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Name */}
                  <p className="font-serif font-semibold text-[#111111]">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors z-10 opacity-0 group-hover/slider:opacity-100 disabled:opacity-0 hidden lg:flex"
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

