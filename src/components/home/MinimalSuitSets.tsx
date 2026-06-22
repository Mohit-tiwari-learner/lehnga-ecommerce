import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const MINIMAL_SUITS_PRODUCTS: Product[] = [
  {
    id: "minimal-1",
    title: "Pallav Print Pant Kurta Set - Casual Cotton Wear",
    price: 2295,
    image: "/extracted_photos/wedding-collection-where-rich-natural-silk-meets-craftsmanship-and-vibrant-pink-glow-lehenga-choli-1459/page-0.png",
    shipsInDays: 4,
  },
  {
    id: "minimal-2",
    title: "Umrao Cream Angrakha Cotton Kurta Pant Set",
    price: 4495,
    image: "/extracted_photos/beautiful-and-elegant-teal-green-colour-georgette-fabric-lehenga-choli-reseller-in-surat-5067-green/page-0.png",
    shipsInDays: 14,
  },
  {
    id: "minimal-3",
    title: "Rozana Mustard Cotton Pant Kurta Set with Patch Work",
    price: 2995,
    image: "/extracted_photos/heavy-sparkling-and-beautiful-wine-colour-georgette-fancy-fabric-lehenga-choli-reseller-in-surat-5067-wine/page-0.png",
    shipsInDays: 4,
  },
  {
    id: "minimal-4",
    title: "Layla Maroon Cotton Farshi Salwar Kurta Set",
    price: 2895,
    image: "/extracted_photos/launching-navratri-special-georgettet-cotton-fancy-fabric-lehenga-choli-reseller-in-surat-582/page-0.png",
    shipsInDays: 4,
    badge: "Bestseller",
  },
];

export function MinimalSuitSets() {
  return (
    <div className="bg-[#fcfbf9]">
      <ProductSlider 
        title="Minimal Suit Sets"
        products={MINIMAL_SUITS_PRODUCTS}
      />
    </div>
  );
}

