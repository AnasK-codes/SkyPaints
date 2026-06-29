import React from "react";
import Icon from "@/components/Icon";

const VASTU_DATA = [
  {
    direction: "North",
    element: "WATER",
    elementColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    icon: "water_drop",
    description:
      "Ideal for living rooms and entrances. Represents career and wealth.",
    colorsText: "Pista Green, Light Blue",
    swatches: ["#E8F5E9", "#E0F7FA"],
    decoColor: "from-blue-200",
  },
  {
    direction: "North-East",
    element: "WATER/SACRED",
    elementColor: "text-teal-600",
    badgeBg: "bg-teal-50",
    icon: "self_improvement",
    description:
      "The sacred zone (Ishan). Best for prayer rooms and meditation spaces.",
    colorsText: "Soft Yellow, Mint",
    swatches: ["#FFF9C4", "#E0F7FA"],
    decoColor: "from-teal-200",
  },
  {
    direction: "East",
    element: "AIR/LIGHT",
    elementColor: "text-amber-600",
    badgeBg: "bg-amber-50",
    icon: "air",
    description:
      "Perfect for family lounges and study areas. Symbolizes health and growth.",
    colorsText: "White, Light Yellow",
    swatches: ["#FFFDE7", "#FFFFFF"],
    decoColor: "from-amber-200",
  },
  {
    direction: "South-East",
    element: "FIRE",
    elementColor: "text-rose-600",
    badgeBg: "bg-rose-50",
    icon: "local_fire_department",
    description:
      "The Agni zone. Perfect for kitchens. Represents passion and vitality.",
    colorsText: "Bright Orange, Pink",
    swatches: ["#FFCC80", "#F48FB1"],
    decoColor: "from-rose-200",
  },
  {
    direction: "South",
    element: "FIRE",
    elementColor: "text-red-600",
    badgeBg: "bg-red-50",
    icon: "local_fire_department",
    description:
      "Best suited for bedrooms and relaxation areas. Represents fame and energy.",
    colorsText: "Light Pink, Orange",
    swatches: ["#FFCDD2", "#FFE0B2"],
    decoColor: "from-red-200",
  },
  {
    direction: "South-West",
    element: "EARTH/STABILITY",
    elementColor: "text-amber-800",
    badgeBg: "bg-stone-100",
    icon: "terrain",
    description:
      "Grounding zone, ideal for master bedrooms. Represents stability and relationships.",
    colorsText: "Brown, Beige, Peach",
    swatches: ["#8D6E63", "#FFCCBC"],
    decoColor: "from-stone-300",
  },
  {
    direction: "West",
    element: "SPACE/METAL",
    elementColor: "text-slate-600",
    badgeBg: "bg-slate-100",
    icon: "star",
    description:
      "Ideal for dining rooms and children's rooms. Symbolizes creativity and gains.",
    colorsText: "Blue, Silver/Grey",
    swatches: ["#BBDEFB", "#F5F5F5"],
    decoColor: "from-slate-300",
  },
  {
    direction: "North-West",
    element: "AIR/SUPPORT",
    elementColor: "text-sky-600",
    badgeBg: "bg-sky-50",
    icon: "air",
    description:
      "Ideal for living rooms and guest rooms. Represents balance and communication.",
    colorsText: "White, Cream, Grey",
    swatches: ["#FFFFFF", "#E0E0E0"],
    decoColor: "from-sky-200",
  },
];

export default function VastuGuide() {
  return (
    <section
      className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto scroll-mt-32 animate-fade-in-up"
      id="vastu"
      style={{ animationDelay: "250ms", animationFillMode: "both" }}
    >
      <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-16 border border-outline-variant/10 shadow-ambient">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Icon
            name="explore"
            className="text-5xl text-secondary-fixed mb-4 mx-auto"
          />
          <h2 className="font-headline text-4xl text-primary mb-4">
            Vastu Colour Guide
          </h2>
          <p className="font-body text-on-surface-variant text-lg">
            Harmonize your space with ancient wisdom. Discover the ideal hues
            for every directional zone in your home to invite prosperity and
            peace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VASTU_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-outline-variant/10 hover:border-primary/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.decoColor} to-transparent opacity-30 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-[1.5]`}
              ></div>

              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2">
                  <Icon
                    name={item.icon}
                    className={`text-[20px] ${item.elementColor}`}
                  />
                  <h3 className="font-headline text-xl lg:text-2xl text-primary">
                    {item.direction}
                  </h3>
                </div>
                <span
                  className={`text-[9px] font-bold ${item.elementColor} ${item.badgeBg} px-2.5 py-1 rounded-full tracking-wider uppercase shadow-sm border border-black/5`}
                >
                  {item.element}
                </span>
              </div>

              <p className="font-body text-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center mt-auto pt-4 border-t border-outline-variant/10 group-hover:border-primary/10 transition-colors">
                <div className="flex -space-x-2 mr-3">
                  {item.swatches.map((color, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full shadow-sm ring-2 ring-surface border border-black/5 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: color,
                        zIndex: item.swatches.length - i,
                      }}
                    ></div>
                  ))}
                </div>
                <span className="text-xs font-medium text-on-surface-variant group-hover:text-primary transition-colors">
                  {item.colorsText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs font-body text-on-surface-variant/50 mt-12 max-w-xl mx-auto">
          Note: Screen colors are indicative. Actual paint shades may vary based
          on your home's lighting and wall textures.
        </p>
      </div>
    </section>
  );
}
