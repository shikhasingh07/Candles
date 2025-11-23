// src/app/candles/page.js
"use client";

import React, { useState } from "react";
import { useCart } from "../components/CartContext";

const candles = [
  {
    id: 1,
    name: "Vanilla Cloud",
    tagline: "Soft, creamy and comforting.",
    description:
      "A cozy blend of whipped vanilla, tonka and warm cashmere. Perfect for slow evenings and self-care rituals.",
    oldPrice: "₹1,299",
    price: "₹899",
    size: "220g · 40+ hrs burn",
    notes: ["Whipped vanilla", "Tonka bean", "Cashmere musk"],
    mood: "Cozy · Calming · Sweet",
    image: "/candles/vanilla.jpg",
  },
  {
    id: 2,
    name: "Citrus Morning",
    tagline: "Fresh, bright and energising.",
    description:
      "Blood orange, grapefruit and bergamot to wake up your space. Light it with your morning coffee.",
    oldPrice: "₹1,199",
    price: "₹849",
    size: "200g · 38+ hrs burn",
    notes: ["Blood orange", "Grapefruit", "Bergamot"],
    mood: "Fresh · Sunny · Uplifting",
    image: "/candles/citrus.jpg",
  },
  {
    id: 3,
    name: "Forest Cabin",
    tagline: "Smoky, woody and grounding.",
    description:
      "Cedarwood, pine and smoked amber – like stepping into a wooden cabin after rain.",
    oldPrice: "₹1,399",
    price: "₹999",
    size: "250g · 42+ hrs burn",
    notes: ["Cedarwood", "Pine needles", "Smoked amber"],
    mood: "Woody · Grounding · Earthy",
    image: "/candles/forest.jpg",
  },
];

export default function CandlesPage() {
  const [selectedId, setSelectedId] = useState(candles[0].id);
  const selected = candles.find((c) => c.id === selectedId);
  const { addItem } = useCart();

  return (
    <section className="px-8 md:px-10 py-10 min-h-[calc(100vh-120px)] flex items-stretch">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* LEFT: list of candles */}
        <div className="w-full lg:w-1/3 space-y-4">
          <h1 className="text-xl md:text-2xl font-semibold text-[var(--brand-green)] mb-2">
            Choose your candle
          </h1>

          {candles.map((candle) => {
            const isActive = candle.id === selectedId;
            return (
              <button
                key={candle.id}
                onClick={() => setSelectedId(candle.id)}
                className={`w-full text-left rounded-2xl px-4 py-3 flex items-center gap-3 border transition shadow-sm ${
                  isActive
                    ? "bg-[var(--brand-yellow)]/90 border-[var(--brand-yellow)] shadow-md"
                    : "bg-[#fff9f1] border-[#f0dfcd] hover:bg-[#fff3e4]"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#f4e1c4] flex-shrink-0">
                  <img src={candle.image} alt={candle.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#5a3734]">{candle.name}</div>
                  <div className="text-[11px] text-[#8f7c71]">{candle.tagline}</div>
                  <div className="text-[11px] text-[#b17164] mt-1">{candle.price}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT: details panel */}
        <div className="w-full lg:w-2/3">
          <div className="bg-[#fff9f1] rounded-3xl border border-[#f0dfcd] shadow-[0_22px_45px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-full max-w-xs aspect-square rounded-full bg-[#fbe2c4] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#231815]">{selected.name}</h2>
                <p className="text-sm text-[#8f7c71] mt-1">{selected.tagline}</p>
              </div>

              <p className="text-sm text-[#6d5a52]">{selected.description}</p>

              <div className="text-xs text-[#b17164]">
                <span className="line-through mr-2">{selected.oldPrice}</span>
                <span className="font-semibold text-[#5a3734]">{selected.price}</span>
                <span className="ml-2 text-[#8f7c71]">{selected.size}</span>
              </div>

              <div className="text-xs text-[#8f7c71]">
                <div className="font-semibold text-[#5a3734] mb-1">Scent notes</div>
                <ul className="list-disc list-inside space-y-0.5">
                  {selected.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-[#8f7c71]">
                <div className="font-semibold text-[#5a3734] mb-1">Mood</div>
                <p>{selected.mood}</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  className="px-6 py-2.5 rounded-full bg-[#F47B4A] text-white text-sm font-medium shadow-[0_14px_30px_rgba(0,0,0,0.18)]"
                  onClick={() =>
                    addItem({
                      id: selected.id,
                      name: selected.name,
                      price: selected.price,
                      image: selected.image,
                      qty: 1,
                    })
                  }
                >
                  Add {selected.name} to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
