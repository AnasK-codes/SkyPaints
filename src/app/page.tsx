import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import FeaturedSection from "@/components/FeaturedSection";
import Philosophy from "@/components/Philosophy";
import BentoGrid from "@/components/BentoGrid";
import ToolsSection from "@/components/ToolsSection";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryStrip />
        <FeaturedSection />
        <Philosophy />
        <BentoGrid />
        <ToolsSection />
        <BeforeAfter />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
