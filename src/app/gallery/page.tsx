import Link from "next/link";
import Image from "next/image";

const GALLERY_IMAGES = [
  "/extracted_photos/launching-navratri-special-georgettet-cotton-fancy-fabric-lehenga-choli-reseller-in-surat-582/page-0.png",
  "/extracted_photos/launching-navratri-special-soft-and-pure-cotton-fabric-lehenga-choli-wholesale-in-surat-581/page-0.png",
  "/extracted_photos/navratri-new-and-best-collection-tasar-silk-fancy-and-beautiful-fabric-lehenga-choli-reseller-in-surat-1734/page-0.png",
  "/extracted_photos/navratri-special-charmful-and-dazziing-faux-georgette-fancy-fabric-lehenga-choli-collections-wholesale-in-surat-lw-7134/page-0.png",
  "/extracted_photos/navy-stunning-blue-beautiful-colour-in-soft-georgette-fabric-lehenga-choli-wholesale-in-surat-5067-blue/page-0.png",
  "/extracted_photos/new-launch-soft-and-pure-tissue-silk-fabric-with-beautiful-embroidery-work-on-lehenga-choli-supplier-in-surat-haji/page-0.png",
  "/extracted_photos/new-navratri-collection-made-of-soft-chinon-fabric-ready-to-wear-your-perfect-garba-look-awaits-wholesale-in-surat-1768/page-0.png",
  "/extracted_photos/olive-green-elegant-colour-georgette-soft-fancy-fabric-lehenga-choli-wholesale-in-surat-5067-olive/page-0.png",
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

