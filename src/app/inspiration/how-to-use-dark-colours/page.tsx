import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How to Use Dark Colours Confidently | SkyPaints",
  description: "Balancing deep tones with light and texture to create dramatic, sophisticated spaces.",
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
              How to Use Dark Colours Confidently
            </h1>
            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
              <span>May 5, 2026</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="w-full h-[400px] md:h-[500px] relative rounded-[2rem] overflow-hidden mb-16 animate-fade-in-up shadow-[0px_12px_40px_rgba(46,16,101,0.08)]" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <Image
              alt="A sophisticated dining room corner featuring dark, dramatic accent walls"
              src="/images/blog-dark-colours.png"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-on-surface-variant prose-headings:font-headline prose-headings:text-primary prose-a:text-secondary animate-fade-in-up space-y-6" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <p className="text-xl leading-relaxed font-medium">
              For decades, interior design rules have dictated that rooms must be painted in light, airy whites, creams, or pastels to maximize light. Because of this, many homeowners are deeply intimidated by dark colours.
            </p>

            <p className="leading-relaxed">
              There's a common misconception that dark walls will automatically make a room feel small, gloomy, or cave-like. In reality, when used correctly by balancing deep hues like navy, emerald green, charcoal, and plum, you can create incredibly sophisticated, cozy, and dramatic spaces that feel like a high-end boutique hotel.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">The Myth of Shrinking Spaces</h2>
            <p className="leading-relaxed mb-4">
              It is true that white reflects light and black absorbs it. However, dark colors don't automatically make a room feel smaller; they blur the physical edges of the room. Because a dark wall absorbs shadows, the corners of the room become less defined, making the walls appear to recede. This gives the illusion of infinite depth.
            </p>
            <p className="leading-relaxed mb-8">
              This works exceptionally well in rooms that don't get much natural light anyway, like north-facing rooms or internal hallways. Instead of fighting the darkness with a sad, gray-looking white, you lean into the shadows with a deep tone to create a rich, intimate mood.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Where to Best Use Dark Colours</h2>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li><strong>Powder Rooms:</strong> Small, windowless bathrooms are the perfect place to experiment. A deep, glossy jewel tone paired with brass fixtures and a dramatic mirror turns a boring toilet into a jewelry box.</li>
              <li><strong>Dining Rooms:</strong> Dark colors look spectacular under dim, warm artificial light. Painting a dining room in deep plum or navy creates a moody, romantic atmosphere perfect for evening dinner parties.</li>
              <li><strong>Bedrooms:</strong> We want bedrooms to feel safe, cozy, and conducive to sleep. Dark charcoal or deep forest green wraps around you like a warm blanket, promoting relaxation.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">4 Golden Rules for Rocking Dark Walls</h2>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li>
                <strong>Contrast is Key:</strong> You must balance dark walls with lighter elements so the room doesn't feel heavy. Pair dark walls with crisp white ceilings, light warm wooden floors, bright white skirting boards, or light-colored furniture. The contrast makes the dark color feel striking and intentional.
              </li>
              <li>
                <strong>Texture Adds Dimension:</strong> Flat dark walls can look dead and monolithic. To bring them to life, add textures. Use velvet pillows, heavy woven curtains, metallic brass or gold fixtures, and plush rugs. These materials catch the light differently and add life to the moody background.
              </li>
              <li>
                <strong>Layered Lighting is Essential:</strong> A single harsh overhead bulb will ruin a dark room. You need layered, ambient lighting. Combine overhead lighting with wall sconces, floor lamps, and table lamps to create pools of warm, inviting light against the dark walls.
              </li>
              <li>
                <strong>Choose a Matte Finish:</strong> Generally, you want a matte or flat finish for very dark colors. Glossy dark paints reflect light harshly like a mirror and will highlight every single bump or wave in your wall plaster. Matte finishes absorb light, giving you that rich, velvety depth.
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Start Small</h2>
            <p className="leading-relaxed mb-12">
              If you're still nervous, you don't have to paint all four walls pitch black. Start with a dark accent wall behind your bed or sofa. Alternatively, paint just your doors, window trims, and baseboards a dark charcoal instead of standard white—it frames the room beautifully and adds an instant touch of modern architecture.
            </p>

            <div className="bg-primary-container text-on-primary p-8 md:p-12 rounded-[2rem] shadow-[0px_12px_40px_rgba(46,16,101,0.08)] flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-headline mb-4">Ready to embrace the dark side?</h3>
                <p className="text-on-primary-container mb-0">Explore our 'Midnight Elegance' collection featuring the richest, most saturated deep tones designed specifically for dramatic interiors.</p>
              </div>
              <Link href="/products" className="bg-secondary-fixed text-on-secondary-fixed font-bold rounded-full py-4 px-8 hover:bg-secondary-fixed-dim transition-colors shadow-md shrink-0 block text-center">
                View Collection
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
