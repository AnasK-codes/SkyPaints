import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import Calculator from "@/components/Calculator";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "SkyPaints — Professional House Painting Services",
  description:
    "Transform your home with SkyPaints — expert interior painting, exterior painting, and waterproofing. Get a free quote today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <Calculator />
      <Testimonials />
      <CTA />
    </>
  );
}
