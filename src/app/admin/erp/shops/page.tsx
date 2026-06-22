"use client";

import { useAdmin } from "@/app/admin/layout";
import { Store, MapPin, User, Activity, Edit3 } from "lucide-react";

export default function ShopsManagementPage() {
  const { shops } = useAdmin();

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif text-[#111111]">Retail Shops</h2>
          <p className="text-sm text-gray-500 mt-1">Manage physical store locations, managers, and performance.</p>
        </div>
        <button className="bg-[#111111] text-white px-4 py-2 rounded text-sm font-medium hover:bg-black transition-colors">
          + Add New Shop
        </button>
      </div>

      {/* Shops Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {shops.map(shop => {
          const progress = (shop.todayRevenue / shop.target) * 100;
          return (
            <div key={shop.id} className="bg-white rounded border border-gray-200 overflow-hidden shadow-sm flex flex-col hover:border-gray-300 transition-colors">
              {/* Shop Header */}
              <div className="p-5 border-b border-gray-100 bg-gray-50 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-rajgharana-gold/10 text-rajgharana-gold flex items-center justify-center">
                    <Store size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111]">{shop.name}</h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><MapPin size={12} /> {shop.location}</p>
                  </div>
                </div>
                <button className="p-1.5 text-gray-400 hover:text-[#111111] hover:bg-gray-100 rounded transition-colors">
                  <Edit3 size={16} />
                </button>
              </div>

              {/* Shop Details */}
              <div className="p-5 flex-1 flex flex-col gap-6">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User size={16} className="text-gray-400" />
                    <span>Manager</span>
                  </div>
                  <span className="font-medium text-sm text-[#111111]">{shop.manager}</span>
                </div>

                <div className="h-px w-full bg-gray-100" />

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Activity size={16} className="text-gray-400" />
                      <span>Today's Revenue</span>
                    </div>
                    <span className="font-semibold text-[#111111]">₹{shop.todayRevenue.toLocaleString("en-IN")}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
                    <div className={`h-2 rounded-full ${progress >= 100 ? 'bg-green-500' : 'bg-rajgharana-gold'}`} style={{ width: `${Math.min(progress, 100)}%`}}></div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{progress.toFixed(0)}% of Target</span>
                    <span>Target: ₹{shop.target.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 pl-6">Orders Today</span>
                    <span className="font-medium text-[#111111]">{shop.todayOrders}</span>
                  </div>
                </div>

              </div>

              {/* Action Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <button className="w-full py-2 bg-white border border-gray-200 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                  View Full Report
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
