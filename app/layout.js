import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata = {
  title: "WhatBytes Shop",
  description: "Frontend assignment for WhatBytes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}