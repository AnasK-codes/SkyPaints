import type { Metadata } from "next";
import PortfolioSection from "@/components/PortfolioSection";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse SkyPaints' project portfolio — interior, exterior, and waterproofing transformations across hundreds of homes.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mx-auto mb-6">Our Work</div>
          <h1 className="section-heading mb-4">
            500+ Projects, <span className="gradient-text">Infinite Pride</span>
          </h1>
          <p className="section-subheading mx-auto">
            Each project reflects our commitment to quality, detail, and client
            satisfaction.
          </p>
        </div>
      </section>
      <PortfolioSection />
      <CTA />
    </>
  );
}
