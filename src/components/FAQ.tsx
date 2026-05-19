export default function FAQ() {
  return (
    <section className="py-32 px-8 max-w-3xl mx-auto">
      <h2 className="font-headline text-4xl text-center mb-16 text-primary">Inquiries</h2>
      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <div className="border-b border-outline-variant/30 pb-6 group cursor-pointer">
          <div className="flex justify-between items-center text-primary font-bold text-lg">
            <span>What makes Skypaints low-VOC?</span>
            <span className="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
          </div>
          <div className="mt-4 text-on-surface-variant leading-relaxed hidden group-hover:block">
            Our formulation replaces petroleum-based solvents with plant-derived alternatives, ensuring your air quality remains as pristine as our colors.
          </div>
        </div>
        {/* FAQ Item 2 */}
        <div className="border-b border-outline-variant/30 pb-6 group cursor-pointer">
          <div className="flex justify-between items-center text-primary font-bold text-lg">
            <span>How do I choose between Matte and Eggshell?</span>
            <span className="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
          </div>
          <div className="mt-4 text-on-surface-variant leading-relaxed hidden group-hover:block">
            Matte is ideal for low-traffic areas and hiding wall imperfections, while Eggshell offers a subtle glow and higher washability for living spaces.
          </div>
        </div>
        {/* FAQ Item 3 */}
        <div className="border-b border-outline-variant/30 pb-6 group cursor-pointer">
          <div className="flex justify-between items-center text-primary font-bold text-lg">
            <span>Do you offer international shipping?</span>
            <span className="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
          </div>
          <div className="mt-4 text-on-surface-variant leading-relaxed hidden group-hover:block">
            Currently, we ship our artisanal collections throughout North America and Europe, with selective availability in Asia-Pacific hubs.
          </div>
        </div>
      </div>
    </section>
  );
}
