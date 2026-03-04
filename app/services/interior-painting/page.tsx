import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Interior Painting",
  description:
    "Expert interior painting services by SkyPaints. Premium finishes for living rooms, bedrooms, kitchens, and more.",
};

const FEATURES = [
  {
    icon: "🎨",
    title: "Custom Colour Consultation",
    desc: "We help you pick the perfect palette for every room.",
  },
  {
    icon: "🧹",
    title: "Full Surface Prep",
    desc: "Sanding, priming, and patching before any paint touches your walls.",
  },
  {
    icon: "🛡️",
    title: "Low-VOC Paints",
    desc: "Safe for your family and the environment.",
  },
  {
    icon: "🏆",
    title: "3-Year Warranty",
    desc: "We stand behind our work with an industry-leading warranty.",
  },
];

export default function InteriorPaintingPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-sky-950/50 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="badge">Interior Painting</div>
            <h1 className="section-heading max-w-3xl">
              Stunning Interiors,{" "}
              <span className="gradient-text">Flawless Finishes</span>
            </h1>
            <p className="section-subheading">
              We transform living rooms, kitchens, bedrooms, and hallways with
              precision and care — creating spaces you&apos;ll love coming home
              to.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Book a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-3xl">
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
