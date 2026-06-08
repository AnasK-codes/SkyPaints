import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InspirationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32 animate-fade-in-up">
          <div className="space-y-8 pr-8">
            <h1 className="text-5xl lg:text-7xl font-headline tracking-tight text-primary leading-tight">
              Ideas, colours, and care for every wall.
            </h1>
            <p className="text-lg text-on-surface-variant font-medium leading-relaxed max-w-lg">
              Explore painting tips, colour inspiration, and expert advice to
              transform your spaces into living art.
            </p>
            <div className="pt-4">
              <a
                href="#latest-inspiration"
                className="gradient-btn text-on-primary rounded-full px-8 py-4 font-medium hover:shadow-[0_4px_20px_rgba(46,16,101,0.2)] transition-shadow inline-block"
              >
                Read Latest Articles
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-[0px_12px_40px_rgba(46,16,101,0.08)] relative h-[600px]">
              <Image
                alt="A modern living room painted in a serene soft lavender hue"
                src="/images/inspiration-hero.png"
                fill
                priority
                className="object-cover"
              />
            </div>
            {/* Floating Quote */}
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-[2rem] shadow-[0px_12px_40px_rgba(46,16,101,0.08)] max-w-sm glass-nav z-10 hidden md:block border border-outline-variant/10">
              <p className="font-headline text-xl text-primary italic leading-snug">
                “Every wall has a story. We help you choose its mood.”
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section
          className="mb-24 animate-fade-in-up"
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          <div className="bg-surface-container-lowest rounded-[3rem] overflow-hidden shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover-lift flex flex-col md:flex-row group">
            <div className="md:w-1/2 h-80 md:h-auto overflow-hidden relative">
              <Image
                alt="A close-up shot of luxurious, thick paint being applied to a canvas"
                src="/images/blog-featured-finish.png"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-surface-container-low">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
                Colour Guide
              </span>
              <h2 className="text-4xl font-headline text-primary mb-6 leading-tight">
                How to choose the perfect paint finish for your home.
              </h2>
              <p className="text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                Understanding the difference between matte, eggshell, satin, and
                gloss can dramatically alter the perception of space, light, and
                texture in any room. Discover the ideal sheen for every surface.
              </p>
              <Link
                className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all w-fit"
                href="/inspiration/how-to-choose-paint-finish"
              >
                Read Full Article{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section
          id="latest-inspiration"
          className="mb-32 animate-fade-in-up"
          style={{ animationDelay: "300ms", animationFillMode: "both" }}
        >
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-4xl font-headline text-primary">
              Latest Inspiration
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <article className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover-lift flex flex-col group relative">
              <Link
                href="/inspiration/cost-to-paint-2bhk-3bhk-india"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Read Cost to Paint Guide</span>
              </Link>
              <div className="h-64 overflow-hidden relative">
                <Image
                  alt="A beautifully painted modern Indian living room with warm lighting"
                  src="/images/blog-cost.png"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-surface-container">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3">
                  Guide
                </span>
                <h4 className="text-2xl font-headline text-primary mb-4">
                  Cost to paint a 2BHK/3BHK in India (2026)
                </h4>
                <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-3">
                  Discover the exact cost to paint a 2BHK or 3BHK in India in
                  2026. Get our free paint calculator and accurate estimates.
                </p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover-lift flex flex-col group relative">
              <Link
                href="/inspiration/distemper-vs-emulsion"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Read Distemper vs Emulsion</span>
              </Link>
              <div className="h-64 overflow-hidden relative">
                <Image
                  alt="A detailed close-up showing the textural difference between two painted surfaces"
                  src="/images/blog-distemper.png"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-surface-container">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3">
                  Technical
                </span>
                <h4 className="text-2xl font-headline text-primary mb-4">
                  Distemper vs Emulsion
                </h4>
                <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-3">
                  A comprehensive breakdown of traditional versus modern paint
                  formulations and which is right for your project.
                </p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover-lift flex flex-col group relative">
              <Link
                href="/inspiration/why-waterproofing-matters"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Read Why waterproofing matters</span>
              </Link>
              <div className="h-64 overflow-hidden relative">
                <Image
                  alt="An exterior shot of a modern, minimalist house wall during a light rain shower"
                  src="/images/blog-waterproofing.png"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-surface-container">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3">
                  Care
                </span>
                <h4 className="text-2xl font-headline text-primary mb-4">
                  Why waterproofing matters
                </h4>
                <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-3">
                  Protect your home's structural integrity and aesthetics
                  against moisture damage with proactive exterior care.
                </p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </article>

            {/* Card 4 */}
            <article className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover-lift flex flex-col group relative">
              <Link
                href="/inspiration/heat-reflective-paints"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Read Heat-Reflective Paints</span>
              </Link>
              <div className="h-64 overflow-hidden relative">
                <Image
                  alt="A beautifully painted bright exterior of an Indian home basking in sunlight"
                  src="/images/blog-heat-reflect.png"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-surface-container">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3">
                  Weather
                </span>
                <h4 className="text-2xl font-headline text-primary mb-4">
                  Top 5 Heat-Reflective Exterior Paints
                </h4>
                <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-3">
                  Keep your Indian home cool this summer with our top 5
                  heat-reflective exterior paints designed for harsh weather.
                </p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </article>

            {/* Card 5 */}
            <article className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover-lift flex flex-col group relative">
              <Link
                href="/inspiration/vastu-compliant-colours"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Read Vastu-Compliant Colours</span>
              </Link>
              <div className="h-64 overflow-hidden relative">
                <Image
                  alt="A beautifully lit living room featuring a calming vastu-compliant pale yellow wall"
                  src="/images/blog-vastu-yellow.png"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-surface-container">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3">
                  Planning
                </span>
                <h4 className="text-2xl font-headline text-primary mb-4">
                  Top 10 Vastu-Compliant Colours
                </h4>
                <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-3">
                  Discover the best Vastu-compliant colours for your home to
                  invite wealth, peace, and positivity in 2026.
                </p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </article>

            {/* Card 6 */}
            <article className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover-lift flex flex-col group relative">
              <Link
                href="/inspiration/trending-colour-combinations"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">
                  Read Trending Colour Combinations
                </span>
              </Link>
              <div className="h-64 overflow-hidden relative">
                <Image
                  alt="A stunning modern living room with a two-tone colour combination"
                  src="/images/blog-trending-colours.png"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-surface-container">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3">
                  Trends
                </span>
                <h4 className="text-2xl font-headline text-primary mb-4">
                  Trending Colour Combinations
                </h4>
                <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-3">
                  Discover the hottest interior colour combinations for Indian
                  living rooms in 2026.
                </p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* Editorial Feature */}
        <section
          className="mb-32 animate-fade-in-up"
          style={{ animationDelay: "400ms", animationFillMode: "both" }}
        >
          <div className="bg-primary-container rounded-[3rem] overflow-hidden text-on-primary flex flex-col lg:flex-row relative">
            <div className="lg:w-5/12 p-12 md:p-20 flex flex-col justify-center z-10 relative">
              <h2 className="text-4xl md:text-5xl font-headline mb-6 leading-tight">
                Good colour starts with good surface care.
              </h2>
              <p className="text-on-primary-container text-lg mb-10 leading-relaxed">
                The secret to a flawless, enduring finish isn't just the quality
                of the paint—it's the preparation beneath it. Discover our
                professional techniques for priming, patching, and smoothing.
              </p>
              <Link
                href="/inspiration/interior-wall-painting-checklist"
                className="bg-surface-container-lowest text-primary rounded-full px-8 py-4 font-bold w-fit hover:bg-surface transition-colors shadow-[0px_12px_40px_rgba(0,0,0,0.2)] inline-block text-center"
              >
                Explore Surface Prep
              </Link>
            </div>
            <div className="lg:w-7/12 relative h-96 lg:h-auto overflow-hidden">
              <Image
                alt="A highly detailed, macro photograph of a textured wall surface being carefully smoothed"
                src="/images/inspiration-editorial.png"
                fill
                className="object-cover opacity-90"
              />
              {/* Floating Card inside image */}
              <div className="absolute bottom-8 right-8 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-[1.5rem] shadow-[0px_12px_40px_rgba(46,16,101,0.15)] max-w-xs text-on-surface hidden md:flex items-start gap-4">
                <div className="bg-secondary-container text-on-secondary-container p-3 rounded-full flex-shrink-0">
                  <span className="material-symbols-outlined">
                    auto_awesome
                  </span>
                </div>
                <div>
                  <h5 className="font-headline font-bold text-primary mb-1">
                    Pro Tip
                  </h5>
                  <p className="text-sm text-on-surface-variant">
                    Always sand between primer coats for a glass-like final
                    finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Guides & Newsletter */}
        <section
          className="grid lg:grid-cols-12 gap-12 mb-24 animate-fade-in-up"
          style={{ animationDelay: "500ms", animationFillMode: "both" }}
        >
          {/* Popular Guides (Left side, 7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-3xl font-headline text-primary mb-8">
              Popular Guides
            </h3>
            <div className="flex flex-col gap-4">
              {/* Compact Card 1 */}
              <Link
                className="bg-surface-container-low rounded-2xl p-4 pr-6 flex items-center gap-6 hover:bg-surface-container transition-colors group"
                href="/inspiration/interior-wall-painting-checklist"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <Image
                    alt="A neatly organized collection of professional painting tools"
                    src="/images/blog-checklist.png"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-headline text-primary font-bold mb-1 group-hover:text-secondary transition-colors">
                    Interior wall painting checklist
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Everything you need before opening the can.
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </Link>

              {/* Compact Card 2 */}
              <Link
                className="bg-surface-container-low rounded-2xl p-4 pr-6 flex items-center gap-6 hover:bg-surface-container transition-colors group"
                href="/inspiration/how-to-use-dark-colours"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <Image
                    alt="A sophisticated dining room corner featuring dark, dramatic accent walls"
                    src="/images/blog-dark-colours.png"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-headline text-primary font-bold mb-1 group-hover:text-secondary transition-colors">
                    How to use dark colours confidently
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Balancing deep tones with light and texture.
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </Link>

              {/* Compact Card 3 */}
              <Link
                className="bg-surface-container-low rounded-2xl p-4 pr-6 flex items-center gap-6 hover:bg-surface-container transition-colors group"
                href="/inspiration/safe-paints-for-nurseries"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <Image
                    alt="A bright, sunlit kitchen featuring soft pastel cabinets"
                    src="/images/blog-safe-paints.png"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-headline text-primary font-bold mb-1 group-hover:text-secondary transition-colors">
                    Choosing safe paints for nurseries
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Understanding low-VOC and zero-VOC options.
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </Link>

              {/* Compact Card 4 */}
              <Link
                className="bg-surface-container-low rounded-2xl p-4 pr-6 flex items-center gap-6 hover:bg-surface-container transition-colors group"
                href="/inspiration/wall-texture-designs"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <Image
                    alt="A close up of a luxurious metallic textured accent wall in a modern bedroom"
                    src="/images/blog-texture-designs.png"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-headline text-primary font-bold mb-1 group-hover:text-secondary transition-colors">
                    15 Modern wall texture designs
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Give your bedroom a luxury makeover.
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </Link>

              {/* Compact Card 5 */}
              <Link
                className="bg-surface-container-low rounded-2xl p-4 pr-6 flex items-center gap-6 hover:bg-surface-container transition-colors group"
                href="/inspiration/fixing-peeling-paint"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <Image
                    alt="A close up of someone scraping away damaged, peeling paint before applying a waterproof primer"
                    src="/images/blog-peeling-paint.png"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-headline text-primary font-bold mb-1 group-hover:text-secondary transition-colors">
                    How to fix peeling paint
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    A permanent solution to flaking walls.
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Newsletter (Right side, 5 cols) */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="bg-primary-container text-on-primary rounded-[2rem] p-10 flex flex-col justify-center w-full shadow-[0px_12px_40px_rgba(46,16,101,0.08)]">
              <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-6">
                mail
              </span>
              <h3 className="text-3xl font-headline mb-4">
                Curated Inspiration, Delivered.
              </h3>
              <p className="text-on-primary-container mb-8">
                Join our newsletter for exclusive colour trends, professional
                tips, and early access to new collections.
              </p>
              <form className="space-y-4">
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-highest/20 border border-outline/30 rounded-full py-4 px-6 text-on-primary placeholder:text-on-primary-container/70 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-colors"
                    placeholder="Your email address"
                    type="email"
                  />
                </div>
                <a
                  href="https://wa.me/917999295796"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-secondary-fixed text-on-secondary-fixed font-bold rounded-full py-4 px-6 hover:bg-secondary-fixed-dim transition-colors shadow-md text-center block"
                >
                  Contact on WhatsApp
                </a>
              </form>
              <p className="text-xs text-on-primary-container/60 mt-4 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="bg-primary-container rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden animate-fade-in-up"
          style={{ animationDelay: "600ms", animationFillMode: "both" }}
        >
          {/* Decorative gradient orb */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="max-w-3xl mx-auto z-10 relative">
            <h2 className="text-4xl md:text-6xl font-headline text-on-primary mb-6 leading-tight">
              Planning your next wall transformation?
            </h2>
            <p className="text-xl text-on-primary-container mb-12">
              Let our colour experts guide you to the perfect shade and finish
              for your space.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-secondary-fixed text-on-secondary-fixed rounded-full px-8 py-4 font-bold hover:bg-secondary-fixed-dim transition-colors shadow-lg text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="/products"
                className="bg-transparent border border-outline-variant/30 text-on-primary rounded-full px-8 py-4 font-bold hover:bg-surface-container-highest/10 transition-colors text-center"
              >
                Explore Collections
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
