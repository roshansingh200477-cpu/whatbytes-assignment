"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import products from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [search, setSearch] = useState("");
  const [added, setAdded] = useState(false);

  // Find the product matching the id from URL
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header search={search} setSearch={setSearch} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 text-xl mb-4">Product not found.</p>
            <Link href="/" className="text-blue-600 underline">
              Go back home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">

      <Header search={search} setSearch={setSearch} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">

        <Link
          href="/"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 w-fit"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-8">

          <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg p-6 min-h-64">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-80 object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">

            <h1 className="text-2xl font-bold text-gray-800">
              {product.name}
            </h1>

            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={
                      star <= product.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300 fill-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                ({product.rating}/5)
              </span>
            </div>

            <p className="text-3xl font-bold text-gray-900">
              ${product.price}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Category</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Brand</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {product.brand}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium">Quantity</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md text-lg font-medium"
                >
                  -
                </button>
                <span className="px-4 py-2 text-gray-800 font-medium border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md text-lg font-medium"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              suppressHydrationWarning
              className={`py-3 rounded-md text-white font-medium transition-colors ${
                added
                  ? "bg-green-500"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {added ? "✓ Added to Cart!" : "Add to Cart"}
            </button>

          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
}