import Image from "next/image";
import Link from "next/link";

export function HaldiMehendiEdit() {
  return (
    <div className="w-full bg-[#f9f8f6] py-10 lg:py-16 px-4 lg:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-4 lg:gap-8">
        
        {/* Left Panel - Purple Dress */}
        <Link href="/collections/haldi-mehendi" className="relative group flex-1 aspect-[3/4] md:aspect-[4/5] overflow-hidden">
          <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
            <Image
              src="https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=800&auto=format&fit=crop"
              alt="Purple Embroidered Dress"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
        </Link>

        {/* Right Panel - Yellow Lehenga with Text Overlay */}
        <Link href="/collections/haldi-mehendi" className="relative group flex-1 aspect-[3/4] md:aspect-[4/5] overflow-hidden">
          <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
            <Image
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop"
              alt="Yellow Pink Lehenga"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif drop-shadow-lg flex flex-col items-center gap-2">
              <span className="font-sans text-xl md:text-2xl tracking-[0.2em] uppercase font-light">Haldi</span>
              <span className="italic">Mehendi</span>
              <span className="font-sans text-xl md:text-2xl tracking-[0.2em] uppercase font-light mt-2">Edit</span>
            </h2>
          </div>
        </Link>

      </div>
    </div>
  );
}
