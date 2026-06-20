import Image from "next/image";
import Link from "next/link";
import { Star, Heart, Eye, Truck } from "lucide-react";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  hoverImage?: string;
  badge?: string;
  shipsInDays?: number;
  swatches?: string[]; // array of hex colors
  rating?: number;
  reviews?: number;
  gallery?: string[];
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col w-full flex-none font-sans">
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer mb-3">
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {product.badge && (
            <span className="bg-[#1c2024]/90 backdrop-blur-sm text-white text-[10px] md:text-[11px] font-medium px-2 md:px-2.5 py-1 tracking-wide shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Hover Actions (Eye and Heart) */}
        <div className="absolute bottom-4 inset-x-0 z-10 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-9 h-9 bg-transparent hover:bg-white/20 rounded-full flex items-center justify-center text-gray-700 transition-colors">
            <Eye size={20} strokeWidth={1.5} />
          </button>
          <button className="w-9 h-9 bg-transparent hover:bg-white/20 rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors">
            <Heart size={20} strokeWidth={1.5} />
          </button>
        </div>

        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className={`object-cover transition-opacity duration-500 ${product.hoverImage ? "group-hover:opacity-0" : ""}`}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {product.hoverImage && (
            <Image
              src={product.hoverImage}
              alt={`${product.title} alternate view`}
              fill
              className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          )}
        </Link>
      </div>

      <div className="flex flex-col flex-1">
        <Link href={`/product/${product.id}`} className="hover:text-nakhrali-gold transition-colors">
          <h3 className="text-[12px] md:text-[14px] text-gray-600 leading-relaxed line-clamp-2 min-h-[42px] mb-2">
            {product.title}
          </h3>
        </Link>
        
        {product.rating && (
          <div className="flex items-center gap-1 mb-2 text-nakhrali-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} fill={i < Math.floor(product.rating!) ? "currentColor" : "none"} />
            ))}
            <span className="text-gray-500 text-xs ml-1 font-sans">({product.reviews || 0})</span>
          </div>
        )}

        <div className="font-medium text-[#111111] text-[12px] md:text-[14px] mb-2">
          ₹ {product.price.toLocaleString("en-IN")}
        </div>

        {product.shipsInDays && (
          <div className="flex items-center gap-1.5 text-gray-800 text-[12px] mb-3 font-medium">
            <Truck size={14} strokeWidth={1.5} /> Ships in {product.shipsInDays} Days
          </div>
        )}
        
        {/* Swatches */}
        {product.swatches && product.swatches.length > 0 && (
          <div className="flex items-center gap-1.5 mt-auto">
            {product.swatches.slice(0, 5).map((color, idx) => (
              <div 
                key={idx} 
                className="w-[14px] h-[14px] rounded-full border border-gray-300 shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
            {product.swatches.length > 5 && (
              <span className="text-[10px] text-gray-500">+{product.swatches.length - 5}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
