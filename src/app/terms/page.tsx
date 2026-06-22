import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8 font-sans">
      <div className="max-w-[800px] mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">Terms of Service</span>
        </div>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif text-[#111111] tracking-wide mb-6">Terms of Service</h1>
        </div>
        <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed">
          <p>Welcome to Rajgharana. By accessing or using our website, you agree to be bound by the following Terms of Service. Please read them carefully.</p>
          
          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">1. General Conditions</h3>
          <p>We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks.</p>

          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">2. Products and Services</h3>
          <p>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products.</p>

          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">3. Accuracy of Billing and Account Information</h3>
          <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.</p>
        </div>
      </div>
    </div>
  );
}
