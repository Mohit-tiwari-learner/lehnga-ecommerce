"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function BrandBio() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-[#f9f8f6] py-10 lg:py-16 px-4 lg:px-8 border-t border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Bio Section */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-serif text-[#111111] mb-6">
            RAJGHARANA- Best Indian Women's Ethnic Fashion Brand<br/>
            (Traditional, Ethnic Indian Clothing and Accessories)
          </h2>
          
          <div className="text-sm md:text-base text-gray-600 font-sans leading-relaxed text-justify md:text-center space-y-4">
            <p>
              Welcome to Rajgharana, where tradition meets contemporary elegance. We are dedicated to bringing you the finest collection of women's ethnic fashion, crafted with meticulous attention to detail and a deep appreciation for India's rich textile heritage. Our designs celebrate the spirit of the modern Indian woman who embraces her roots while stepping confidently into the future.
            </p>
            
            {isExpanded && (
              <>
                <p>
                  From handwoven silk sarees that tell stories of generations of weavers, to chic Indo-western co-ords perfect for the festive season, our catalog is a tribute to versatility. Every piece in our collection goes through rigorous quality checks to ensure you receive not just an outfit, but a work of art.
                </p>
                <p>
                  We believe that fashion should be as unique as you are. That's why we offer personalized styling assistance and fit guidance, ensuring that you find your perfect ensemble for every occasion. Join the Rajgharana family today and redefine your ethnic wardrobe with pieces that are designed to turn heads and create lasting memories.
                </p>
              </>
            )}
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 text-rajgharana-gold font-sans text-sm font-semibold tracking-wider uppercase hover:text-black transition-colors"
          >
            {isExpanded ? "- Read less" : "+ Read more"}
          </button>
        </div>

        {/* Removed Newsletter Section as it is now in the global Footer */}

      </div>
    </div>
  );
}
