import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const NAKHRA_STYLES_PRODUCTS: Product[] = [
  {
    id: "ns-1",
    title: "Maroon Floral Dress",
    price: 6495,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "ns-2",
    title: "Pink Crop Top Drape Skirt",
    price: 8995,
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "ns-3",
    title: "Black & Red Floral Lehenga",
    price: 12495,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "ns-4",
    title: "Peach Cape Shrug Set",
    price: 7895,
    image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=600&auto=format&fit=crop",
  },
];

export function NakhraStyles() {
  return (
    <div className="bg-[#fcfbf9]">
      <ProductSlider 
        title="The Nakhra Styles"
        products={NAKHRA_STYLES_PRODUCTS}
      />
    </div>
  );
}

