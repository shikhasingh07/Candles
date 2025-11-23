// src/app/layout.js
import "./globals.css";
import Header from "./components/Header";
import ClientProvider from "./components/ClientProvider";

export const metadata = {
  title: "My Candle Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--brand-yellow)]">
        <div className="flex justify-center px-4 md:px-8 lg:px-10 py-6">
          <div className="w-full max-w-6xl bg-[var(--brand-paper)] rounded-3xl shadow-xl relative flex flex-col">
            {/* header must be inside ClientProvider because it uses useCart */}
            <ClientProvider>
              <Header />
              <main className="flex-1">{children}</main>
            </ClientProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
