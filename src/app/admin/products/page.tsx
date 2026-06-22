"use client";

import { useState } from "react";
import Image from "next/image";
import { useAdmin } from "../layout";
import { Plus, X, Search } from "lucide-react";

export default function ProductsPage() {
  const { products, setProducts, triggerToast } = useAdmin();
  const [searchProduct, setSearchProduct] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  // Form inputs
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newStock, setNewStock] = useState("");
  const [newCategory, setNewCategory] = useState("Sarees");
  const [newImage, setNewImage] = useState("https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200&auto=format&fit=crop");

  // Add Product handler
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newPrice || !newStock) {
      alert("Please fill all required fields");
      return;
    }
    const newProd = {
      id: "p-" + Date.now(),
      title: newTitle,
      sku: "NKL-PR-" + Math.floor(100 + Math.random() * 900),
      price: Number(newPrice),
      stock: Number(newStock),
      category: newCategory,
      image: newImage
    };
    setProducts([newProd, ...products]);
    setNewTitle("");
    setNewPrice("");
    setNewStock("");
    setShowAddForm(false);
    triggerToast("Product added successfully!");
  };

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchProduct.toLowerCase()) || 
    p.sku.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between border-b border-gray-150 pb-4">
        <h2 className="text-xl font-serif text-[#111111]">Product Directory</h2>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 bg-[#111111] hover:bg-nakhrali-gold text-white px-4 py-2 text-xs font-sans font-semibold uppercase tracking-widest transition-colors rounded shadow-sm"
        >
          {showAddForm ? <X size={14} /> : <Plus size={14} />}
          <span>{showAddForm ? "Cancel Form" : "Add Product"}</span>
        </button>
      </div>

      {/* Add Product Form Modal */}
      {showAddForm && (
        <form onSubmit={handleAddProduct} className="bg-gray-50 border border-gray-200 rounded p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
          <h3 className="font-serif text-lg text-black mb-2">New Product Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">Product Name *</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Riva Maroon Lehenga Set"
                className="border border-gray-300 rounded p-2.5 font-sans text-sm bg-white outline-none focus:border-nakhrali-gold"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">Category *</label>
              <select 
                className="border border-gray-300 rounded p-2.5 font-sans text-sm bg-white outline-none focus:border-nakhrali-gold"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              >
                <option>Sarees</option>
                <option>Lehengas</option>
                <option>Kurta Sets</option>
                <option>Jewellery</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">Price (INR) *</label>
              <input 
                type="number" 
                required
                placeholder="e.g. 18895"
                className="border border-gray-300 rounded p-2.5 font-sans text-sm bg-white outline-none focus:border-nakhrali-gold"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">Initial Stock *</label>
              <input 
                type="number" 
                required
                placeholder="e.g. 15"
                className="border border-gray-300 rounded p-2.5 font-sans text-sm bg-white outline-none focus:border-nakhrali-gold"
                value={newStock}
                onChange={(e) => setNewStock(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">Image Unsplash URL (optional)</label>
              <input 
                type="text"
                placeholder="https://images.unsplash.com/photo-..."
                className="border border-gray-300 rounded p-2.5 font-sans text-sm bg-white outline-none focus:border-nakhrali-gold"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
              />
            </div>
          </div>
          <button 
            type="submit"
            className="bg-[#111111] hover:bg-nakhrali-gold text-white py-3 rounded font-sans tracking-widest text-xs uppercase font-semibold transition-colors mt-3"
          >
            Save Product to Catalog
          </button>
        </form>
      )}

      {/* Filter and Search Products Bar */}
      <div className="flex items-center border border-gray-200 rounded px-3 py-2.5 bg-white shadow-sm font-sans max-w-md">
        <Search size={16} className="text-gray-400 mr-2 shrink-0" />
        <input 
          type="text" 
          placeholder="Search by title or SKU..." 
          className="w-full outline-none text-sm text-gray-700 bg-transparent"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
      </div>

      {/* Products Catalog Table */}
      <div className="overflow-x-auto border border-gray-200 rounded shadow-sm">
        <table className="w-full font-sans text-sm text-left border-collapse bg-white">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">Image</th>
              <th className="px-6 py-4 font-semibold">Product Title</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">SKU</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Stock</th>
              <th className="px-6 py-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-150">
            {filteredProducts.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-3">
                  <div className="relative w-12 h-16 rounded overflow-hidden bg-gray-50 border border-gray-200 shadow-sm shrink-0">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">{p.title}</td>
                <td className="px-6 py-4 text-gray-500">{p.category}</td>
                <td className="px-6 py-4 font-mono text-xs font-semibold text-gray-400">{p.sku}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">₹ {p.price.toLocaleString("en-IN")}</td>
                <td className="px-6 py-4 font-medium">{p.stock} units</td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full
                    ${p.stock > 0 ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
                    {p.stock > 0 ? "In Stock" : "Sold Out"}
                  </span>
                </td>
              </tr>
            ))}
            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-10 text-gray-400 font-sans font-light">No products matched the search query.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

