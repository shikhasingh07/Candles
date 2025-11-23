// src/app/components/ClientProvider.js
"use client";

import React from "react";
import { CartProvider } from "./CartContext";
import CartDrawer from "./CartDrawer";

/**
 * Wrap the app with this in layout.js:
 * <ClientProvider>{children}</ClientProvider>
 */
export default function ClientProvider({ children }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
