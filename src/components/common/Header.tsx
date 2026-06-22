"use client";

import { useState } from "react";
import Link from "next/link";
import { Truck, Search, Heart, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "KURTA AND BEYOND", hasDropdown: true, dropdownItems: ["Printed Kurtas", "Solid Kurtas"] },
  { name: "SAREES", hasDropdown: true, dropdownItems: ["Handloom Sarees", "Silk Sarees", "Cotton Sarees"] },
  {
    name: "SALWAR KAMEEZ",
    hasDropdown: true,
    dropdownItems: ["Partywear Suit Sets", "Minimal Suit Sets"],
  },
  { name: "INDO-WESTERN", hasDropdown: false },
  { name: "BLOUSES", hasDropdown: false },
  { name: "LEHENGAS", hasDropdown: false },
  { name: "JEWELLERY", hasDropdown: true, dropdownItems: ["Necklaces", "Earrings", "Bangles"] },
  { name: "BRIDAL", hasDropdown: true, dropdownItems: ["Bridal Lehengas", "Bridal Sarees"] },
  { name: "DRESS MATERIAL", hasDropdown: false },
  { name: "ACCESSORIES & MORE..", hasDropdown: true, dropdownItems: ["Bags", "Footwear"] },
  { name: "COLLECTION", hasDropdown: true, dropdownItems: ["Summer Edit", "Festive Collection"] },
  { name: "BLOG", hasDropdown: false },
];

function AnnouncementBar() {
  return (
    <div className="bg-[#111111] text-white py-2 flex items-center justify-center gap-2 text-xs tracking-wider uppercase font-sans">
      <Truck size={14} />
      <span>FREE SHIPPING ON DOMESTIC ORDERS OVER 1500 INR</span>
    </div>
  );
}

// ... existing imports
import { SearchModal } from "./SearchModal";

export function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 flex flex-col">
      <AnnouncementBar />
      
      {/* Main Header Row */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden p-1 -ml-1 hover:bg-gray-50 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[url('https://cdn.shopify.com/s/files/1/0550/5669/5469/files/Rajgharana_logo_1.png?v=1661338600')] bg-contain bg-center bg-no-repeat rounded-full border border-gray-200 flex items-center justify-center text-[10px]">
            {/* Fallback mandala/flower icon if image fails */}
            <span className="sr-only">Rajgharana Logo</span>
          </div>
          <span className="font-serif text-2xl tracking-widest text-[#111111]">
            RAJGHARANA
          </span>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-4 lg:gap-6 text-[#111111]">
          <button 
            className="hover:text-rajgharana-gold transition-colors hidden sm:block"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={22} strokeWidth={1.5} />
          </button>
          <Link href="/wishlist" className="hover:text-rajgharana-gold transition-colors hidden sm:block">
            <Heart size={22} strokeWidth={1.5} />
          </Link>
          <Link href="#" className="hover:text-rajgharana-gold transition-colors hidden sm:block">
            <User size={22} strokeWidth={1.5} />
          </Link>
          <button 
            className="hover:text-rajgharana-gold transition-colors relative"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-2 bg-rajgharana-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-sans font-bold"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center items-center gap-6 py-3 border-t border-gray-100 px-8">
        {NAV_LINKS.map((link) => (
          <div key={link.name} className="relative group cursor-pointer">
            <Link 
              href={link.name === "BLOG" ? "/blog" : `/collections/${link.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, "-")}`}
              className="flex items-center gap-1 text-[11px] font-medium tracking-widest text-[#111111] hover:text-rajgharana-gold transition-colors py-2"
              suppressHydrationWarning
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={10} className="transition-transform duration-200 group-hover:rotate-180 text-gray-400" />}
            </Link>
            
            {/* Dropdown */}
            {link.dropdownItems && (
              <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-lg min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-b">
                {link.dropdownItems.map((item) => (
                  <Link
                    key={item}
                    href={`/collections/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-5 py-3.5 text-[12px] text-gray-700 hover:bg-gray-50 hover:text-rajgharana-gold border-b border-gray-50 last:border-0 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Enhanced Framer Motion Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%", transition: { delay: 0.2, duration: 0.3 } }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col lg:hidden"
            >
              {/* Menu Header */}
              <div className="p-5 flex justify-between items-center border-b border-gray-100 bg-[#f9f8f6]">
                <div className="flex items-center gap-3">
                  <User size={20} className="text-gray-600" />
                  <span className="font-sans text-xs tracking-widest uppercase font-semibold text-[#111111]">Sign In</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-black"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="overflow-y-auto flex-1 py-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div 
                    key={link.name} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.1 }}
                    className="flex flex-col border-b border-gray-50 last:border-none"
                  >
                    <div 
                      className="flex items-center justify-between px-6 py-4"
                      onClick={() => link.hasDropdown ? toggleDropdown(link.name) : setIsMobileMenuOpen(false)}
                    >
                      <Link 
                        href={link.name === "BLOG" ? "/blog" : `/collections/${link.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, "-")}`}
                        className="text-sm font-sans font-medium tracking-wider text-[#111111]"
                        onClick={(e) => link.hasDropdown && e.preventDefault()}
                      >
                        {link.name}
                      </Link>
                      
                      {link.hasDropdown && (
                        <button className="p-1 text-gray-400">
                          <ChevronDown 
                            size={16} 
                            className={cn(
                              "transition-transform duration-300", 
                              openDropdown === link.name ? "rotate-180 text-rajgharana-gold" : ""
                            )} 
                          />
                        </button>
                      )}
                    </div>

                    {/* Accordion Dropdown */}
                    <AnimatePresence>
                      {link.hasDropdown && openDropdown === link.name && link.dropdownItems && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#fbfbfa]"
                        >
                          <div className="px-6 py-2 flex flex-col">
                            {link.dropdownItems.map(item => (
                              <Link 
                                key={item} 
                                href={`/collections/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xs font-sans text-gray-600 py-3 pl-4 border-l-2 border-transparent hover:border-rajgharana-gold hover:text-rajgharana-gold transition-colors"
                              >
                                {item}
                              </Link>
                            ))}
                            {/* View All link for dropdowns */}
                            <Link 
                              href={`/collections/${link.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, "-")}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-xs font-sans font-medium text-rajgharana-gold py-3 pl-4 underline underline-offset-4"
                            >
                              View All {link.name}
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-6 bg-[#111111] text-white mt-auto">
                <div className="flex gap-6 mb-6 text-sm font-sans font-light">
                  <Link href="/track-order" className="hover:text-rajgharana-gold transition-colors">Track Order</Link>
                  <Link href="/faq" className="hover:text-rajgharana-gold transition-colors">Help / FAQ</Link>
                </div>
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }}
                    className="hover:text-rajgharana-gold transition-colors flex items-center gap-2"
                  >
                    <Search size={18} /> <span className="text-xs">Search</span>
                  </button>
                  <Link href="/wishlist" className="hover:text-rajgharana-gold transition-colors flex items-center gap-2">
                    <Heart size={18} /> <span className="text-xs">Wishlist</span>
                  </Link>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
    <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
