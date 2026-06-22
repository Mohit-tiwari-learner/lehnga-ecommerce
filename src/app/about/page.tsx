import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">About Us</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#111111] tracking-wide mb-6">
            Our Story
          </h1>
          <div className="w-16 h-[1px] bg-nakhrali-gold mx-auto"></div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[21/9] md:aspect-[21/9] mb-16">
          <Image 
            src="/extracted_photos/beautiful-and-elegant-teal-green-colour-georgette-fabric-lehenga-choli-reseller-in-surat-5067-green/page-0.png"
            alt="Nakhrali Heritage"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center font-sans">
          <h2 className="text-2xl font-serif text-[#111111] mb-6">
            Where Tradition Meets Contemporary Elegance
          </h2>
          
          <div className="space-y-6 text-gray-600 leading-relaxed text-[15px]">
            <p>
              Welcome to Nakhrali, where tradition meets contemporary elegance. We are dedicated to bringing you the finest collection of women's ethnic fashion, crafted with meticulous attention to detail and a deep appreciation for India's rich textile heritage. Our designs celebrate the spirit of the modern Indian woman who embraces her roots while stepping confidently into the future.
            </p>
            
            <p>
              From handwoven silk sarees that tell stories of generations of weavers, to chic Indo-western co-ords perfect for the festive season, our catalog is a tribute to versatility. Every piece in our collection goes through rigorous quality checks to ensure you receive not just an outfit, but a work of art.
            </p>

            <p>
              We believe that fashion should be as unique as you are. That's why we offer personalized styling assistance and fit guidance, ensuring that you find your perfect ensemble for every occasion. Join the Nakhrali family today and redefine your ethnic wardrobe with pieces that are designed to turn heads and create lasting memories.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16 text-left">
            <div>
              <h3 className="text-lg font-serif text-[#111111] mb-3">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To preserve and promote traditional Indian craftsmanship by blending it with modern silhouettes, making ethnic fashion accessible and wearable for the contemporary woman globally.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-serif text-[#111111] mb-3">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To become the world's most loved destination for premium ethnic wear, recognized for uncompromised quality, artistic designs, and a deep commitment to sustainable fashion practices.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-serif text-[#111111] mb-3">Our Promise</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We promise authentic materials, ethical sourcing, transparent pricing, and a customer experience that makes every woman feel like royalty when she wears Nakhrali.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

