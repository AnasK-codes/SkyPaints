export default function Footer() {
  return (
    <footer className="bg-violet-50 dark:bg-violet-950 w-full pt-16 pb-8 tonal shift from surface to surface-container-low">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-8 max-w-7xl mx-auto">
        <div className="col-span-2 space-y-4">
          <a className="text-xl font-serif text-violet-950 dark:text-violet-50" href="#">Skypaints</a>
          <p className="text-violet-800/60 dark:text-violet-300/60 max-w-xs text-sm">Crafting the world&apos;s most atmospheric pigments for the modern sanctuary.</p>
          <div className="flex gap-4 pt-4">
            <span className="material-symbols-outlined text-violet-950 dark:text-violet-50 cursor-pointer hover:scale-110 transition-transform">public</span>
            <span className="material-symbols-outlined text-violet-950 dark:text-violet-50 cursor-pointer hover:scale-110 transition-transform">camera</span>
            <span className="material-symbols-outlined text-violet-950 dark:text-violet-50 cursor-pointer hover:scale-110 transition-transform">mail</span>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline text-violet-950 dark:text-violet-50 font-bold">Collections</h4>
          <nav className="flex flex-col gap-2">
            <a className="text-violet-800/60 dark:text-violet-300/60 text-sm hover:text-orange-300 transition-all opacity-80 hover:opacity-100" href="#">Celestial</a>
            <a className="text-violet-800/60 dark:text-violet-300/60 text-sm hover:text-orange-300 transition-all opacity-80 hover:opacity-100" href="#">Heritage</a>
            <a className="text-violet-800/60 dark:text-violet-300/60 text-sm hover:text-orange-300 transition-all opacity-80 hover:opacity-100" href="#">Monolith</a>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline text-violet-950 dark:text-violet-50 font-bold">Resources</h4>
          <nav className="flex flex-col gap-2">
            <a className="text-violet-800/60 dark:text-violet-300/60 text-sm hover:text-orange-300 transition-all opacity-80 hover:opacity-100" href="#">Color Theory</a>
            <a className="text-violet-800/60 dark:text-violet-300/60 text-sm hover:text-orange-300 transition-all opacity-80 hover:opacity-100" href="#">Sustainability</a>
            <a className="text-violet-800/60 dark:text-violet-300/60 text-sm hover:text-orange-300 transition-all opacity-80 hover:opacity-100" href="#">Application Guide</a>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline text-violet-950 dark:text-violet-50 font-bold">Company</h4>
          <nav className="flex flex-col gap-2">
            <a className="text-violet-800/60 dark:text-violet-300/60 text-sm hover:text-orange-300 transition-all opacity-80 hover:opacity-100" href="#">Store Locator</a>
            <a className="text-violet-800/60 dark:text-violet-300/60 text-sm hover:text-orange-300 transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
            <a className="text-violet-800/60 dark:text-violet-300/60 text-sm hover:text-orange-300 transition-all opacity-80 hover:opacity-100" href="#">Terms of Use</a>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline text-violet-950 dark:text-violet-50 font-bold">Newsletter</h4>
          <div className="flex">
            <input className="bg-surface-container border-none rounded-l-full px-4 py-2 w-full text-sm focus:ring-1 focus:ring-primary-container" placeholder="Email" type="email" />
            <button className="bg-primary-container text-on-primary rounded-r-full px-4 py-2 transition-transform active:scale-95">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-violet-200/20 max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-xs text-violet-800/40 dark:text-violet-300/40">
        <span>© 2024 Skypaints. Crafted in Serene Lavender.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-primary transition-colors" href="#">Instagram</a>
          <a className="hover:text-primary transition-colors" href="#">Pinterest</a>
          <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
