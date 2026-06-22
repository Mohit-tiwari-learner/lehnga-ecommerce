"use client";

import { useAdmin } from "@/app/admin/layout";
import { Building2, IndianRupee, PackageOpen, TrendingUp, AlertCircle, Store } from "lucide-react";
import Link from "next/link";

export default function ERPDashboardPage() {
  const { shops, inventories, products, inventoryItems } = useAdmin();

  // Aggregate Metrics
  const totalShopRevenue = shops.reduce((sum, shop) => sum + shop.todayRevenue, 0);
  const totalShopOrders = shops.reduce((sum, shop) => sum + shop.todayOrders, 0);
  const targetRevenue = shops.reduce((sum, shop) => sum + shop.target, 0);

  // Calculate Total Inventory Value
  let totalInventoryValue = 0;
  let totalItemsInStock = 0;
  
  inventoryItems.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    if (product) {
      let stockCount = 0;
      Object.values(item.allocations).forEach(count => stockCount += count);
      totalItemsInStock += stockCount;
      totalInventoryValue += (stockCount * product.price);
    }
  });

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif text-[#111111]">Enterprise Resource Planning</h2>
        <p className="text-sm text-gray-500 mt-1">Global overview of all retail shops and warehouse operations.</p>
      </div>

      {/* Aggregate KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-6 rounded border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Total Network Revenue</p>
              <h3 className="text-2xl font-semibold text-[#111111]">₹{totalShopRevenue.toLocaleString("en-IN")}</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <IndianRupee size={18} />
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${Math.min((totalShopRevenue/targetRevenue)*100, 100)}%`}}></div>
          </div>
          <p className="text-xs text-gray-500">{((totalShopRevenue/targetRevenue)*100).toFixed(1)}% of daily target</p>
        </div>

        <div className="p-6 rounded border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Global Stock Value</p>
              <h3 className="text-2xl font-semibold text-[#111111]">₹{totalInventoryValue.toLocaleString("en-IN")}</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <TrendingUp size={18} />
            </div>
          </div>
          <p className="text-xs text-gray-500">Across {totalItemsInStock} total items in network</p>
        </div>

        <div className="p-6 rounded border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Active Locations</p>
              <h3 className="text-2xl font-semibold text-[#111111]">{shops.length + inventories.length}</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
              <Building2 size={18} />
            </div>
          </div>
          <p className="text-xs text-gray-500">{shops.length} Retail Shops • {inventories.length} Warehouses</p>
        </div>

        <div className="p-6 rounded border border-red-200 bg-red-50 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs text-red-600 font-medium uppercase tracking-wider mb-1">Network Alerts</p>
              <h3 className="text-2xl font-semibold text-red-700">2</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <AlertCircle size={18} />
            </div>
          </div>
          <p className="text-xs text-red-600">Low stock detected in 2 shop locations.</p>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shops Glance */}
        <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-sm">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-2 text-[#111111]">
              <Store size={18} />
              <h3 className="font-semibold">Retail Performance</h3>
            </div>
            <Link href="/admin/erp/shops" className="text-xs font-medium text-rajgharana-gold hover:underline">View All Shops</Link>
          </div>
          <div className="p-4 flex flex-col gap-4">
            {shops.map(shop => (
              <div key={shop.id} className="flex items-center justify-between p-3 border border-gray-100 rounded bg-gray-50/50">
                <div>
                  <p className="font-medium text-sm text-[#111111]">{shop.name}</p>
                  <p className="text-xs text-gray-500">{shop.todayOrders} Orders Today</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#111111]">₹{shop.todayRevenue.toLocaleString("en-IN")}</p>
                  <p className="text-xs text-gray-500">{((shop.todayRevenue/shop.target)*100).toFixed(0)}% of Goal</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warehouses Glance */}
        <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-sm">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-2 text-[#111111]">
              <PackageOpen size={18} />
              <h3 className="font-semibold">Warehouse Capacity</h3>
            </div>
            <Link href="/admin/erp/inventory" className="text-xs font-medium text-rajgharana-gold hover:underline">Manage Inventory</Link>
          </div>
          <div className="p-4 flex flex-col gap-4">
            {inventories.map(inv => {
              const capacityPercent = (inv.currentLoad / inv.capacity) * 100;
              return (
                <div key={inv.id} className="flex flex-col gap-2 p-3 border border-gray-100 rounded bg-gray-50/50">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm text-[#111111]">{inv.name}</p>
                    <p className="text-xs text-gray-500">{capacityPercent.toFixed(1)}% Full</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full ${capacityPercent > 80 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: `${capacityPercent}%`}}></div>
                  </div>
                  <p className="text-xs text-gray-400 text-right">{inv.currentLoad} / {inv.capacity} Units</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
