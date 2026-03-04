import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Waterproofing",
  description:
    "Professional waterproofing services by SkyPaints. Protect basements, rooftops, and walls from leaks and moisture.",
};

const FEATURES = [
  {
    icon: "💧",
    title: "Leak Detection",
    desc: "We identify problem areas before applying any treatment.",
  },
  {
    icon: "🏠",
    title: "Basement Waterproofing",
    desc: "Keep your basement dry with advanced sealants and drainage solutions.",
  },
  {
    icon: "🏗️",
    title: "Roof & Terrace",
    desc: "Membrane coatings to protect flat roofs and terraces.",
  },
  {
    icon: "✅",
    title: "10-Year Guarantee",
    desc: "Our waterproofing solutions are built to last a decade.",
  },
];

export default function WaterproofingPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-indigo-950/40 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="badge">Waterproofing</div>
            <h1 className="section-heading max-w-3xl">
              Keep Moisture <span className="gradient-text">Out for Good</span>
            </h1>
            <p className="section-subheading">
              Advanced waterproofing systems that protect your property from
              water damage, mould, and structural issues — guaranteed.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Schedule an Inspection →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-3xl">
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
