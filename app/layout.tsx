import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "SkyPaints — Professional House Painting Services",
    template: "%s | SkyPaints",
  },
  description:
    "SkyPaints delivers flawless interior painting, exterior painting, and waterproofing services. Trusted by 500+ homeowners. Get a free quote today.",
  keywords: [
    "house painting",
    "interior painting",
    "exterior painting",
    "waterproofing",
    "painters near me",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SkyPaints",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main className="pt-[73px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
