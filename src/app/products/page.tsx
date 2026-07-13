import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CategoryNav from "@/components/CategoryNav";
import { categories } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Skypaints",
  description:
    "Explore Skypaints' complete range of emulsions, oil paint, distemper, synthetic enamel, waterproofing, putty, stainers, and cleaning products.",
};
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/Icon";

const scrollToCategory = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 100; // 100px offset for sticky navbar
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const PlaceholderImage = ({
  icon,
  bgClass,
  size = "text-5xl",
}: {
  icon: string;
  bgClass: string;
  size?: string;
}) => (
  <div
    className={`w-full h-full flex items-center justify-center ${bgClass} rounded-2xl`}
  >
    <Icon name={icon} className={`${size} opacity-30 mix-blend-multiply`} />
  </div>
);

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-surface selection:bg-primary-fixed selection:text-primary overflow-x-hidden">
        {/* SECTION 1: HERO SECTION */}
        <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div className="space-y-8 z-10">
              <span className="font-label text-sm uppercase tracking-widest text-primary/70 font-semibold border border-primary/20 px-4 py-2 rounded-full">
                Our Collection
              </span>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-primary tracking-tight leading-[1.1]">
                Every finish your surface needs.
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                Explore Skypaints' complete range of emulsions, oil paint,
                Taarpin, distemper, synthetic enamel, waterproofing, putty, lime
                wash, tile grout, stainers, and cleaning products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#shop-by-category"
                  className="bg-primary text-on-primary px-8 py-4 rounded-full font-label font-medium shadow-ambient shadow-ambient-hover transition-all duration-300 text-center hover:bg-primary/90"
                >
                  Explore Categories
                </a>
                <a
                  href="#shop-by-category"
                  className="border border-outline-variant/30 text-primary hover:bg-surface-container-low px-8 py-4 rounded-full font-label font-medium transition-all duration-300 text-center"
                >
                  View Price List
                </a>
              </div>
            </div>

            {/* Right side: Premium Collage */}
            <div className="relative rounded-[2rem] bg-surface-container-low shadow-elevated p-6 grid grid-cols-2 grid-rows-2 gap-4 border border-outline-variant/10">
              <div className="relative rounded-2xl overflow-hidden group aspect-square">
                <Image
                  src="/images/products-hero/range-of-emulsion.png"
                  alt="Range of Emulsions"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-headline text-on-primary text-xl leading-tight">
                    Premium Emulsions
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group aspect-square">
                <Image
                  src="/images/products-hero/range-of-putty-hero.png"
                  alt="Putty Range"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-headline text-on-primary text-xl leading-tight">
                    Putty Range
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group aspect-square">
                <Image
                  src="/images/products-hero/range-of-waterproofing.png"
                  alt="Waterproofing"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-headline text-on-primary text-xl leading-tight">
                    Waterproofing
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group aspect-square">
                <Image
                  src="/images/products-hero/sky-neo-range-hero.png"
                  alt="Sky Neo Range"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-headline text-on-primary text-xl leading-tight">
                    Sky Neo Range
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SHOP BY CATEGORY */}
        <section
          id="shop-by-category"
          className="px-8 md:px-16 lg:px-24 mb-24 max-w-[1600px] mx-auto animate-fade-in-up"
          style={{ animationDelay: "100ms", animationFillMode: "both" }}
        >
          <div className="mb-12">
            <h2 className="font-headline text-4xl text-primary mb-4">
              Shop by category
            </h2>
            <p className="font-body text-on-surface-variant text-lg max-w-2xl">
              Choose a product category and view all related Skypaints products
              with their descriptions, sizes, pricing, and usage details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Emulsions (Large) */}
            <div className="lg:col-span-2 bg-primary text-on-primary rounded-[32px] p-10 md:p-12 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-700"></div>
              <div>
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <Icon name="format_paint" className="text-4xl opacity-80" />
                  <span className="font-label text-sm uppercase tracking-wider opacity-80">
                    4 Products
                  </span>
                </div>
                <h3 className="font-headline text-4xl mb-4 relative z-10">
                  Emulsions
                </h3>
                <p className="font-body text-on-primary-container text-lg mb-8 max-w-md relative z-10">
                  Premium interior and exterior wall finishes for smooth, rich,
                  durable walls.
                </p>
              </div>
              <a
                href="#emulsions"
                className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-lg relative z-10"
              >
                View All Emulsions
              </a>
            </div>

            {/* 2. Oil Paint */}
            <div className="bg-primary-fixed text-on-primary-fixed rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="opacity" className="text-3xl opacity-70" />
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    2 Products + Table
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">Oil Paint</h3>
                <p className="font-body text-on-primary-fixed-variant mb-8 text-sm">
                  Paint oil and Taarpin products for utility, application,
                  thinning, and professional paint work.
                </p>
              </div>
              <a
                href="#oil-paint"
                className="bg-surface-container-lowest text-primary px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View Oil Paint Range
              </a>
            </div>

            {/* 3. Distemper */}
            <div className="bg-[#FDF5E6] text-[#855300] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="texture" className="text-3xl opacity-70" />
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    2 Products + Table
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">Distemper</h3>
                <p className="font-body text-[#855300]/80 mb-8 text-sm">
                  Economical and smooth wall coatings for clean, fresh,
                  budget-friendly interiors.
                </p>
              </div>
              <a
                href="#distemper"
                className="bg-surface-container-lowest text-[#855300] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Distemper
              </a>
            </div>

            {/* 4. Synthetic Enamel */}
            <div className="bg-[#FFDAB9] text-[#684000] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="brush" className="text-3xl opacity-70" />
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    4 Products
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">
                  Synthetic Enamel
                </h3>
                <p className="font-body text-[#684000]/80 mb-8 text-sm">
                  Glossy durable finishes for metal, wood, primers, varnish, and
                  utility surfaces.
                </p>
              </div>
              <a
                href="#synthetic-enamel"
                className="bg-surface-container-lowest text-[#684000] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Enamel
              </a>
            </div>

            {/* 5. Waterproofing */}
            <div className="bg-[#E6F0FA] text-[#003366] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="water_drop" className="text-3xl opacity-70" />
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    3 Products
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">Waterproofing</h3>
                <p className="font-body text-[#003366]/80 mb-8 text-sm">
                  Protection for roofs, terraces, damp walls, seepage, and
                  exterior surfaces.
                </p>
              </div>
              <a
                href="#waterproofing"
                className="bg-surface-container-lowest text-[#003366] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Waterproofing
              </a>
            </div>

            {/* 6. Putty, Lime Wash & Tile Grout */}
            <div className="bg-surface-container-highest text-on-surface rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="layers" className="text-3xl opacity-70" />
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    4 Products
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">Putty & Grout</h3>
                <p className="font-body text-on-surface-variant mb-8 text-sm">
                  Base preparation and finishing solutions for smooth walls and
                  tile joints.
                </p>
              </div>
              <a
                href="#putty-grout"
                className="bg-surface-container-lowest text-primary px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm border border-outline-variant/20"
              >
                View All Putty & Grout
              </a>
            </div>

            {/* 7. Stainers */}
            <div className="bg-[#FBE4E4] text-[#93000A] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="colorize" className="text-3xl opacity-70" />
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    2 Products
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">Stainers</h3>
                <p className="font-body text-[#93000A]/80 mb-8 text-sm">
                  Tinting and shade-control products for colour customization
                  and fine finishing.
                </p>
              </div>
              <a
                href="#stainers"
                className="bg-surface-container-lowest text-[#93000A] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Stainers
              </a>
            </div>

            {/* 8. Cleaning Products */}
            <div className="bg-secondary-fixed text-on-secondary-fixed rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon
                    name="cleaning_services"
                    className="text-3xl opacity-70"
                  />
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    7 Products + Table
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">
                  Cleaning Products
                </h3>
                <p className="font-body text-on-secondary-fixed-variant mb-8 text-sm">
                  Mr. Shine cleaning range for hygiene, floors, utensils,
                  washrooms, and commercial use.
                </p>
              </div>
              <a
                href="#cleaning"
                className="bg-surface-container-lowest text-on-secondary-fixed px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View Cleaning Range
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 3: CATEGORY FILTER BAR */}
        <section
          className="px-8 md:px-16 lg:px-24 mb-24 max-w-[1600px] mx-auto sticky top-24 z-40 animate-fade-in-up"
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          <div className="bg-surface-container-lowest/80 backdrop-blur-xl rounded-full p-2 shadow-ambient border border-outline-variant/20 flex gap-2 overflow-x-auto no-scrollbar">
            <button className="whitespace-nowrap px-6 py-3 rounded-full font-label font-bold bg-primary text-on-primary transition-all shadow-md">
              All
            </button>
            <a
              href="#emulsions"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Emulsions
            </a>
            <a
              href="#oil-paint"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Oil Paint
            </a>
            <a
              href="#distemper"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Distemper
            </a>
            <a
              href="#synthetic-enamel"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Synthetic Enamel
            </a>
            <a
              href="#waterproofing"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Waterproofing
            </a>
            <a
              href="#putty-grout"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Putty & Grout
            </a>
            <a
              href="#stainers"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Stainers
            </a>
            <a
              href="#cleaning"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Cleaning Products
            </a>
          </div>
        </section>

        {/* SECTION 4: PRODUCT SECTIONS */}
        <div className="px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto space-y-32">
          {/* CATEGORY 1: EMULSIONS */}
          <section id="emulsions" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Emulsions
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Premium interior and exterior wall emulsions designed for
                  smooth finish, modern appearance, durability, and wall
                  protection.
                </p>
              </div>
              <a
                href="#shop-by-category"
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {categories
                .find((c) => c.id === "emulsions")
                ?.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
            </div>

            {/* Emulsions Pricing Table */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-ambient border border-outline-variant/10 overflow-x-auto mt-12">
              <h3 className="font-headline text-2xl text-primary mb-6">
                Emulsions Pricing
              </h3>

              <h4 className="font-label font-bold text-on-surface-variant mb-4 uppercase tracking-wide text-sm mt-8">
                Sky Neo Best Finish For Wall
              </h4>
              <table className="w-full text-left font-body text-sm min-w-[600px] mb-8">
                <thead>
                  <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                    <th className="py-3 font-semibold">Water Base</th>
                    <th className="py-3 font-semibold">50LTR</th>
                    <th className="py-3 font-semibold">20LTR</th>
                    <th className="py-3 font-semibold">10LTR</th>
                    <th className="py-3 font-semibold">4LTR</th>
                    <th className="py-3 font-semibold">1LTR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Neo Advance Water BasePrimer
                    </td>
                    <td className="py-4 text-primary">₹2015</td>
                    <td className="py-4 text-primary">₹1300</td>
                    <td className="py-4 text-primary">₹689</td>
                    <td className="py-4 text-primary">₹325</td>
                    <td className="py-4 text-primary">₹85</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Neo Smart Premium Water Base Primer
                    </td>
                    <td className="py-4 text-primary">₹2275</td>
                    <td className="py-4 text-primary">₹1430</td>
                    <td className="py-4 text-primary">₹754</td>
                    <td className="py-4 text-primary">₹475</td>
                    <td className="py-4 text-primary">₹91</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="font-label font-bold text-on-surface-variant mb-4 uppercase tracking-wide text-sm mt-8">
                Neo Smart Premium Emulsion
              </h4>
              <table className="w-full text-left font-body text-sm min-w-[800px] mb-8">
                <thead>
                  <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                    <th className="py-3 font-semibold">Emulsion</th>
                    <th className="py-3 font-semibold">20LTR</th>
                    <th className="py-3 font-semibold">10LTR</th>
                    <th className="py-3 font-semibold">4LTR</th>
                    <th className="py-3 font-semibold">1LTR</th>
                    <th className="py-3 font-semibold">500ML</th>
                    <th className="py-3 font-semibold">200ML</th>
                    <th className="py-3 font-semibold">100ML</th>
                    <th className="py-3 font-semibold">50ML</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Metalic Emulsion
                    </td>
                    <td className="py-4 text-primary">₹6500</td>
                    <td className="py-4 text-primary">₹3380</td>
                    <td className="py-4 text-primary">₹1404</td>
                    <td className="py-4 text-primary">₹377</td>
                    <td className="py-4 text-primary">₹202</td>
                    <td className="py-4 text-primary">₹127</td>
                    <td className="py-4 text-primary">₹68</td>
                    <td className="py-4 text-primary">₹42</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Sheen (white & Base)
                    </td>
                    <td className="py-4 text-primary">₹4563</td>
                    <td className="py-4 text-primary">₹2340</td>
                    <td className="py-4 text-primary">₹956</td>
                    <td className="py-4 text-primary">₹254</td>
                    <td className="py-4 text-primary">-</td>
                    <td className="py-4 text-primary">-</td>
                    <td className="py-4 text-primary">-</td>
                    <td className="py-4 text-primary">-</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="font-label font-bold text-on-surface-variant mb-4 uppercase tracking-wide text-sm mt-8">
                Interior & Exterior Emulsion Finish
              </h4>
              <table className="w-full text-left font-body text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                    <th className="py-3 font-semibold">Interior & Exterior</th>
                    <th className="py-3 font-semibold">20LTR</th>
                    <th className="py-3 font-semibold">10LTR</th>
                    <th className="py-3 font-semibold">4LTR</th>
                    <th className="py-3 font-semibold">1LTR</th>
                    <th className="py-3 font-semibold">500ML</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Interior Emulsion White
                    </td>
                    <td className="py-4 text-primary">₹1495</td>
                    <td className="py-4 text-primary">₹806</td>
                    <td className="py-4 text-primary">₹330</td>
                    <td className="py-4 text-primary">₹93</td>
                    <td className="py-4 text-primary">-</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Interior Emulsion Shade
                    </td>
                    <td className="py-4 text-primary">₹1820</td>
                    <td className="py-4 text-primary">₹910</td>
                    <td className="py-4 text-primary">₹559</td>
                    <td className="py-4 text-primary">₹143</td>
                    <td className="py-4 text-primary">₹78</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Exterior Emulsion White
                    </td>
                    <td className="py-4 text-primary">₹3250</td>
                    <td className="py-4 text-primary">₹1658</td>
                    <td className="py-4 text-primary">₹767</td>
                    <td className="py-4 text-primary">₹198</td>
                    <td className="py-4 text-primary">-</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Exterior Emulsion Shade
                    </td>
                    <td className="py-4 text-primary">₹3860</td>
                    <td className="py-4 text-primary">₹1980</td>
                    <td className="py-4 text-primary">₹810</td>
                    <td className="py-4 text-primary">₹220</td>
                    <td className="py-4 text-primary">₹112</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CATEGORY 2: OIL PAINT */}
          <section id="oil-paint" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Oil Paint
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Utility products for paint-related applications, surface work,
                  finishing support, and professional use. This category
                  includes Paint Oil and Taarpin.
                </p>
              </div>
              <a
                href="#shop-by-category"
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {categories
                .find((c) => c.id === "oil-paint")
                ?.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
            </div>
          </section>

          {/* CATEGORY 3: DISTEMPER */}
          <section id="distemper" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Distemper
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Smooth, economical, and practical wall coating range for clean
                  and fresh-looking interiors.
                </p>
              </div>
              <a
                href="#shop-by-category"
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {categories
                .find((c) => c.id === "distemper")
                ?.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
            </div>

            {/* Distemper Price Reference */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-ambient border border-outline-variant/10">
              <h3 className="font-headline text-2xl text-primary mb-2">
                Distemper Price Reference
              </h3>
              <p className="text-sm text-on-surface-variant italic mb-8">
                Prices are subject to change. Contact Skypaints for latest
                dealer or bulk pricing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Neo Rich (White - 1st Quality)
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹740</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">10kg</span>
                      <span className="font-semibold text-primary">₹410</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">5kg</span>
                      <span className="font-semibold text-primary">₹215</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">2kg</span>
                      <span className="font-semibold text-primary">₹95</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Neo Rich (Shade - 1st Quality)
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹871</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">10kg</span>
                      <span className="font-semibold text-primary">₹481</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">5kg</span>
                      <span className="font-semibold text-primary">₹254</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">2kg</span>
                      <span className="font-semibold text-primary">₹109</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Neo Rich (White - 2nd Quality)
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹715</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">10kg</span>
                      <span className="font-semibold text-primary">₹403</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">5kg</span>
                      <span className="font-semibold text-primary">₹221</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">2kg</span>
                      <span className="font-semibold text-primary">₹91</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Neo Rich (Shade - 2nd Quality)
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹767</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">10kg</span>
                      <span className="font-semibold text-primary">₹429</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">5kg</span>
                      <span className="font-semibold text-primary">₹234</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">2kg</span>
                      <span className="font-semibold text-primary">₹96</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-outline-variant/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Distemper Pouch
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">1kg</span>
                      <span className="font-semibold text-primary">₹34</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹676</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">30kg Bucket</span>
                      <span className="font-semibold text-primary">₹1170</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Sky Neo Smart Dark Shades
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">28kg</span>
                      <span className="font-semibold text-primary">₹728</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">30kg Bucket</span>
                      <span className="font-semibold text-primary">₹1248</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Three Sky Utsav God Pouch
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹520</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">30kg Bucket</span>
                      <span className="font-semibold text-primary">₹975</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Distemper Bag
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹585</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">10kg</span>
                      <span className="font-semibold text-primary">₹312</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">5kg</span>
                      <span className="font-semibold text-primary">₹169</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CATEGORY 4: SYNTHETIC ENAMEL */}
          <section id="synthetic-enamel" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Synthetic Enamel
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Glossy and durable products for metal, wood, primers, varnish,
                  and finishing applications.
                </p>
              </div>
              <a
                href="#shop-by-category"
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {categories
                .find((c) => c.id === "synthetic-enamel")
                ?.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
            </div>

            {/* Synthetic Enamel Pricing Tables */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-ambient border border-outline-variant/10 overflow-x-auto mt-12 space-y-12">
              <div>
                <h3 className="font-headline text-2xl text-primary mb-6">
                  Sky Neo Synthetic Enamel
                </h3>
                <table className="w-full text-left font-body text-sm min-w-[800px]">
                  <thead>
                    <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                      <th className="py-3 font-semibold">Oil Paints</th>
                      <th className="py-3 font-semibold">20LTR</th>
                      <th className="py-3 font-semibold">10LTR</th>
                      <th className="py-3 font-semibold">4LTR</th>
                      <th className="py-3 font-semibold">1LTR</th>
                      <th className="py-3 font-semibold">500ML</th>
                      <th className="py-3 font-semibold">200ML</th>
                      <th className="py-3 font-semibold">100ML</th>
                      <th className="py-3 font-semibold">50ML</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {[
                      [
                        "Deep Orange, Br White",
                        "₹3705",
                        "₹1885",
                        "₹767",
                        "₹195",
                        "₹104",
                        "₹55",
                        "-",
                        "-",
                      ],
                      [
                        "All Shade",
                        "₹4400",
                        "₹2200",
                        "₹890",
                        "₹225",
                        "₹115",
                        "₹55",
                        "₹30",
                        "₹20",
                      ],
                      [
                        "Aluminium Paints",
                        "₹5135",
                        "₹260",
                        "₹1053",
                        "₹267",
                        "₹134",
                        "₹69",
                        "-",
                        "-",
                      ],
                      [
                        "Furniture Enamel",
                        "₹4550",
                        "₹2308",
                        "₹936",
                        "₹241",
                        "₹125",
                        "-",
                        "-",
                        "-",
                      ],
                      [
                        "Mint Green, Gdn Yellow, special Red",
                        "₹4875",
                        "₹2470",
                        "₹1001",
                        "₹254",
                        "₹131",
                        "₹68",
                        "₹46",
                        "₹26",
                      ],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-surface-container-low transition-colors"
                      >
                        <td className="py-4 text-on-surface font-medium">
                          {row[0]}
                        </td>
                        {row.slice(1).map((cell, j) => (
                          <td key={j} className="py-4 text-primary">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="font-headline text-2xl text-primary mb-6">
                  Sky Neo Varnish
                </h3>
                <table className="w-full text-left font-body text-sm min-w-[800px]">
                  <thead>
                    <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                      <th className="py-3 font-semibold">Varnish</th>
                      <th className="py-3 font-semibold">20LTR</th>
                      <th className="py-3 font-semibold">10LTR</th>
                      <th className="py-3 font-semibold">4LTR</th>
                      <th className="py-3 font-semibold">1LTR</th>
                      <th className="py-3 font-semibold">500ML</th>
                      <th className="py-3 font-semibold">200ML</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {[
                      [
                        "Hammertone",
                        "₹5330",
                        "₹2698",
                        "₹1092",
                        "₹280",
                        "₹144",
                        "₹74",
                      ],
                      [
                        "Texture Finish",
                        "₹5330",
                        "₹2698",
                        "₹1092",
                        "₹280",
                        "₹144",
                        "₹74",
                      ],
                      [
                        "Wood Protect",
                        "₹5330",
                        "₹2698",
                        "₹1092",
                        "₹280",
                        "₹144",
                        "₹74",
                      ],
                      [
                        "Murti Varnish",
                        "₹4485",
                        "₹2275",
                        "₹923",
                        "₹234",
                        "₹122",
                        "₹62",
                      ],
                      [
                        "Clear Varnish",
                        "₹4500",
                        "₹2275",
                        "₹920",
                        "₹235",
                        "₹120",
                        "₹60",
                      ],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-surface-container-low transition-colors"
                      >
                        <td className="py-4 text-on-surface font-medium">
                          {row[0]}
                        </td>
                        {row.slice(1).map((cell, j) => (
                          <td key={j} className="py-4 text-primary">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="font-headline text-2xl text-primary mb-6">
                  Sky Neo Wood Finish
                </h3>
                <table className="w-full text-left font-body text-sm min-w-[800px]">
                  <thead>
                    <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                      <th className="py-3 font-semibold">Primer</th>
                      <th className="py-3 font-semibold">20LTR</th>
                      <th className="py-3 font-semibold">10LTR</th>
                      <th className="py-3 font-semibold">4LTR</th>
                      <th className="py-3 font-semibold">1LTR</th>
                      <th className="py-3 font-semibold">500ML</th>
                      <th className="py-3 font-semibold">200ML</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {[
                      [
                        "White Primer",
                        "₹1950",
                        "₹1008",
                        "₹429",
                        "₹113",
                        "₹62",
                        "₹33",
                      ],
                      [
                        "Pink Primer",
                        "₹1950",
                        "₹1008",
                        "₹429",
                        "₹113",
                        "₹62",
                        "₹33",
                      ],
                      [
                        "Metal Primer",
                        "₹1794",
                        "₹832",
                        "₹390",
                        "₹111",
                        "₹60",
                        "₹31",
                      ],
                      [
                        "Red Oxide Glossy",
                        "₹1950",
                        "₹1008",
                        "₹429",
                        "₹111",
                        "₹60",
                        "₹31",
                      ],
                      [
                        "Black Japan - Rubber Paint",
                        "₹1950",
                        "₹1008",
                        "₹429",
                        "₹111",
                        "₹60",
                        "₹31",
                      ],
                      [
                        "Green Board",
                        "₹2145",
                        "₹1105",
                        "₹455",
                        "₹117",
                        "₹64",
                        "₹34",
                      ],
                      [
                        "Black Board",
                        "₹1950",
                        "₹1008",
                        "₹429",
                        "₹111",
                        "₹60",
                        "₹31",
                      ],
                      [
                        "Grey Surfacer Primer",
                        "₹2067",
                        "₹1099",
                        "₹455",
                        "₹120",
                        "-",
                        "-",
                      ],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-surface-container-low transition-colors"
                      >
                        <td className="py-4 text-on-surface font-medium">
                          {row[0]}
                        </td>
                        {row.slice(1).map((cell, j) => (
                          <td key={j} className="py-4 text-primary">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* CATEGORY 5: WATERPROOFING */}
          <section id="waterproofing" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Waterproofing
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Advanced products for dampness protection, seepage control,
                  roof coating, terrace protection, bonding, and surface repair.
                </p>
              </div>
              <a
                href="#shop-by-category"
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {categories
                .find((c) => c.id === "waterproofing")
                ?.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
            </div>
          </section>

          {/* CATEGORY 6: PUTTY, LIME WASH & TILE GROUT */}
          <section id="putty-grout" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Putty, Lime Wash & Tile Grout
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Surface preparation and finishing products for smooth walls,
                  strong bases, traditional white coating, and tile joint
                  sealing.
                </p>
              </div>
              <a
                href="#shop-by-category"
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {categories
                .find((c) => c.id === "putty-grout")
                ?.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
            </div>
            <div className="bg-surface-container-low p-6 rounded-[1.5rem] border border-outline-variant/10 text-center">
              <p className="font-body text-on-surface-variant text-sm">
                Putty, lime wash, and tile grout prices vary by pack size and
                availability. Contact Skypaints for the latest rate card.
              </p>
            </div>
          </section>

          {/* CATEGORY 7: STAINERS */}
          <section id="stainers" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Stainers
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Tinting and shade-control products for colour customization
                  and refined paint application.
                </p>
              </div>
              <a
                href="#shop-by-category"
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {categories
                .find((c) => c.id === "stainers")
                ?.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
            </div>

            <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-ambient border border-outline-variant/10 max-w-4xl mx-auto overflow-x-auto">
              <h3 className="font-headline text-2xl text-primary mb-6 text-center">
                Sky Neo Microfine Stainer Price List
              </h3>
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="py-4 px-4 font-headline text-primary">
                      Product Name
                    </th>
                    <th className="py-4 px-4 font-headline text-secondary text-center">
                      200 ML
                    </th>
                    <th className="py-4 px-4 font-headline text-secondary text-center">
                      100 ML
                    </th>
                    <th className="py-4 px-4 font-headline text-secondary text-center">
                      50 ML
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
                    <td className="py-4 px-4 text-on-surface font-semibold">
                      Sky Neo Microfine Stainer
                    </td>
                    <td className="py-4 px-4 text-center text-primary font-bold">
                      ₹60
                    </td>
                    <td className="py-4 px-4 text-center text-primary font-bold">
                      ₹30
                    </td>
                    <td className="py-4 px-4 text-center text-primary font-bold">
                      ₹15
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CATEGORY 8: CLEANING PRODUCTS */}
          <section id="cleaning" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Cleaning Products
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Mr. Shine cleaning products for hygiene, freshness, and daily
                  cleaning across homes, shops, offices, hotels, restaurants,
                  hospitals, and commercial spaces.
                </p>
              </div>
              <a
                href="#shop-by-category"
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {categories
                .find((c) => c.id === "cleaning")
                ?.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
            </div>

            {/* Cleaning Products Price List */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-ambient border border-outline-variant/10 max-w-4xl mx-auto overflow-x-auto">
              <h3 className="font-headline text-2xl text-primary mb-6 text-center">
                Mr. Shine Complete Price List
              </h3>
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="py-4 px-4 font-headline text-primary text-center">
                      S.No.
                    </th>
                    <th className="py-4 px-4 font-headline text-primary">
                      Product Name
                    </th>
                    <th className="py-4 px-4 font-headline text-secondary text-center">
                      1 LTR
                    </th>
                    <th className="py-4 px-4 font-headline text-secondary text-center">
                      5 LTR
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  {[
                    { n: "Mr. Shine Hand Wash", p1: "124", p5: "618" },
                    { n: "Mr. Shine Liquid Detergent", p1: "78", p5: "390" },
                    { n: "Mr. Shine Floor Cleaner", p1: "98", p5: "488" },
                    { n: "Mr. Shine Dish Wash", p1: "72", p5: "358" },
                    { n: "Mr. Shine Toilet Cleaner", p1: "16", p5: "78" },
                    { n: "Mr. Shine Phenyl", p1: "33", p5: "163" },
                    { n: "Toilet Cleaner Fast", p1: "33", p5: "163" },
                  ].map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors"
                    >
                      <td className="py-4 px-4 text-on-surface-variant font-medium text-center">
                        {idx + 1}
                      </td>
                      <td className="py-4 px-4 text-on-surface font-semibold">
                        {item.n}
                      </td>
                      <td className="py-4 px-4 text-center text-primary font-bold">
                        ₹{item.p1}
                      </td>
                      <td className="py-4 px-4 text-center text-primary font-bold">
                        ₹{item.p5}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
