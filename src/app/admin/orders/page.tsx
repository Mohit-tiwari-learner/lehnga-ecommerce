"use client";

import { useState } from "react";
import { useAdmin } from "../layout";
import { Search, Clock, Truck, CheckCircle } from "lucide-react";

export default function OrdersPage() {
  const { orders, setOrders, triggerToast } = useAdmin();
  const [searchOrder, setSearchOrder] = useState("");

  // Update Order Status handler
  const handleUpdateOrderStatus = (orderId: string, currentStatus: string) => {
    let nextStatus = "Pending";
    if (currentStatus === "Pending") nextStatus = "Shipped";
    else if (currentStatus === "Shipped") nextStatus = "Delivered";
    else if (currentStatus === "Delivered") nextStatus = "Pending";

    setOrders(orders.map(o => o.id === orderId ? { ...o, status: nextStatus } : o));
    triggerToast(`Order ${orderId} updated to ${nextStatus}`);
  };

  const filteredOrders = orders.filter(o => 
    o.id.toLowerCase().includes(searchOrder.toLowerCase()) || 
    o.customer.toLowerCase().includes(searchOrder.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <div className="border-b border-gray-150 pb-4">
        <h2 className="text-xl font-serif text-[#111111]">Order Fulfillment Pipeline</h2>
      </div>

      {/* Search orders */}
      <div className="flex items-center border border-gray-200 rounded px-3 py-2.5 bg-white shadow-sm font-sans max-w-md">
        <Search size={16} className="text-gray-400 mr-2 shrink-0" />
        <input 
          type="text" 
          placeholder="Search by ID or customer..." 
          className="w-full outline-none text-sm text-gray-700 bg-transparent"
          value={searchOrder}
          onChange={(e) => setSearchOrder(e.target.value)}
        />
      </div>

      {/* Orders table */}
      <div className="overflow-x-auto border border-gray-200 rounded shadow-sm">
        <table className="w-full font-sans text-sm text-left border-collapse bg-white">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">Order ID</th>
              <th className="px-6 py-4 font-semibold">Customer</th>
              <th className="px-6 py-4 font-semibold">Date</th>
              <th className="px-6 py-4 font-semibold">Total Amount</th>
              <th className="px-6 py-4 font-semibold">Method</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-150">
            {filteredOrders.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-[#111111]">{o.id}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">{o.customer}</span>
                    <span className="text-xs text-gray-400 font-light">{o.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{o.date}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">₹ {o.total.toLocaleString("en-IN")}</td>
                <td className="px-6 py-4 text-gray-500">{o.method}</td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded flex items-center gap-1.5 w-max
                    ${o.status === "Pending" ? "bg-amber-50 text-amber-700" : ""}
                    ${o.status === "Shipped" ? "bg-blue-50 text-blue-700" : ""}
                    ${o.status === "Delivered" ? "bg-emerald-50 text-emerald-700" : ""}`}>
                    {o.status === "Pending" && <Clock size={12} />}
                    {o.status === "Shipped" && <Truck size={12} />}
                    {o.status === "Delivered" && <CheckCircle size={12} />}
                    <span>{o.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => handleUpdateOrderStatus(o.id, o.status)}
                    className="text-xs tracking-widest font-sans font-semibold uppercase hover:text-rajgharana-gold transition-colors text-gray-500 border border-gray-200 px-3 py-1.5 rounded hover:border-rajgharana-gold"
                  >
                    Fulfill Status
                  </button>
                </td>
              </tr>
            ))}
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-10 text-gray-400 font-sans font-light">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
