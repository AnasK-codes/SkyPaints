import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="relative">
          <h1 className="font-display text-[120px] md:text-[180px] font-normal text-primary/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-headline text-4xl md:text-5xl text-primary tracking-tight">
              Page not found
            </span>
          </div>
        </div>

        <p className="text-on-surface-variant text-lg leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium shadow-lg hover:bg-primary/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="border border-outline-variant/30 text-primary px-8 py-4 rounded-full font-medium hover:bg-surface-container-low transition-colors"
          >
            Browse Products
          </Link>
        </div>

        <div className="pt-8 flex items-center justify-center gap-6 text-sm text-on-surface-variant">
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact Us
          </Link>
          <span className="text-outline-variant">•</span>
          <Link href="/inspiration" className="hover:text-primary transition-colors">
            Read Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
