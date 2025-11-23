// src/app/components/Instagram.js
import React from "react";

const INSTAGRAM_URL =
  "https://www.instagram.com/reel/DQ1NzdlEeFQ/?igsh=MXV4MWFlNHBjYnF1Yw%3D%3D&wa_logging_event=video_play_open";

const Instagram = () => {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="
        absolute
        bottom-5 right-5
        md:bottom-10 md:right-5
        w-14 h-14
        rounded-full
        bg-[var(--brand-yellow)]
        shadow-[0_14px_30px_rgba(0,0,0,0.2)]
        flex items-center justify-center
        hover:scale-110 hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)]
        transition transform
        z-20
      "
      aria-label="Instagram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#13515A"
        strokeWidth="1.6"
        className="w-7 h-7"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1.2" fill="#13515A" stroke="none" />
      </svg>
    </a>
  );
};

export default Instagram;
