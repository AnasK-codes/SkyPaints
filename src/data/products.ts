export interface Product {
  name: string;
  desc: string;
  features?: string[];
  sizes: string;
  price: string | Record<string, number | undefined>;
  image: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "emulsions",
    title: "Emulsions",
    description:
      "Premium interior and exterior wall emulsions designed for smooth finish, modern appearance, durability, and wall protection.",
    products: [
      {
        name: "Pro Royal Glow – Exterior & Interior Emulsion",
        desc: "Premium smooth emulsion suitable for both interior and exterior walls. It gives walls a rich glow finish with smooth coverage and a refined appearance.",
        features: [
          "Rich royal glow finish",
          "Smooth application",
          "Interior and exterior use",
          "Durable and long-lasting",
          "Low odour",
        ],
        sizes: "20L, 10L, 4L, 1L, 500ml",
        price: { "20L": 2500, "10L": 1275, "4L": 590, "1L": 152 },
        image: "/images/emulsions/pro-royal-glow.png",
      },
      {
        name: "Hi-Sheen – Exterior & Interior Emulsion",
        desc: "High-gloss sheen emulsion designed for elegant modern walls. Suitable for homes, offices, commercial spaces, and exterior surfaces.",
        features: [
          "High gloss sheen finish",
          "Bright and elegant look",
          "Moisture and weather resistance",
          "Smooth application",
          "Durable coating",
        ],
        sizes: "20L, 10L, 1L, 500ml",
        price: { "20L": 3510, "10L": 1800, "4L": 735, "1L": 195 },
        image: "/images/emulsions/hi-sheen.png",
      },
      {
        name: "Neo Smart Premium – Exterior & Interior Emulsion",
        desc: "Ultra-smooth premium emulsion for luxury interiors and refined exterior walls. Designed for a rich matte finish and long-lasting colour brilliance.",
        features: [
          "Ultra-smooth rich matte finish",
          "UV shield for fade-free walls",
          "Anti-fungal and stain-resistant formula",
          "Quick dry and easy clean",
          "Premium quality finish",
        ],
        sizes: "20L, 10L, 4L, 1L, 500ml",
        price: {
          "20L": 5000,
          "10L": 2600,
          "4L": 1080,
          "1L": 290,
          "500ml": 155,
        },
        image: "/images/emulsions/sky-neo-smart-premium.png",
      },
      {
        name: "Neo Advance – Anti-Fungal Paint",
        desc: "Advanced anti-fungal paint for interior and exterior walls. Designed to prevent fungus, algae, black patches, moisture damage, and dampness impact.",
        features: [
          "Advanced anti-fungal protection",
          "Prevents fungus, algae, and black patches",
          "Moisture and dampness resistance",
          "Durable and long-lasting",
          "Smooth, refined finish",
        ],
        sizes: "20L, 10L, 4L, 1L, 500ml",
        price: { "20L": 1000, "10L": 530, "4L": 250, "1L": 65 },
        image: "/images/emulsions/sky-neo-advance.png",
      },
    ],
  },
  {
    id: "oil-paint",
    title: "Oil Paint",
    description:
      "Utility products for paint-related applications, surface work, finishing support, and professional use. This category includes Paint Oil and Taarpin.",
    products: [
      {
        name: "Taarpin",
        desc: "Paint-related support product used for application, thinning, finishing, cleaning support, and general surface work.",
        features: [
          "Useful in paint work",
          "Supports application and finishing",
          "Suitable for professional use",
          "Available for bulk supply",
        ],
        sizes: "4.5L, 850ml, 800ml, 750ml, 700ml, 425ml, 180ml",
        price: {
          "4.5L": 540,
          "850ml": 108,
          "800ml": 102,
          "750ml": 96,
          "700ml": 90,
          "425ml": 60,
          "180ml": 31.2,
        },
        image: "/images/oil-paint/tarpin.png",
      },
    ],
  },
  {
    id: "distemper",
    title: "Distemper",
    description:
      "Smooth, economical, and practical wall coating range for clean and fresh-looking interiors.",
    products: [
      {
        name: "Neo Rich Wall Health Protect – Luxury Distemper",
        desc: "Premium interior wall distemper designed for elegant aesthetics and healthy wall protection. Suitable for smooth walls and fresh interior finishes.",
        features: [
          "Rich smooth finish",
          "Wall health protection",
          "Low odour & long-lasting colour",
          "Smooth flow and even coverage",
        ],
        sizes: "1kg, 2kg, 5kg, 10kg, 20kg",
        price: { "20kg": 630, "10kg": 350, "5kg": 185, "2kg": 80 },
        image: "/images/distemper/sky-neo-luxury-distemper.png",
      },
      {
        name: "Sky Neo Smart Acrylic Distemper",
        desc: "High-quality interior wall coating that provides a smooth, even finish with a fresh and long-lasting look.",
        features: [
          "Smooth interior finish",
          "Good coverage & economical",
          "Fresh colour appearance",
          "Suitable for interior walls",
        ],
        sizes: "1kg x 20 pc, 1kg x 30 pc",
        price: { "1kg": 26, "20kg": 520, "30kg": 900 },
        image: "/images/distemper/sky-neo-smart-acrylic.png",
      },
    ],
  },
  {
    id: "synthetic-enamel",
    title: "Synthetic Enamel",
    description:
      "Glossy and durable products for metal, wood, primers, varnish, and finishing applications.",
    products: [
      {
        name: "Sky Neo Smart Synthetic Enamel",
        desc: "Glossy top coat for wood and metal surfaces, specially formulated for strong protection and long-lasting durability.",
        features: [
          "Smooth glossy finish",
          "Strong protection",
          "Suitable for wood and metal",
          "Long-lasting performance",
        ],
        sizes: "50ml, 100ml, 200ml, 500ml, 1L, 4L, 20L",
        price: "Price on request",
        image: "/images/syntheic-enamel/neo-smart-synthetic-enamel.png",
      },
      {
        name: "Sky Neo Polyurethane Wood Finish",
        desc: "Protective wood finish specially formulated to protect and enhance wooden surfaces with smooth durable finish.",
        features: [
          "Protects wood surfaces",
          "Premium shine",
          "Smooth finish",
          "Wear resistance",
        ],
        sizes: "200ml, 500ml, 1L, 10L, 20L",
        price: {
          "20L": 4100,
          "10L": 2075,
          "4L": 840,
          "1L": 215,
          "500ml": 111,
          "200ml": 57,
        },
        image: "/images/syntheic-enamel/neo-smart-polyurethane.png",
      },
      {
        name: "Sky Neo Varnish",
        desc: "Varnish range for protective and decorative finishing on wooden and utility surfaces.",
        features: [
          "Variants: Hammertone, Texture Finish, Wood Protect, Murl Varnish, Clear Varnish",
          "Protective coating & Decorative shine",
          "Smooth application",
          "Surface protection",
        ],
        sizes: "Varies",
        price: {
          "20L": 3200,
          "10L": 1625,
          "4L": 670,
          "1L": 170,
          "500ml": 89,
          "200ml": 45,
        },
        image: "/images/syntheic-enamel/varnish.png",
      },
    ],
  },
  {
    id: "waterproofing",
    title: "Waterproofing",
    description:
      "Advanced products for dampness protection, seepage control, roof coating, terrace protection, bonding, and surface repair.",
    products: [
      {
        name: "Damp Proof Advance",
        desc: "Advanced elastomeric waterproof cool coating for roofs, terraces, and exterior walls. Helps prevent dampness, seepage, and heat impact.",
        features: [
          "Elastomeric protection",
          "Prevents seepage",
          "Reduces heat (cool coating)",
          "Durable & weather resistant",
        ],
        sizes: "20L, 10L, 4L, 1L, 500ml",
        price: { "20L": 4000, "10L": 2100, "5L": 1200, "1L": 260 },
        image: "/images/waterproofing/damp-proof-advance.png",
      },
      {
        name: "Waterproof Glo",
        desc: "Transparent adhesive that provides a strong bond and long-lasting protection. Ideal for walls, tiles, concrete, wood, and plaster.",
        features: [
          "100% Waterproof",
          "Strong bond",
          "Long lasting protection",
          "Easy to apply",
          "Non toxic & safe",
        ],
        sizes: "500ml, 1L, 4L, 10L, 20L",
        price: {
          "20L": 6800,
          "10L": 3600,
          "4L": 1450,
          "1L": 380,
          "500ml": 210,
        },
        image: "/images/waterproofing/waterproof-glo.png",
      },
      {
        name: "Range of Waterproofing",
        desc: "Specialized waterproofing range for surface protection, bonding, and water resistance.",
        features: [
          "Includes: Sky Ultra LW 786, Sky Ultra URP 521",
          "Sky Ultra Sealer",
          "Sky Paint Shine WTO",
          "Professional protection",
        ],
        sizes: "20L, 10L, 5L, 1L",
        price: "Price on request",
        image: "/images/waterproofing/range-of-waterproofing.png",
      },
    ],
  },
  {
    id: "putty-grout",
    title: "Putty, Lime Wash & Tile Grout",
    description:
      "Surface preparation and finishing products for smooth walls, strong bases, traditional white coating, and tile joint sealing.",
    products: [
      {
        name: "Wall Shield – White Cement Based Putty",
        desc: "High-quality cement-based wall filler used to level and smooth wall surfaces before painting.",
        features: [
          "Strong wall base",
          "Smooth surface preparation",
          "Improves paint finish",
          "Enhances paint durability",
        ],
        sizes: "1kg, 5kg, 40kg",
        price: { "40kg": 550, "20kg": 290 },
        image: "/images/putty-lime-grout/wall-shield.png",
      },
      {
        name: "Wall Coat – World Standard Putty",
        desc: "Premium wall putty designed to provide a smooth, strong base for paint application and long-lasting finish.",
        features: [
          "Smooth base",
          "Strong adhesion",
          "Improved paint performance",
          "Premium wall preparation",
        ],
        sizes: "1kg, 5kg, 40kg",
        price: { "20kg": 600, "10kg": 325, "5kg": 200, "1kg": 30 },
        image: "/images/putty-lime-grout/wall-coat.png",
      },
      {
        name: "White Wall – Brilliant White Lime Wash",
        desc: "Traditional bright white lime wash that gives walls a fresh, white, breathable, and natural look.",
        features: [
          "Bright white finish",
          "Traditional wall coating",
          "Breathable finish",
          "Economical and fresh look",
        ],
        sizes: "5kg, 10kg, 25kg",
        price: { "25kg": 300, "10kg": 160, "5kg": 75 },
        image: "/images/putty-lime-grout/white-wall.png",
      },
      {
        name: "Tile Grout – Polymer Modified Grout",
        desc: "Polymer modified tile grout designed for filling and sealing tile joints with strong adhesion and water resistance.",
        features: [
          "Tile joint filling",
          "Strong adhesion",
          "Water resistance",
          "Clean durable finish",
        ],
        sizes: "20kg, 1kg",
        price: { "25kg": 300, "1kg": 30 },
        image: "/images/putty-lime-grout/tile-grout.png",
      },
    ],
  },
  {
    id: "stainers",
    title: "Stainers",
    description:
      "Tinting and shade-control products for colour customization and refined paint application.",
    products: [
      {
        name: "Mr. Shine Hand Wash",
        desc: "Gently cleans hands, kills germs, and keeps skin soft and fresh.",
        features: ["Gentle care", "Germ protection", "Skin-friendly formula"],
        sizes: "1L, 5L",
        price: "1L ₹124, 5L ₹618",
        image: "/images/cleaning-products/mr-shine-hand-wash.png",
      },
      {
        name: "Mr. Shine Liquid Detergent",
        desc: "Removes tough stains while protecting fabric softness and colour.",
        features: [
          "Powerful stain removal",
          "Keeps colours bright",
          "Safe for daily wash",
        ],
        sizes: "1L, 5L",
        price: "1L ₹78, 5L ₹390",
        image: "/images/cleaning-products/mr-shine-detergent.png",
      },
      {
        name: "Mr. Shine Floor Cleaner",
        desc: "Cleaning solution for floors and hard surfaces in homes and commercial areas.",
        features: [
          "Removes grease and germs",
          "Suitable for tiles and ceramic",
          "Leaves surfaces fresh",
        ],
        sizes: "1L, 5L",
        price: "1L ₹98, 5L ₹488",
        image: "/images/cleaning-products/mr-shine-surface-cleaner.png",
      },
      {
        name: "Mr. Shine Dish Wash",
        desc: "Dish wash liquid for tough grease, food stains, and utensil cleaning.",
        features: ["Tough on grease", "Gentle on hands", "Quick rinse action"],
        sizes: "1L, 5L",
        price: "1L ₹72, 5L ₹358",
        image: "/images/cleaning-products/mr-shine-dish-wash.png",
      },
      {
        name: "Mr. Shine Toilet Cleaner",
        desc: "Deep cleaning toilet cleaner for stains, germs, bad odour, and freshness.",
        features: [
          "Kills germs",
          "Removes tough stains",
          "Long-lasting freshness",
        ],
        sizes: "1L, 5L",
        price: "1L ₹16, 5L ₹78",
        image: "/images/cleaning-products/mr-shine-toilet-cleaner.png",
      },
      {
        name: "Mr. Shine Phenyl",
        desc: "Daily cleaning phenyl for homes, offices, shops, and commercial use.",
        features: ["Daily cleaning", "Commercial use"],
        sizes: "1L, 5L",
        price: "1L ₹33, 5L ₹163",
        image: "/images/cleaning-products/mr-shine-phenyl.png",
      },
      {
        name: "Toilet Cleaner Fast",
        desc: "Fast-action toilet cleaner for tough stains and washroom hygiene.",
        features: ["Fast action", "Tough stains"],
        sizes: "1L, 5L",
        price: "1L ₹33, 5L ₹163",
        image: "/images/cleaning-products/toilet-cleaner-fast.png",
      },
    ],
  },
  {
    id: "cleaning",
    title: "Cleaning Products",
    description:
      "Mr. Shine cleaning products for hygiene, freshness, and daily cleaning across homes, shops, offices, hotels, restaurants, hospitals, and commercial spaces.",
    products: [
      {
        name: "Mr. Shine Hand Wash",
        desc: "Gently cleans hands, kills germs, and keeps skin soft and fresh.",
        features: ["Gentle care", "Germ protection", "Skin-friendly formula"],
        sizes: "1L, 5L",
        price: "1L ₹124, 5L ₹618",
        image: "/images/cleaning-products/mr-shine-hand-wash.png",
      },
      {
        name: "Mr. Shine Liquid Detergent",
        desc: "Removes tough stains while protecting fabric softness and colour.",
        features: [
          "Powerful stain removal",
          "Keeps colours bright",
          "Safe for daily wash",
        ],
        sizes: "1L, 5L",
        price: "1L ₹78, 5L ₹390",
        image: "/images/cleaning-products/mr-shine-detergent.png",
      },
      {
        name: "Mr. Shine Floor Cleaner",
        desc: "Cleaning solution for floors and hard surfaces in homes and commercial areas.",
        features: [
          "Removes grease and germs",
          "Suitable for tiles and ceramic",
          "Leaves surfaces fresh",
        ],
        sizes: "1L, 5L",
        price: "1L ₹98, 5L ₹488",
        image: "/images/cleaning-products/mr-shine-surface-cleaner.png",
      },
      {
        name: "Mr. Shine Dish Wash",
        desc: "Dish wash liquid for tough grease, food stains, and utensil cleaning.",
        features: ["Tough on grease", "Gentle on hands", "Quick rinse action"],
        sizes: "1L, 5L",
        price: "1L ₹72, 5L ₹358",
        image: "/images/cleaning-products/mr-shine-dish-wash.png",
      },
      {
        name: "Mr. Shine Toilet Cleaner",
        desc: "Deep cleaning toilet cleaner for stains, germs, bad odour, and freshness.",
        features: [
          "Kills germs",
          "Removes tough stains",
          "Long-lasting freshness",
        ],
        sizes: "1L, 5L",
        price: "1L ₹16, 5L ₹78",
        image: "/images/cleaning-products/mr-shine-toilet-cleaner.png",
      },
      {
        name: "Mr. Shine Phenyl",
        desc: "Daily cleaning phenyl for homes, offices, shops, and commercial use.",
        features: ["Daily cleaning", "Commercial use"],
        sizes: "1L, 5L",
        price: "1L ₹33, 5L ₹163",
        image: "/images/cleaning-products/mr-shine-phenyl.png",
      },
      {
        name: "Toilet Cleaner Fast",
        desc: "Fast-action toilet cleaner for tough stains and washroom hygiene.",
        features: ["Fast action", "Tough stains"],
        sizes: "1L, 5L",
        price: "1L ₹33, 5L ₹163",
        image: "/images/cleaning-products/toilet-cleaner-fast.png",
      },
    ],
  },
];
