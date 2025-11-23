// src/app/our-story/page.js
"use client";

import React from "react";

const highlights = [
  { title: "Hand-poured in small batches" },
  { title: "Clean ingredients only" },
  { title: "Made for little rituals" },
];

export default function OurStoryPage() {
  return (
    <section className="px-4 md:px-8 lg:px-10 py-2 md:py-4 h-full animate-soft-fade-up">
      <div className="h-full flex flex-col gap-6 md:gap-8">
        {/* HERO: image + short story */}
        <div className="flex flex-col lg:flex-row gap-6 bg-[#fff9f1] rounded-3xl border border-[#f0dfcd] shadow-[0_22px_45px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* LEFT: main copy */}
          <div className="w-full lg:w-1/2 px-6 md:px-8 py-5 md:py-6 flex flex-col justify-center gap-3">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#D9B26A]">
              Our Story
            </p>

            <h1 className="text-2xl md:text-3xl font-semibold text-[#231815] leading-snug">
              Bringing a little
              <br />
              <span className="relative inline-block mt-1">
                <span className="relative z-10">
                  warmth to everyday life.
                </span>
                <span className="absolute inset-x-[-4px] bottom-0 h-2 bg-[#D9B26A] rounded-full -z-0" />
              </span>
            </h1>

            <p className="text-sm text-[#6d5a52] max-w-sm">
              Thewarmwick began with one candle on a crowded desk — a tiny
              ritual that made long evenings feel softer. Today we still pour
              every candle by hand, blending cozy scents for slow nights and
              quiet moments at home.
            </p>
          </div>

          {/* RIGHT: video / image block */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-[#D9B26A] via-[#f7e0c5] to-[#f4d4b0]">
            <div className="relative w-[72%] max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.2)] border border-white/30 animate-fade-in-scale">
              <video
                className="w-full h-full object-cover"
                src="/2.mp4"      
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS ROW – smaller chips, title only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#fff9f1] border border-[#f0dfcd] px-4 py-3 md:px-5 md:py-3 shadow-[0_10px_22px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-0.5"
            >
              <h2 className="text-xs md:text-sm font-semibold text-[#5a3734]">
                {item.title}
              </h2>
              {/* no body text – keep it clean */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
