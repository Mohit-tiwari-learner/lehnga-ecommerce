import Image from "next/image";
import Link from "next/link";
import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const BLOUSES_PRODUCTS: Product[] = [
  {
    id: "blouse-1",
    title: "Sadhana Black Cotton Blouse with Printed Detail",
    price: 1895,
    image: "https://images.unsplash.com/photo-1584226786801-7662c1613eb5?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  },
  {
    id: "blouse-2",
    title: "Nirva Cream Assorted Modal Silk Printed Blouse",
    price: 2195,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
    swatches: ["#f5f5dc", "#800000", "#000000", "#ff0000", "#0000ff"],
  },
  {
    id: "blouse-3",
    title: "Gajgamini Red Cotton Printed Blouse Collection",
    price: 1995,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6153c?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
    swatches: ["#ff0000", "#000000", "#ffffff", "#ffff00", "#800080"],
  },
  {
    id: "blouse-4",
    title: "Nandi Blue Cotton Printed Blouse",
    price: 1995,
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
    swatches: ["#0000ff", "#ffffff", "#000000", "#ff0000", "#800080", "#ffff00", "#008000", "#ffa500", "#808080", "#a52a2a"],
  },
];

export function BlousesSection() {
  return (
    <div className="w-full bg-white flex flex-col pt-16">
      {/* Banner */}
      <div className="w-full py-8 lg:py-12 px-4 lg:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-4 lg:gap-8 w-full">
          {/* Left Banner */}
          <Link href="/collections/blouses" className="relative group flex-1 aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-[#e5dfd3]">
            <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1584226786801-7662c1613eb5?q=80&w=800&auto=format&fit=crop"
                alt="Statement Blouses"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif">
                <span className="block font-sans text-sm md:text-base tracking-[0.3em] uppercase font-light mb-2">THE PERFECT</span>
                STATEMENT
                <span className="block italic mt-2 font-light">Blouses</span>
              </h3>
            </div>
          </Link>

          {/* Right Banner */}
          <Link href="/collections/blouses" className="relative group flex-1 aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-[#d3d9e5]">
            <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=800&auto=format&fit=crop"
                alt="Everyday Elevated"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif">
                Everyday.
                <span className="block italic mt-2 font-light">Elevated</span>
              </h3>
            </div>
          </Link>
        </div>
      </div>

      {/* Product Slider Section */}
      <ProductSlider 
        title="Trending Blouses" 
        products={BLOUSES_PRODUCTS}
      />
    </div>
  );
}
