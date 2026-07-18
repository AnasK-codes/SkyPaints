import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface text-on-surface w-full pt-20 pb-8 flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="mb-12 md:mb-0 flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-headline font-medium tracking-tight">
              Experience colours that breathe.
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/skyproductsraipur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/917999295796?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Sky%20Paints%20and%20its%20products.%20Can%20you%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <Link
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
                href="/products#emulsions"
              >
                Interior Paints
              </Link>
              <Link
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
                href="/products#emulsions"
              >
                Exterior Paints
              </Link>
              <Link
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
                href="/products#cleaning-products"
              >
                Cleaning Products
              </Link>
              <Link
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
                href="/products#waterproofing"
              >
                Waterproofing
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
                href="/tools#calculator"
              >
                Paint Calculator
              </Link>
              <Link
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
                href="/tools#palette"
              >
                Paint Finishes
              </Link>
              <Link
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
                href="/tools#vastu"
              >
                Vastu Colours
              </Link>
              <Link
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
                href="/inspiration"
              >
                All Inspiration
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
                href="/contact"
              >
                Contact Us
              </Link>
              <Link
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
                href="/contact#factories-map"
              >
                Store Locator
              </Link>
              <Link
                className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium"
                href="/contact#inquiry-form"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Typography */}
      <div className="w-full select-none pointer-events-none flex justify-center mt-12 mb-12 md:mt-20 md:mb-16">
        <span className="font-display font-normal text-[clamp(40px,21vw,450px)] tracking-[-0.02em] text-[#0f0f1a] leading-[0.85]">
          Skypaints
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col items-center gap-4 pt-12 md:pt-16 pb-8 text-xs font-medium text-on-surface-variant">
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            className="hover:text-on-surface transition-colors"
            href="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="hover:text-on-surface transition-colors"
            href="/terms"
          >
            Terms
          </Link>
        </div>
        <div className="flex items-center gap-1.5 mt-2 opacity-80 text-sm">
          <span>Developed by</span>
          <a
            href="https://maven-studio-new.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline transition-colors"
          >
            Maven Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
