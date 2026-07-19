import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Why Waterproofing Matters | SkyPaints",
  description:
    "Protect your home's structural integrity and aesthetics against moisture damage with proactive exterior care. Learn why waterproofing is essential in India.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-x-hidden bg-surface">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12 animate-fade-in-up">
            <Link
              href="/inspiration"
              className="text-secondary font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2 hover:opacity-80 transition-opacity w-fit"
            >
              <Icon name="arrow_back" className="text-sm" /> Back to Inspiration
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline tracking-tight text-primary leading-tight mb-6">
              Why Waterproofing Matters: Protecting Your Home's Core
            </h1>
            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
              <span>May 15, 2026</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </header>

          {/* Hero Image */}
          <div
            className="w-full h-[400px] md:h-[500px] relative rounded-[2rem] overflow-hidden mb-16 animate-fade-in-up shadow-[0px_12px_40px_rgba(46,16,101,0.08)]"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            <Image
              alt="An exterior shot of a modern, minimalist house wall during a light rain shower"
              src="/images/blog-waterproofing.webp"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-on-surface-variant prose-headings:font-headline prose-headings:text-primary prose-a:text-secondary animate-fade-in-up space-y-6"
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            <p className="text-xl leading-relaxed font-medium">
              We often spend a lot of time and money choosing the perfect
              colors, furniture, and lighting for our interiors, but we tend to
              neglect the exterior shield of our home. In regions with heavy
              monsoons, high humidity, and extreme weather, waterproofing is not
              a luxury—it is an absolute necessity.
            </p>

            <p className="leading-relaxed">
              Think of waterproofing as the immune system of your house. Without
              it, your home is exposed to the elements, and water will
              inevitably find its way in. Once moisture breaches the surface,
              the damage it causes can be catastrophic and incredibly expensive
              to repair.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              The Science of Dampness: How Water Enters
            </h2>
            <p className="leading-relaxed mb-4">
              Water doesn't just enter through obvious cracks. Concrete and
              brick are porous materials, acting almost like a sponge. Through a
              process called <em>capillary action</em>, groundwater can travel
              upwards through the foundation into your walls (rising damp).
              Additionally, driving rain can push moisture through the
              microscopic pores of exterior walls (penetrating damp).
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              The Dangers of Ignored Moisture
            </h2>
            <p className="leading-relaxed mb-4">
              When water seeps into your walls, it does much more than just ruin
              your expensive interior paint job. It causes severe, cascading
              issues:
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li>
                <strong>Structural Damage:</strong> Continuous moisture can
                weaken concrete. Worse, it reaches the iron reinforcing bars
                (rebar) inside your walls and pillars. When iron rusts, it
                expands, causing the concrete around it to crack and break off—a
                dangerous structural failure known as <em>spalling</em>.
              </li>
              <li>
                <strong>Health Hazards:</strong> Damp, warm walls are the
                perfect breeding ground for toxic mold and mildew. Breathing in
                mold spores daily can trigger allergies, asthma, and severe
                respiratory issues, particularly in children and the elderly.
              </li>
              <li>
                <strong>Aesthetic Ruin:</strong> Moisture causes{" "}
                <em>efflorescence</em>—ugly white powdery patches of salt
                deposits on your walls. It leads to bubbling, flaking paint,
                peeling wallpaper, and foul, musty smells that make even the
                most beautifully designed room feel unpleasant.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              The Three Key Zones of Waterproofing
            </h2>
            <p className="leading-relaxed mb-4">
              To fully protect your home, you must secure the three primary
              points of water entry:
            </p>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li>
                <strong>The Roof / Terrace:</strong> The roof bears the brunt of
                the monsoon. Flat roofs in particular require multi-layer
                elastomeric liquid waterproofing membranes to prevent pooling
                water from seeping into the ceiling below.
              </li>
              <li>
                <strong>Exterior Walls:</strong> Sun exposure causes hairline
                cracks in exterior plaster. High-performance waterproofing
                exterior paints can bridge these micro-cracks and stretch with
                the building's thermal expansion, creating a rain-proof barrier.
              </li>
              <li>
                <strong>Bathrooms and Wet Areas:</strong> Internal waterproofing
                is just as critical. Leaky bathroom tiles can destroy adjacent
                bedroom walls or the ceiling of the room below. Epoxy grouting
                and under-tile membranes are essential here.
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              The ROI of Proactive Waterproofing
            </h2>
            <p className="leading-relaxed mb-8">
              Many homeowners view waterproofing as an unnecessary expense
              during construction or renovation. However, retroactively fixing a
              leak, scraping off ruined interior putty, repairing rusted rebar,
              and repainting the entire room costs significantly more than
              getting the waterproofing right the first time.
            </p>

            <div className="bg-surface-container-low p-8 rounded-[2rem] border-l-4 border-secondary my-8 shadow-sm">
              <p className="font-headline text-xl text-primary m-0">
                <strong>Did you know?</strong> A high-quality exterior
                waterproofing job can extend the life of your building structure
                and your interior paints by over 7 to 10 years!
              </p>
            </div>

            <p className="leading-relaxed mb-12">
              Don't wait for the damp patches to appear on your expensive living
              room walls. Treat your home's exterior and roof with a
              high-quality waterproofing solution before the next monsoon hits.
            </p>

            <div className="bg-primary-container text-on-primary p-8 md:p-12 rounded-[2rem] shadow-[0px_12px_40px_rgba(46,16,101,0.08)] text-center">
              <h3 className="text-3xl font-headline mb-4">
                Secure your home today.
              </h3>
              <p className="text-on-primary-container text-lg mb-8">
                Book a free site inspection with our waterproofing experts.
                We'll identify hidden leaks and recommend the perfect barrier
                for your walls.
              </p>
              <Link
                href="/contact"
                className="bg-secondary-fixed text-on-secondary-fixed font-bold rounded-full py-4 px-10 hover:bg-secondary-fixed-dim transition-colors inline-block text-lg"
              >
                Book a Free Inspection
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
