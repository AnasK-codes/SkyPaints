const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Modern Living Room",
    tag: "Interior",
    color: "from-sky-500 to-blue-600",
    emoji: "🛋️",
  },
  {
    id: 2,
    title: "Craftsman Exterior",
    tag: "Exterior",
    color: "from-emerald-500 to-teal-600",
    emoji: "🏡",
  },
  {
    id: 3,
    title: "Basement Waterproofing",
    tag: "Waterproofing",
    color: "from-indigo-500 to-purple-600",
    emoji: "💧",
  },
  {
    id: 4,
    title: "Kitchen Cabinet Refresh",
    tag: "Interior",
    color: "from-amber-500 to-orange-600",
    emoji: "🍳",
  },
  {
    id: 5,
    title: "Victorian Facade",
    tag: "Exterior",
    color: "from-rose-500 to-pink-600",
    emoji: "🏠",
  },
  {
    id: 6,
    title: "Master Bedroom Suite",
    tag: "Interior",
    color: "from-violet-500 to-blue-600",
    emoji: "🛏️",
  },
];

const TAG_COLORS: Record<string, string> = {
  Interior: "bg-sky-500/20 text-sky-400",
  Exterior: "bg-emerald-500/20 text-emerald-400",
  Waterproofing: "bg-indigo-500/20 text-indigo-400",
};

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-slate-900/50" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="badge">Portfolio</div>
          <h2 className="section-heading">
            Our Recent <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subheading">
            Every brushstroke tells a story. Browse through a selection of our
            finest transformations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map(({ id, title, tag, color, emoji }) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Placeholder image */}
              <div
                className={`flex h-56 items-center justify-center bg-gradient-to-br ${color} text-6xl transition-transform group-hover:scale-105`}
              >
                {emoji}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span
                  className={`mb-2 self-start rounded-full px-3 py-1 text-xs font-semibold ${TAG_COLORS[tag]}`}
                >
                  {tag}
                </span>
                <h3 className="text-lg font-bold text-white">{title}</h3>
              </div>

              {/* Always-visible tag */}
              <div className="p-4 bg-slate-900">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${TAG_COLORS[tag]} mr-2`}
                >
                  {tag}
                </span>
                <span className="text-sm font-medium text-slate-200">
                  {title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
