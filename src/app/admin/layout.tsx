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
  CheckCircle,
  Building2,
  Store,
  Boxes
} from "lucide-react";

// Mock initial data definitions
const INITIAL_PRODUCTS = [
  { id: "l1", title: "Aveline Magenta Lehenga", sku: "NKL-LH-001", price: 22895, stock: 12, category: "Lehengas", image: "/extracted_photos/heavy-sparkling-and-beautiful-wine-colour-georgette-fancy-fabric-lehenga-choli-reseller-in-surat-5067-wine/page-0.png" },
  { id: "s1", title: "Kanchipuram Pure Silk Saree", sku: "NKL-SR-005", price: 34500, stock: 8, category: "Sarees", image: "/extracted_photos/launching-navratri-special-georgettet-cotton-fancy-fabric-lehenga-choli-reseller-in-surat-582/page-0.png" },
  { id: "k1", title: "Embroidered Anarkali Kurta Set", sku: "NKL-KT-012", price: 12999, stock: 24, category: "Kurta Sets", image: "/extracted_photos/launching-navratri-special-soft-and-pure-cotton-fabric-lehenga-choli-wholesale-in-surat-581/page-0.png" },
  { id: "j1", title: "Kundan Choker Necklace Set", sku: "NKL-JW-044", price: 18500, stock: 5, category: "Jewellery", image: "/extracted_photos/navratri-new-and-best-collection-tasar-silk-fancy-and-beautiful-fabric-lehenga-choli-reseller-in-surat-1734/page-0.png" }
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

// ERP Mock Data
const INITIAL_SHOPS = [
  { id: "shop_1", name: "Nakhrali Flagship", location: "Lalghati, Bhopal", manager: "Rohan Desai", todayRevenue: 145000, todayOrders: 12, target: 150000 },
  { id: "shop_2", name: "Nakhrali Boutique", location: "New Market, Bhopal", manager: "Simran Kaur", todayRevenue: 85000, todayOrders: 7, target: 100000 },
  { id: "shop_3", name: "Nakhrali Galleria", location: "MP Nagar, Bhopal", manager: "Aarav Patel", todayRevenue: 62000, todayOrders: 5, target: 80000 }
];

const INITIAL_INVENTORIES = [
  { id: "inv_1", name: "Central Warehouse", location: "Bhiwandi, Maharashtra", capacity: 10000, currentLoad: 6540, manager: "Karan Singh" },
  { id: "inv_2", name: "North Distribution Center", location: "Gurugram, Haryana", capacity: 5000, currentLoad: 3120, manager: "Vikram Yadav" }
];

interface InventoryItem {
  productId: string;
  allocations: Record<string, number>;
}

// Mapping product stock to specific locations
const INITIAL_INVENTORY_ITEMS: InventoryItem[] = [
  { productId: "l1", allocations: { "inv_1": 5, "inv_2": 3, "shop_1": 2, "shop_2": 1, "shop_3": 1 } },
  { productId: "s1", allocations: { "inv_1": 4, "inv_2": 2, "shop_1": 1, "shop_2": 1, "shop_3": 0 } },
  { productId: "k1", allocations: { "inv_1": 10, "inv_2": 8, "shop_1": 3, "shop_2": 2, "shop_3": 1 } },
  { productId: "j1", allocations: { "inv_1": 2, "inv_2": 1, "shop_1": 1, "shop_2": 1, "shop_3": 0 } }
];

interface AdminContextType {
  products: typeof INITIAL_PRODUCTS;
  setProducts: React.Dispatch<React.SetStateAction<typeof INITIAL_PRODUCTS>>;
  orders: typeof INITIAL_ORDERS;
  setOrders: React.Dispatch<React.SetStateAction<typeof INITIAL_ORDERS>>;
  customers: typeof CUSTOMERS;
  
  // ERP States
  shops: typeof INITIAL_SHOPS;
  setShops: React.Dispatch<React.SetStateAction<typeof INITIAL_SHOPS>>;
  inventories: typeof INITIAL_INVENTORIES;
  setInventories: React.Dispatch<React.SetStateAction<typeof INITIAL_INVENTORIES>>;
  inventoryItems: typeof INITIAL_INVENTORY_ITEMS;
  setInventoryItems: React.Dispatch<React.SetStateAction<typeof INITIAL_INVENTORY_ITEMS>>;

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // ERP States
  const [shops, setShops] = useState(INITIAL_SHOPS);
  const [inventories, setInventories] = useState(INITIAL_INVENTORIES);
  const [inventoryItems, setInventoryItems] = useState(INITIAL_INVENTORY_ITEMS);

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
    { name: "Overview", path: "/admin", icon: BarChart3, section: "MAIN" },
    { name: "Products", path: "/admin/products", icon: Package, section: "MAIN" },
    { name: "Orders", path: "/admin/orders", icon: ShoppingBag, section: "MAIN" },
    { name: "Customers", path: "/admin/customers", icon: Users, section: "MAIN" },
    { name: "ERP Dashboard", path: "/admin/erp", icon: Building2, section: "ERP" },
    { name: "Retail Shops", path: "/admin/erp/shops", icon: Store, section: "ERP" },
    { name: "Inventory (WH)", path: "/admin/erp/inventory", icon: Boxes, section: "ERP" },
    { name: "Settings", path: "/admin/settings", icon: SettingsIcon, section: "SYSTEM" },
  ];

  return (
    <AdminContext.Provider value={{
      products,
      setProducts,
      orders,
      setOrders,
      customers: CUSTOMERS,
      shops,
      setShops,
      inventories,
      setInventories,
      inventoryItems,
      setInventoryItems,
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
      <div className="w-full bg-[#f9f9f9] min-h-screen py-6 lg:py-10 px-4 lg:px-8 font-sans">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed bottom-8 right-8 bg-[#111111] text-white px-6 py-4 rounded shadow-2xl z-50 flex items-center gap-2 border border-nakhrali-gold animate-in fade-in slide-in-from-bottom-5 duration-300">
            <CheckCircle size={18} className="text-nakhrali-gold" />
            <span className="text-sm font-medium tracking-wide">{toastMessage}</span>
          </div>
        )}

        <div className="max-w-[1440px] mx-auto">
          
          {/* Header Title Bar */}
          <div className="mb-6 lg:mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl lg:text-3xl font-serif text-[#111111] tracking-wide">Administration</h1>
                <p className="text-gray-500 text-sm mt-1 font-light">Monitor sales, curate products, and coordinate delivery.</p>
              </div>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden p-2 border border-gray-200 rounded bg-white text-gray-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="flex flex-col gap-1.5 w-5">
                  <span className={`block h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded border border-gray-200 text-xs text-gray-500 shadow-sm self-start">
              <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-ping"></span>
              <span>Live Server Status: Active</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Navigation */}
            <aside className={`${isMobileMenuOpen ? 'flex fixed inset-y-0 left-0 z-50 w-64' : 'hidden'} lg:static lg:flex lg:w-64 bg-white border-r lg:border lg:border-gray-200 lg:rounded p-4 shrink-0 shadow-2xl lg:shadow-sm flex-col gap-6 scrollbar-none h-full lg:h-auto overflow-y-auto`}>
              
              {/* Mobile Close Button inside drawer */}
              <div className="flex lg:hidden justify-end mb-2">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded"
                >
                  <span className="text-xl leading-none">&times;</span>
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-2 px-4">Main Menu</span>
                {navItems.filter(i => i.section === "MAIN").map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;
                  return (
                    <Link 
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-all tracking-wide
                        ${isActive ? "bg-[#111111] text-white shadow" : "text-gray-600 hover:bg-gray-50 hover:text-black"}`}
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-nakhrali-gold tracking-wider uppercase mb-2 px-4">ERP Systems</span>
                {navItems.filter(i => i.section === "ERP").map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;
                  return (
                    <Link 
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-all tracking-wide
                        ${isActive ? "bg-[#111111] text-white shadow" : "text-gray-600 hover:bg-gray-50 hover:text-black"}`}
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col gap-1 mt-auto pb-6 lg:pb-0">
                <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-2 px-4">System</span>
                {navItems.filter(i => i.section === "SYSTEM").map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;
                  return (
                    <Link 
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-all tracking-wide
                        ${isActive ? "bg-[#111111] text-white shadow" : "text-gray-600 hover:bg-gray-50 hover:text-black"}`}
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

            </aside>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )}

            {/* Main Workspace Viewport */}
            <main className="flex-1 bg-white border border-gray-200 rounded p-4 md:p-6 lg:p-8 shadow-sm min-w-0 overflow-x-hidden">
              {children}
            </main>

          </div>

        </div>

      </div>
    </AdminContext.Provider>
  );
}

