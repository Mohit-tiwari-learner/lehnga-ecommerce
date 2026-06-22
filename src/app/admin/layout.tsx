"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BarChart3, 
  Package, 
  ShoppingBag, 
  Users, 
  Settings as SettingsIcon,
  CheckCircle
} from "lucide-react";

// Mock initial data definitions
const INITIAL_PRODUCTS = [
  { id: "l1", title: "Aveline Magenta Lehenga", sku: "NKL-LH-001", price: 22895, stock: 12, category: "Lehengas", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200&auto=format&fit=crop" },
  { id: "s1", title: "Kanchipuram Pure Silk Saree", sku: "NKL-SR-005", price: 34500, stock: 8, category: "Sarees", image: "https://images.unsplash.com/photo-1610189012371-331da2912423?q=80&w=200&auto=format&fit=crop" },
  { id: "k1", title: "Embroidered Anarkali Kurta Set", sku: "NKL-KT-012", price: 12999, stock: 24, category: "Kurta Sets", image: "https://images.unsplash.com/photo-1621578330541-b8abf10cd832?q=80&w=200&auto=format&fit=crop" },
  { id: "j1", title: "Kundan Choker Necklace Set", sku: "NKL-JW-044", price: 18500, stock: 5, category: "Jewellery", image: "https://images.unsplash.com/photo-1599643478524-fb66f724d1ea?q=80&w=200&auto=format&fit=crop" }
];

const INITIAL_ORDERS = [
  { id: "ORD-9481", customer: "Priya Sharma", email: "priya@gmail.com", date: "June 20, 2026", total: 22895, method: "UPI", status: "Pending" },
  { id: "ORD-9480", customer: "Aarchi Patel", email: "aarchi.p@yahoo.com", date: "June 19, 2026", total: 34500, method: "Card", status: "Shipped" },
  { id: "ORD-9479", customer: "Kritika Sinha", email: "kritika@outlook.com", date: "June 18, 2026", total: 12999, method: "COD", status: "Delivered" },
  { id: "ORD-9478", customer: "Neha Verma", email: "neha.v@gmail.com", date: "June 18, 2026", total: 18500, method: "UPI", status: "Delivered" }
];

const CUSTOMERS = [
  { id: "CST-001", name: "Priya Sharma", email: "priya@gmail.com", orders: 3, spent: 48995, city: "Mumbai" },
  { id: "CST-002", name: "Aarchi Patel", email: "aarchi.p@yahoo.com", orders: 5, spent: 112500, city: "Ahmedabad" },
  { id: "CST-003", name: "Kritika Sinha", email: "kritika@outlook.com", orders: 2, spent: 25499, city: "Bangalore" },
  { id: "CST-004", name: "Neha Verma", email: "neha.v@gmail.com", orders: 1, spent: 18500, city: "Delhi" }
];

interface AdminContextType {
  products: typeof INITIAL_PRODUCTS;
  setProducts: React.Dispatch<React.SetStateAction<typeof INITIAL_PRODUCTS>>;
  orders: typeof INITIAL_ORDERS;
  setOrders: React.Dispatch<React.SetStateAction<typeof INITIAL_ORDERS>>;
  customers: typeof CUSTOMERS;
  toastMessage: string;
  triggerToast: (msg: string) => void;
  storeName: string;
  setStoreName: (val: string) => void;
  contactEmail: string;
  setContactEmail: (val: string) => void;
  currency: string;
  setCurrency: (val: string) => void;
  freeShippingThreshold: string;
  setFreeShippingThreshold: (val: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdmin must be used within an AdminProvider");
  return context;
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // State definitions shared across sub-routes
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [toastMessage, setToastMessage] = useState("");
  
  // Store Settings
  const [storeName, setStoreName] = useState("Nakhrali Store");
  const [contactEmail, setContactEmail] = useState("support@nakhrali.com");
  const [currency, setCurrency] = useState("INR (₹)");
  const [freeShippingThreshold, setFreeShippingThreshold] = useState("1500");

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const navItems = [
    { name: "Overview", path: "/admin", icon: BarChart3 },
    { name: "Products", path: "/admin/products", icon: Package },
    { name: "Orders", path: "/admin/orders", icon: ShoppingBag },
    { name: "Customers", path: "/admin/customers", icon: Users },
    { name: "Settings", path: "/admin/settings", icon: SettingsIcon },
  ];

  return (
    <AdminContext.Provider value={{
      products,
      setProducts,
      orders,
      setOrders,
      customers: CUSTOMERS,
      toastMessage,
      triggerToast,
      storeName,
      setStoreName,
      contactEmail,
      setContactEmail,
      currency,
      setCurrency,
      freeShippingThreshold,
      setFreeShippingThreshold
    }}>
      <div className="w-full bg-[#f9f9f9] min-h-screen py-10 px-4 lg:px-8 font-sans">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed bottom-8 right-8 bg-[#111111] text-white px-6 py-4 rounded shadow-2xl z-50 flex items-center gap-2 border border-nakhrali-gold animate-in fade-in slide-in-from-bottom-5 duration-300">
            <CheckCircle size={18} className="text-nakhrali-gold" />
            <span className="text-sm font-medium tracking-wide">{toastMessage}</span>
          </div>
        )}

        <div className="max-w-[1440px] mx-auto">
          
          {/* Header Title Bar */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-serif text-[#111111] tracking-wide">Administration Console</h1>
              <p className="text-gray-500 text-sm mt-1 font-light">Monitor sales, curate products, and coordinate client deliveries.</p>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded border border-gray-200 text-xs text-gray-500 shadow-sm self-start">
              <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-ping"></span>
              <span>Live Server Status: Active</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-64 bg-white rounded border border-gray-200 p-4 shrink-0 shadow-sm flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 md:gap-4 scrollbar-none">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.path;
                return (
                  <Link 
                    key={item.name}
                    href={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all tracking-wider shrink-0 w-max lg:w-full
                      ${isActive ? "bg-[#111111] text-white shadow" : "text-gray-600 hover:bg-gray-50 hover:text-black"}`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </aside>

            {/* Main Workspace Viewport */}
            <main className="flex-1 bg-white border border-gray-200 rounded p-6 md:p-8 shadow-sm min-w-0">
              {children}
            </main>

          </div>

        </div>

      </div>
    </AdminContext.Provider>
  );
}

