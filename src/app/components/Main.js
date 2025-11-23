// src/app/components/Main.js
import React from "react";
import Link from "next/link";

const Main = () => {
  return (
    <section className="hero-section px-6 md:px-10 lg:py-10">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="hero-title text-[#111111] text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold">
            Hand-poured
            <br />
            <span className="relative inline-block mt-1">
              <span className="relative z-10">Candle Magic</span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-[#F6C84B] rounded-full -z-0" />
            </span>
            <br />
            For Cozy Nights.
          </h1>

          <p className="text-sm md:text-base text-[#555555] max-w-md">
            Small-batch soy candles, slow burning and richly scented. Light one,
            pour some tea, and let Thewarmwick set the mood.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/candles"
              className="px-8 py-3 rounded-full bg-[#F47B4A] text-white text-sm font-medium shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              Shop Candles
            </Link>

            <Link
              href="/our-story"
              className="px-8 py-3 rounded-full bg-white text-sm font-medium text-[var(--brand-green)] border border-[#E4D8C8] shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              View Story
            </Link>
          </div>
        </div>

        {/* RIGHT: circular media area */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full flex items-center justify-center">
            {/* subtle outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FBEDD9] to-[#F7E4C9] shadow-[0_18px_40px_rgba(217,173,87,0.12)]" />

            {/* inner clipped circle containing the video */}
            <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden shadow-[0_28px_60px_rgba(0,0,0,0.18)] border-4 border-white/60">
              <video
                className="w-full h-full object-cover"
                src="/1.mp4"  // make sure public/1.mp4 exists
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
