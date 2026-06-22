import Link from "next/link";

export default function ShippingPolicyPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8 font-sans">
      <div className="max-w-[800px] mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">Shipping Policy</span>
        </div>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif text-[#111111] tracking-wide mb-6">Shipping Policy</h1>
        </div>
        <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed">
          <p>At Rajgharana, we strive to deliver your beautiful ethnic wear safely and as quickly as possible. Please read our shipping policy carefully.</p>
          
          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">Domestic Shipping (India)</h3>
          <ul>
            <li>We offer <strong>FREE SHIPPING</strong> on all domestic orders above ₹1500.</li>
            <li>For orders below ₹1500, a standard shipping fee of ₹150 will be applied at checkout.</li>
            <li>Ready-to-ship items are typically dispatched within 48 hours and delivered within 3-5 business days.</li>
            <li>Custom orders, made-to-measure items, and heavy bridal wear may take 14-21 business days for dispatch.</li>
          </ul>

          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">International Shipping</h3>
          <ul>
            <li>We ship to most countries worldwide. International shipping charges are calculated at checkout based on the destination and package weight.</li>
            <li>International orders typically take 7-15 business days to arrive after dispatch.</li>
            <li><strong>Customs and Duties:</strong> Please note that any customs duties, taxes, or import fees levied by the destination country are the sole responsibility of the customer.</li>
          </ul>

          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">Order Tracking</h3>
          <p>Once your order is shipped, you will receive a confirmation email containing your tracking number and a link to track your package. You can also track your order directly from your Rajgharana account.</p>
        </div>
      </div>
    </div>
  );
}
