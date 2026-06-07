import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Distemper vs Emulsion: Which is Right for You? | SkyPaints",
  description: "A comprehensive breakdown of traditional versus modern paint formulations, covering chemistry, durability, cost, and which is right for your project.",
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
              Distemper vs Emulsion: Making the Right Choice
            </h1>
            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
              <span>May 20, 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="w-full h-[400px] md:h-[500px] relative rounded-[2rem] overflow-hidden mb-16 animate-fade-in-up shadow-[0px_12px_40px_rgba(46,16,101,0.08)]" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <Image
              alt="A detailed close-up showing the textural difference between two painted surfaces"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7DnT1t18w6XKoxcuajO4pRkU283EBJkkmHchhqdDqU1dIUcJkf1kn6cV1UQoI9yvuDntiGMEYRwsM-r5r658Lpb_-z8Q4LvvNSY7xJSDEi7CKhby5pRHjm0JShpI6HL3f1fD3PIObgw348QLFrPmqTlSeoEUJh3oID6oEP1Rxmr5LaZoMIdiLMeKcxMWGLMxa022UMiKeFxriYAD4Y5HA6DpC66gMDHRmv2dXlUt5Y4LZlEAKBtIDd1KMmemFSCiJPryke1l8duY"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-on-surface-variant prose-headings:font-headline prose-headings:text-primary prose-a:text-secondary animate-fade-in-up space-y-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <p className="text-xl leading-relaxed font-medium">
              When deciding to paint your home in India, you will inevitably run into the two most common types of interior wall paints: Distemper and Emulsion. They cater to completely different budgets, expectations, and lifetimes. But what exactly is the chemical difference, and which one should you choose?
            </p>

            <p className="leading-relaxed">
              Choosing the wrong paint can result in either wasting money on a temporary rental property or, conversely, facing peeling walls and un-washable stains in a forever home. Let's break down everything you need to know.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">What is Distemper? (The Traditional Choice)</h2>
            <p className="leading-relaxed mb-4">
              Distemper is one of the oldest forms of paint known to mankind. Historically, it was made from chalk, lime, water, and animal glue. Today's modern "acrylic distempers" are slightly upgraded with synthetic resins to improve longevity, but they remain a very basic, economical choice.
            </p>
            <p className="leading-relaxed mb-4">
              Because it is essentially colored chalk mixed with water, it leaves a very matte, powdery finish. It does not create a strong, flexible film over the wall.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Advantages of Distemper:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Highly Affordable:</strong> It is significantly cheaper than emulsion, making it the go-to choice for massive commercial projects or budget housing.</li>
              <li><strong>Breathable:</strong> Because it doesn't form a thick plastic film, it allows walls to breathe, which can be beneficial for older, damp masonry.</li>
              <li><strong>Minimal Prep:</strong> It often doesn't require a primer before application—just a coat of putty is usually enough.</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Disadvantages of Distemper:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Not Washable:</strong> If you wipe a distemper wall with a wet cloth, the paint will come off onto the cloth.</li>
              <li><strong>Low Durability:</strong> It fades faster, cracks easily under stress, and typically needs repainting every 2-3 years.</li>
              <li><strong>Chalky Finish:</strong> Brushing against the wall can sometimes leave a white, chalky residue on your clothes.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">What is Emulsion? (The Modern Standard)</h2>
            <p className="leading-relaxed mb-4">
              Emulsion is a water-based paint where pigment particles are suspended in water along with acrylic or vinyl resins. When the water evaporates, the resins bind together to form a tough, flexible, and continuous microscopic film over your wall.
            </p>
            <p className="leading-relaxed mb-4">
              This film-forming capability is what gives emulsion its superpower: washability and immense durability. It is the standard choice for modern homes across the globe.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Advantages of Emulsion:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Washable:</strong> Stains, pencil marks, and dirt can be wiped off with a damp sponge without damaging the paint.</li>
              <li><strong>Highly Durable:</strong> A good quality emulsion can easily last 5 to 10 years without fading or peeling.</li>
              <li><strong>Versatile Finishes:</strong> It is available in matte, eggshell, satin, and high-gloss finishes.</li>
              <li><strong>Fungus Resistant:</strong> Most premium emulsions contain additives that resist mold and mildew.</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Disadvantages of Emulsion:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>More Expensive:</strong> It costs 2x to 5x more per liter compared to distemper.</li>
              <li><strong>Requires Prep:</strong> You must properly prepare the wall with wall putty and a dedicated primer coat, which adds to labor and material costs.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Cost Comparison (2026 Estimates)</h2>
            <div className="overflow-x-auto mb-8 rounded-2xl shadow-sm border border-outline-variant/30">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low text-primary">
                    <th className="p-4 font-headline border-b border-outline-variant/30">Feature</th>
                    <th className="p-4 font-headline border-b border-outline-variant/30">Acrylic Distemper</th>
                    <th className="p-4 font-headline border-b border-outline-variant/30">Premium Emulsion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  <tr>
                    <td className="p-4 font-medium text-primary">Lifespan</td>
                    <td className="p-4">2 - 3 Years</td>
                    <td className="p-4">5 - 10 Years</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-primary">Washability</td>
                    <td className="p-4">Zero to Low</td>
                    <td className="p-4">High (Scrub-resistant)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-primary">Finish Options</td>
                    <td className="p-4">Matte only</td>
                    <td className="p-4">Matte, Satin, Silk, Gloss</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-primary">Approx. Cost (with labor)</td>
                    <td className="p-4">₹10 - ₹15 per sq.ft.</td>
                    <td className="p-4">₹25 - ₹40 per sq.ft.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">The Final Verdict</h2>
            <p className="leading-relaxed mb-12">
              If you are painting a rental property, a godown, or are on a very strict budget and plan to repaint in a couple of years anyway, <strong>Distemper</strong> is a practical, economical choice. However, if you are painting your own forever home, have kids or pets, and want a finish that looks premium, lasts for a decade, and can be wiped clean, <strong>Emulsion</strong> is undoubtedly the better long-term investment.
            </p>

          </div>
        </article>

        {/* CTA */}
        <section className="max-w-4xl mx-auto mt-24 bg-primary-container rounded-[3rem] p-12 md:p-16 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-4xl font-headline text-on-primary mb-6">Ready to choose your perfect finish?</h2>
          <p className="text-xl text-on-primary-container mb-10 max-w-2xl mx-auto">
            Explore our premium range of emulsions designed for durability and a flawless look.
          </p>
          <Link href="/products" className="bg-secondary-fixed text-on-secondary-fixed rounded-full px-10 py-5 font-bold text-lg hover:bg-secondary-fixed-dim transition-colors shadow-lg inline-block">
            Explore Emulsions
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
