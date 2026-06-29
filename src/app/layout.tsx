import type { Metadata } from "next";
import { Noto_Serif, Manrope, Gloock } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const gloock = Gloock({
  subsets: ["latin"],
  variable: "--font-gloock",
  weight: ["400"],
  style: ["normal"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skypaints.in"),
  title: {
    default: "Skypaints | Premium Wall Paints & Emulsions in India",
    template: "%s | Skypaints",
  },
  description:
    "Skypaints offers premium emulsions, distemper, waterproofing, synthetic enamel, putty, and cleaning products in India. Explore our colour range, paint calculator, and Vastu colour guide.",
  keywords: [
    "wall paint",
    "emulsion paint",
    "interior paint India",
    "exterior paint India",
    "paint price list",
    "Skypaints",
    "Sky Paints Raipur",
    "waterproofing paint",
    "distemper paint",
    "paint calculator",
    "vastu colours",
    "best paint for walls",
    "premium wall paint",
  ],
  authors: [{ name: "Skypaints India" }],
  creator: "Skypaints",
  publisher: "Skypaints India",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://skypaints.in",
    siteName: "Skypaints",
    title: "Skypaints | Premium Wall Paints & Emulsions in India",
    description:
      "Explore Skypaints' complete range of emulsions, waterproofing, distemper, enamel, putty, and cleaning products. Use our free paint calculator and Vastu colour guide.",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Skypaints Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skypaints | Premium Wall Paints & Emulsions in India",
    description:
      "Explore Skypaints' complete range of paints, waterproofing, and colour tools.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://skypaints.in",
  },
};

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
        className={`${notoSerif.variable} ${manrope.variable} ${gloock.variable} antialiased font-body bg-surface text-on-surface`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Skypaints India",
              description:
                "Premium wall paints, emulsions, waterproofing, distemper, and cleaning products manufacturer in Raipur, India.",
              url: "https://skypaints.in",
              telephone: "+91-7999295796",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Raipur",
                addressRegion: "Chhattisgarh",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/skyproductsraipur",
              ],
              image: "https://skypaints.in/images/logo.png",
            }),
          }}
        />
        <CartProvider>
          {children}
          <FloatingContactButtons />
        </CartProvider>
      </body>
    </html>
  );
}
