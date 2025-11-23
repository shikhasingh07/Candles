// src/app/components/Header.js
"use client"; // 👈 VERY IMPORTANT – must be first line

import React from "react";
import Link from "next/link";
import { useCart } from "./CartContext"; // or "./CardContext" if that's your filename

export default function Header() {
  const { itemCount, openCart } = useCart();

  // 👇 this prevents hydration mismatch for the badge
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const pillBase =
    "px-5 py-2 rounded-full shadow-md bg-[var(--brand-yellow)] text-[var(--brand-green)] text-sm font-medium";

  return (
    <header className="bg-[var(--brand-yellow)]">
      <div className="max-w-6xl mx-auto pb-2">
        <div className="bg-[var(--brand-paper)] rounded-full flex items-center justify-between px-6 md:px-10 py-4 shadow-md">
          {/* Logo -> home */}
          <Link
            href="/"
            className="text-2xl tracking-tight text-[var(--brand-green)]"
            style={{ fontFamily: "var(--logo-font)" }}
          >
            Thewarmwick
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-4 md:gap-6">
            <Link href="/candles" className={pillBase}>
              Candles
            </Link>
            <Link
              href="/our-story"
              className={`${pillBase} bg-white border border-[var(--brand-yellow)]`}
            >
              Our Story
            </Link>
          </nav>

          {/* Right: email + cart */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:Thewarmwick@gmail.com"
              className="hidden sm:inline-flex px-6 py-2 rounded-full bg-[var(--brand-yellow)] text-[var(--brand-green)] text-sm font-medium shadow-md"
            >
              Thewarmwick@gmail.com
            </a>

            {/* Cart icon with badge */}
            <button
              onClick={openCart}
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--brand-yellow)] shadow-md"
              aria-label="Open cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M3 3h2l1.5 12.5A2 2 0 0 0 8.5 17h7a2 2 0 0 0 2-1.5L20 6H6" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="17" cy="20" r="1" />
              </svg>

              {/* 👇 badge only rendered after mount to avoid hydration error */}
              {mounted && itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] rounded-full bg-[#F47B4A] text-white text-[10px] flex items-center justify-center px-0.5">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
