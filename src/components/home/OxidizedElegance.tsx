import Image from "next/image";
import Link from "next/link";
import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const OXIDIZED_JEWELLERY_PRODUCTS: Product[] = [
  {
    id: "ox-1",
    title: "Peacock Charm Oxidised Jewellery Set with Earrings",
    price: 795,
    image: "/extracted_photos/rakhi-special-crop-top-lehenga-choli-made-of-pure-chinon-fancy-fabric-supplier-in-surat-419/page-0.png",
    shipsInDays: 4,
    badge: "Restocked",
  },
  {
    id: "ox-2",
    title: "Sharini Oxidised Tribal Ring",
    price: 250,
    image: "/extracted_photos/samairaa-from-ceremonial-moments-to-joyful-festivities-chocolate-crush-fabric-this-bridesmaid-lehenga-choli-1457/page-0.png",
  },
  {
    id: "ox-3",
    title: "Aira Knotted Oxidised Bangle",
    price: 495,
    image: "/extracted_photos/shahi-wedding-set-an-exquisite-blend-of-rich-silk-satin-fabric-detailed-embroidery-work-on-lehenga-choli-reseller-in-surat-1449/page-0.png",
    shipsInDays: 2,
  },
  {
    id: "ox-4",
    title: "Cosmic Cascade Earrings",
    price: 450,
    image: "/extracted_photos/soft-naysha-silk-fancy-fabric-with-embroidery-work-on-this-lehenga-collection-reseller-in-surat-1489/page-0.png",
    shipsInDays: 2,
  },
];

export function OxidizedElegance() {
  return (
    <div className="w-full bg-white flex flex-col pt-16">
      {/* Banner */}
      <div className="w-full px-4 lg:px-8">
        <div className="max-w-[1440px] mx-auto relative group overflow-hidden aspect-[21/9] md:aspect-[3/1] rounded-2xl">
          <Link href="/collections/oxidized-jewellery" className="block w-full h-full">
            <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
              <Image
                src="/extracted_photos/taddy-silk-fancy-and-beautiful-fabric-best-for-you-lehenga-choli-collections-supplier-in-surat-ka-5072/page-0.png"
                alt="Oxidized Elegance"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif">
                <span className="block font-sans text-xl md:text-2xl tracking-[0.2em] font-light mb-2">आभूषण</span>
                Grace Woven
                <span className="block font-sans text-sm md:text-base tracking-[0.3em] uppercase font-light mt-4">In Every Detail</span>
              </h2>
            </div>
          </Link>
        </div>
      </div>

      {/* Product Slider Section */}
      <ProductSlider 
        title="Oxidized Elegance Collection" 
        products={OXIDIZED_JEWELLERY_PRODUCTS}
      />
    </div>
  );
}

