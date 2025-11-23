// src/app/components/CartDrawer.js
"use client";

import React from "react";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeItem,
    updateQty,
    itemCount,
    subtotal,
  } = useCart();

  return (
    // overlay
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 pointer-events-none transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* drawer */}
      <aside
        className={`fixed right-6 top-6 bottom-6 w-[360px] max-w-[92vw] rounded-2xl bg-white shadow-2xl p-5 transform transition-transform pointer-events-auto z-60
        ${isOpen ? "translate-x-0" : "translate-x-[420px]"}`}
        style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.25)" }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Your cart</h3>
          <div className="text-sm text-muted">
            {itemCount} item{itemCount !== 1 ? "s" : ""}
          </div>
        </div>

        <div className="space-y-3 overflow-auto max-h-[60vh] pr-2">
          {items.length === 0 && (
            <div className="text-sm text-[#6d5a52]">Your cart is empty.</div>
          )}

          {items.map((it) => (
            <div
              key={it.id}
              className="flex items-center gap-3 p-2 rounded-lg border"
            >
              <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0 bg-[#f4e6d2]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={it.image}
                  alt={it.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{it.name}</div>
                <div className="text-xs text-[#8f7c71]">{it.price}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    className="w-7 h-7 rounded-full bg-[#f0e7df] flex items-center justify-center"
                    onClick={() =>
                      updateQty(it.id, Math.max(1, (it.qty || 1) - 1))
                    }
                  >
                    −
                  </button>
                  <div className="text-sm">{it.qty || 1}</div>
                  <button
                    className="w-7 h-7 rounded-full bg-[#f0e7df] flex items-center justify-center"
                    onClick={() => updateQty(it.id, (it.qty || 1) + 1)}
                  >
                    +
                  </button>
                  <button
                    className="ml-auto text-xs underline text-[#b17164]"
                    onClick={() => removeItem(it.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-[#8f7c71]">Subtotal</div>
            <div className="text-sm font-semibold">₹{subtotal.toFixed(2)}</div>
          </div>

          <div className="flex gap-2">
            <button
              className="flex-1 px-4 py-2 rounded-full bg-[#F47B4A] text-white font-medium"
              onClick={() =>
                alert("Checkout flow — integrate your gateway here")
              }
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
