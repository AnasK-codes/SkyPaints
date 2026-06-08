import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Interior Wall Painting Checklist | SkyPaints",
  description: "Everything you need before opening the can to ensure a flawless interior paint job.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-x-hidden bg-surface">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12 animate-fade-in-up">
            <Link href="/inspiration" className="text-secondary font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2 hover:opacity-80 transition-opacity w-fit">
              <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Inspiration
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline tracking-tight text-primary leading-tight mb-6">
              The Ultimate Interior Wall Painting Checklist
            </h1>
            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
              <span>May 10, 2026</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="w-full h-[400px] md:h-[500px] relative rounded-[2rem] overflow-hidden mb-16 animate-fade-in-up shadow-[0px_12px_40px_rgba(46,16,101,0.08)]" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <Image
              alt="A neatly organized collection of professional painting tools"
              src="/images/blog-checklist.png"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-on-surface-variant prose-headings:font-headline prose-headings:text-primary prose-a:text-secondary animate-fade-in-up space-y-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <p className="text-xl leading-relaxed font-medium">
              A successful paint job is 80% preparation and 20% application. We've all seen DIY disasters: paint splattered on the skirting boards, visible roller lines, peeling corners, and patch marks showing through the final coat.
            </p>

            <p className="leading-relaxed">
              If you skip the prep work, even the most expensive, luxurious emulsion will look terrible. Before you pry open that paint can and dip your roller, make sure you've checked off every single item on this comprehensive checklist.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Phase 1: Room Preparation</h2>
            <p className="leading-relaxed mb-4">
              Don't assume you can just "be careful" around your furniture. Paint splatters are inevitable.
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li><strong>Clear the Room:</strong> Remove all lightweight furniture, electronics, and decor. Take down curtains, blinds, and wall hangings.</li>
              <li><strong>Center the Heavy Stuff:</strong> Move heavy sofas and beds to the absolute center of the room. Cover them completely with plastic drop cloths, ensuring no fabric is exposed.</li>
              <li><strong>Remove Hardware:</strong> Unscrew and remove all switch plates, outlet covers, and door hardware. Keep the screws in small ziplock bags taped to the back of the plates so you don't lose them.</li>
              <li><strong>Protect the Floors:</strong> Never use thin plastic sheets on the floor; they are slippery, tear easily, and paint can seep through the rips. Invest in heavy-duty canvas drop cloths. Secure the edges tight against the baseboards using painter's tape.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Phase 2: Wall Preparation (The Most Crucial Step)</h2>
            <p className="leading-relaxed mb-4">
              Paint is not a filler; it will not hide cracks or dents. In fact, a fresh coat of paint (especially a satin or gloss finish) will magnify imperfections.
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li><strong>Clean the Canvas:</strong> Wipe down the walls with a damp sponge and a mild detergent. Dust, cobwebs, and kitchen grease will prevent the new paint from adhering properly.</li>
              <li><strong>Scrape and Sand:</strong> Use a putty knife to scrape away any flaking or peeling old paint. Sand the edges of the scraped areas so there isn't a harsh ridge.</li>
              <li><strong>Patch the Holes:</strong> Fill nail holes, dents, and hairline cracks with a high-quality acrylic wall putty. Don't rush this. Apply it smoothly.</li>
              <li><strong>Sand Again:</strong> Once the putty is 100% dry, sand it down until it feels completely flush with the surrounding wall. Wipe away the sanding dust with a microfiber cloth.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Phase 3: Taping and Priming</h2>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li><strong>Tape the Edges:</strong> Use high-quality, edge-locking painter's tape (like the blue or green tapes)—do not use standard masking tape, which can bleed paint and leave a sticky residue. Tape along the ceiling line, windows, doors, and baseboards. Run a putty knife over the tape's edge to seal it firmly.</li>
              <li><strong>Apply the Primer:</strong> Primer is the glue that makes your paint stick and the shield that prevents old colors or stains from bleeding through. If you are painting a light color over a dark wall, or painting over patched putty, a coat of primer is absolutely mandatory.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Phase 4: Gathering the Right Tools</h2>
            <p className="leading-relaxed mb-4">
              A bad brush will leave bristles on your wall. A cheap roller will leave lint and uneven texture. Make sure you have:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Rollers:</strong> Use a short-nap roller (3/8-inch) for smooth walls, and a thicker nap (1/2-inch or more) for textured walls.</li>
              <li><strong>Brushes:</strong> Have a 2-inch or 2.5-inch angled synthetic brush for "cutting in" (painting the edges where the roller can't reach).</li>
              <li><strong>Accessories:</strong> A sturdy paint tray, disposable liners, a wooden stir stick, and an extension pole so you can paint from ceiling to floor in one smooth motion without straining your back.</li>
            </ul>
            
            <p className="leading-relaxed mb-12">
              Once you have everything checked off, you are finally ready to start applying that beautiful new color!
            </p>

            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-[2rem] shadow-sm text-center">
              <h3 className="text-2xl font-headline text-primary mb-4">Need the right tools for the job?</h3>
              <p className="text-on-surface-variant mb-8">Explore our professional-grade painting tools and accessories designed for a flawless finish.</p>
              <Link href="/products" className="bg-primary text-on-primary rounded-full px-8 py-3 font-bold hover:bg-primary/90 transition-colors inline-block">
                Shop Painting Tools
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
