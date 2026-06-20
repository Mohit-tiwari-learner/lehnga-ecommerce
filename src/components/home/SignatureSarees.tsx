import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const SIGNATURE_SAREES: Product[] = [
  {
    id: "sig-1",
    title: "Pranay Pink Silk Saree with Abstract Motifs",
    price: 1995,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
    badge: "Restocked Bestseller",
  },
  {
    id: "sig-2",
    title: "Forest Fiesta Saree",
    price: 1695,
    image: "https://images.unsplash.com/photo-1583391733958-611825512a4c?q=80&w=600&auto=format&fit=crop",
    badge: "Bestseller",
    shipsInDays: 2,
    swatches: ["#4a5d23", "#8b0000"],
  },
  {
    id: "sig-3",
    title: "Kashi Loom Black Cotton Saree with Block Prints and Zari Weave",
    price: 3995,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
    badge: "Bestseller",
  },
  {
    id: "sig-4",
    title: "Nilour Blue Cotton Printed Saree",
    price: 3995,
    image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=600&auto=format&fit=crop",
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
