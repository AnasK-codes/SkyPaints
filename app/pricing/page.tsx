import type { Metadata } from "next";
import Link from "next/link";
import { PRICING_TIERS, formatCurrency } from "@/lib/utils";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent and competitive pricing for all SkyPaints services. Choose the plan that fits your home and budget.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mx-auto mb-6">Pricing</div>
          <h1 className="section-heading mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="section-subheading mx-auto">
            No hidden fees. No surprises. Just honest pricing for exceptional
            work.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
            {PRICING_TIERS.map(
              ({ name, price, description, features, cta, highlighted }) => (
                <div
                  key={name}
                  className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                    highlighted
                      ? "border-sky-500 bg-sky-500/5 shadow-xl shadow-sky-500/10 scale-105"
                      : "border-slate-800 bg-slate-900/60 hover:border-sky-500/40"
                  }`}
                >
                  {highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="badge px-4 py-1.5 text-xs">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-slate-100">{name}</h2>
                    <p className="mt-1 text-sm text-slate-400">{description}</p>
                  </div>

                  <div className="mb-8">
                    <span className="text-5xl font-black gradient-text">
                      {formatCurrency(price, "USD").split(".")[0]}
                    </span>
                    <span className="ml-1 text-slate-400 text-sm">
                      / starting from
                    </span>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <span className="mt-0.5 text-sky-400 shrink-0">✓</span>{" "}
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={
                      highlighted
                        ? "btn-primary w-full justify-center py-3"
                        : "btn-secondary w-full justify-center py-3"
                    }
                  >
                    {cta}
                  </Link>
                </div>
              ),
            )}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            All prices are estimates. Final cost depends on surface area and
            condition.{" "}
            <Link href="/contact" className="text-sky-400 hover:underline">
              Contact us
            </Link>{" "}
            for a custom quote.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
