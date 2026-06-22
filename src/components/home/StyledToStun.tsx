import Image from "next/image";
import Link from "next/link";
import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const STYLED_TO_STUN_PRODUCTS: Product[] = [
  {
    id: "indo-1",
    title: "Gulnaar Floral Indo-Western Co-ord Set with Zari Work",
    price: 8295,
    image: "/extracted_photos/samairaa-from-ceremonial-moments-to-joyful-festivities-chocolate-crush-fabric-this-bridesmaid-lehenga-choli-1457/page-0.png",
    shipsInDays: 21,
  },
  {
    id: "indo-2",
    title: "Zarina Green Satin Crop Top Skirt Set with Embroidered Detailing",
    price: 14495,
    image: "/extracted_photos/shahi-wedding-set-an-exquisite-blend-of-rich-silk-satin-fabric-detailed-embroidery-work-on-lehenga-choli-reseller-in-surat-1449/page-0.png",
    shipsInDays: 4,
    swatches: ["#008000", "#ff0000"],
  },
  {
    id: "indo-3",
    title: "Zyren Black Draped Dress with Jacket-Style Embellished Front",
    price: 7795,
    image: "/extracted_photos/soft-naysha-silk-fancy-fabric-with-embroidery-work-on-this-lehenga-collection-reseller-in-surat-1489/page-0.png",
    shipsInDays: 4,
  },
  {
    id: "indo-4",
    title: "Beaded Bloom Blue Crop Top Palazzo Set with Choker Dupatta",
    price: 8495,
    image: "/extracted_photos/taddy-silk-fancy-and-beautiful-fabric-best-for-you-lehenga-choli-collections-supplier-in-surat-ka-5072/page-0.png",
    shipsInDays: 21,
    swatches: ["#0000ff", "#ffc0cb"],
  },
];

export function StyledToStun() {
  return (
    <div className="w-full bg-white flex flex-col">
      {/* Top Banner Section */}
      <div className="w-full py-10 lg:py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-serif tracking-widest text-[#111111] mb-12 text-center uppercase">
            Styled to Stun-The Indo-Western Affair
          </h2>

          <div className="flex flex-col md:flex-row gap-4 lg:gap-8 w-full">
            {/* Left Banner */}
            <Link href="/collections/indo-western" className="relative group flex-1 aspect-[16/9] md:aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                <Image
                  src="/extracted_photos/this-purple-colour-pure-rayon-beautiful-floral-lehenga-choli-is-my-ode-to-the-season-of-navratri-reseller-in-surat-1618/page-0.png"
                  alt="The Indo-Western Affair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif">
                  <span className="block font-sans text-lg md:text-xl tracking-[0.3em] uppercase font-light mb-2">THE</span>
                  INDO-WESTERN
                  <span className="block italic mt-2 font-light">Affair</span>
                </h3>
              </div>
            </Link>

            {/* Right Banner */}
            <Link href="/collections/indo-western" className="relative group flex-1 aspect-[16/9] md:aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                <Image
                  src="/extracted_photos/wedding-collection-where-rich-natural-silk-meets-craftsmanship-and-vibrant-pink-glow-lehenga-choli-1459/page-0.png"
                  alt="Post-Wed Wardrobe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif">
                  Post-Wed
                  <span className="block font-sans text-lg md:text-xl tracking-[0.3em] uppercase font-light mt-4">WARDROBE</span>
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Slider Section */}
      <ProductSlider 
        title="" 
        products={STYLED_TO_STUN_PRODUCTS}
      />
    </div>
  );
}

