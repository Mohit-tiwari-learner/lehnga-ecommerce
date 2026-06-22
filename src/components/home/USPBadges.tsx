import { ShieldCheck, Globe, Scissors } from "lucide-react";

const USP_ITEMS = [
  {
    icon: <ShieldCheck size={28} className="text-rajgharana-gold" strokeWidth={1.5} />,
    title: "Safe Payment with Trusted Modes",
  },
  {
    icon: <Globe size={28} className="text-rajgharana-gold" strokeWidth={1.5} />,
    title: "Delivering Love Worldwide",
  },
  {
    icon: <Scissors size={28} className="text-rajgharana-gold" strokeWidth={1.5} />,
    title: "Personalized Styling and Fit Guidance",
  },
];

export function USPBadges() {
  return (
    <div className="w-full bg-[#f9f8f6] py-8 lg:py-12 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {USP_ITEMS.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-4 group cursor-pointer">
            <div className="w-20 h-20 rounded-full border border-rajgharana-gold flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-white shadow-sm">
              {item.icon}
            </div>
            <p className="font-serif text-[#111111] text-lg max-w-[200px] leading-snug">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
