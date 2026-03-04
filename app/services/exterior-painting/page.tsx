import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Exterior Painting",
  description:
    "Weather-resistant exterior painting services by SkyPaints. Protect and beautify your home's facade.",
};

const FEATURES = [
  {
    icon: "🌤️",
    title: "Weather-Resistant Coatings",
    desc: "Paints formulated to withstand UV, rain, and temperature changes.",
  },
  {
    icon: "🏗️",
    title: "Full Scaffolding & Safety",
    desc: "We handle multi-story homes safely with proper equipment.",
  },
  {
    icon: "🎨",
    title: "Curb Appeal Makeovers",
    desc: "Dramatic before-and-after transformations that wow the neighbourhood.",
  },
  {
    icon: "🛡️",
    title: "5-Year Exterior Warranty",
    desc: "Our exterior finishes are guaranteed to last.",
  },
];

export default function ExteriorPaintingPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-emerald-950/40 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="badge">Exterior Painting</div>
            <h1 className="section-heading max-w-3xl">
              Boost Your Home&apos;s{" "}
              <span className="gradient-text">Curb Appeal</span>
            </h1>
            <p className="section-subheading">
              From siding to trim, fences to garages — we make the outside of
              your home look as great as the inside.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Get an Exterior Quote →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-3xl">
                  {icon}
                </div>
                <h3 className="font-bold text-slate-100 mb-2">{title}</h3>
                <p className="text-sm text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
