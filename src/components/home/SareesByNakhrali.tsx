import Image from "next/image";
import Link from "next/link";

export function SareesByNakhrali() {
  return (
    <div className="w-full bg-white py-10 lg:py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-sans tracking-[0.2em] text-[#111111] mb-12 text-center uppercase">
          Sarees By Nakhrali
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Card 1 */}
          <Link href="/collections/sarees" className="group relative w-full h-[500px] md:h-[600px] overflow-hidden">
            <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
              <Image 
                src="/extracted_photos/new-navratri-collection-made-of-soft-chinon-fabric-ready-to-wear-your-perfect-garba-look-awaits-wholesale-in-surat-1768/page-0.png"
                alt="Woven in Tradition"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-center">
              <span className="text-white text-3xl md:text-4xl font-serif mb-2">WOVEN</span>
              <span className="text-white text-sm md:text-base tracking-widest uppercase font-sans">in Tradition</span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/collections/sarees" className="group relative w-full h-[500px] md:h-[600px] overflow-hidden">
            <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
              <Image 
                src="/extracted_photos/olive-green-elegant-colour-georgette-soft-fancy-fabric-lehenga-choli-wholesale-in-surat-5067-olive/page-0.png"
                alt="Modern Drapes Royal Mood"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-center">
              <span className="text-white text-sm md:text-base tracking-widest uppercase font-sans mb-2">Modern Drapes</span>
              <span className="text-white text-3xl md:text-4xl font-serif">ROYAL MOOD</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

