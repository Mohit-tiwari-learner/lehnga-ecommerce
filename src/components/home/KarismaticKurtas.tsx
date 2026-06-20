import Image from "next/image";
import Link from "next/link";

export function KarismaticKurtas() {
  return (
    <div className="w-full bg-white py-10 lg:py-16 px-4 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <Link href="/collections/kurtas" className="group relative block w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl">
          
          <div className="absolute inset-0 flex h-full w-full">
            {/* Left Image (Yellow Outfit) */}
            <div className="relative h-full flex-1 transition-transform duration-700 group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop"
                alt="Yellow Kurta"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Middle Image (Beige Outfit) */}
            <div className="relative h-full flex-1 transition-transform duration-700 group-hover:scale-105 hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1610030469983-98e550d6153c?q=80&w=600&auto=format&fit=crop"
                alt="Beige Kurta"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right Image (Blue Outfit) */}
            <div className="relative h-full flex-1 transition-transform duration-700 group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1584226786801-7662c1613eb5?q=80&w=600&auto=format&fit=crop"
                alt="Blue Kurta"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
          
          {/* Centered Text Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/30 p-8 md:p-12 rounded-2xl max-w-lg">
              <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif">
                <span className="block font-sans text-sm md:text-base tracking-[0.3em] uppercase font-light mb-4">Explore</span>
                Karismatic<br/>
                <span className="italic mt-2">Kurtas</span>
              </h3>
              <div className="mt-8 inline-block border-b border-white text-white font-sans text-xs tracking-widest uppercase pb-1 hover:text-nakhrali-gold hover:border-nakhrali-gold transition-colors">
                Shop Collection
              </div>
            </div>
          </div>

        </Link>
      </div>
    </div>
  );
}
