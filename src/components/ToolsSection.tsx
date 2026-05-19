import Image from "next/image";

export default function ToolsSection() {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-headline text-5xl text-on-primary leading-tight">Master your <br/><span className="text-secondary-fixed">Canvas.</span></h2>
          <div className="space-y-6">
            {/* Tool 1 */}
            <div className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="p-3 rounded-full bg-secondary-fixed/20 text-secondary-fixed">
                <span className="material-symbols-outlined">calculate</span>
              </div>
              <div>
                <h4 className="text-on-primary font-bold text-lg">Paint Calculator</h4>
                <p className="text-on-primary-container text-sm mt-1">Precise measurement to minimize waste and cost.</p>
              </div>
            </div>
            {/* Tool 2 */}
            <div className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="p-3 rounded-full bg-secondary-fixed/20 text-secondary-fixed">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div>
                <h4 className="text-on-primary font-bold text-lg">Virtual Visualizer</h4>
                <p className="text-on-primary-container text-sm mt-1">Preview any shade on your walls using AR technology.</p>
              </div>
            </div>
            {/* Tool 3 */}
            <div className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="p-3 rounded-full bg-secondary-fixed/20 text-secondary-fixed">
                <span className="material-symbols-outlined">colorize</span>
              </div>
              <div>
                <h4 className="text-on-primary font-bold text-lg">The Shade Finder</h4>
                <p className="text-on-primary-container text-sm mt-1">A 3-minute quiz to find your home&apos;s unique palette.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-secondary-fixed/10 blur-3xl rounded-full"></div>
          <Image alt="Professional tablet showing an app" width={600} height={400} className="relative z-10 rounded-xl shadow-2xl border border-white/10 w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCg6mlxL1P-4nGKfbLK6WBsxDhafHxaJXLK9x9UVyCKKdAX1nyzXDpqKfvY75dzptv1bhD0VgxGJCYFWPXz8-bb9nlmIm6TboVfJdMOI576SaUL3kFsBDXVhqteTLbc_Ap3DMB_JcoZdf_7Uu_4ALxGLRDBWSP3tZznRmJGalH8J9qJAEiVD-BlP1C1K0-3HsooIIkfno1ORfEw2Z3oeE1Pp9XoZfP7d36BTUh-f19X7ooDFJX2Y8HAoH2vXZpeKwfy9tNkkqnAtw" />
        </div>
      </div>
    </section>
  );
}
