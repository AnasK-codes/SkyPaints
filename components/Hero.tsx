import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export default function Hero({
  title = "Transform Your Home with Expert Painting",
  subtitle = "Professional interior, exterior, and waterproofing services. Flawless finishes backed by a satisfaction guarantee.",
  ctaPrimary = { label: "Get a Free Quote", href: "/contact" },
  ctaSecondary = { label: "View Our Work", href: "/portfolio" },
}: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950"
      />

      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="badge animate-fade-in-up">
            ✨ Trusted by 500+ Homeowners
          </div>

          {/* Heading */}
          <h1 className="section-heading max-w-4xl animate-fade-in-up text-4xl sm:text-5xl lg:text-7xl">
            {title.split("Expert Painting").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="gradient-text">Expert Painting</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              ),
            )}
          </h1>

          {/* Subtitle */}
          <p className="section-subheading animate-fade-in-up">{subtitle}</p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up">
            <Link
              href={ctaPrimary.href}
              className="btn-primary text-base px-8 py-4"
            >
              {ctaPrimary.label} →
            </Link>
            <Link
              href={ctaSecondary.href}
              className="btn-secondary text-base px-8 py-4"
            >
              {ctaSecondary.label}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-8 sm:gap-16 animate-fade-in-up">
            {[
              { value: "500+", label: "Projects Done" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black gradient-text">
                  {value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-slate-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
