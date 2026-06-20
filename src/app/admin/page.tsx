"use client";

import { useAdmin } from "./layout";
import { 
  BarChart3, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Truck, 
  DollarSign
} from "lucide-react";

export default function OverviewPage() {
  const { products, orders, customers } = useAdmin();

  // Dynamically calculate dashboard values based on global states
  const totalRevenue = orders.reduce((sum, o) => o.status !== "Cancelled" ? sum + o.total : sum, 0);
  const totalCustomers = customers.length;
  const totalOrders = orders.length;

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      <h2 className="text-xl font-serif text-[#111111] pb-4 border-b border-gray-150">Store Performance Overview</h2>
      
      {/* Analytics Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 p-6 rounded shadow-sm flex flex-col gap-2 relative overflow-hidden group hover:border-nakhrali-gold transition-colors">
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Gross Revenue</span>
          <span className="text-3xl font-semibold text-[#111111]">₹ {totalRevenue.toLocaleString("en-IN")}</span>
          <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium mt-1">
            <TrendingUp size={14} />
            <span>+14.2% from last month</span>
          </div>
          <div className="absolute right-4 top-4 p-2 bg-emerald-50 rounded text-emerald-600"><DollarSign size={18} /></div>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded shadow-sm flex flex-col gap-2 relative overflow-hidden group hover:border-nakhrali-gold transition-colors">
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Orders Received</span>
          <span className="text-3xl font-semibold text-[#111111]">{totalOrders}</span>
          <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium mt-1">
            <TrendingUp size={14} />
            <span>+8.4% from last month</span>
          </div>
          <div className="absolute right-4 top-4 p-2 bg-blue-50 rounded text-blue-600"><ShoppingBag size={18} /></div>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded shadow-sm flex flex-col gap-2 relative overflow-hidden group hover:border-nakhrali-gold transition-colors">
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Conversion Rate</span>
          <span className="text-3xl font-semibold text-[#111111]">3.42%</span>
          <div className="flex items-center gap-1.5 text-rose-600 text-xs font-medium mt-1">
            <TrendingUp size={14} className="rotate-180" />
            <span>-0.8% from last week</span>
          </div>
          <div className="absolute right-4 top-4 p-2 bg-rose-50 rounded text-rose-600"><TrendingUp size={18} className="rotate-180" /></div>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded shadow-sm flex flex-col gap-2 relative overflow-hidden group hover:border-nakhrali-gold transition-colors">
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Active Customers</span>
          <span className="text-3xl font-semibold text-[#111111]">{totalCustomers}</span>
          <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium mt-1">
            <TrendingUp size={14} />
            <span>+24% total growth</span>
          </div>
          <div className="absolute right-4 top-4 p-2 bg-purple-50 rounded text-purple-600"><Users size={18} /></div>
        </div>
      </div>

      {/* Sales Chart Mock Visualization */}
      <div className="border border-gray-200 p-6 rounded shadow-sm bg-white">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-lg">Sales Analysis</h3>
          <select className="border border-gray-200 text-xs p-2 rounded bg-white font-sans font-medium text-gray-500">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
        </div>
        
        {/* Clean SVG Line Graph */}
        <div className="w-full h-64 relative mt-4">
          <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B89F6B" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#B89F6B" stopOpacity="0.0"/>
              </linearGradient>
            </defs>
            {/* Grid Lines */}
            <line x1="0" y1="50" x2="800" y2="50" stroke="#f0f0f0" strokeWidth="1" />
            <line x1="0" y1="100" x2="800" y2="100" stroke="#f0f0f0" strokeWidth="1" />
            <line x1="0" y1="150" x2="800" y2="150" stroke="#f0f0f0" strokeWidth="1" />
            
            {/* Chart Area Fill */}
            <path d="M 0 170 Q 150 80 300 130 T 600 40 T 800 90 L 800 200 L 0 200 Z" fill="url(#chartGradient)" />
            {/* Chart Stroke Line */}
            <path d="M 0 170 Q 150 80 300 130 T 600 40 T 800 90" fill="none" stroke="#B89F6B" strokeWidth="3" />
            
            {/* Chart Dots */}
            <circle cx="150" cy="115" r="5" fill="#111" stroke="#B89F6B" strokeWidth="2" />
            <circle cx="450" cy="85" r="5" fill="#111" stroke="#B89F6B" strokeWidth="2" />
            <circle cx="600" cy="40" r="5" fill="#111" stroke="#B89F6B" strokeWidth="2" />
          </svg>
          
          {/* Graph Labels */}
          <div className="flex justify-between text-[10px] font-sans font-semibold text-gray-400 mt-2 uppercase tracking-wider px-1">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>

      {/* Recent Activities Feed */}
      <div className="border border-gray-200 p-6 rounded shadow-sm bg-white">
        <h3 className="font-serif text-lg mb-6">Recent Activity Feed</h3>
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-emerald-50 text-emerald-600 shrink-0"><CheckCircle size={16} /></div>
            <div className="flex-1 text-sm font-sans">
              <p className="text-gray-800"><span className="font-semibold">Order ORD-9481</span> was placed by <span className="font-medium text-gray-900">Priya Sharma</span> (₹ 22,895)</p>
              <span className="text-xs text-gray-400 block mt-1 font-light">12 minutes ago</span>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-blue-50 text-blue-600 shrink-0"><Truck size={16} /></div>
            <div className="flex-1 text-sm font-sans">
              <p className="text-gray-800"><span className="font-semibold">Order ORD-9480</span> status was updated to <span className="font-medium text-gray-900">Shipped</span></p>
              <span className="text-xs text-gray-400 block mt-1 font-light">2 hours ago</span>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-purple-50 text-purple-600 shrink-0"><Users size={16} /></div>
            <div className="flex-1 text-sm font-sans">
              <p className="text-gray-800"><span className="font-semibold">New Customer registered:</span> <span className="font-medium text-gray-900">Neha Verma</span> (Delhi)</p>
              <span className="text-xs text-gray-400 block mt-1 font-light">4 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
