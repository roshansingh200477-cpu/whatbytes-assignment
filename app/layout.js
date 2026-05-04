import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata = {
  title: "WhatBytes Shop",
  description: "Frontend assignment for WhatBytes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}