"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import products from "@/data/products";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    return matchesSearch && matchesCategory && matchesPrice && matchesBrand;
  });

  return (
    <div className="min-h-screen flex flex-col">

      <Header search={search} setSearch={setSearch} />

      {/* Mobile Filter Toggle */}
      <div className="md:hidden px-4 pt-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm w-full"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 flex flex-col md:flex-row gap-6">

        {/* Sidebar — hidden on mobile unless toggled */}
        <div className={`${showFilters ? "block" : "hidden"} md:block`}>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
          />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Product Listing
          </h1>
          <ProductGrid products={filteredProducts} />
        </div>

      </main>

      <Footer />

    </div>
  );
}