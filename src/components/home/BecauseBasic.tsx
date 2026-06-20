import Image from "next/image";
import Link from "next/link";
import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const BECAUSE_BASIC_PRODUCTS: Product[] = [
  {
    id: "basic-1",
    title: "Gold Satin Kurta Set with Dupatta",
    price: 3495,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  },
  {
    id: "basic-2",
    title: "Silver Grey Satin Suit Set",
    price: 3895,
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  },
  {
    id: "basic-3",
    title: "Olive Green Partywear Suit",
    price: 4295,
    image: "https://images.unsplash.com/photo-1584226786801-7662c1613eb5?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  },
  {
    id: "basic-4",
    title: "Maroon Silk Kurta Set",
    price: 4895,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6153c?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  },
];

export function BecauseBasic() {
  return (
    <div className="w-full bg-[#fdfbf7] flex flex-col pt-16">
      {/* Three-part split banner */}
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
          {/* Left: Gold satin kurta */}
          <Link href="/collections/partywear-suit-sets" className="flex-1 relative group overflow-hidden aspect-[4/5] md:aspect-auto">
            <Image 
              src="https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=600&auto=format&fit=crop"
              alt="Gold Satin Kurta"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
          
          {/* Middle: Brown block text */}
          <div className="flex-1 bg-[#4A3B32] flex flex-col justify-center items-center p-8 md:p-12 text-center aspect-[4/5] md:aspect-auto">
            <h3 className="text-[#D4AF37] text-sm md:text-base tracking-[0.3em] font-sans uppercase mb-4">
              PARTYWEAR SUIT SETS
            </h3>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6">
              Because Basic<br />
              <span className="italic font-light">Isn't the Plan</span>
            </h2>
            <p className="text-white/80 tracking-widest text-xs font-sans uppercase border-t border-white/20 pt-4 w-1/2">
              BY NAKHRALI
            </p>
          </div>

          {/* Right: Silver-grey satin kurta */}
          <Link href="/collections/partywear-suit-sets" className="flex-1 relative group overflow-hidden aspect-[4/5] md:aspect-auto">
            <Image 
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop"
              alt="Silver Grey Satin Kurta"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
        </div>
      </div>

      <ProductSlider 
        title=""
        products={BECAUSE_BASIC_PRODUCTS}
      />
    </div>
  );
}
