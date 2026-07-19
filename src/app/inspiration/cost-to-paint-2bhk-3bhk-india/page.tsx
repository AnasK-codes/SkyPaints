import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Cost to Paint a 2BHK/3BHK in India (2026 Guide) | SkyPaints",
  description:
    "Planning to paint your home? Discover the exact cost to paint a 2BHK or 3BHK in India in 2026. Get accurate per sq. ft. estimates and avoid hidden charges!",
  keywords:
    "cost to paint 2bhk in india, house painting cost per square foot, cost to paint 3bhk in india",
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
              Cost to Paint a 2BHK/3BHK in India: The Ultimate 2026 Guide &
              Budget Calculator
            </h1>
            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
              <span>May 24, 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          {/* Hero Image */}
          <div
            className="w-full h-[400px] md:h-[500px] relative rounded-[2rem] overflow-hidden mb-16 animate-fade-in-up shadow-[0px_12px_40px_rgba(46,16,101,0.08)]"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            <Image
              alt="A beautifully painted modern Indian living room with warm lighting"
              src="/images/blog-cost.webp"
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
            <p className="text-xl leading-relaxed">
              Moving into a new home, preparing for Diwali, or just tired of
              looking at those dull, flaking walls? We get it. A fresh coat of
              paint can completely transform your space, making it feel vibrant,
              welcoming, and new. But the very first question that pops up in
              every Indian homeowner's mind is: <em>"Kitna kharcha aayega?"</em>{" "}
              (How much will it cost?).
            </p>

            <p className="leading-relaxed">
              Budgeting for a home makeover shouldn't feel like solving a
              complex math problem. Whether you are dealing with monsoon
              dampness, choosing Vastu-compliant colours for your puja room, or
              just looking for the best value, understanding the real cost of
              painting is crucial.
            </p>

            <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-secondary my-8">
              <p className="font-headline text-lg text-primary m-0">
                <strong>Not sure where to start?</strong> Try our free{" "}
                <Link
                  href="/tools#calculator"
                  className="text-secondary underline"
                >
                  SkyPaints Budget Calculator
                </Link>{" "}
                to estimate your painting costs in seconds!
              </p>
            </div>

            <p className="leading-relaxed">
              In this comprehensive 2026 guide, we will break down the exact
              cost to paint a 2BHK and 3BHK in India, covering everything from
              paint types and labour charges to putty and primer.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              Fresh Painting vs. Repainting: The Big Difference
            </h2>
            <p className="leading-relaxed mb-4">
              Before calculating the cost, you need to identify the scope of
              your project.
            </p>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li>
                <strong>Fresh Painting:</strong> If it’s a newly constructed
                home, the walls are bare. This requires a full treatment: 2
                coats of wall putty, 1 coat of primer, and 2-3 coats of paint.
                Naturally, this costs more.
              </li>
              <li>
                <strong>Repainting:</strong> If your walls are already painted
                and in good condition, you usually just need a light sanding,
                minor touch-ups with putty, 1 coat of primer (optional,
                depending on the colour change), and 2 coats of paint.
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              How Much Does Paint Cost Per Square Foot? (2026 Rates)
            </h2>
            <p className="leading-relaxed mb-6">
              The type of paint you choose is the biggest factor in your budget.
              Here is a quick comparison of the most popular interior paints in
              the Indian market:
            </p>

            <div className="overflow-x-auto mb-8 rounded-2xl shadow-sm border border-outline-variant/30">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low text-primary">
                    <th className="p-4 font-headline border-b border-outline-variant/30">
                      Paint Type
                    </th>
                    <th className="p-4 font-headline border-b border-outline-variant/30">
                      Finish & Durability
                    </th>
                    <th className="p-4 font-headline border-b border-outline-variant/30">
                      Best For
                    </th>
                    <th className="p-4 font-headline border-b border-outline-variant/30 text-right">
                      Approx. Cost (Per Sq. Ft.)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  <tr>
                    <td className="p-4 font-medium text-primary">Distemper</td>
                    <td className="p-4">Matte, basic finish. Not washable.</td>
                    <td className="p-4">Rental homes, low budgets.</td>
                    <td className="p-4 text-right font-medium">₹10 - ₹15</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-primary">
                      Standard Emulsion
                    </td>
                    <td className="p-4">Smooth, slightly washable.</td>
                    <td className="p-4">Regular 2BHKs/3BHKs.</td>
                    <td className="p-4 text-right font-medium">₹15 - ₹25</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-primary">
                      Premium Emulsion
                    </td>
                    <td className="p-4">
                      Rich matte/eggshell, highly washable.
                    </td>
                    <td className="p-4">Homes with kids/pets.</td>
                    <td className="p-4 text-right font-medium">₹25 - ₹40</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-primary">
                      Luxury Emulsion
                    </td>
                    <td className="p-4">
                      Silky sheen, anti-fungal, stain-resistant.
                    </td>
                    <td className="p-4">Living rooms, master bedrooms.</td>
                    <td className="p-4 text-right font-medium">₹40 - ₹60+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm italic text-on-surface-variant/80 mb-12">
              *(Note: The above estimates include material and basic labour
              charges. Prices may vary slightly across metro cities like Mumbai,
              Bengaluru, and Delhi).*
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              The Hidden Costs: Putty, Primer, and Labour
            </h2>
            <p className="leading-relaxed mb-4">
              Don't let hidden charges surprise you! A flawless wall requires a
              solid foundation.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>
                <strong>Wall Putty:</strong> Essential for smoothing out uneven
                surfaces. Costs around ₹4 - ₹6 per sq. ft.
              </li>
              <li>
                <strong>Primer:</strong> Enhances paint adhesion and coverage.
                Costs around ₹3 - ₹5 per sq. ft.
              </li>
              <li>
                <strong>Labour Charges:</strong> Depending on your city, labour
                costs range from ₹8 to ₹20 per sq. ft. Always hire verified
                professionals to avoid <em>chhappat</em> (flaking) and uneven
                strokes.
              </li>
            </ul>

            <div className="bg-primary-container text-on-primary p-8 md:p-12 rounded-[2rem] my-12 shadow-[0px_12px_40px_rgba(46,16,101,0.08)] flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-headline mb-4">
                  Tired of peeling walls, dampness, and hidden leaks?
                </h3>
                <p className="text-on-primary-container mb-0">
                  Don't let the Indian monsoon ruin your beautiful interiors.
                  Book a Free Site Inspection with our SkyPaints waterproofing
                  experts today!
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-secondary-fixed text-on-secondary-fixed font-bold rounded-full py-4 px-8 hover:bg-secondary-fixed-dim transition-colors shadow-md shrink-0 block text-center"
              >
                Book Now
              </Link>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              Breakdown: Cost to Paint a 2BHK in India
            </h2>
            <p className="leading-relaxed mb-4">
              A standard 2BHK in India spans about 800 to 1,200 sq. ft. of
              carpet area. However, the <em>paintable</em> area (walls +
              ceiling) is roughly <strong>3 times the carpet area</strong>.
            </p>
            <p className="leading-relaxed mb-4">
              Let's assume a paintable area of <strong>2,500 sq. ft.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>
                <strong>Economical (Distemper/Tractor Emulsion):</strong> 2,500
                x ₹15 = <strong>₹37,500</strong>
              </li>
              <li>
                <strong>Standard (Premium Emulsion):</strong> 2,500 x ₹28 ={" "}
                <strong>₹70,000</strong>
              </li>
              <li>
                <strong>Luxury (High-end Emulsion):</strong> 2,500 x ₹45 ={" "}
                <strong>₹1,12,500</strong>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              Breakdown: Cost to Paint a 3BHK in India
            </h2>
            <p className="leading-relaxed mb-4">
              For a 3BHK with a carpet area of 1,200 to 1,600 sq. ft., the
              paintable area will be approximately{" "}
              <strong>4,000 sq. ft.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>
                <strong>Economical (Distemper/Tractor Emulsion):</strong> 4,000
                x ₹15 = <strong>₹60,000</strong>
              </li>
              <li>
                <strong>Standard (Premium Emulsion):</strong> 4,000 x ₹28 ={" "}
                <strong>₹1,12,000</strong>
              </li>
              <li>
                <strong>Luxury (High-end Emulsion):</strong> 4,000 x ₹45 ={" "}
                <strong>₹1,80,000</strong>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              Future-Ready Insights: Eco-Friendly & Low-VOC Paints
            </h2>
            <p className="leading-relaxed mb-8">
              As Indian families become more health-conscious, the demand for{" "}
              <strong>Low-VOC (Volatile Organic Compounds)</strong> and
              eco-friendly paints is skyrocketing. In 2026, smart
              thermal-insulating coatings are also trending, helping keep homes
              cooler during the scorching Indian summers and reducing AC bills.
              While they cost 15-20% more upfront, the health and energy
              benefits make them a wise long-term investment.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              Conclusion
            </h2>
            <p className="leading-relaxed mb-12">
              Painting your home is an investment in your family's comfort and
              happiness. While it's tempting to cut corners by choosing cheap
              distemper or unverified local painters, investing in a good
              quality emulsion and expert waterproofing will save you thousands
              of rupees in repainting costs down the line. Use the estimates
              above to plan your budget, factor in the cost of putty and primer,
              and get ready to welcome a beautiful, fresh vibe into your home!
            </p>

            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-[2rem] shadow-sm text-center my-12">
              <h3 className="text-2xl font-headline text-primary mb-4">
                Ready to transform your home with colors that last?
              </h3>
              <p className="text-on-surface-variant mb-8">
                Browse our latest SkyPaints Shade Card or contact a Verified
                Painting Contractor near you to get an exact quote today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/products"
                  className="bg-primary text-on-primary rounded-full px-8 py-3 font-bold hover:bg-primary/90 transition-colors"
                >
                  View Shade Card
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border border-outline-variant text-primary rounded-full px-8 py-3 font-bold hover:bg-surface-container-highest/20 transition-colors"
                >
                  Contact a Contractor
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
