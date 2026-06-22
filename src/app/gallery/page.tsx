import Link from "next/link";
import Image from "next/image";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621272036047-bb0f76bbc1ad?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop",
];

export default function GalleryPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">Photo Gallery</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#111111] tracking-wide mb-6">
            Real Brides & Muses
          </h1>
          <p className="text-gray-500 font-sans max-w-lg mx-auto">
            Discover how women around the world are styling their Nakhrali ensembles.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div key={index} className="relative overflow-hidden group cursor-pointer break-inside-avoid">
              <Image 
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif tracking-widest text-sm border border-white px-4 py-2">
                  View Style
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/collections/all" className="inline-block bg-[#111111] text-white px-10 py-4 font-sans uppercase tracking-widest text-sm hover:bg-nakhrali-gold transition-colors">
            Shop The Looks
          </Link>
        </div>
        
      </div>
    </div>
  );
}

