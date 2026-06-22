import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const EVERYDAY_ESSENTIALS_PRODUCTS: Product[] = [
  {
    id: "essentials-1",
    title: "Layla Noir Buti Farshi Salwaar Set",
    price: 2895,
    image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  },
  {
    id: "essentials-2",
    title: "Layla Olive Green Farshi Salwaar Set",
    price: 2895,
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  },
  {
    id: "essentials-3",
    title: "Tulip Red Cotton Co-ord Set",
    price: 2895,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
    swatches: ["#ff0000", "#000000", "#ffffff", "#008000"],
  },
  {
    id: "essentials-4",
    title: "Firgun Block Printed Oversized Cotton Coord Set",
    price: 2895,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 2,
    swatches: ["#0000ff", "#ffffff"],
  },
];

export function EverydayEssentials() {
  return (
    <div className="bg-[#fcfbf9]">
      <ProductSlider 
        title="Shop the Everyday Essentials"
        products={EVERYDAY_ESSENTIALS_PRODUCTS}
      />
    </div>
  );
}

