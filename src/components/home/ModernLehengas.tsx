import Image from "next/image";
import Link from "next/link";
import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const MODERN_LEHENGAS_PRODUCTS: Product[] = [
  {
    id: "leh-1",
    title: "Riva Maroon Indowestern Lehenga Set with Embroidered Cape",
    price: 44895,
    image: "https://images.unsplash.com/photo-1583391733958-611825512a4c?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 21,
  },
  {
    id: "leh-2",
    title: "Utsara Blue Multicolour Lehenga Set with Zari Sequin Work",
    price: 26695,
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "leh-3",
    title: "Liora Pink Sequin & Beadwork Lehenga Set",
    price: 18895,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 21,
  },
  {
    id: "leh-4",
    title: "Calira Beige Beaded Indo-Western Lehenga Set",
    price: 23895,
    image: "https://images.unsplash.com/photo-1584226786801-7662c1613eb5?q=80&w=600&auto=format&fit=crop",
  },
];

export function ModernLehengas() {
  return (
    <div className="w-full bg-white flex flex-col pt-16">
      <div className="w-full py-8 lg:py-12 px-4 lg:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-4 lg:gap-8 w-full">
            {/* Left Banner */}
            <Link href="/collections/lehengas" className="relative group flex-1 aspect-[16/9] md:aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6153c?q=80&w=800&auto=format&fit=crop"
                  alt="Modern Lehengas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif">
                  MODERN LEHENGAS
                </h3>
              </div>
            </Link>

            {/* Right Banner */}
            <Link href="/collections/lehengas" className="relative group flex-1 aspect-[16/9] md:aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop"
                  alt="Indian Soul"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif">
                  INDIAN SOUL
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Slider Section */}
      <ProductSlider 
        title="" 
        products={MODERN_LEHENGAS_PRODUCTS}
      />
    </div>
  );
}
