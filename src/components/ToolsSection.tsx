import Image from "next/image";
import Link from "next/link";

export default function ToolsSection() {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-headline text-5xl text-on-primary leading-tight">
            Master your <br />
            <span className="text-secondary-fixed">Canvas.</span>
          </h2>
          <div className="space-y-6">
            {/* Tool 1 */}
            <Link
              href="/tools#calculator"
              className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer block"
            >
              <div className="p-3 rounded-full bg-secondary-fixed/20 text-secondary-fixed shrink-0">
                <span className="material-symbols-outlined">calculate</span>
              </div>
              <div>
                <h4 className="text-on-primary font-bold text-lg">
                  Paint Calculator
                </h4>
                <p className="text-on-primary-container text-sm mt-1">
                  Precise measurement to minimize waste and cost.
                </p>
              </div>
            </Link>
            {/* Tool 2 */}
            <Link
              href="/tools#vastu"
              className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer block"
            >
              <div className="p-3 rounded-full bg-secondary-fixed/20 text-secondary-fixed shrink-0">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div>
                <h4 className="text-on-primary font-bold text-lg">
                  Vastu Color Guide
                </h4>
                <p className="text-on-primary-container text-sm mt-1">
                  Balance your home's energy and invite prosperity with our
                  expertly curated room-by-room color recommendations.
                </p>
              </div>
            </Link>
            {/* Tool 3 */}
            <Link
              href="/tools#palette"
              className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer block"
            >
              <div className="p-3 rounded-full bg-secondary-fixed/20 text-secondary-fixed shrink-0">
                <span className="material-symbols-outlined">colorize</span>
              </div>
              <div>
                <h4 className="text-on-primary font-bold text-lg">
                  The Shade Finder
                </h4>
                <p className="text-on-primary-container text-sm mt-1">
                  A 3-minute quiz to find your home&apos;s unique palette.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-secondary-fixed/10 blur-3xl rounded-full"></div>
          <Image
            alt="Professional tablet showing an app"
            width={600}
            height={400}
            className="relative z-10 rounded-xl shadow-2xl border border-white/10 w-full h-auto"
            src="/images/canvas.png"
          />
        </div>
      </div>
    </section>
  );
}
