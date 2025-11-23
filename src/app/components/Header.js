// src/app/components/Header.js
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Nav items with routes
const navItems = [
  { label: "Candles", href: "/candles" },
  { label: "Our Story", href: "/our-story" },
];

// Base style for all yellow pills
const buttonBase =
  "flex items-center justify-center h-10 px-5 rounded-full shadow-md bg-[var(--brand-yellow)] transition transform hover:scale-105 cursor-pointer";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-[var(--brand-yellow)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-4 pb-4">
        <div className="bg-[var(--brand-paper)] rounded-full flex items-center justify-between px-6 md:px-10 py-4 shadow-md">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl tracking-tight text-[var(--brand-green)]"
            style={{ fontFamily: "var(--logo-font)" }}
          >
            Thewarmwick
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-4 md:gap-6">
            {navItems.map(({ label, href }) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));

              return (
                <Link
                  key={href}
                  href={href}
                  className={`${buttonBase} text-sm font-medium text-[var(--brand-green)] ${
                    isActive
                      ? "ring-2 ring-[var(--brand-green)] ring-offset-2 ring-offset-[var(--brand-paper)]"
                      : ""
                  }`}
                  style={{ letterSpacing: "0.05em" }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right icons section */}
          <div className="flex items-center gap-4">
            {/* Email pill */}
            <a
              href="mailto:Thewarmwick@gmail.com"
              className={`${buttonBase} w-auto px-6 text-sm font-medium text-[var(--brand-green)] hidden sm:inline-flex`}
            >
              Thewarmwick@gmail.com
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 px-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.5 6.75l8.5 6.25 8.5-6.25M4 18h16a.75.75 0 0 0 .75-.75V6.75A1.75 1.75 0 0 0 19 5H5A1.75 1.75 0 0 0 3.25 6.75v10.5c0 .41.34.75.75.75z"
                />
              </svg>
            </a>

            {/* Gmail icon */}
            

            {/* Cart icon */}
            <button
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--brand-yellow)] shadow-md"
              aria-label="Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l1.5 12.5A2 2 0 0 0 8.5 17h7a2 2 0 0 0 2-1.5L20 6H6"
                />
                <circle cx="9" cy="20" r="1" />
                <circle cx="17" cy="20" r="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
