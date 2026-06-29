import Icon from "@/components/Icon";
export default function CategoryStrip() {
  const categories = [
    { icon: "home_pin", label: "Interior Finishes" },
    { icon: "landscape", label: "Exterior Durability" },
    { icon: "eco", label: "Sustainable Living" },
    { icon: "palette", label: "Artist Collaborations" },
    { icon: "format_paint", label: "Professional Tools" },
  ];

  return (
    <section className="py-12 bg-surface-container-low overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="mask-fade flex whitespace-nowrap">
        <div className="flex w-max animate-scroll-infinite">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 pr-12 items-center">
              {categories.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-primary font-medium"
                >
                  <Icon name={item.icon} className="" />
                  {item.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
