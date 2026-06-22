import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Return of the Banarasi: Styling Heritage for Modern Weddings",
    excerpt: "Discover how contemporary brides are embracing the timeless elegance of handwoven Banarasi silk lehengas and sarees for their big day.",
    date: "June 15, 2026",
    category: "Bridal Trends",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Decoding the Indo-Western Co-ord Phenomenon",
    excerpt: "Why the versatile co-ord set has become the go-to choice for pre-wedding festivities like Haldi and Mehendi.",
    date: "May 28, 2026",
    category: "Style Guide",
    image: "https://images.unsplash.com/photo-1621272036047-bb0f76bbc1ad?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Care Guide: How to Preserve Your Zari Embroidery",
    excerpt: "Expert tips on maintaining the luster and longevity of your heavy bridal and festive ethnic wear.",
    date: "April 10, 2026",
    category: "Fabric Care",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Minimalist Jewellery Pairings for Heavy Lehengas",
    excerpt: "Finding the perfect balance between your outfit and accessories for a sophisticated bridal look.",
    date: "March 22, 2026",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1599643478524-fb66f724d1ea?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">The Nakhrali Blog</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#111111] tracking-wide mb-6">
            The Journal
          </h1>
          <p className="text-gray-500 font-sans max-w-lg mx-auto">
            Stories, style guides, and inspiration from the world of contemporary ethnic fashion.
          </p>
        </div>

        {/* Featured Post (First one) */}
        {BLOG_POSTS.length > 0 && (
          <div className="mb-20 group cursor-pointer">
            <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] overflow-hidden mb-6">
              <Image 
                src={BLOG_POSTS[0].image}
                alt={BLOG_POSTS[0].title}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 text-xs font-sans tracking-widest uppercase text-gray-500 mb-4">
                <span>{BLOG_POSTS[0].category}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{BLOG_POSTS[0].date}</span>
              </div>
              <h2 className="text-3xl font-serif text-[#111111] mb-4 group-hover:text-nakhrali-gold transition-colors">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-gray-600 font-sans leading-relaxed mb-6">
                {BLOG_POSTS[0].excerpt}
              </p>
              <button className="text-sm font-sans tracking-widest uppercase border-b border-black pb-1 hover:text-nakhrali-gold hover:border-nakhrali-gold transition-colors inline-flex items-center gap-2">
                Read Article <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {BLOG_POSTS.slice(1).map(post => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-5">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 text-[10px] font-sans tracking-widest uppercase text-gray-500 mb-3">
                <span>{post.category}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-serif text-[#111111] mb-3 group-hover:text-nakhrali-gold transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <button className="text-xs font-sans tracking-widest uppercase border-b border-black pb-1 hover:text-nakhrali-gold hover:border-nakhrali-gold transition-colors">
                Read More
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

