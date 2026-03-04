import Link from "next/link";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export default function CTA({
  title = "Ready to Transform Your Home?",
  subtitle = "Get a free, no-obligation quote today. Our team is ready to bring your vision to life.",
  primary = { label: "Get a Free Quote", href: "/contact" },
  secondary = { label: "Call Us Now", href: "tel:+15551234567" },
}: CTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-900/50 via-blue-950/60 to-slate-950"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="badge mx-auto mb-6">Limited Time Offer</div>
        <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
          {title}
        </h2>
        <p className="section-subheading mx-auto mb-10">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href={primary.href} className="btn-primary px-8 py-4 text-base">
            {primary.label} →
          </Link>
          <Link
            href={secondary.href}
            className="btn-secondary px-8 py-4 text-base"
          >
            {secondary.label}
          </Link>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          No credit card required · 100% free consultation
        </p>
      </div>
    </section>
  );
}
