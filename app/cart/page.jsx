"use client";

import { useCart } from "@/context/CartContext";
import { Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice } =
    useCart();
  const [search, setSearch] = useState("");

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header search={search} setSearch={setSearch} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 text-xl mb-4">
              Your cart is empty.
            </p>
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">

      <Header search={search} setSearch={setSearch} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">

        <Link
          href="/"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 w-fit"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Your Cart ({totalItems} items)
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">

          <div className="flex-1 flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 flex gap-4 items-center shadow-sm"
              >
               
                <div className="w-20 h-20 shrink-0 bg-gray-50 rounded-md flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-gray-800 font-semibold text-sm">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 text-xs mt-1">
                    {item.category} — {item.brand}
                  </p>
                  <p className="text-blue-600 font-bold mt-1">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                    className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-gray-800 text-sm border-x border-gray-300">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                    className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md"
                  >
                    +
                  </button>
                </div>

                <p className="text-gray-800 font-bold text-sm w-16 text-right">
                  ${item.price * item.quantity}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={18} />
                </button>

              </div>
            ))}
          </div>

          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4">

              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Order Summary
              </h2>

              <div className="flex flex-col gap-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-gray-800 font-medium">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 flex flex-col gap-2">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800 font-medium">
                    ${totalPrice}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>

                <div className="flex justify-between text-base font-bold mt-2 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-blue-600">${totalPrice}</span>
                </div>

              </div>

              <button
                suppressHydrationWarning
                className="w-full bg-blue-600 text-white py-3 rounded-md mt-6 hover:bg-blue-700 transition-colors font-medium"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => cartItems.forEach((item) => removeFromCart(item.id))}
                suppressHydrationWarning
                className="w-full border border-red-400 text-red-400 py-2 rounded-md mt-3 hover:bg-red-50 transition-colors text-sm"
              >
                Clear Cart
              </button>

            </div>
          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
}