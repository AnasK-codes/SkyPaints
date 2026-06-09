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
      <div className="w-full select-none pointer-events-none flex justify-center leading-none mt-4 -mb-2 md:-mb-8">
        <span className="text-[20vw] font-black tracking-tighter text-on-surface leading-[0.75]">
          Skypaints
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col items-center gap-4 pt-12 md:pt-16 pb-8 text-xs font-medium text-on-surface-variant">
        <div className="flex flex-wrap justify-center gap-6">
          <Link className="hover:text-on-surface transition-colors" href="/privacy">Privacy</Link>
          <Link className="hover:text-on-surface transition-colors" href="/terms">Terms</Link>
        </div>
        <div className="flex items-center gap-2 mt-2 opacity-80">
          <span>Developed by</span>
          <a href="https://github.com/AnasK-codes" target="_blank" rel="noopener noreferrer" aria-label="Anas Khan GitHub" className="hover:text-on-surface transition-colors flex items-center">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <span>&amp;</span>
          <a href="https://github.com/mustafamalak" target="_blank" rel="noopener noreferrer" aria-label="Mustafa Malak GitHub" className="hover:text-on-surface transition-colors flex items-center">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
