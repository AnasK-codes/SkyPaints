import { TESTIMONIALS } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-950" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="badge">Testimonials</div>
          <h2 className="section-heading">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subheading">
            Real stories from real homeowners who trusted us with their most
            important spaces.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, text, rating, avatar }) => (
            <div key={name} className="card flex flex-col gap-4">
              <StarRating rating={rating} />
              <p className="flex-1 text-slate-300 text-sm leading-relaxed italic">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-sm font-bold text-white">
                  {avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-100">
                    {name}
                  </div>
                  <div className="text-xs text-slate-500">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
