import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const PARTY_CRASHERS: Product[] = [
  {
    id: "party-1",
    title: "Rimaya Purple Bandhani Saree with Gota Border",
    price: 4995,
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 2,
    swatches: ["#800080", "#ffc0cb", "#ffd700"],
  },
  {
    id: "party-2",
    title: "Botanic Luxe Brown Saree with Readymade Blouse",
    price: 14895,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
    swatches: ["#8b4513", "#d2b48c"],
  },
  {
    id: "party-3",
    title: "Blooming Lotus Mirror Work Saree with Readymade Blouse",
    price: 14895,
    image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  },
  {
    id: "party-4",
    title: "Glitter & Glam Dusty Peach Saree with Readymade Blouse",
    price: 10895,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  },
];

export function PartyCrashers() {
  return (
    <ProductSlider 
      title="Bestselling Party Crashers"
      products={PARTY_CRASHERS}
    />
  );
}

