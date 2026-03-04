import Link from "next/link";
import { SERVICES } from "@/lib/utils";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-950" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="badge">Our Services</div>
          <h2 className="section-heading">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subheading">
            From single rooms to full exterior treatments — we handle every
            project with precision and care.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ slug, title, description, icon, href }) => (
            <div
              key={slug}
              className="card group flex flex-col gap-4 glow-sky-hover"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-3xl transition-transform group-hover:scale-110">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100">{title}</h3>
              <p className="flex-1 text-sm text-slate-400 leading-relaxed">
                {description}
              </p>
              <Link
                href={href}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 transition-all hover:gap-3"
              >
                Learn more <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-secondary px-8 py-3">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
