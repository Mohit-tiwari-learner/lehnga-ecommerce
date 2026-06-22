import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const EVERYDAY_ESSENTIALS_PRODUCTS: Product[] = [
  {
    id: "essentials-1",
    title: "Layla Noir Buti Farshi Salwaar Set",
    price: 2895,
    image: "/extracted_photos/premium-and-classic-fancy-satin-fabric-readymade-lehenga-choli-collections-wholesale-in-surat-7167/page-0.png",
    shipsInDays: 4,
  },
  {
    id: "essentials-2",
    title: "Layla Olive Green Farshi Salwaar Set",
    price: 2895,
    image: "/extracted_photos/premium-and-designer-shiny-gold-crush-fancy-fabric-lehenga-choli-wholesale-in-surat-ka-5058/page-0.png",
    shipsInDays: 4,
  },
  {
    id: "essentials-3",
    title: "Tulip Red Cotton Co-ord Set",
    price: 2895,
    image: "/extracted_photos/pure-and-soft-dolla-silk-fancy-fabric-with-beautiful-digital-print-on-chaniya-choli-reseller-in-surat-pratha/page-0.png",
    shipsInDays: 4,
    swatches: ["#ff0000", "#000000", "#ffffff", "#008000"],
  },
  {
    id: "essentials-4",
    title: "Firgun Block Printed Oversized Cotton Coord Set",
    price: 2895,
    image: "/extracted_photos/rakhi-special-crop-top-lehenga-choli-made-of-pure-chinon-fancy-fabric-supplier-in-surat-419/page-0.png",
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

