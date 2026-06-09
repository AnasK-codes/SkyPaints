import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface text-on-surface w-full pt-20 pb-8 flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="mb-12 md:mb-0 flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-headline font-medium tracking-tight">Experience colours that breathe.</h3>
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/skyproductsraipur" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">
                Instagram
              </a>
              <a href="https://wa.me/917999295796" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">
                WhatsApp (79992 95796)
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/products#emulsions">Interior Paints</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/products#emulsions">Exterior Paints</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/products">Textures</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/products#waterproofing">Waterproofing</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/tools#calculator">Paint Calculator</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/tools#palette">Paint Finishes</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/tools#vastu">Vastu Colours</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/inspiration">All Inspiration</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/contact">Contact Us</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/contact#factories-map">Store Locator</Link>
              <Link className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium" href="/contact#inquiry-form">Support</Link>
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
      <div className="max-w-7xl mx-auto px-8 w-full flex justify-center items-center pt-12 md:pt-16 pb-4 text-xs font-medium text-on-surface-variant">
        <div className="flex flex-wrap justify-center gap-6">
          <Link className="hover:text-on-surface transition-colors" href="/privacy">Privacy</Link>
          <Link className="hover:text-on-surface transition-colors" href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
