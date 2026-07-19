import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How to Fix Peeling Paint & Dampness | Skypaints",
  description:
    "A permanent solution to peeling paint, flaking walls, and dampness in Indian homes.",
};

export default function FixingPeelingPaintPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-x-hidden">
        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
            Practical Guides & DIY
          </span>
          <h1 className="text-5xl lg:text-7xl font-headline tracking-tight text-primary leading-tight mb-8">
            How to Fix Peeling Paint, Flaking Walls, and Dampness Permanently
          </h1>
          <div className="flex items-center justify-center gap-4 text-on-surface-variant font-medium">
            <span>By Skypaints Technical Team</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </header>

        {/* Hero Image */}
        <div
          className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl mb-24 relative h-[600px] animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <Image
            alt="A close up of someone scraping away damaged, peeling paint before applying a waterproof primer"
            src="/images/blog-peeling-paint.webp"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <article
          className="max-w-3xl mx-auto prose prose-lg prose-headings:font-headline prose-headings:text-primary prose-p:text-on-surface-variant prose-a:text-secondary hover:prose-a:text-primary transition-colors animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <p className="lead text-2xl text-primary font-medium mb-8">
            It is the nightmare of every homeowner: you invest in a beautiful
            paint job, only to see it blister, flake, and peel away a few months
            later. In India, this dreaded phenomenon—often referred to as
            'chhappat' or efflorescence—is almost always caused by one culprit:
            underlying dampness.
          </p>

          <h2>The Root Cause: Moisture</h2>
          <p>
            Paint does not peel on its own. When moisture enters the masonry
            (from leaking pipes, groundwater capillary action, or exterior rain
            seepage), it gets trapped behind the paint film. As temperatures
            rise, the water tries to evaporate, pushing against the paint and
            causing it to blister and eventually flake off, leaving behind a
            powdery white salt deposit (efflorescence).
          </p>

          <h2>The Mistake You Must Avoid</h2>
          <p>
            The most common mistake people make is simply scraping off the
            peeling paint and applying a fresh coat over it. This is a temporary
            band-aid. Unless you treat the source of the dampness and prep the
            surface correctly, the new paint will peel off in exactly the same
            way.
          </p>

          <h2>The 4-Step Permanent Fix</h2>

          <h3>Step 1: Identify and Fix the Source</h3>
          <p>
            Before opening a paint can, call a plumber. Check for leaking
            internal pipes, roof seepage, or cracks in the exterior walls. If
            groundwater is rising (rising damp), you may need structural
            damp-proofing. Fix the leak, and let the wall dry out completely.
          </p>

          <h3>Step 2: Scrape and Clean (Surface Prep)</h3>
          <p>
            Use a wire brush and putty knife to vigorously scrape away all
            loose, flaking paint and white powdery deposits. You must get down
            to the bare, sound plaster. Wipe the wall clean with a damp cloth to
            remove any residual dust.
          </p>

          <div className="bg-surface-container-low p-8 rounded-3xl my-12 border-l-4 border-secondary">
            <h3 className="text-secondary mt-0">
              Crucial Product: Damp-Proof Base Coat
            </h3>
            <p className="mb-0">
              This is the step that guarantees permanence. Apply a specialized
              interior waterproofing base coat or damp-block primer. These
              products penetrate the masonry, crystallize, and form a strong
              water-resistant barrier that stops moisture from reaching the
              topcoat.
            </p>
          </div>

          <h3>Step 3: Patch and Level with Putty</h3>
          <p>
            Once the damp-proof base coat is dry, the wall will likely be uneven
            from the scraping. Apply a high-quality, water-resistant wall putty
            (like an acrylic or cement-based putty) to fill in the dents and
            level the surface. Let it dry, and sand it smooth.
          </p>

          <h3>Step 4: Prime and Paint</h3>
          <p>
            Finally, apply a coat of standard interior wall primer over the
            putty. Once dry, you can safely apply two coats of your chosen
            emulsion paint. Your wall is now protected, and the paint is
            guaranteed to stay intact for years!
          </p>
        </article>

        {/* CTA */}
        <section
          className="max-w-4xl mx-auto mt-24 bg-primary-container rounded-[3rem] p-12 md:p-16 text-center animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-4xl font-headline text-on-primary mb-6">
            Stop painting over the problem.
          </h2>
          <p className="text-xl text-on-primary-container mb-10 max-w-2xl mx-auto">
            Get it right the first time. Shop our range of professional-grade
            wall putties, damp-block primers, and waterproofing base coats.
          </p>
          <Link
            href="/products"
            className="bg-secondary-fixed text-on-secondary-fixed rounded-full px-10 py-5 font-bold text-lg hover:bg-secondary-fixed-dim transition-colors shadow-lg inline-block"
          >
            Shop Putty & Primers
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
