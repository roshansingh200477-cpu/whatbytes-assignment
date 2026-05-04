"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header({ search, setSearch }) {
  const { totalItems } = useCart();

  return (
    <header className="bg-blue-600 px-6 py-4 flex items-center justify-between gap-4">
     
      <Link href="/" className="text-white text-2xl font-bold min-w-fit">
        Logo
      </Link>

      <div className="flex-1 max-w-xl">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-md text-gray-700 text-sm outline-none"
        />
      </div>

      <Link href="/cart">
        <button className="bg-blue-900 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium relative">
          <ShoppingCart size={18} />
          Cart
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