import Link from "next/link";

export default function CancellationPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8 font-sans">
      <div className="max-w-[800px] mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">Cancellation Policy</span>
        </div>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif text-[#111111] tracking-wide mb-6">Cancellation Policy</h1>
        </div>
        <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed">
          <p>We understand that you may occasionally change your mind about an order. Please review our cancellation policy below.</p>
          
          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">Order Cancellation before Dispatch</h3>
          <p>If you wish to cancel your order, please contact our customer care team at <strong>care@nakhrali.com</strong> within 24 hours of placing the order. We will cancel it and initiate a full refund to your original payment method. Refunds for cancelled orders will reflect in your account within 5-7 business days.</p>

          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">Order Cancellation after Dispatch</h3>
          <p>Unfortunately, we cannot cancel orders once they have been dispatched from our warehouse. If you no longer wish to keep the product, you may follow our standard <Link href="/returns" className="text-nakhrali-gold underline">Return Policy</Link> once you receive the package.</p>

          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">Custom & Made-to-Measure Orders</h3>
          <p>Orders that involve custom measurements, stitching, or specific design alterations cannot be cancelled once the tailoring process has begun (typically within 24 hours of order placement). These items are considered final sale.</p>
        </div>
      </div>
    </div>
  );
}
