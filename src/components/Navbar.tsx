export default function Navbar() {
  return (
    <header className="bg-white/60 dark:bg-violet-950/60 backdrop-blur-xl fixed top-0 w-full left-0 z-50 shadow-[0px_12px_40px_rgba(46,16,101,0.08)]">
      <div className="mx-auto max-w-7xl flex justify-between items-center px-8 py-3 w-full">
        <div className="flex items-center gap-8">
          <a className="text-2xl font-serif italic text-violet-950 dark:text-violet-50" href="#">Skypaints</a>
          <nav className="hidden md:flex gap-6">
            <a className="text-violet-950 dark:text-white font-bold border-b-2 border-orange-300 hover:text-violet-950 dark:hover:text-white transition-colors" href="#">Home</a>
            <a className="text-violet-700/70 dark:text-violet-200/70 hover:text-violet-950 dark:hover:text-white transition-colors" href="#">Products</a>
            <a className="text-violet-700/70 dark:text-violet-200/70 hover:text-violet-950 dark:hover:text-white transition-colors" href="#">Colors</a>
            <a className="text-violet-700/70 dark:text-violet-200/70 hover:text-violet-950 dark:hover:text-white transition-colors" href="#">Inspiration</a>
            <a className="text-violet-700/70 dark:text-violet-200/70 hover:text-violet-950 dark:hover:text-white transition-colors" href="#">Tools</a>
            <a className="text-violet-700/70 dark:text-violet-200/70 hover:text-violet-950 dark:hover:text-white transition-colors" href="#">About</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary-container text-on-primary rounded-full px-6 py-2 font-medium scale-95 duration-200 ease-in-out hover:bg-primary transition-all shadow-lg shadow-primary-container/20">Explore Colors</button>
          <span className="material-symbols-outlined text-violet-900 dark:text-violet-100 cursor-pointer">account_circle</span>
        </div>
      </div>
    </header>
  );
}
