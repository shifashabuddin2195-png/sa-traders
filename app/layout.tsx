import type { Metadata } from "next";
import { Toaster } from "sonner"; // Assuming you use sonner based on earlier files

import { CartProvider } from "@/lib/cart"; // Adjust path to where your CartProvider is exported
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "S.A. Traders",
  description: "Premium packaging solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        {/* Wrap everything that needs access to the cart in the Provider */}
        <CartProvider>
          <Toaster />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}