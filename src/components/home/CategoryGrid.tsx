import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  { title: "INDO FIT LEHENGAS", image: "/extracted_photos/this-purple-colour-pure-rayon-beautiful-floral-lehenga-choli-is-my-ode-to-the-season-of-navratri-reseller-in-surat-1618/page-0.png" },
  { title: "HANDPICKED JEWELS", image: "/extracted_photos/wedding-collection-where-rich-natural-silk-meets-craftsmanship-and-vibrant-pink-glow-lehenga-choli-1459/page-0.png" },
  { title: "SALWAAR KAMEEZ", image: "/extracted_photos/beautiful-and-elegant-teal-green-colour-georgette-fabric-lehenga-choli-reseller-in-surat-5067-green/page-0.png" },
  { title: "MODERN DRAPES", image: "/extracted_photos/heavy-sparkling-and-beautiful-wine-colour-georgette-fancy-fabric-lehenga-choli-reseller-in-surat-5067-wine/page-0.png" },
  { title: "EVERYDAY ETHNIC", image: "/extracted_photos/launching-navratri-special-georgettet-cotton-fancy-fabric-lehenga-choli-reseller-in-surat-582/page-0.png" },
  { title: "COMFORT CO-ORDS", image: "/extracted_photos/launching-navratri-special-soft-and-pure-cotton-fabric-lehenga-choli-wholesale-in-surat-581/page-0.png" },
  { title: "COMFORT TOPS", image: "/extracted_photos/navratri-new-and-best-collection-tasar-silk-fancy-and-beautiful-fabric-lehenga-choli-reseller-in-surat-1734/page-0.png" },
  { title: "MY DAFTAR FITS", image: "/extracted_photos/navratri-special-charmful-and-dazziing-faux-georgette-fancy-fabric-lehenga-choli-collections-wholesale-in-surat-lw-7134/page-0.png" },
];

export function CategoryGrid() {
  return (
    <div className="w-full bg-white py-8 lg:py-12 px-4 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((category, index) => (
            <Link 
              key={index} 
              href={`/collections/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex flex-col gap-3 items-center"
            >
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100">
                <Image 
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-sans text-sm md:text-base font-medium tracking-wide text-center text-[#111111] group-hover:text-nakhrali-gold transition-colors">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

