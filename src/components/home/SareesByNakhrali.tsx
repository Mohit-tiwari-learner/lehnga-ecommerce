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
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop"
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
                src="https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=800&auto=format&fit=crop"
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

