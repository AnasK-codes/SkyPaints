export default function BentoGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <h2 className="mb-10 text-center font-headline text-3xl text-primary sm:mb-14 sm:text-4xl lg:mb-16 lg:text-5xl">
        Everything a Home Needs
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6">
        {/* Left big card */}
        <article className="relative overflow-hidden rounded-[32px] bg-[#f2edff] p-6 sm:p-8 lg:col-span-6 lg:min-h-[760px] lg:p-10">
          <div className="flex h-full flex-col">
            <div className="relative z-10 max-w-md">
              <h3 className="font-headline text-3xl text-[#24155d] sm:text-4xl">
                The Architectural Series
              </h3>
              <p className="mt-4 max-w-sm text-base leading-7 text-[#5f5a72] sm:text-lg">
                Ultra-smooth emulsions designed for elegant interiors, durable
                exteriors, and lasting wall protection.
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-[#6a5fa833] bg-white/45 px-4 py-2 text-xs font-semibold tracking-wide text-[#24155d] backdrop-blur-sm">
                  MATTE
                </span>
                <span className="rounded-full border border-[#6a5fa833] bg-white/45 px-4 py-2 text-xs font-semibold tracking-wide text-[#24155d] backdrop-blur-sm">
                  SCUFF-PROOF
                </span>
              </div>

              {/* Geometric building shapes */}
              <div className="relative h-[280px] w-full sm:w-[60%] lg:h-[420px] lg:w-[62%]">
                <div className="absolute bottom-0 left-[10%] h-[70%] w-[28%] rounded-t-[8px] bg-gradient-to-t from-[#c4b5f0] to-[#d8cef5] shadow-lg" />
                <div className="absolute bottom-0 left-[28%] h-[90%] w-[22%] rounded-t-[4px] bg-gradient-to-t from-[#a594e0] to-[#c4b5f0] shadow-xl" />
                <div className="absolute bottom-0 left-[22%] h-[55%] w-[35%] rounded-t-[6px] bg-gradient-to-t from-[#b8a8e8] to-[#d0c4f2]" />
                <div className="absolute bottom-0 right-[15%] h-[80%] w-[30%] rounded-t-[6px] bg-gradient-to-t from-[#9384d4] to-[#b8a8e8] shadow-xl" />
                <div className="absolute bottom-0 right-[8%] h-[45%] w-[20%] rounded-t-[4px] bg-gradient-to-t from-[#c4b5f0] to-[#ddd5f7]" />
                {/* Windows */}
                <div className="absolute bottom-[35%] left-[32%] h-[8%] w-[6%] rounded-[2px] bg-white/40" />
                <div className="absolute bottom-[50%] left-[32%] h-[8%] w-[6%] rounded-[2px] bg-white/40" />
                <div className="absolute bottom-[25%] right-[24%] h-[8%] w-[7%] rounded-[2px] bg-white/30" />
                <div className="absolute bottom-[40%] right-[24%] h-[8%] w-[7%] rounded-[2px] bg-white/30" />
                <div className="absolute bottom-[55%] right-[24%] h-[8%] w-[7%] rounded-[2px] bg-white/30" />
                {/* Ground shadow */}
                <div className="absolute bottom-0 left-[5%] h-[3px] w-[85%] rounded-full bg-[#9384d4]/30 blur-[2px]" />
              </div>
            </div>
          </div>
        </article>

        {/* Right column */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-6">
          {/* Wide top card */}
          <article className="relative overflow-hidden rounded-[32px] bg-[#f9d9ab] p-6 sm:p-8 sm:col-span-2 lg:min-h-[330px] lg:p-8">
            <div className="flex h-full flex-col gap-6 md:grid md:grid-cols-[1.05fr_0.95fr] md:items-end">
              <div className="relative z-10 max-w-md">
                <h3 className="font-headline text-2xl text-[#3d2a16] sm:text-3xl">
                  Heritage Gloss
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#7a5b33] sm:text-base">
                  High-shine enamels for timeless woodwork.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#7a5b3340] bg-white/30 px-4 py-2 text-xs font-semibold tracking-wide text-[#3d2a16] backdrop-blur-sm">
                    WOOD
                  </span>
                  <span className="rounded-full border border-[#7a5b3340] bg-white/30 px-4 py-2 text-xs font-semibold tracking-wide text-[#3d2a16] backdrop-blur-sm">
                    METAL
                  </span>
                </div>
              </div>

              {/* Paint color fan / swatches */}
              <div className="relative z-10 flex h-[240px] w-full items-end justify-center md:h-[270px]">
                <div className="relative h-[200px] w-[260px] md:h-[230px] md:w-[300px]">
                  {/* Fan of color cards */}
                  <div className="absolute bottom-[10%] left-1/2 h-[75%] w-[52px] origin-bottom -translate-x-1/2 -rotate-[28deg] rounded-[10px] bg-gradient-to-b from-[#e8c68a] to-[#c9a055] shadow-md md:w-[58px]" />
                  <div className="absolute bottom-[10%] left-1/2 h-[80%] w-[52px] origin-bottom -translate-x-1/2 -rotate-[14deg] rounded-[10px] bg-gradient-to-b from-[#d4956a] to-[#b06e42] shadow-md md:w-[58px]" />
                  <div className="absolute bottom-[10%] left-1/2 h-[85%] w-[52px] origin-bottom -translate-x-1/2 rotate-0 rounded-[10px] bg-gradient-to-b from-[#f5e0c0] to-[#e0c494] shadow-lg md:w-[58px]" />
                  <div className="absolute bottom-[10%] left-1/2 h-[80%] w-[52px] origin-bottom -translate-x-1/2 rotate-[14deg] rounded-[10px] bg-gradient-to-b from-[#a0633e] to-[#7a4526] shadow-md md:w-[58px]" />
                  <div className="absolute bottom-[10%] left-1/2 h-[75%] w-[52px] origin-bottom -translate-x-1/2 rotate-[28deg] rounded-[10px] bg-gradient-to-b from-[#c48b52] to-[#9a6a36] shadow-md md:w-[58px]" />
                  {/* Pivot dot */}
                  <div className="absolute bottom-[8%] left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#3d2a16]/20 shadow-inner" />
                </div>
              </div>
            </div>
          </article>

          {/* Small card — Kitchen & Bath */}
          <article className="relative overflow-hidden rounded-[32px] bg-[#ece7f6] p-6 sm:p-8 min-h-[320px]">
            <div className="flex h-full flex-col items-center justify-between text-center">
              {/* Floating bubbles / droplets */}
              <div className="relative h-[180px] w-[200px] sm:h-[160px] sm:w-[190px]">
                <div className="animate-float-slow absolute left-[15%] top-[20%] h-16 w-16 rounded-full bg-gradient-to-br from-[#c5dbf7] to-[#a8c8f0] opacity-80 shadow-md" />
                <div className="animate-float-medium absolute right-[10%] top-[10%] h-12 w-12 rounded-full bg-gradient-to-br from-[#d0c5f0] to-[#b5a6e3] opacity-70 shadow-md" />
                <div className="animate-float-fast absolute bottom-[15%] left-[30%] h-20 w-20 rounded-full bg-gradient-to-br from-[#dce6fa] to-[#c0d4f5] opacity-90 shadow-lg" />
                <div className="animate-float-medium absolute bottom-[30%] right-[18%] h-10 w-10 rounded-full bg-gradient-to-br from-[#e8e0f8] to-[#cfc2ed] opacity-60 shadow-sm" />
                <div className="animate-float-slow absolute left-[5%] bottom-[5%] h-7 w-7 rounded-full bg-gradient-to-br from-[#b5cef0] to-[#94b5e5] opacity-50" />
                {/* Sparkle accents */}
                <div className="absolute left-[50%] top-[5%] h-2 w-2 rounded-full bg-white/80 shadow-[0_0_6px_2px_rgba(255,255,255,0.5)]" />
                <div className="absolute right-[30%] bottom-[40%] h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_4px_1px_rgba(255,255,255,0.4)]" />
              </div>

              <div>
                <h3 className="font-bold text-primary text-xl">
                  Kitchen &amp; Bath
                </h3>
                <p className="mt-2 text-sm text-[#6c6780]">
                  Steam resistant &amp; antimicrobial.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-primary/20 bg-white/50 px-3 py-1 text-[10px] font-bold tracking-wide text-primary backdrop-blur-sm">
                  WASHABLE
                </span>
                <span className="rounded-full border border-primary/20 bg-white/50 px-3 py-1 text-[10px] font-bold tracking-wide text-primary backdrop-blur-sm">
                  ANTI-FUNGAL
                </span>
              </div>
            </div>
          </article>

          {/* Dark card — Exterior Guard */}
          <article className="relative overflow-hidden rounded-[32px] bg-[#220047] p-6 text-white sm:p-8 min-h-[320px]">
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold sm:text-3xl">
                  Exterior Guard
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/75 sm:text-base">
                  Weather protection for up to 15 years.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold tracking-wide text-white backdrop-blur-sm">
                    UV-RESISTANT
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold tracking-wide text-white backdrop-blur-sm">
                    WATERPROOF
                  </span>
                </div>
              </div>

              {/* Shield / protection visual */}
              <div className="relative flex h-[180px] w-full items-center justify-center sm:h-[200px]">
                {/* Glowing rings */}
                <div className="absolute h-[140px] w-[140px] rounded-full border-[2px] border-white/[0.08] sm:h-[160px] sm:w-[160px]" />
                <div className="absolute h-[100px] w-[100px] rounded-full border-[2px] border-white/[0.12] sm:h-[115px] sm:w-[115px]" />
                <div className="absolute h-[60px] w-[60px] rounded-full border-[2px] border-white/[0.18] sm:h-[70px] sm:w-[70px]" />
                {/* Center glow */}
                <div className="absolute h-[80px] w-[80px] rounded-full bg-gradient-to-br from-purple-500/25 to-indigo-500/15 blur-xl sm:h-[100px] sm:w-[100px]" />
                {/* Shield icon */}
                <svg viewBox="0 0 64 64" className="relative z-10 h-12 w-12 sm:h-14 sm:w-14" fill="none">
                  <path
                    d="M32 6 L54 18 V36 C54 48 44 57 32 60 C20 57 10 48 10 36 V18 Z"
                    stroke="url(#shieldGrad)"
                    strokeWidth="2.5"
                    fill="url(#shieldFill)"
                  />
                  <path
                    d="M24 32 L30 38 L42 26"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="shieldGrad" x1="10" y1="6" x2="54" y2="60">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="shieldFill" x1="10" y1="6" x2="54" y2="60">
                      <stop offset="0%" stopColor="rgba(167,139,250,0.15)" />
                      <stop offset="100%" stopColor="rgba(124,58,237,0.08)" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Ambient glow spots */}
                <div className="absolute -bottom-6 -right-6 h-[120px] w-[120px] rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-600/10 blur-3xl" />
                <div className="absolute -left-4 -top-4 h-[80px] w-[80px] rounded-full bg-gradient-to-tr from-violet-400/15 to-fuchsia-500/10 blur-2xl" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
