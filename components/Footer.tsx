import Link from "next/link";

const FOOTER_LINKS = {
  Services: [
    { label: "Interior Painting", href: "/services/interior-painting" },
    { label: "Exterior Painting", href: "/services/exterior-painting" },
    { label: "Waterproofing", href: "/services/waterproofing" },
  ],
  Company: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500">
                <span className="text-lg font-black text-white">S</span>
              </div>
              <span className="text-xl font-bold">
                Sky<span className="gradient-text">Paints</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Professional house painting services you can trust. Quality
              results, every time.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-white transition-colors hover:bg-green-500"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href="mailto:hello@skypaints.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-colors hover:bg-sky-500/20 hover:text-sky-400"
                aria-label="Email"
              >
                ✉
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 transition-colors hover:text-sky-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SkyPaints. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with ❤️ for beautiful homes
          </p>
        </div>
      </div>
    </footer>
  );
}
