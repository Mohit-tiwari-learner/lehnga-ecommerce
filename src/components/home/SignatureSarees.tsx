import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const SIGNATURE_SAREES: Product[] = [
  {
    id: "sig-1",
    title: "Pranay Pink Silk Saree with Abstract Motifs",
    price: 1995,
    image: "/extracted_photos/premium-and-classic-fancy-satin-fabric-readymade-lehenga-choli-collections-wholesale-in-surat-7167/page-0.png",
    badge: "Restocked Bestseller",
  },
  {
    id: "sig-2",
    title: "Forest Fiesta Saree",
    price: 1695,
    image: "/extracted_photos/premium-and-designer-shiny-gold-crush-fancy-fabric-lehenga-choli-wholesale-in-surat-ka-5058/page-0.png",
    badge: "Bestseller",
    shipsInDays: 2,
    swatches: ["#4a5d23", "#8b0000"],
  },
  {
    id: "sig-3",
    title: "Kashi Loom Black Cotton Saree with Block Prints and Zari Weave",
    price: 3995,
    image: "/extracted_photos/pure-and-soft-dolla-silk-fancy-fabric-with-beautiful-digital-print-on-chaniya-choli-reseller-in-surat-pratha/page-0.png",
    badge: "Bestseller",
  },
  {
    id: "sig-4",
    title: "Nilour Blue Cotton Printed Saree",
    price: 3995,
    image: "/extracted_photos/rakhi-special-crop-top-lehenga-choli-made-of-pure-chinon-fancy-fabric-supplier-in-surat-419/page-0.png",
    shipsInDays: 2,
  },
];

export function SignatureSarees() {
  return (
    <ProductSlider 
      title="Signature Sarees: Handloom Edition"
      products={SIGNATURE_SAREES}
    />
  );
}

