import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and inspiration from the SkyPaints team — painting advice for every homeowner.",
};

const POSTS = [
  {
    slug: "choosing-the-right-paint-finish",
    title: "How to Choose the Right Paint Finish for Every Room",
    excerpt:
      "Matte, eggshell, satin, or semi-gloss? We break down exactly which finish works best in each area of your home.",
    date: "Feb 20, 2026",
    tag: "Interior Tips",
    readTime: "5 min read",
    emoji: "🎨",
  },
  {
    slug: "exterior-painting-seasons",
    title: "The Best (and Worst) Times to Paint Your Home's Exterior",
    excerpt:
      "Temperature and humidity play a huge role in paint adhesion. Here's when to schedule your exterior job for best results.",
    date: "Jan 15, 2026",
    tag: "Exterior Tips",
    readTime: "4 min read",
    emoji: "🌤️",
  },
  {
    slug: "signs-you-need-waterproofing",
    title: "5 Warning Signs Your Home Needs Waterproofing Now",
    excerpt:
      "Damp walls, peeling paint, or musty smells? Don't ignore these red flags — they can lead to costly structural damage.",
    date: "Dec 10, 2025",
    tag: "Waterproofing",
    readTime: "6 min read",
    emoji: "💧",
  },
  {
    slug: "colour-trends-2026",
    title: "2026 Home Colour Trends You Need to Know",
    excerpt:
      "From earthy terracottas to soft sage greens — discover the palettes that are defining homes this year.",
    date: "Mar 1, 2026",
    tag: "Trends",
    readTime: "3 min read",
    emoji: "🌿",
  },
];

const TAG_COLORS: Record<string, string> = {
  "Interior Tips": "bg-sky-500/20 text-sky-400",
  "Exterior Tips": "bg-emerald-500/20 text-emerald-400",
  Waterproofing: "bg-indigo-500/20 text-indigo-400",
  Trends: "bg-amber-500/20 text-amber-400",
};

export default function BlogPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mx-auto mb-6">Blog</div>
          <h1 className="section-heading mb-4">
            Painting <span className="gradient-text">Insights & Tips</span>
          </h1>
          <p className="section-subheading mx-auto">
            Expert advice from our team to help you make better decisions about
            your home.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {POSTS.map(
              ({ slug, title, excerpt, date, tag, readTime, emoji }) => (
                <article
                  key={slug}
                  className="card group flex flex-col gap-4 glow-sky-hover"
                >
                  <div className="flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 text-6xl transition-transform group-hover:scale-105">
                    {emoji}
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${TAG_COLORS[tag]}`}
                    >
                      {tag}
                    </span>
                    <span className="text-xs text-slate-500">{readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                    {title}
                  </h2>
                  <p className="flex-1 text-sm text-slate-400 leading-relaxed">
                    {excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <span className="text-xs text-slate-500">{date}</span>
                    <Link
                      href={`/blog/${slug}`}
                      className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
