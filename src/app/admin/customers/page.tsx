"use client";

import { useAdmin } from "../layout";

export default function CustomersPage() {
  const { customers } = useAdmin();

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <div className="border-b border-gray-150 pb-4">
        <h2 className="text-xl font-serif text-[#111111]">Registered Patrons</h2>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded shadow-sm">
        <table className="w-full font-sans text-sm text-left border-collapse bg-white">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">Customer ID</th>
              <th className="px-6 py-4 font-semibold">Name & Email</th>
              <th className="px-6 py-4 font-semibold">Location</th>
              <th className="px-6 py-4 font-semibold">Orders Count</th>
              <th className="px-6 py-4 font-semibold">Lifetime Spend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-150">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-mono text-xs font-semibold text-gray-400">{c.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-nakhrali-gold/10 text-nakhrali-gold flex items-center justify-center font-bold text-sm shrink-0 animate-pulse">
                      {c.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{c.name}</span>
                      <span className="text-xs text-gray-400 font-light">{c.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500 font-medium">{c.city}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">{c.orders} orders</td>
                <td className="px-6 py-4 font-semibold text-nakhrali-gold">₹ {c.spent.toLocaleString("en-IN")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
