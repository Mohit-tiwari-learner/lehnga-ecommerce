"use client";

import { useAdmin } from "../layout";
import { AlertCircle } from "lucide-react";

export default function SettingsPage() {
  const { 
    storeName, 
    setStoreName, 
    contactEmail, 
    setContactEmail, 
    currency, 
    setCurrency, 
    freeShippingThreshold, 
    setFreeShippingThreshold,
    triggerToast 
  } = useAdmin();

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    triggerToast("Store settings saved successfully!");
  };

  return (
    <form onSubmit={handleSaveSettings} className="flex flex-col gap-6 animate-in fade-in duration-300">
      <div className="border-b border-gray-150 pb-4">
        <h2 className="text-xl font-serif text-[#111111]">Store Configurations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Storefront Title</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded p-3 text-sm outline-none focus:border-nakhrali-gold bg-white"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Support Contact Email</label>
          <input 
            type="email" 
            className="border border-gray-300 rounded p-3 text-sm outline-none focus:border-nakhrali-gold bg-white"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Default Currency</label>
          <select 
            className="border border-gray-300 rounded p-3 text-sm outline-none focus:border-nakhrali-gold bg-white"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option>INR (₹)</option>
            <option>USD ($)</option>
            <option>GBP (£)</option>
            <option>EUR (€)</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Free Shipping Threshold (INR)</label>
          <input 
            type="number" 
            className="border border-gray-300 rounded p-3 text-sm outline-none focus:border-nakhrali-gold bg-white"
            value={freeShippingThreshold}
            onChange={(e) => setFreeShippingThreshold(e.target.value)}
          />
        </div>
      </div>

      <div className="border border-amber-100 bg-amber-50/50 p-4 rounded flex gap-3 mt-4 items-start font-sans">
        <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">API Sync Warning</span>
          <p className="text-xs text-amber-700 leading-relaxed font-light">Saved values are updated in the client layout cache immediately. Live database sync requires configured API gateway credentials.</p>
        </div>
      </div>

      <button 
        type="submit"
        className="bg-[#111111] hover:bg-nakhrali-gold text-white py-3 rounded font-sans tracking-widest text-xs uppercase font-semibold transition-colors mt-4 self-start px-8 shadow-md"
      >
        Save Global Configurations
      </button>
    </form>
  );
}
