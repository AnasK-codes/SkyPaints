import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Skypaints | The Ethereal Canvas",
  description: "Experience the atmospheric depth of Skypaints. Our artisanal finishes capture the shifting light of the celestial hours.",
};

import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${notoSerif.variable} ${manrope.variable} antialiased font-body bg-surface text-on-surface`}
      >
        <CartProvider>
          {children}
          <FloatingContactButtons />
        </CartProvider>
      </body>
    </html>
  );
}
