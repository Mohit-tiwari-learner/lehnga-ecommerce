import Link from "next/link";

export default function ReturnsPolicyPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8 font-sans">
      <div className="max-w-[800px] mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">Returns & Exchanges</span>
        </div>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif text-[#111111] tracking-wide mb-6">Returns & Exchanges</h1>
        </div>
        <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed">
          <p>We want you to love your Rajgharana purchase. If for any reason you are not completely satisfied, we offer a straightforward return and exchange policy.</p>
          
          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">7-Day Return Policy</h3>
          <p>We accept returns and exchanges within 7 days of the delivery date. To be eligible for a return, the item must be:</p>
          <ul>
            <li>Unused, unworn, unwashed, and undamaged.</li>
            <li>In its original packaging with all tags, labels, and hygiene seals intact.</li>
          </ul>

          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">Non-Returnable Items</h3>
          <p>The following items cannot be returned or exchanged:</p>
          <ul>
            <li>Custom-made or made-to-measure outfits.</li>
            <li>Bridal lehengas and heavy bridal gowns.</li>
            <li>Jewellery and accessories (for hygiene reasons).</li>
            <li>Items purchased during a sale or with promotional discount codes.</li>
          </ul>

          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">How to Initiate a Return</h3>
          <p>Please email our support team at <strong>care@rajgharana.com</strong> within 48 hours of receiving your order. Include your order number and images of the product if there is a defect. Our team will guide you through the return process.</p>
          
          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">Refunds</h3>
          <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. Approved refunds will be processed to the original method of payment within 5-7 business days.</p>
        </div>
      </div>
    </div>
  );
}
