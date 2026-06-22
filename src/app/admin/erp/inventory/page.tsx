"use client";

import { useAdmin } from "@/app/admin/layout";
import { PackageOpen, MapPin, User, ArrowRightLeft, Search } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function InventoryManagementPage() {
  const { inventories, shops, products, inventoryItems, setInventoryItems } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif text-[#111111]">Inventory Locations</h2>
          <p className="text-sm text-gray-500 mt-1">Manage warehouse capacity and stock allocation across the network.</p>
        </div>
        <button className="bg-[#111111] text-white px-4 py-2 rounded text-sm font-medium hover:bg-black transition-colors flex items-center gap-2">
          <ArrowRightLeft size={16} />
          Transfer Stock
        </button>
      </div>

      {/* Warehouses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inventories.map(inv => {
          const capacityPercent = (inv.currentLoad / inv.capacity) * 100;
          return (
            <div key={inv.id} className="bg-white rounded border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                    <PackageOpen size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111]">{inv.name}</h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><MapPin size={12} /> {inv.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <User size={16} className="text-gray-400" />
                    <span>Manager</span>
                  </div>
                  <span className="font-medium text-[#111111]">{inv.manager}</span>
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded border border-gray-100 flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Storage Capacity</span>
                  <span className="font-medium text-[#111111]">{inv.currentLoad} / {inv.capacity}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${capacityPercent > 80 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: `${capacityPercent}%`}}></div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Stock Allocation Table */}
      <div className="bg-white rounded border border-gray-200 shadow-sm flex flex-col">
        
        <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50 rounded-t">
          <h3 className="font-semibold text-[#111111]">Global Stock Allocation</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search SKU or Product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-200 rounded text-sm w-full md:w-64 focus:outline-none focus:border-nakhrali-gold"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200 bg-white text-xs uppercase tracking-wider text-gray-500">
                <th className="px-4 py-3 font-medium">Product</th>
                <th className="px-4 py-3 font-medium">Total</th>
                {inventories.map(inv => (
                  <th key={inv.id} className="px-4 py-3 font-medium text-blue-600 bg-blue-50/30 border-l border-gray-100">{inv.name}</th>
                ))}
                {shops.map(shop => (
                  <th key={shop.id} className="px-4 py-3 font-medium text-purple-600 bg-purple-50/30 border-l border-gray-100">{shop.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredProducts.map(product => {
                const itemAllocation = inventoryItems.find(i => i.productId === product.id);
                if (!itemAllocation) return null;

                // Calculate real total from allocations rather than product.stock
                let totalStock = 0;
                Object.values(itemAllocation.allocations).forEach(v => totalStock += v);

                return (
                  <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded overflow-hidden bg-gray-100 shrink-0">
                          <Image src={product.image} alt={product.title} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-[#111111] line-clamp-1">{product.title}</span>
                          <span className="text-xs text-gray-500">{product.sku}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold px-2 py-1 bg-gray-100 rounded text-gray-700">{totalStock}</span>
                    </td>
                    {inventories.map(inv => (
                      <td key={inv.id} className="px-4 py-3 border-l border-gray-100 bg-blue-50/10">
                        {itemAllocation.allocations[inv.id] || 0}
                      </td>
                    ))}
                    {shops.map(shop => (
                      <td key={shop.id} className="px-4 py-3 border-l border-gray-100 bg-purple-50/10">
                        {itemAllocation.allocations[shop.id] || 0}
                      </td>
                    ))}
                  </tr>
                );
              })}
              
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-4 py-8 text-center text-gray-500">
                    No products found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
