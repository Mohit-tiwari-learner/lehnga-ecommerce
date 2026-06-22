import { ProductSlider } from "@/components/common/ProductSlider";
import { Product } from "@/components/product/ProductCard";

const PARTY_CRASHERS: Product[] = [
  {
    id: "party-1",
    title: "Rimaya Purple Bandhani Saree with Gota Border",
    price: 4995,
    image: "/extracted_photos/this-purple-colour-pure-rayon-beautiful-floral-lehenga-choli-is-my-ode-to-the-season-of-navratri-reseller-in-surat-1618/page-0.png",
    shipsInDays: 2,
    swatches: ["#800080", "#ffc0cb", "#ffd700"],
  },
  {
    id: "party-2",
    title: "Botanic Luxe Brown Saree with Readymade Blouse",
    price: 14895,
    image: "/extracted_photos/wedding-collection-where-rich-natural-silk-meets-craftsmanship-and-vibrant-pink-glow-lehenga-choli-1459/page-0.png",
    shipsInDays: 4,
    swatches: ["#8b4513", "#d2b48c"],
  },
  {
    id: "party-3",
    title: "Blooming Lotus Mirror Work Saree with Readymade Blouse",
    price: 14895,
    image: "/extracted_photos/beautiful-and-elegant-teal-green-colour-georgette-fabric-lehenga-choli-reseller-in-surat-5067-green/page-0.png",
    shipsInDays: 4,
  },
  {
    id: "party-4",
    title: "Glitter & Glam Dusty Peach Saree with Readymade Blouse",
    price: 10895,
    image: "/extracted_photos/heavy-sparkling-and-beautiful-wine-colour-georgette-fancy-fabric-lehenga-choli-reseller-in-surat-5067-wine/page-0.png",
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

