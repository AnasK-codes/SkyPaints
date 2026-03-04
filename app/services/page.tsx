import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/utils";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore SkyPaints' full range of services: interior painting, exterior painting, and waterproofing.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mx-auto mb-6">Services</div>
          <h1 className="section-heading mb-4">
            What We <span className="gradient-text">Offer</span>
          </h1>
          <p className="section-subheading mx-auto">
            From a single accent wall to full home makeovers — SkyPaints covers
            it all.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ slug, title, description, icon, href }) => (
              <div
                key={slug}
                className="card group flex flex-col gap-5 glow-sky-hover"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-4xl transition-transform group-hover:scale-110">
                  {icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-100 mb-2">
                    {title}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {description}
                  </p>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-500">
                  {[
                    "Premium paint brands",
                    "Full surface preparation",
                    "Satisfaction guaranteed",
                    "Licensed & insured",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-sky-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className="mt-auto btn-primary w-full justify-center"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
