import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { FloatingWidgets } from "@/components/common/FloatingWidgets";
import { CartDrawer } from "@/components/common/CartDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Nakhrali - Women's Ethnic Fashion",
  description: "Best Indian Women's Ethnic Fashion Brand. Shop traditional and ethnic Indian clothing and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="min-h-screen pt-[112px]">
            {children}
          </main>
          <Footer />
          <FloatingWidgets />
        </CartProvider>
      </body>
    </html>
  );
}
