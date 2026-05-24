import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface text-on-surface w-full pt-20 pb-8 flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="mb-12 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-headline font-medium tracking-tight">Experience colours that breathe.</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/products">Interior Paints</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/products">Exterior Paints</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/products">Textures</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/products">Waterproofing</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/inspiration/cost-to-paint-2bhk-3bhk-india">Paint Calculator</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/inspiration/how-to-choose-paint-finish">Paint Finishes</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/inspiration/vastu-compliant-colours">Vastu Colours</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/inspiration">All Inspiration</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/contact">Contact Us</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/contact">Store Locator</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/contact">Trade Partners</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/contact">Support</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Typography */}
      <div className="w-full select-none pointer-events-none flex justify-center leading-none mt-4 -mb-2 md:-mb-8">
        <span className="text-[20vw] font-bold tracking-tighter text-on-surface leading-[0.75]">
          Skypaints
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row justify-between items-center pt-12 md:pt-16 pb-4 text-xs font-medium text-on-surface-variant">
        <span className="text-lg font-headline font-bold text-on-surface mb-6 md:mb-0">Skypaints</span>
        <div className="flex flex-wrap justify-center gap-6">
          <Link className="hover:text-on-surface transition-colors" href="#">Instagram</Link>
          <Link className="hover:text-on-surface transition-colors" href="#">Pinterest</Link>
          <Link className="hover:text-on-surface transition-colors" href="#">Privacy</Link>
          <Link className="hover:text-on-surface transition-colors" href="#">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
