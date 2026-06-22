import Link from "next/link";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    date: "June 12, 2026",
    rating: 5,
    title: "Absolutely Stunning Lehenga!",
    content: "I wore the Aveline Magenta Lehenga for my sister's wedding and received endless compliments. The sequin detailing is exquisite, and the fit was absolutely perfect right out of the box. The customer service team was very helpful with sizing questions.",
    product: "Aveline Magenta Lehenga"
  },
  {
    id: 2,
    name: "Anjali Desai",
    date: "May 20, 2026",
    rating: 5,
    title: "Beautiful Craftsmanship",
    content: "The Indo-Western corset lehenga I ordered exceeded my expectations. The fabric quality is premium, and the cut dana work catches the light beautifully. Fast shipping and gorgeous packaging too!",
    product: "Nirel Green Corset Lehenga"
  },
  {
    id: 3,
    name: "Rhea Patel",
    date: "April 05, 2026",
    rating: 4,
    title: "Elegant and Comfortable",
    content: "I love my Banarasi Saree from Rajgharana. The weaving is authentic and lightweight enough to wear for long hours. Only giving 4 stars because the delivery took a day longer than expected, but the product is 10/10.",
    product: "Banarasi Georgette Saree"
  },
  {
    id: 4,
    name: "Simran Kaur",
    date: "March 18, 2026",
    rating: 5,
    title: "Perfect Bridal Outfit",
    content: "Rajgharana made my dream bridal lehenga a reality. The zardozi work is so intricate and traditional, yet the silhouette feels very modern. Thank you for making my big day so special!",
    product: "Custom Bridal Lehenga"
  },
  {
    id: 5,
    name: "Meera Reddy",
    date: "February 28, 2026",
    rating: 5,
    title: "Gorgeous Jewellery Set",
    content: "The Kundan Choker set I bought matched perfectly with my reception outfit. It looks very authentic and high-end. Have recommended this site to all my friends.",
    product: "Kundan Choker Necklace Set"
  },
  {
    id: 6,
    name: "Kritika Singh",
    date: "January 15, 2026",
    rating: 5,
    title: "My Go-To for Festive Wear",
    content: "This is my third purchase from Rajgharana and they never disappoint. The Anarkali suit fits like a dream and the colors are exactly as shown in the pictures.",
    product: "Embroidered Anarkali Kurta Set"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">Customer Reviews</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#111111] tracking-wide mb-6">
            She Wore Rajgharana.
          </h1>
          <p className="text-gray-500 font-sans max-w-lg mx-auto">
            Read what our beautiful community has to say about their Rajgharana outfits.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="flex flex-col items-center justify-center mb-16 pb-16 border-b border-gray-100">
          <div className="text-5xl font-serif text-[#111111] mb-2">4.9/5</div>
          <div className="flex items-center gap-1 text-rajgharana-gold mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-sm font-sans text-gray-500 tracking-wider">BASED ON 1,240+ REVIEWS</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-gray-50 p-8 font-sans">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-rajgharana-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} stroke={i < review.rating ? "currentColor" : "#cbd5e1"} />
                  ))}
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              <h3 className="font-semibold text-[#111111] mb-2">{review.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{review.content}"
              </p>
              <div className="flex flex-col gap-1 border-t border-gray-200 pt-4 mt-auto">
                <span className="font-medium text-xs tracking-wider uppercase text-[#111111]">{review.name}</span>
                <span className="text-xs text-gray-500">Purchased: <Link href="#" className="underline hover:text-rajgharana-gold">{review.product}</Link></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
