import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const MINIMAL_SUITS_PRODUCTS: Product[] = [
  {
    id: "minimal-1",
    title: "Pallav Print Pant Kurta Set - Casual Cotton Wear",
    price: 2295,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  },
  {
    id: "minimal-2",
    title: "Umrao Cream Angrakha Cotton Kurta Pant Set",
    price: 4495,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 14,
  },
  {
    id: "minimal-3",
    title: "Rozana Mustard Cotton Pant Kurta Set with Patch Work",
    price: 2995,
    image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  },
  {
    id: "minimal-4",
    title: "Layla Maroon Cotton Farshi Salwar Kurta Set",
    price: 2895,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
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

