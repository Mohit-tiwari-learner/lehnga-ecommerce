import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-10 pb-20 px-4 lg:px-8 font-sans">
      <div className="max-w-[800px] mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 tracking-wider justify-center">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-black">Privacy Policy</span>
        </div>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif text-[#111111] tracking-wide mb-6">Privacy Policy</h1>
        </div>
        <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed">
          <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Rajgharana.</p>
          
          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">Personal Information We Collect</h3>
          <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.</p>

          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">How Do We Use Your Personal Information?</h3>
          <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>

          <h3 className="text-xl font-serif text-[#111111] mt-8 mb-4">Data Retention</h3>
          <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
        </div>
      </div>
    </div>
  );
}
