"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Share2, Ruler, Minus, Plus, Truck, RotateCcw, ShieldCheck, Sparkles, MessageCircle, Star, ShoppingCart, HelpCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { MOCK_PRODUCTS, DEFAULT_PRODUCTS } from "@/lib/mockData";
import { ProductCard } from "@/components/product/ProductCard";
import { motion } from "framer-motion";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "Custom"];

// Custom craftsmanship details based on category
const CRAFT_DETAILS: Record<string, {
  technique: string;
  techniqueDesc: string;
  artisanName: string;
  artisanDesc: string;
  imageLeft: string;
  imageRight: string;
  materials: string[];
}> = {
  "sarees": {
    technique: "Traditional Handloom Weaving",
    techniqueDesc: "Woven on traditional wooden looms in small artisan clusters, this piece utilizes age-old methods of interlocking warp and weft threads to create a durable, lustrous silk finish.",
    artisanName: "Sohan Lal & Weavers of Kashi",
    artisanDesc: "Crafted by master weavers whose families have kept the handloom heritage alive for six generations. Every border and motif is hand-threaded with metallic zari.",
    imageLeft: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
    imageRight: "https://images.unsplash.com/photo-1610030469983-98e550d6153c?q=80&w=600&auto=format&fit=crop",
    materials: ["Pure Mulberry Silk threads", "Metallic Gold Zari threads", "Organic vegetable dyes"]
  },
  "lehengas": {
    technique: "Zari, Pearl & Sequin Hand-Embroidery",
    techniqueDesc: "Each panel is carefully mounted on an embroidery frame (Adda) and meticulously embellished by hand with glass beads, faux pearls, metallic wires, and sequins.",
    artisanName: "Aftab & Zardozi Artisans",
    artisanDesc: "Worked on for over 45 hours by highly skilled zardozi craftsmen. This detailing offers a rich, three-dimensional look that catches light from every angle.",
    imageLeft: "https://images.unsplash.com/photo-1583391733958-611825512a4c?q=80&w=600&auto=format&fit=crop",
    imageRight: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
    materials: ["Faux Seed Pearls", "Metallic bullion wire (dabka)", "Lightweight fine net mesh"]
  },
  "kurta-and-beyond": {
    technique: "Hand-Block Printing & Tassel Craft",
    techniqueDesc: "Hand-carved wooden blocks are dipped in natural dyes and stamped onto breathable cotton and modal silk fabrics, creating natural variations that make every piece unique.",
    artisanName: "Jaipur Printers Guild",
    artisanDesc: "Printed in Jaipur using ancient printing mud-resist recipes. Completed with handmade tassels and side-slits tailored for comfort.",
    imageLeft: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=600&auto=format&fit=crop",
    imageRight: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop",
    materials: ["100% Breathable Cotton", "Natural indigo & madder root dyes", "Hand-braided cotton tassels"]
  }
};

const DEFAULT_CRAFT_DETAILS = {
  technique: "Artisanal Hand-Tailored Heritage",
  techniqueDesc: "Made with precise craftsmanship and premium fabrics. Tailored using double-stitched seams and finished with delicate custom details.",
  artisanName: "Nakhrali Tailoring Guild",
  artisanDesc: "Meticulously designed and checked by our local production unit, supporting ethical labor standards and small artisan businesses.",
  imageLeft: "https://images.unsplash.com/photo-1583391733958-611825512a4c?q=80&w=600&auto=format&fit=crop",
  imageRight: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop",
  materials: ["Premium blended fibers", "Eco-friendly dyes", "Polished metallic buttons"]
};

// Styled matching accessories to Complete The Look
const ACCESSORIES = [
  { id: "acc1", name: "Oxidised Choker Set with Pearls", price: 2450, image: "https://images.unsplash.com/photo-1599643478524-fb66f70d00bb?q=80&w=300&auto=format&fit=crop" },
  { id: "acc2", name: "Sharini Oxidised Tribal Ring", price: 250, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=300&auto=format&fit=crop" },
  { id: "acc3", name: "Hand-woven Silk Juttis", price: 1895, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=300&auto=format&fit=crop" }
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { addToCart, setIsCartOpen } = useCart();
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Dynamic Product Finder
  const findProduct = () => {
    for (const key in MOCK_PRODUCTS) {
      const prod = MOCK_PRODUCTS[key].find(p => p.id === resolvedParams.id);
      if (prod) return { product: prod, category: key };
    }
    const defProd = DEFAULT_PRODUCTS.find(p => p.id === resolvedParams.id);
    if (defProd) return { product: defProd, category: "kurta-and-beyond" };
    
    // Default fallback
    return {
      product: {
        id: resolvedParams.id,
        title: "Signature Nakhrali Handloom Outfit",
        price: 18995,
        image: "https://images.unsplash.com/photo-1583391733958-611825512a4c?q=80&w=800&auto=format&fit=crop",
        shipsInDays: 4,
      },
      category: "sarees"
    };
  };

  const { product, category } = findProduct();
  const craft = CRAFT_DETAILS[category] || DEFAULT_CRAFT_DETAILS;

  // Custom gallery images containing the primary product image
  const galleryImages = product.gallery && product.gallery.length > 0
    ? [product.image, ...product.gallery]
    : [
        product.image,
        "https://images.unsplash.com/photo-1583391733958-611825512a4c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610030469983-98e550d6153c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=800&auto=format&fit=crop"
      ];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize
    });
    setIsCartOpen(true);
  };

  const handleAddAccessory = (acc: typeof ACCESSORIES[0]) => {
    addToCart({
      id: acc.id,
      name: acc.name,
      price: acc.price,
      image: acc.image,
      quantity: 1
    });
    setIsCartOpen(true);
  };

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => Math.max(1, q - 1));

  // Category name formatting
  const formattedCategoryName = category.replace(/-/g, " ").charAt(0).toUpperCase() + category.replace(/-/g, " ").slice(1);

  return (
    <div className="w-full bg-white min-h-screen pb-28 md:pb-20">
      
      {/* Breadcrumbs & Product Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 pt-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-8 uppercase tracking-wider">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href={`/collections/${category}`} className="hover:text-black transition-colors">{formattedCategoryName}</Link>
          <ChevronRight size={12} />
          <span className="text-black font-medium">{product.title}</span>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Image Gallery */}
          <div className="flex-1 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory w-full md:w-20 lg:w-24 shrink-0 pb-2 md:pb-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {galleryImages.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 md:w-full aspect-[3/4] border-2 transition-all rounded overflow-hidden shadow-sm shrink-0 snap-start flex-none
                    ${activeImage === idx ? 'border-nakhrali-gold scale-102 shadow-md' : 'border-transparent opacity-80 hover:opacity-100'}`}
                >
                  <Image src={img} alt={`Gallery Thumbnail ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 relative aspect-[3/4] md:aspect-[4/5] bg-[#f9f9f9] rounded overflow-hidden group shadow-sm border border-gray-50">
              <Image 
                src={galleryImages[activeImage]} 
                alt={product.title} 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                priority
              />
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform z-10"
              >
                <Heart size={20} className={isWishlisted ? "text-red-500 fill-red-500" : "text-gray-500"} />
              </button>
            </div>
          </div>

          {/* Right Column: Product Config */}
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-nakhrali-gold font-sans text-xs tracking-widest uppercase font-semibold block mb-1">
                  {formattedCategoryName}
                </span>
                <h1 className="text-3xl lg:text-4xl font-serif text-[#111111] leading-tight tracking-wide">{product.title}</h1>
              </div>
              <button className="text-gray-400 hover:text-black transition-colors pt-2 shrink-0">
                <Share2 size={20} />
              </button>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <p className="text-2xl lg:text-3xl text-nakhrali-gold font-sans font-medium">₹ {product.price.toLocaleString("en-IN")}</p>
              {product.badge && (
                <span className="bg-nakhrali-gold/10 text-nakhrali-gold text-[10px] tracking-widest font-sans uppercase font-bold px-2.5 py-1 rounded">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="font-sans text-xs text-gray-500 mb-8 border-y border-gray-100 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 uppercase tracking-widest">
              <p><span className="font-semibold text-black">Delivery:</span> Ships in {product.shipsInDays || 4} Business Days</p>
              <p className="text-[#25D366] font-semibold flex items-center gap-1">✓ In Stock, Ready to Ship</p>
            </div>

            {/* Sizes Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4 font-sans text-xs">
                <span className="font-semibold uppercase tracking-wider text-gray-700">Select Size</span>
                <button className="flex items-center gap-1 text-gray-500 hover:text-black transition-colors underline decoration-gray-300 underline-offset-4">
                  <Ruler size={13} /> Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {SIZES.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-11 px-5 border font-sans text-xs transition-all uppercase tracking-wider rounded
                      ${selectedSize === size 
                        ? 'border-[#111111] bg-[#111111] text-white shadow-md' 
                        : 'border-gray-200 text-gray-800 hover:border-black hover:bg-gray-50'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector and Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <div className="flex border border-gray-200 h-13 items-center rounded overflow-hidden bg-white shrink-0">
                <button onClick={decrement} className="w-12 h-full flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-50 transition-colors"><Minus size={14} /></button>
                <span className="w-10 text-center font-sans text-sm font-semibold">{quantity}</span>
                <button onClick={increment} className="w-12 h-full flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-50 transition-colors"><Plus size={14} /></button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#111111] text-white h-13 font-sans uppercase tracking-widest text-xs font-semibold hover:bg-nakhrali-gold transition-colors flex items-center justify-center gap-2 rounded shadow-md"
              >
                <ShoppingCart size={16} />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Value Indicators Row */}
            <div className="grid grid-cols-3 gap-2 mb-10 py-5 border-y border-gray-150 text-center bg-gray-50/50 rounded">
              <div className="flex flex-col items-center gap-1.5 px-2">
                <Truck size={22} className="text-nakhrali-gold" strokeWidth={1.5} />
                <span className="font-sans text-[10px] tracking-wider uppercase font-semibold text-gray-700">Free India Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 px-2 border-x border-gray-200">
                <RotateCcw size={22} className="text-nakhrali-gold" strokeWidth={1.5} />
                <span className="font-sans text-[10px] tracking-wider uppercase font-semibold text-gray-700">7-Day Easy Returns</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 px-2">
                <ShieldCheck size={22} className="text-nakhrali-gold" strokeWidth={1.5} />
                <span className="font-sans text-[10px] tracking-wider uppercase font-semibold text-gray-700">Artisan Authenticity</span>
              </div>
            </div>

            {/* Description and Material tabs */}
            <div className="flex flex-col font-sans mb-6">
              <div className="flex border-b border-gray-100 mb-5">
                <button 
                  onClick={() => setActiveTab('description')} 
                  className={`pb-3 px-1 uppercase tracking-widest text-xs font-bold border-b-2 transition-colors ${activeTab === 'description' ? 'border-[#111111] text-[#111111]' : 'border-transparent text-gray-400'}`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('details')} 
                  className={`pb-3 px-6 uppercase tracking-widest text-xs font-bold border-b-2 transition-colors ${activeTab === 'details' ? 'border-[#111111] text-[#111111]' : 'border-transparent text-gray-400'}`}
                >
                  Material & Work
                </button>
              </div>
              
              <div className="text-gray-600 text-sm leading-relaxed min-h-[120px] font-light">
                {activeTab === 'description' && (
                  <p>
                    Experience absolute luxury with this {product.title}. Carefully hand-curated from choice fabrics, this piece is decorated with delicate designs celebrating heritage weaves and traditional Indian patterns. Made with high comfort values, it acts as a stunning statement outfit for festive days, dinners, and family functions.
                  </p>
                )}
                {activeTab === 'details' && (
                  <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                    <li><span className="font-semibold text-gray-800">Fabric Composition:</span> Premium organic-dyed thread base</li>
                    <li><span className="font-semibold text-gray-800">Detailing:</span> Artisan embroidery, hand-beaded borders, matching components</li>
                    <li><span className="font-semibold text-gray-800">Fit Guide:</span> Regular structured comfort fit</li>
                    <li><span className="font-semibold text-gray-800">Wash Care:</span> Strictly Dry Clean only</li>
                  </ul>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 1. Craftsmanship Showcase */}
        <div className="w-full py-10 lg:py-20 border-t border-gray-150 mt-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-nakhrali-gold font-sans text-xs tracking-widest uppercase font-semibold block mb-2">BEHIND THE CREATION</span>
            <h2 className="text-3xl font-serif text-[#111111] tracking-wide">Heritage Craftsmanship</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-50 shadow-sm order-last lg:order-first">
              <Image src={craft.imageLeft} alt="Craft weaving process" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded shadow max-w-xs border border-gray-100">
                <p className="font-sans text-[10px] tracking-widest uppercase font-bold text-nakhrali-gold mb-1">Weaving Method</p>
                <p className="font-sans text-xs text-gray-800 font-medium">{craft.technique}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 pl-0 lg:pl-8">
              <h3 className="font-serif text-2xl text-[#111111]">{craft.technique}</h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">{craft.techniqueDesc}</p>
              <div className="bg-gray-50 p-6 rounded border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={16} className="text-nakhrali-gold animate-pulse" />
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-800">Artisan Spotlight</span>
                </div>
                <h4 className="font-serif text-base text-black mb-1">{craft.artisanName}</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">{craft.artisanDesc}</p>
              </div>
              <div>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-800 mb-2">Materials Utilized</h4>
                <div className="flex flex-wrap gap-2">
                  {craft.materials.map((mat, i) => (
                    <span key={i} className="font-sans text-[10px] tracking-wider text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full font-medium">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Complete The Look Section */}
        <div className="w-full py-10 lg:py-16 border-t border-gray-100 bg-[#fbfbfa] -mx-4 lg:-mx-8 px-4 lg:px-8 mt-6">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-nakhrali-gold font-sans text-xs tracking-widest uppercase font-semibold block mb-2">CURATED PAIRINGS</span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#111111] tracking-wide">Complete The Look</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ACCESSORIES.map(acc => (
                <div key={acc.id} className="bg-white border border-gray-150 p-4 rounded flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-20 h-24 bg-gray-50 rounded overflow-hidden flex-none">
                    <Image src={acc.image} alt={acc.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 font-sans">
                    <h4 className="text-sm font-semibold text-[#111111] line-clamp-1">{acc.name}</h4>
                    <p className="text-xs text-gray-400 mb-3 font-light">Stylist Pick</p>
                    <p className="text-sm text-nakhrali-gold font-medium mb-1">₹ {acc.price.toLocaleString("en-IN")}</p>
                  </div>
                  <button 
                    onClick={() => handleAddAccessory(acc)}
                    className="h-10 w-10 bg-gray-100 hover:bg-[#111111] hover:text-white rounded-full flex items-center justify-center text-[#111111] transition-colors shrink-0 shadow-sm"
                    title="Quick add styling pairing"
                  >
                    <ShoppingCart size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Related Products Slider */}
        <div className="w-full py-10 lg:py-20 border-t border-gray-100">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-nakhrali-gold font-sans text-xs tracking-widest uppercase font-semibold block mb-1">RECOMMENDED EDITS</span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#111111]">You May Also Like</h2>
            </div>
            <Link 
              href={`/collections/${category}`}
              className="font-sans text-xs tracking-widest uppercase font-semibold border-b border-black pb-1 hover:text-nakhrali-gold hover:border-nakhrali-gold transition-colors"
            >
              See All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(MOCK_PRODUCTS[category] || DEFAULT_PRODUCTS).slice(0, 4).map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>

        {/* 4. Live Chat Consultant Callout */}
        <div className="w-full bg-[#f9f8f6] py-12 px-6 md:px-12 rounded flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border border-gray-150 shadow-sm">
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-2xl text-[#111111] tracking-wide flex items-center gap-2">
              <HelpCircle size={22} className="text-nakhrali-gold shrink-0" />
              <span>Questions about Fabric or Custom Sizing?</span>
            </h3>
            <p className="font-sans text-sm text-gray-600 font-light">Connect directly with our custom stitching team on WhatsApp. Get fabric close-ups and sizing guides.</p>
          </div>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded font-sans font-medium text-xs tracking-widest uppercase transition-colors shrink-0 shadow-md"
          >
            <MessageCircle size={18} fill="currentColor" />
            <span>Connect on Whatsapp</span>
          </a>
        </div>

        {/* 5. Customer Reviews */}
        <div className="w-full py-10 lg:py-12 border-t border-gray-100">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-nakhrali-gold font-sans text-xs tracking-widest uppercase font-semibold block mb-2">VERIFIED REVIEWS</span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#111111]">Patron Experiences</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 p-6 rounded shadow-sm hover:shadow transition-shadow">
              <div className="flex gap-1 text-nakhrali-gold mb-3">
                <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
              </div>
              <p className="font-sans text-gray-600 text-xs md:text-sm italic leading-relaxed mb-4">
                "Stunning piece. The fabric is absolutely gorgeous, and the custom fitting tailored size is precise. Highly satisfied."
              </p>
              <div className="border-t border-gray-50 pt-3">
                <p className="font-sans text-xs font-semibold uppercase text-gray-800">Radhika V.</p>
                <p className="font-sans text-[10px] text-gray-400">Verified Buyer • Mumbai</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded shadow-sm hover:shadow transition-shadow">
              <div className="flex gap-1 text-nakhrali-gold mb-3">
                <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
              </div>
              <p className="font-sans text-gray-600 text-xs md:text-sm italic leading-relaxed mb-4">
                "Excellent stitching quality and pure luxury fabric feel. Packing was extremely premium. Will definitely shop again!"
              </p>
              <div className="border-t border-gray-50 pt-3">
                <p className="font-sans text-xs font-semibold uppercase text-gray-800">Deepika Sen</p>
                <p className="font-sans text-[10px] text-gray-400">Verified Buyer • Singapore</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded shadow-sm hover:shadow transition-shadow">
              <div className="flex gap-1 text-nakhrali-gold mb-3">
                <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
              </div>
              <p className="font-sans text-gray-600 text-xs md:text-sm italic leading-relaxed mb-4">
                "Simply breathtaking! The zari gold work looks very sophisticated. Customer care responded on WhatsApp instantly."
              </p>
              <div className="border-t border-gray-50 pt-3">
                <p className="font-sans text-xs font-semibold uppercase text-gray-800">Ananya P.</p>
                <p className="font-sans text-[10px] text-gray-400">Verified Buyer • Bangalore</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Sticky Mobile Add To Cart */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-40 md:hidden flex gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <button 
          onClick={handleAddToCart}
          className="flex-1 bg-[#111111] text-white h-12 font-sans uppercase tracking-widest text-[11px] font-semibold flex items-center justify-center gap-2 rounded"
        >
          <ShoppingCart size={14} />
          <span>Add to Cart - ₹{product.price.toLocaleString("en-IN")}</span>
        </button>
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
