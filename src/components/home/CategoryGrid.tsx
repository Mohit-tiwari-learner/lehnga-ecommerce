import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  { title: "INDO FIT LEHENGAS", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop" },
  { title: "HANDPICKED JEWELS", image: "https://images.unsplash.com/photo-1599643478524-fb66f70d00bb?q=80&w=400&auto=format&fit=crop" },
  { title: "SALWAAR KAMEEZ", image: "https://images.unsplash.com/photo-1610030469983-98e550d6153c?q=80&w=400&auto=format&fit=crop" },
  { title: "MODERN DRAPES", image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=400&auto=format&fit=crop" },
  { title: "EVERYDAY ETHNIC", image: "https://images.unsplash.com/photo-1583391733958-611825512a4c?q=80&w=400&auto=format&fit=crop" },
  { title: "COMFORT CO-ORDS", image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=400&auto=format&fit=crop" },
  { title: "COMFORT TOPS", image: "https://images.unsplash.com/photo-1584226786801-7662c1613eb5?q=80&w=400&auto=format&fit=crop" },
  { title: "MY DAFTAR FITS", image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=400&auto=format&fit=crop" },
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
