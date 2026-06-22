"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, SlidersHorizontal, ChevronDown, X, MessageCircle, Star } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { MOCK_PRODUCTS, DEFAULT_PRODUCTS } from "@/lib/mockData";
import { motion, AnimatePresence } from "framer-motion";

const FILTER_SIZES = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];
const FILTER_STYLES = ["Achkan Set", "Brocade/Banarasi Lehenga", "Designer Edits", "Lehenga", "Corset Lehenga", "Unstitched Lehenga", "Carnival Lehenga", "Crop Top Skirt Set", "Floral Lehenga", "Mermaid Style Lehenga"];
const FILTER_COLORS = ["Golden", "Maroon", "Black", "White", "Red", "Yellow", "Pink", "Blue", "Green", "Orange"];
const FILTER_FABRICS = ["Cotton silk", "Silk", "Raw Silk", "Dola Silk", "Organza", "Modal silk", "Tissue", "Sequins"];
const FILTER_WORKS = ["Bead Work", "Floral", "Printed", "Sequin", "Zari and Sequin Work", "Embroidery", "Zari & Zardozi", "Mirror & Sequin", "Floral Print", "Mirror"];

// Detailed category content to ensure visual similarity to homepage
const CATEGORY_CONTENT: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  stories: { name: string; img: string }[];
  lookbookTitle: string;
  lookbookSubtitle: string;
  lookbookDesc: string;
  lookbookImageLeft: string;
  lookbookImageRight: string;
  reviews: { name: string; rating: number; text: string; location: string }[];
  faqs: { q: string; a: string }[];
}> = {
  "sarees": {
    title: "Sarees by Nakhrali",
    subtitle: "Modern Drapes & Heritage Weaves",
    description: "Wrap yourself in 6 yards of pure elegance. Our sarees showcase handloom artistry, modal silks, tissue drapes, and Banarasi zari work made for the contemporary muse.",
    heroImage: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=1600&auto=format&fit=crop",
    stories: [
      { name: "Royal Banarasi", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=150&auto=format&fit=crop" },
      { name: "Modal Silk", img: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=150&auto=format&fit=crop" },
      { name: "Pure Handloom", img: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=150&auto=format&fit=crop" },
      { name: "Organza Edit", img: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=150&auto=format&fit=crop" },
      { name: "Classic Prints", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=150&auto=format&fit=crop" },
    ],
    lookbookTitle: "Woven In Tradition",
    lookbookSubtitle: "The Handloom Edition Lookbook",
    lookbookDesc: "Every thread tells a story of patience, beauty, and craftsmanship. Our handloom sarees are carefully designed with intricate zari work, rich prints, and heritage drapes that make you feel royalty in every fold.",
    lookbookImageLeft: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    lookbookImageRight: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=800&auto=format&fit=crop",
    reviews: [
      { name: "Aaradhya S.", rating: 5, text: "Absolutely loved the fabric feel of the Modal Silk saree. The drape is incredibly soft and easy to manage.", location: "Delhi, India" },
      { name: "Meera Patel", rating: 5, text: "Bought the Banarasi saree for my daughter's wedding. The zari work is stunningly detailed and premium.", location: "London, UK" },
      { name: "Kiran R.", rating: 4, text: "Lovely colors and fits perfectly with the customized blouses. Highly recommended for festive wear.", location: "Mumbai, India" },
    ],
    faqs: [
      { q: "How should I care for my Nakhrali handloom saree?", a: "We highly recommend dry cleaning only for all silk, zari, and organza sarees to preserve their color and detailed handwork." },
      { q: "Do sarees come with customization options?", a: "Yes, all our sarees include matching blouse pieces. We offer customized blouse stitching and fall/pico finishes upon request." },
      { q: "What is your standard delivery timeline?", a: "Ready-to-ship sarees are dispatched in 2-3 business days. Tailored blouse custom orders take 10-14 days to ship." }
    ]
  },
  "lehengas": {
    title: "Modern Lehengas",
    subtitle: "Indian Soul, Global Silhouette",
    description: "Step into celebrations with our premium lehengas. Featuring heavy sequin detailing, zari motifs, crop top skirts, and floral net layers made to stun.",
    heroImage: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=1600&auto=format&fit=crop",
    stories: [
      { name: "Bridal Edits", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=150&auto=format&fit=crop" },
      { name: "Crop Top Skirts", img: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=150&auto=format&fit=crop" },
      { name: "Floral Net", img: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=150&auto=format&fit=crop" },
      { name: "Indo Western", img: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=150&auto=format&fit=crop" },
      { name: "Custom Fits", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=150&auto=format&fit=crop" },
    ],
    lookbookTitle: "Luxury Kissed In Gold",
    lookbookSubtitle: "Bridal & Festive Lehenga Campaign",
    lookbookDesc: "Crafted for entrances that don't ask for attention. Rich crimson shades, royal magentas, gold sequin panels, and lightweight nets blend together for a look that is grand yet effortlessly comfortable.",
    lookbookImageLeft: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    lookbookImageRight: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=800&auto=format&fit=crop",
    reviews: [
      { name: "Prerna G.", rating: 5, text: "Wore the Magenta lehenga for my sangeet. Got endless compliments! Sizing was custom-fit perfectly.", location: "Jaipur, India" },
      { name: "Simran K.", rating: 5, text: "Excellent weight and flares beautifully. The embroidery work is neat and premium. Shipping was timely.", location: "New York, USA" },
      { name: "Tanuja Roy", rating: 5, text: "Breathtaking craft. The sequence panels and dupattas are premium quality. Outstanding client support.", location: "Kolkata, India" },
    ],
    faqs: [
      { q: "Can I customize the waist, length, and blouse sizes?", a: "Absolutely. All our lehengas have custom sizing options. You can submit your exact measurements after ordering, or consult our stylist." },
      { q: "What lining materials do you use?", a: "We use high-grade satin, cotton-silk, and crepe lining inside all lehengas to ensure comfort and smooth movement." },
      { q: "How long does a customized Lehenga take to ship?", a: "Custom tailored lehengas usually ship within 18-21 days as they are custom-made to measure." }
    ]
  },
  "kurta-and-beyond": {
    title: "Kurta and Beyond",
    subtitle: "Everyday Daftar & Festive Fits",
    description: "Explore our versatile collection of kurtas, everyday essentials, office fits, and festive silhouettes. Curated with handblock prints, lightweight cottons, and premium blends.",
    heroImage: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=1600&auto=format&fit=crop",
    stories: [
      { name: "Daftar Fits", img: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=150&auto=format&fit=crop" },
      { name: "Everyday Kurta", img: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=150&auto=format&fit=crop" },
      { name: "Anarkali Sets", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=150&auto=format&fit=crop" },
      { name: "Festive Edit", img: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=150&auto=format&fit=crop" },
    ],
    lookbookTitle: "Karismatic Comfort",
    lookbookSubtitle: "The Everyday Essentials Collection",
    lookbookDesc: "Because basic isn't the plan. Elevate your everyday style with our breathable silhouettes, classic block prints, and elegant side tassels that effortlessly transition from desk to dinner.",
    lookbookImageLeft: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    lookbookImageRight: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=800&auto=format&fit=crop",
    reviews: [
      { name: "Nisha Patel", rating: 5, text: "Extremely comfortable and soft cotton fabric. Perfect for daily office wear. Fits true to size.", location: "Ahmedabad, India" },
      { name: "Shalini S.", rating: 5, text: "Loved the embroidery detail on the neck. Color is just as shown in the picture. Will buy again!", location: "Pune, India" },
    ],
    faqs: [
      { q: "Is the fabric pre-shrunk?", a: "Yes, all our cotton and cotton-blend kurtas undergo a pre-shrinking process to ensure the fit remains perfect after washing." },
      { q: "Are pants included with the kurtas?", a: "We specify 'Kurta Set' for outfits that include bottoms. Solo kurtas can be paired with our separate basic bottoms." }
    ]
  }
};

const DEFAULT_CATEGORY_CONTENT = {
  title: "Nakhrali Collection",
  subtitle: "Curated Traditional & Contemporary Silhouettes",
  description: "Discover our premium edits designed for the modern woman who values heritage craftsmanship, delicate textures, and visual excellence.",
  heroImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1600&auto=format&fit=crop",
  stories: [
    { name: "Festive wear", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=150&auto=format&fit=crop" },
    { name: "Partywear", img: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=150&auto=format&fit=crop" },
    { name: "Best Sellers", img: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=150&auto=format&fit=crop" },
    { name: "Handcrafted", img: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=150&auto=format&fit=crop" },
  ],
  lookbookTitle: "The Nakhra Style Campaign",
  lookbookSubtitle: "Timeless Aesthetics",
  lookbookDesc: "Immerse yourself in handloom weaves, tailored fits, and luxury detail work. Curated collections created to showcase traditional roots with contemporary flair.",
  lookbookImageLeft: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
  lookbookImageRight: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=800&auto=format&fit=crop",
  reviews: [
    { name: "Aarushi M.", rating: 5, text: "Outstanding purchase. The design looks extremely rich and fits flawlessly. Great shopping experience.", location: "Delhi, India" },
    { name: "Kritika S.", rating: 5, text: "Beautiful product. Fabric is very premium, and the details are extremely clean. Fast shipping too.", location: "Bangalore, India" },
  ],
  faqs: [
    { q: "What sizes are available?", a: "We provide standard sizes from XXS to 4XL. Custom sizing is also available on request." },
    { q: "Do you ship worldwide?", a: "Yes, we offer free shipping across India for orders above 1500 INR, and flat-rate worldwide shipping." }
  ]
};

export default function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const categoryKey = resolvedParams.category.toLowerCase();
  const categoryName = resolvedParams.category.replace(/-/g, " ").charAt(0).toUpperCase() + resolvedParams.category.replace(/-/g, " ").slice(1);
  
  const content = CATEGORY_CONTENT[categoryKey] || {
    ...DEFAULT_CATEGORY_CONTENT,
    title: categoryName,
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-white min-h-screen pb-16">
      
      {/* 1. Hero Header Banner */}
      <div className="relative w-full h-[320px] md:h-[450px] bg-gray-900 overflow-hidden flex items-center justify-center">
        <Image 
          src={content.heroImage} 
          alt={content.title}
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative text-center px-4 max-w-3xl z-10">
          <span className="text-nakhrali-gold font-sans text-xs md:text-sm tracking-[0.2em] uppercase block mb-3 font-medium">
            {content.subtitle}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide mb-4">
            {content.title}
          </h1>
          <p className="text-white/80 font-sans text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-8 tracking-wider uppercase">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">{categoryName}</span>
        </div>

        {/* 2. Circular Story Highlights */}
        <div className="w-full mb-14 overflow-x-auto hide-scrollbar">
          <div className="flex items-center justify-start sm:justify-center gap-6 md:gap-10 pb-4 min-w-max">
            {content.stories.map((story, i) => (
              <motion.div 
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-nakhrali-gold p-0.5 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image src={story.img} alt={story.name} fill className="object-cover" />
                  </div>
                </div>
                <span className="font-sans text-[11px] md:text-xs tracking-wider text-gray-600 group-hover:text-black transition-colors font-medium">
                  {story.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sorting & Filters Bar */}
        <div className="flex items-center justify-between border-y border-gray-100 py-4 mb-10">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 font-sans text-xs md:text-sm tracking-widest uppercase hover:text-nakhrali-gold transition-colors font-medium"
          >
            <SlidersHorizontal size={16} /> Filter
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 font-sans text-xs md:text-sm border border-gray-200 px-4 py-2 hover:border-gray-300 transition-colors bg-white min-w-44 justify-between"
            >
              <span className="tracking-widest uppercase text-[11px] font-medium">Sort By</span>
              <ChevronDown size={14} className="text-gray-500" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-150 shadow-lg z-20 font-sans text-xs">
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-50 text-gray-700">Featured</button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-50 text-gray-700">Best Selling</button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-50 text-gray-700">Price: Low to High</button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700">Price: High to Low</button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Filters */}
          <aside className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 lg:static lg:translate-x-0 lg:w-[260px] lg:flex-none lg:shadow-none lg:z-auto lg:block ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="h-full flex flex-col p-6 lg:p-0">
              <div className="flex justify-between items-center lg:hidden mb-6">
                <h3 className="font-sans text-lg tracking-wider">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
              </div>

              <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col gap-8 pr-2">
                
                {/* Filter Price Range */}
                <div className="border-b border-gray-100 pb-8">
                  <h4 className="font-sans font-medium text-[13px] tracking-wider uppercase mb-5">Price Range</h4>
                  <div className="relative w-full h-1 bg-gray-100 mb-6">
                    <div className="absolute left-[10%] right-[10%] h-full bg-[#111111]"></div>
                    <div className="absolute left-[10%] -top-2 w-5 h-5 bg-white border-2 border-[#111111] rounded-full shadow-sm"></div>
                    <div className="absolute right-[10%] -top-2 w-5 h-5 bg-white border-2 border-[#111111] rounded-full shadow-sm"></div>
                  </div>
                  <div className="flex items-center justify-between gap-4 font-sans text-xs">
                    <div className="flex items-center border border-gray-200 px-3 py-2 flex-1">
                      <span className="text-gray-400 mr-1">₹</span>
                      <input type="text" value="1,995" readOnly className="w-full outline-none text-gray-700 bg-transparent font-medium" />
                    </div>
                    <div className="flex items-center border border-gray-200 px-3 py-2 flex-1">
                      <span className="text-gray-400 mr-1">₹</span>
                      <input type="text" value="44,895" readOnly className="w-full outline-none text-gray-700 bg-transparent font-medium" />
                    </div>
                  </div>
                </div>

                {/* Display In-stock */}
                <div className="border-b border-gray-100 pb-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] border-gray-300 rounded-sm accent-[#111111]" />
                    <span className="font-sans text-[13px] text-gray-700 tracking-wider">Display In-stock Only</span>
                  </label>
                </div>

                {/* Size Option */}
                <div className="border-b border-gray-100 pb-8">
                  <h4 className="font-sans text-gray-500 text-xs tracking-widest uppercase mb-4">Size</h4>
                  <div className="space-y-3">
                    {FILTER_SIZES.slice(1, 6).map(size => (
                      <label key={size} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-[18px] h-[18px] border-gray-300 rounded-sm accent-[#111111]" />
                        <span className="font-sans text-[13px] text-gray-600">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fabric */}
                <div className="border-b border-gray-100 pb-8">
                  <h4 className="font-sans text-gray-500 text-xs tracking-widest uppercase mb-4">Fabric</h4>
                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                    {FILTER_FABRICS.map(fabric => (
                      <label key={fabric} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-[18px] h-[18px] border-gray-300 rounded-sm accent-[#111111]" />
                        <span className="font-sans text-[13px] text-gray-600">{fabric}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Work */}
                <div className="pb-8">
                  <h4 className="font-sans text-gray-500 text-xs tracking-widest uppercase mb-4">Work</h4>
                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                    {FILTER_WORKS.slice(0, 6).map(work => (
                      <label key={work} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-[18px] h-[18px] border-gray-300 rounded-sm accent-[#111111]" />
                        <span className="font-sans text-[13px] text-gray-600">{work}</span>
                      </label>
                    ))}
                  </div>
                </div>

              </div>
              
              <div className="mt-6 lg:hidden">
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-[#111111] text-white py-3 font-sans uppercase tracking-widest text-xs"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Overlay for mobile filter */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsFilterOpen(false)} />
          )}

          {/* Product Grid Area */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
              {(MOCK_PRODUCTS[categoryKey] || DEFAULT_PRODUCTS).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>

        {/* 3. Campaign Lookbook Section */}
        <div className="w-full py-10 lg:py-20 border-t border-gray-100 mt-10 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 pr-0 lg:pr-10">
              <span className="text-nakhrali-gold font-sans text-xs tracking-widest uppercase font-medium">
                {content.lookbookSubtitle}
              </span>
              <h2 className="text-3xl md:text-[42px] font-serif tracking-wide text-[#111111] leading-tight">
                {content.lookbookTitle}
              </h2>
              <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed font-light">
                {content.lookbookDesc}
              </p>
              <div className="mt-4">
                <Link 
                  href="/lookbook" 
                  className="inline-block border-b border-black text-xs tracking-widest uppercase font-medium pb-1.5 hover:text-nakhrali-gold hover:border-nakhrali-gold transition-all"
                >
                  View Full Lookbook
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-gray-50 shadow-sm">
                <Image src={content.lookbookImageLeft} alt="Campaign Details Left" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-gray-50 shadow-sm mt-8">
                <Image src={content.lookbookImageRight} alt="Campaign Details Right" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>

        {/* 4. WhatsApp Styling Consult Callout */}
        <div className="w-full bg-[#f9f8f6] py-12 px-6 md:px-12 rounded flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-sm border border-gray-100">
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-2xl text-[#111111] tracking-wide">Looking for Custom Fits & Styles?</h3>
            <p className="font-sans text-sm text-gray-600 font-light">Get custom size advice, live shopping videos, and personalized styling from our design curators.</p>
          </div>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded font-sans font-medium text-xs tracking-widest uppercase transition-colors shrink-0 shadow-md"
          >
            <MessageCircle size={18} fill="currentColor" className="text-white" />
            <span>Whatsapp Stylist</span>
          </a>
        </div>

        {/* 5. Customer Reviews Section */}
        <div className="w-full py-10 lg:py-16 border-t border-gray-100">
          <div className="text-center mb-12">
            <span className="text-nakhrali-gold font-sans text-xs tracking-widest uppercase font-medium block mb-2">LOVED BY OUR PATRONS</span>
            <h2 className="text-2xl md:text-3xl font-serif tracking-wide text-[#111111]">She Wore Nakhrali</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.reviews.map((rev, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 text-nakhrali-gold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="font-sans text-gray-600 text-sm italic leading-relaxed flex-1">
                  "{rev.text}"
                </p>
                <div className="border-t border-gray-50 pt-4 flex flex-col">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#111111]">{rev.name}</span>
                  <span className="font-sans text-[10px] text-gray-400">{rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. FAQ Accordion */}
        <div className="w-full py-10 lg:py-16 border-t border-gray-100 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif tracking-wide text-[#111111]">Questions & Answers</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {content.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-4">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left py-2 font-sans font-medium text-sm md:text-base text-[#111111] hover:text-nakhrali-gold transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-400 transition-transform duration-300 ${activeFaq === idx ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed pt-2 pl-1 font-light">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
