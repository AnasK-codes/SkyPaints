import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Choosing Safe Paints for Nurseries | SkyPaints",
  description:
    "Understanding low-VOC and zero-VOC options to create a healthy environment for your little ones.",
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
              Choosing Safe Paints for Nurseries: A Parent's Guide
            </h1>
            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
              <span>April 28, 2026</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </header>

          {/* Hero Image */}
          <div
            className="w-full h-[400px] md:h-[500px] relative rounded-[2rem] overflow-hidden mb-16 animate-fade-in-up shadow-[0px_12px_40px_rgba(46,16,101,0.08)]"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            <Image
              alt="A bright, sunlit nursery featuring soft pastel cabinets and safe finishes"
              src="/images/blog-safe-paints.png"
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
              Expecting a new addition to the family is an exciting time, and
              decorating the nursery is one of the most joyous nesting tasks for
              new parents. However, amidst picking out the perfect ergonomic
              crib, blackout curtains, and the softest hypoallergenic rugs, it
              is absolutely critical to pay attention to what goes on the walls.
            </p>

            <p className="leading-relaxed">
              Babies breathe much faster than adults and their immune systems
              and lungs are still developing. Exposing them to harsh chemicals
              early on can have lasting effects.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              The Invisible Threat: What are VOCs?
            </h2>
            <p className="leading-relaxed mb-4">
              Traditional paints contain VOCs (Volatile Organic Compounds).
              These are chemical solvents—like formaldehyde and benzene—that
              keep the paint liquid in the can and help it dry smoothly on the
              wall.
            </p>
            <p className="leading-relaxed mb-4">
              As the paint dries, it releases these gases into the air in a
              process called "off-gassing." This is what gives fresh paint that
              strong, dizzying "new paint" smell. Prolonged exposure to VOCs can
              cause headaches, dizziness, nausea, and severe respiratory
              irritation. Even worse, oil-based paints can continue to off-gas
              subtle amounts of VOCs for months after they appear dry.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              Navigating Paint Labels: Low-VOC vs. Zero-VOC
            </h2>
            <p className="leading-relaxed mb-4">
              When shopping for nursery paint, you will encounter two main safe
              options:
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li>
                <strong>Low-VOC Paints:</strong> These contain significantly
                fewer volatile chemicals than traditional oil-based or cheap
                acrylic paints (usually less than 50 grams per liter). They are
                a safer alternative for general living spaces and corridors, but
                might still emit a faint odor for a few days.
              </li>
              <li>
                <strong>Zero-VOC Paints:</strong> This is the absolute gold
                standard for nurseries. These paints have virtually no volatile
                chemicals (typically less than 5 grams per liter, as trace
                amounts can come from color tinting). This means almost zero
                off-gassing, no toxic fumes, and no lingering paint smell. They
                are entirely safe for pregnant mothers to apply and for babies
                to sleep near shortly after drying.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              Look for Anti-Bacterial Additives
            </h2>
            <p className="leading-relaxed mb-8">
              Babies have a habit of touching walls, sneezing, and occasionally
              throwing things. Many premium zero-VOC paints also include
              silver-ion technology or other anti-bacterial and anti-fungal
              additives. These compounds actively prevent the growth of mold,
              mildew, and bacteria on the walls, ensuring the nursery remains a
              highly hygienic environment.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              A Note on Color Psychology
            </h2>
            <p className="leading-relaxed mb-4">
              Aside from chemical safety, consider the visual environment.
              Bright, highly saturated colors like primary red or bright yellow
              are highly stimulating and can actually make it harder for a baby
              to sleep.
            </p>
            <p className="leading-relaxed mb-8">
              Instead, opt for soothing, muted tones. Soft sage greens, dusty
              blues, warm terracottas, and gentle lavenders promote calmness and
              relaxation, creating a peaceful sanctuary for both the baby and
              the exhausted parents.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">
              Important Painting Tips for Parents
            </h2>
            <ul className="list-disc pl-6 space-y-4 mb-12">
              <li>
                <strong>Time it Right:</strong> Even when using the safest
                zero-VOC paints, it is highly recommended to paint the nursery
                at least 4 to 6 weeks before the baby is due. This gives the
                room ample time to fully cure and air out.
              </li>
              <li>
                <strong>Ventilate:</strong> Ensure excellent cross-ventilation
                during and after painting by keeping windows open and running
                fans facing outwards.
              </li>
              <li>
                <strong>Avoid Oil-Based Primers:</strong> Make sure you are also
                using a zero-VOC water-based primer and putty underneath the
                paint. A safe top-coat won't trap the fumes of a toxic primer
                beneath it.
              </li>
            </ul>

            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-[2rem] shadow-sm text-center">
              <Icon
                name="health_and_safety"
                className="text-5xl text-secondary mb-4"
              />
              <h3 className="text-2xl font-headline text-primary mb-4">
                Protect Your Little Ones
              </h3>
              <p className="text-on-surface-variant mb-8">
                Explore our range of SkyPaints Eco-Care products. Certified
                zero-VOC, odor-free, and 100% safe for kids and pregnant
                mothers.
              </p>
              <Link
                href="/products"
                className="bg-primary text-on-primary rounded-full px-8 py-3 font-bold hover:bg-primary/90 transition-colors inline-block"
              >
                View Eco-Care Range
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
