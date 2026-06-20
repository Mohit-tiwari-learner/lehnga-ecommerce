import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BLOGS = [
  {
    id: 1,
    title: "My Daftar Fits",
    date: "12 Oct 2023",
    description: "Discover our top picks for comfortable yet stylish everyday office wear. Because looking professional doesn't mean compromising on your personal style.",
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Suit Up in Style",
    date: "28 Sep 2023",
    description: "A comprehensive guide on styling our bestselling suit sets for the upcoming festive season. Tips from our in-house stylists.",
    image: "https://images.unsplash.com/photo-1583391733958-611825512a4c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Latest Indo-fits Trends",
    date: "15 Sep 2023",
    description: "Blurring the lines between traditional and contemporary fashion. Explore how Indo-western fusion is taking over the wedding scenes.",
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "A Guide to Choosing the Perfect Blouse",
    date: "02 Sep 2023",
    description: "Necklines, sleeves, and fits. Everything you need to know before getting your next statement blouse stitched.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6153c?q=80&w=600&auto=format&fit=crop",
  },
];

export function CuratedBlogs() {
  return (
    <div className="w-full bg-white py-10 lg:py-16 px-4 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-center text-[#111111] mb-12">
          Stay informed and inspired with our curated Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BLOGS.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id} className="group flex flex-col h-full">
              {/* Blog Image */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Blog Content */}
              <div className="flex flex-col flex-1">
                <span className="text-xs text-gray-500 font-sans tracking-widest uppercase mb-2">
                  {blog.date}
                </span>
                <h3 className="text-lg font-serif text-[#111111] mb-3 group-hover:text-nakhrali-gold transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 font-sans line-clamp-3 mb-4 flex-1">
                  {blog.description}
                </p>
                
                {/* Read More Link */}
                <div className="flex items-center gap-2 text-sm font-sans font-medium text-[#111111] group-hover:text-nakhrali-gold transition-colors mt-auto">
                  Read More <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
