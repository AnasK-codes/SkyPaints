export default function CategoryStrip() {
  return (
    <section className="py-12 bg-surface-container-low">
      <div className="mask-fade overflow-x-auto no-scrollbar flex items-center gap-12 px-12 whitespace-nowrap">
        <a className="flex items-center gap-3 text-primary font-medium hover:text-secondary-container transition-colors" href="#">
          <span className="material-symbols-outlined">home_pin</span> Interior Finishes
        </a>
        <a className="flex items-center gap-3 text-primary font-medium hover:text-secondary-container transition-colors" href="#">
          <span className="material-symbols-outlined">landscape</span> Exterior Durability
        </a>
        <a className="flex items-center gap-3 text-primary font-medium hover:text-secondary-container transition-colors" href="#">
          <span className="material-symbols-outlined">texture</span> Tactile Textures
        </a>
        <a className="flex items-center gap-3 text-primary font-medium hover:text-secondary-container transition-colors" href="#">
          <span className="material-symbols-outlined">eco</span> Sustainable Living
        </a>
        <a className="flex items-center gap-3 text-primary font-medium hover:text-secondary-container transition-colors" href="#">
          <span className="material-symbols-outlined">palette</span> Artist Collaborations
        </a>
        <a className="flex items-center gap-3 text-primary font-medium hover:text-secondary-container transition-colors" href="#">
          <span className="material-symbols-outlined">format_paint</span> Professional Tools
        </a>
      </div>
    </section>
  );
}
