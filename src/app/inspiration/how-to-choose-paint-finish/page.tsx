import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How to choose the perfect paint finish for your home | SkyPaints",
  description: "Understanding the difference between matte, eggshell, satin, and gloss can dramatically alter the perception of space, light, and texture in any room.",
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
              How to choose the perfect paint finish for your home.
            </h1>
            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
              <span>May 24, 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="w-full h-[400px] md:h-[500px] relative rounded-[2rem] overflow-hidden mb-16 animate-fade-in-up shadow-[0px_12px_40px_rgba(46,16,101,0.08)]" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <Image
              alt="A close-up shot of luxurious, thick paint being applied to a canvas"
              src="/images/blog-featured-finish.png"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-on-surface-variant prose-headings:font-headline prose-headings:text-primary prose-a:text-secondary animate-fade-in-up space-y-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <p className="text-xl leading-relaxed font-medium">
              When it comes to painting your home, color is usually the first thing on your mind. You might spend weeks agonizing over the perfect shade of 'Morning Mist' or 'Ocean Depth'. But there's another crucial element that can completely change the way a room looks and feels: <strong>the paint finish</strong>.
            </p>

            <p className="leading-relaxed">
              Also known as paint sheen, the finish refers to the amount of light the paint reflects. The rule of thumb is simple: the higher the sheen, the higher the shine—and the more durable and easy to clean it will be. However, high shine also means every single bump, dent, and imperfection on your wall will be highlighted. Understanding the difference between matte, eggshell, satin, semi-gloss, and high-gloss can dramatically alter the perception of space, light, and texture in any room.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">The Scale of Sheen</h2>
            <p className="leading-relaxed">
              Paint finishes are typically measured on a scale of light reflectivity:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Flat / Matte:</strong> 0% - 10% reflectivity</li>
              <li><strong>Eggshell:</strong> 10% - 25% reflectivity</li>
              <li><strong>Satin:</strong> 25% - 35% reflectivity</li>
              <li><strong>Semi-Gloss:</strong> 35% - 70% reflectivity</li>
              <li><strong>High-Gloss:</strong> 70% - 85%+ reflectivity</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">1. Matte / Flat Finish: The Master of Concealment</h2>
            <p className="leading-relaxed mb-4">
              Matte finishes absorb light rather than reflecting it, providing a beautiful, velvety look that hides wall imperfections perfectly. If you live in an older home or your walls have dents, patches, or uneven textures, a flat finish is your best friend. 
            </p>
            <p className="leading-relaxed mb-4">
              <strong>The Catch:</strong> It's the hardest finish to clean. Scrubbing a flat paint can burnish it, leaving a shiny patch where you wiped. 
            </p>
            <p className="leading-relaxed font-bold">
              Best used in: Ceilings, adult bedrooms, dining rooms, and low-traffic areas.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">2. Eggshell Finish: The Everyday Hero</h2>
            <p className="leading-relaxed mb-4">
              Eggshell has a very subtle shine, much like the shell of an egg (hence the name). It offers a phenomenal balance between the elegance of a matte finish and the washability of a gloss. It resists stains and scuffs significantly better than flat paint.
            </p>
            <p className="leading-relaxed mb-4">
              If you want a flat look but need to occasionally wipe off fingerprints or smudges, eggshell is the industry standard for living spaces.
            </p>
            <p className="leading-relaxed font-bold">
              Best used in: Living rooms, hallways, entryways, and family rooms.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">3. Satin / Silk Finish: The Durable Middle Ground</h2>
            <p className="leading-relaxed mb-4">
              Satin has a slightly higher sheen than eggshell, giving walls a soft, pearl-like glow. It is highly durable and very easy to clean, making it perfect for spaces that see a lot of activity or moisture. 
            </p>
            <p className="leading-relaxed mb-4">
              <strong>The Catch:</strong> Because it reflects more light, it can highlight wall imperfections. Your walls need to be perfectly prepped (sanded and puttied) before applying a satin finish.
            </p>
            <p className="leading-relaxed font-bold">
              Best used in: Kids' bedrooms, family rooms, laundry rooms, and guest bathrooms.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">4. Semi-Gloss & High-Gloss: The Tough Protectors</h2>
            <p className="leading-relaxed mb-4">
              Glossy finishes are tough, highly durable, and extremely moisture-resistant. They reflect a lot of light, making colors pop and creating a bright, energetic feel. High-gloss finishes can almost look like glass or plastic.
            </p>
            <p className="leading-relaxed mb-4">
              They are incredibly easy to wipe down and can withstand heavy scrubbing. This is why they are the standard choice for areas prone to grease, moisture, or frequent touching. 
            </p>
            <p className="leading-relaxed font-bold">
              Best used in: Kitchens, main bathrooms, doors, window trims, baseboards, and cabinets.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">How Lighting Affects Your Finish</h2>
            <p className="leading-relaxed mb-8">
              A critical factor often overlooked is how lighting interacts with paint finishes. If a room gets abundant natural sunlight, a high-gloss finish might cause intense glare that strains the eyes. In contrast, a matte finish in a poorly lit room can make the space feel dark and cavernous. Always test a small patch of paint in the actual room to see how the finish behaves under both daytime sun and nighttime artificial lighting.
            </p>

            <div className="bg-primary-container text-on-primary p-8 rounded-[2rem] my-12 shadow-[0px_12px_40px_rgba(46,16,101,0.08)] text-center">
              <h3 className="text-2xl font-headline mb-4">Still not sure which finish to pick?</h3>
              <p className="text-on-primary-container mb-6">Our experts can help you match the perfect color and finish to your space's lighting, texture, and lifestyle.</p>
              <Link href="/contact" className="bg-secondary-fixed text-on-secondary-fixed font-bold rounded-full py-3 px-8 hover:bg-secondary-fixed-dim transition-colors inline-block">
                Get Expert Advice
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
