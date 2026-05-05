"use client";

import { useCart } from "@/context/CartContext";
import { Star } from "lucide-react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">

      <Link href={`/product/${product.id}`}>
        <div className="w-full h-48 cursor-pointer flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-contain"
          />
        </div>
      </Link>

      <Link href={`/product/${product.id}`}>
        <h2 className="text-gray-800 font-semibold text-sm hover:text-blue-600 cursor-pointer">
          {product.name}
        </h2>
      </Link>

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={
              star <= product.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      <p className="text-gray-900 font-bold text-lg">${product.price}</p>

      <button
          onClick={() => addToCart(product)}
          suppressHydrationWarning
          className="bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add to Cart
      </button>

    </div>
  );
}