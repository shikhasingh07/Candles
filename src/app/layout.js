// src/app/layout.js
import "./globals.css";
import Header from "./components/Header";
import Instagram from "./components/Instagram";

export const metadata = {
  title: "My Candle Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--brand-yellow)] h-screen overflow-hidden">
        {/* Outer wrapper ensures yellow background stays full screen */}
        <div className="h-screen flex justify-center items-center px-4 md:px-8 lg:px-10 py-4">

          {/* MAIN CREAM CARD — FIXED HEIGHT, INTERNAL SCROLL */}
          <div className="w-full max-w-6xl h-full bg-[var(--brand-paper)] 
                          rounded-3xl shadow-xl relative flex flex-col overflow-hidden">

            <Header />

            {/* Internal scroll area */}
            <main className="flex-1 overflow-y-auto px-6 md:px-10 py-6 md:py-8">
              {children}
            </main>

            <Instagram />
          </div>

        </div>
      </body>
    </html>
  );
}
