import Link from "next/link";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-[600px] mx-auto text-center">
        
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <Heart size={40} className="text-gray-300" />
        </div>

        <h1 className="text-3xl md:text-4xl font-serif text-[#111111] tracking-wide mb-4">
          Your Wishlist is Empty
        </h1>
        
        <p className="text-gray-500 font-sans mb-10 leading-relaxed">
          Save your favorite items here. Create an account to access your wishlist across all your devices.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans text-sm tracking-widest uppercase">
          <Link href="/collections/all" className="w-full sm:w-auto bg-[#111111] text-white px-8 py-4 hover:bg-rajgharana-gold transition-colors">
            Start Shopping
          </Link>
          <Link href="/login" className="w-full sm:w-auto border border-gray-200 px-8 py-4 text-[#111111] hover:border-[#111111] transition-colors">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}
