import Image from "next/image";
import Link from "next/link";
import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const TEMPLE_JEWELLERY_PRODUCTS: Product[] = [
  {
    id: "jewel-1",
    title: "Alora Pink Stone Long Kashmiri Earring",
    price: 4695,
    image: "https://images.unsplash.com/photo-1599643478524-fb66f724d1ea?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
    swatches: ["#ffc0cb", "#008000", "#ff0000", "#0000ff", "#ffffff"],
  },
  {
    id: "jewel-2",
    title: "Nayantara Pink Antique Jhumka Earrings",
    price: 1295,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop",
    swatches: ["#ffc0cb", "#ff0000", "#800080"],
  },
  {
    id: "jewel-3",
    title: "Mini Me White Drop Earrings",
    price: 995,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
    swatches: ["#ffffff", "#ff0000", "#000000", "#ffd700", "#c0c0c0", "#ffc0cb"],
  },
  {
    id: "jewel-4",
    title: "Arohi Mint Multi Dangle Kashmiri Earring",
    price: 4795,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop",
  },
];

export function TempleJewellery() {
  return (
    <div className="w-full bg-[#fcfbf9] flex flex-col pt-16">
      {/* Banner */}
      <div className="w-full px-4 lg:px-8">
        <div className="max-w-[1440px] mx-auto relative group overflow-hidden aspect-[21/9] md:aspect-[3/1] rounded-2xl">
          <Link href="/collections/temple-jewellery" className="block w-full h-full">
            <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1599643478524-fb66f724d1ea?q=80&w=1200&auto=format&fit=crop"
                alt="Gajmangal Temple Jewellery"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif">
                <span className="block font-sans text-lg md:text-xl tracking-[0.3em] uppercase font-light mb-2">Gajmangal</span>
                TEMPLE JEWELLERY
              </h2>
            </div>
          </Link>
        </div>
      </div>

      {/* Product Slider Section */}
      <ProductSlider 
        title="Celebration Essentials" 
        products={TEMPLE_JEWELLERY_PRODUCTS}
      />
    </div>
  );
}

