// src/app/candles/page.js
"use client";

import React, { useState } from "react";

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

  return (
    <section
      className="
        px-2 md:px-4 lg:px-6
        py-4 md:py-4
        h-full
        animate-soft-fade-up
      "
    >
      {/* two column layout that fills the available height inside the card */}
      <div className="h-full flex gap-8">
        {/* LEFT: list of candles */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <h1 className="text-xl md:text-2xl font-semibold text-[var(--brand-green)] mb-4">
            Choose your candle
          </h1>

          {/* scrollable list area */}
          <div className="flex-1 space-y-4 overflow-y-auto pr-2">
            {candles.map((candle) => {
              const isActive = candle.id === selectedId;
              return (
                <button
                  key={candle.id}
                  onClick={() => setSelectedId(candle.id)}
                  className={`w-full text-left rounded-2xl px-4 py-3 flex items-center gap-3 border transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--brand-yellow)]/90 border-[var(--brand-yellow)] shadow-md translate-y-[-1px]"
                      : "bg-[#fff9f1] border-[#f0dfcd] hover:bg-[#fff3e4] hover:translate-y-[-1px] hover:shadow-md"
                  }`}
                >
                  {/* thumbnail */}
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#f4e1c4] flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={candle.image}
                      alt={candle.name}
                      className="w-full h-full object-fill transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#5a3734]">
                      {candle.name}
                    </div>
                    <div className="text-[11px] text-[#8f7c71]">
                      {candle.tagline}
                    </div>
                    <div className="text-[11px] text-[#b17164] mt-1">
                      {candle.price}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: details panel */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div
            // key forces a remount when selectedId changes,
            // so the fade/scale animation runs each time
            key={selected.id}
            className="flex-1 bg-[#fff9f1] rounded-3xl border border-[#f0dfcd]
                       shadow-[0_22px_45px_rgba(0,0,0,0.08)] p-5 md:p-6
                       flex flex-col md:flex-row gap-4
                       overflow-hidden animate-fade-in-scale"
          >
            {/* big image area */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div
                className="relative w-64 h-64 md:w-[320px] md:h-[320px]
                           rounded-full bg-[#fbe2c4] overflow-hidden
                           shadow-[0_20px_50px_rgba(0,0,0,0.16)]
                           animate-fade-in-scale"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>

            {/* text content */}
            <div className="w-full md:w-1/2 flex flex-col gap-3  pr-2">
              <div className="animate-soft-fade-up">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#231815] leading-tight">
                  {selected.name}
                </h2>
                <p className="text-sm text-[#8f7c71] mt-1">
                  {selected.tagline}
                </p>
              </div>

              <p className="text-sm text-[#6d5a52] leading-relaxed">
                {selected.description}
              </p>

              <div className="text-xs text-[#b17164] mt-1">
                <span className="line-through mr-2">{selected.oldPrice}</span>
                <span className="font-semibold text-[#5a3734]">
                  {selected.price}
                </span>
                <span className="ml-2 text-[#8f7c71]">{selected.size}</span>
              </div>

              <div className="text-xs text-[#8f7c71] mt-3">
                <div className="font-semibold text-[#5a3734] mb-1">
                  Scent notes
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-[13px]">
                  {selected.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-[#8f7c71] mt-3">
                <div className="font-semibold text-[#5a3734] mb-1">Mood</div>
                <p className="text-[13px]">{selected.mood}</p>
              </div>

              <div className="mt-auto pt-4">
                <button className="px-6 py-2.5 rounded-full bg-[#F47B4A] text-white text-sm font-medium shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition-transform duration-150 hover:-translate-y-0.5">
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
