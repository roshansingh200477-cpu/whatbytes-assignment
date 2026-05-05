"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";

export default function Header({ search, setSearch }) {
  const { totalItems } = useCart();

  return (
    <header className="bg-blue-600 px-4 py-3 flex items-center justify-between gap-3">

      {/* Left — Logo */}
      <Link href="/" className="text-white text-xl font-bold shrink-0">
        Logo
      </Link>

      {/* Center — Search Bar */}
      <div className="flex-1 flex items-center bg-white rounded-md px-3 py-2 gap-2 max-w-xl">
        <Search size={16} className="text-gray-400 shrink-0" />
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          suppressHydrationWarning
          className="w-full text-gray-700 text-sm outline-none bg-transparent"
        />
      </div>

      {/* Right — Cart Button */}
      <Link href="/cart" className="shrink-0">
        <button
          suppressHydrationWarning
          className="bg-blue-900 text-white px-3 py-2 rounded-md flex items-center gap-2 text-sm font-medium relative"
        >
          <ShoppingCart size={16} />
          <span className="hidden sm:inline">Cart</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </Link>

    </header>
  );
}