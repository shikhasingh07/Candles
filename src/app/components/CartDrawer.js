"use client";

import React, { useMemo, useState } from "react";
import { useCart } from "./CartContext";

// BUSINESS WHATSAPP NUMBER (destination). Format: countrycode + number, no plus, no spaces.
// e.g. "919876543210" for India +91
const WHATSAPP_NUMBER = "918130288728";

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

  // customer's whatsapp number input
  const [customerNumber, setCustomerNumber] = useState("");
  const [touched, setTouched] = useState(false);

  // normalize to digits only (used for validation and wa.me message)
  const normalizeNumber = (raw) => raw.replace(/\D/g, "");

  const isValidCustomerNumber = () => {
    const digits = normalizeNumber(customerNumber);
    // minimal sanity check: at least 7 digits (adjust if you want stricter)
    return digits.length >= 7;
  };

  // derived boolean for disabling checkout
  const isCheckoutDisabled = useMemo(() => {
    return !isValidCustomerNumber() || items.length === 0;
  }, [customerNumber, items]);

  const handleCheckout = () => {
    // safety guard
    if (isCheckoutDisabled) return;

    // Build message lines
    const lines = items.map((it, index) => {
      const qty = it.qty || 1;
      // price/price formatting kept simple here
      return `${index + 1}) ${it.name} × ${qty}`;
    });

    const customerDigits = normalizeNumber(customerNumber);

    const message = [
      "Hi! I'd like to order these candles from Thewarmwick:",
      "",
      ...lines,
      "",
      `Total items: ${itemCount}`,
      `Cart total (approx): ₹${subtotal.toFixed(2)}`,
      "",
      `Customer WhatsApp: +${customerDigits}`,
      "",
      "Please confirm availability & shipping details.",
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    // open WhatsApp (app or web)
    window.open(waUrl, "_blank");
  };

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 pointer-events-none transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed right-6 top-6 bottom-6 w-[360px] max-w-[92vw] rounded-2xl bg-white shadow-2xl p-5 transform transition-transform pointer-events-auto z-60
        ${isOpen ? "translate-x-0" : "translate-x-[420px]"}`}
        style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.25)" }}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Your cart</h3>
          <div className="text-sm text-[#8f7c71]">
            {itemCount} item{itemCount !== 1 ? "s" : ""}
          </div>
        </div>

        <div className="space-y-3 overflow-auto max-h-[46vh] pr-2">
          {items.length === 0 && (
            <div className="text-sm text-[#6d5a52]">Your cart is empty.</div>
          )}

          {items.map((it) => (
            <div key={it.id} className="flex items-center gap-3 p-2 rounded-lg border">
              <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0 bg-[#f4e6d2]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.image} alt={it.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{it.name}</div>
                <div className="text-xs text-[#8f7c71]">{it.price}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    className="w-7 h-7 rounded-full bg-[#f0e7df] flex items-center justify-center"
                    onClick={() => updateQty(it.id, Math.max(1, (it.qty || 1) - 1))}
                    aria-label={`Decrease quantity of ${it.name}`}
                  >
                    −
                  </button>
                  <div className="text-sm">{it.qty || 1}</div>
                  <button
                    className="w-7 h-7 rounded-full bg-[#f0e7df] flex items-center justify-center"
                    onClick={() => updateQty(it.id, (it.qty || 1) + 1)}
                    aria-label={`Increase quantity of ${it.name}`}
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

        {/* WhatsApp input + subtotal */}
        <div className="mt-4 border-t pt-4">
          <label className="block text-xs font-medium text-[#5a3734] mb-2">
            Your WhatsApp number
          </label>

          <input
            type="tel"
            inputMode="tel"
            value={customerNumber}
            onChange={(e) => setCustomerNumber(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="+91 98765 43210"
            className={`w-full px-3 py-2 rounded-lg border ${
              touched && !isValidCustomerNumber() ? "border-red-400" : "border-[#e8dfd3]"
            }`}
            aria-invalid={touched && !isValidCustomerNumber()}
            aria-describedby="whatsapp-help"
          />
          {touched && !isValidCustomerNumber() && (
            <div id="whatsapp-help" className="text-xs text-red-500 mt-1">
              Enter a valid phone number (digits, min 7).
            </div>
          )}

          <div className="flex items-center justify-between mt-3 mb-3">
            <div className="text-sm text-[#8f7c71]">Subtotal</div>
            <div className="text-sm font-semibold">₹{subtotal.toFixed(2)}</div>
          </div>

          <div className="flex gap-2">
            <button
              className={`flex-1 px-4 py-2 rounded-full font-medium shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed 
                ${isCheckoutDisabled ? "bg-gray-300 text-gray-500" : "bg-[#F47B4A] text-white"}`}
              onClick={handleCheckout}
              disabled={isCheckoutDisabled}
              aria-disabled={isCheckoutDisabled}
            >
              Checkout on WhatsApp
            </button>

            <button
              className="px-4 py-2 rounded-full border text-sm"
              onClick={closeCart}
            >
              Close
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
