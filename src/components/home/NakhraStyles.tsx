import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const NAKHRA_STYLES_PRODUCTS: Product[] = [
  {
    id: "ns-1",
    title: "Maroon Floral Dress",
    price: 6495,
    image: "/extracted_photos/olive-green-elegant-colour-georgette-soft-fancy-fabric-lehenga-choli-wholesale-in-surat-5067-olive/page-0.png",
  },
  {
    id: "ns-2",
    title: "Pink Crop Top Drape Skirt",
    price: 8995,
    image: "/extracted_photos/premium-and-classic-fancy-satin-fabric-readymade-lehenga-choli-collections-wholesale-in-surat-7167/page-0.png",
  },
  {
    id: "ns-3",
    title: "Black & Red Floral Lehenga",
    price: 12495,
    image: "/extracted_photos/premium-and-designer-shiny-gold-crush-fancy-fabric-lehenga-choli-wholesale-in-surat-ka-5058/page-0.png",
  },
  {
    id: "ns-4",
    title: "Peach Cape Shrug Set",
    price: 7895,
    image: "/extracted_photos/pure-and-soft-dolla-silk-fancy-fabric-with-beautiful-digital-print-on-chaniya-choli-reseller-in-surat-pratha/page-0.png",
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

