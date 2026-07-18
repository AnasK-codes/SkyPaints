export interface PricingTableRow {
  productName: string;
  prices: string[];
}

export interface PricingSection {
  title: string;
  headers: string[];
  rows: PricingTableRow[];
  isNumbered?: boolean; // For tables like Mr. Shine where first column is S.No.
}

export const emulsionsPricingSections: PricingSection[] = [
  {
    title: "Sky Neo Advance",
    headers: ["Water Base", "30LTR", "20LTR", "10LTR", "4LTR", "1LTR"],
    rows: [
      {
        productName: "Neo Advance Water BasePrimer",
        prices: ["₹1705", "₹1100", "₹583", "₹275", "₹71.50"],
      },
      {
        productName: "Neo Smart Premium Water Base Primer",
        prices: ["₹1925", "₹1210", "₹638", "₹401.50", "₹77"],
      },
    ],
  },
  {
    title: "Hi Sheen Emulsion",
    headers: [
      "Emulsion",
      "20LTR",
      "10LTR",
      "4LTR",
      "1LTR",
      "500ML",
      "200ML",
      "100ML",
      "50ML",
    ],
    rows: [
      {
        productName: "Metalic Emulsion",
        prices: [
          "₹5500",
          "₹2860",
          "₹1188",
          "₹319",
          "₹170.50",
          "₹107.25",
          "₹57.20",
          "₹35.20",
        ],
      },
      {
        productName: "Sheen (white & Base)",
        prices: ["₹3861", "₹1980", "₹808.50", "₹214.50", "-", "-", "-", "-"],
      },
    ],
  },
  {
    title: "Neo Smart Premium Emulsion",
    headers: ["Interior & Exterior", "20LTR", "10LTR", "4LTR", "1LTR", "500ML"],
    rows: [
      {
        productName: "Interior Emulsion White",
        prices: ["₹1265", "₹682", "₹279.40", "₹78.65", "-"],
      },
      {
        productName: "Interior Emulsion Shade",
        prices: ["₹1540", "₹770", "₹473", "₹121", "₹66"],
      },
      {
        productName: "Exterior Emulsion White",
        prices: ["₹2750", "₹1402.50", "₹649", "₹167.20", "-"],
      },
      {
        productName: "Exterior Emulsion Shade",
        prices: ["₹2970", "₹1512.50", "₹704", "₹181.50", "₹94.60"],
      },
    ],
  },
];

export const distemperPricingSections: PricingSection[] = [
  {
    title: "Distemper Buckets",
    headers: ["Distemper Buckets", "20KG", "10KG", "5KG", "2KG"],
    rows: [
      {
        productName: "Neo Rich Wall Health Protect Bucket White (1st Quality)",
        prices: ["₹693", "₹385", "₹203.50", "₹88"],
      },
      {
        productName: "Neo Rich Wall Health Protect Bucket Shade (1st Quality)",
        prices: ["₹737", "₹407", "₹214.50", "₹92.40"],
      },
      {
        productName: "Neo Rich Wall Health Protect Bucket White (2nd Quality)",
        prices: ["₹605", "₹341", "₹187", "₹77"],
      },
      {
        productName: "Neo Rich Wall Health Protect Bucket Shade (2nd Quality)",
        prices: ["₹649", "₹363", "₹198", "₹81.40"],
      },
    ],
  },
  {
    title: "Distemper Pouch",
    headers: ["Distemper Pouch", "1KG", "20KG", "30KG Bucket"],
    rows: [
      {
        productName: "Sky Neo Smart Obd Pouch Box",
        prices: ["₹28.60/KG", "₹572", "₹990"],
      },
      {
        productName: "Sky Neo Smart Dark Shades",
        prices: ["₹30.80/KG", "₹616", "₹1056"],
      },
      {
        productName: "Shree Sky Utsav Obd Pouch Box",
        prices: ["₹22/KG", "₹440", "₹825"],
      },
    ],
  },
  {
    title: "Distemper Bag",
    headers: ["Distemper Bag", "20KG", "10KG", "5KG"],
    rows: [
      {
        productName: "Sky Neo Distemper Bag",
        prices: ["₹495", "₹264", "₹143"],
      },
    ],
  },
];

export const syntheticEnamelPricingSections: PricingSection[] = [
  {
    title: "Sky Neo Synthetic Enamel",
    headers: [
      "Oil Paints",
      "20LTR",
      "10LTR",
      "4LTR",
      "1LTR",
      "500ML",
      "200ML",
      "100ML",
      "50ML",
    ],
    rows: [
      {
        productName: "Deep Orange, Br White",
        prices: ["₹3135", "₹1595", "₹649", "₹165", "₹88", "₹46.20", "-", "-"],
      },
      {
        productName: "All Shade",
        prices: [
          "₹3025",
          "₹1540",
          "₹627",
          "₹159.50",
          "₹84.70",
          "₹42.90",
          "₹24.20",
          "₹15.40",
        ],
      },
      {
        productName: "Aluminium Paints",
        prices: ["₹4345", "₹2200", "₹891", "₹225.50", "₹113.30", "₹58.30", "-", "-"],
      },
      {
        productName: "Furniture Enamel",
        prices: ["₹3850", "₹1952.50", "₹792", "₹203.50", "₹105.60", "-", "-", "-"],
      },
      {
        productName: "Mint Green, Gdn Yellow, special Red",
        prices: [
          "₹4125",
          "₹2090",
          "₹847",
          "₹214.50",
          "₹111.10",
          "₹57.20",
          "₹38.50",
          "₹22",
        ],
      },
    ],
  },
  {
    title: "Sky Neo Varnish",
    headers: ["Varnish", "20LTR", "10LTR", "4LTR", "1LTR", "500ML", "200ML"],
    rows: [
      {
        productName: "Hammertone",
        prices: ["₹4510", "₹2282.50", "₹924", "₹236.50", "₹122.10", "₹62.70"],
      },
      {
        productName: "Texture Finish",
        prices: ["₹4510", "₹2282.50", "₹924", "₹236.50", "₹122.10", "₹62.70"],
      },
      {
        productName: "Wood Protect",
        prices: ["₹4510", "₹2282.50", "₹924", "₹236.50", "₹122.10", "₹62.70"],
      },
      {
        productName: "Murti Varnish",
        prices: ["₹3795", "₹1925", "₹781", "₹198", "₹103.40", "₹52.80"],
      },
      {
        productName: "Clear Varnish",
        prices: ["₹3520", "₹1787.50", "₹737", "₹187", "₹97.90", "₹49.50"],
      },
    ],
  },
  {
    title: "Sky Neo Wood & Metal Finish",
    headers: ["Primer", "20LTR", "10LTR", "4LTR", "1LTR", "500ML", "200ML"],
    rows: [
      {
        productName: "White Primer",
        prices: ["₹1650", "₹852.50", "₹363", "₹95.70", "₹52.80", "₹27.50"],
      },
      {
        productName: "Pink Primer",
        prices: ["₹1650", "₹852.50", "₹363", "₹95.70", "₹52.80", "₹27.50"],
      },
      {
        productName: "Metal Primer",
        prices: ["₹1518", "₹704", "₹330", "₹93.50", "₹50.60", "₹26.40"],
      },
      {
        productName: "Red Oxide Glossy",
        prices: ["₹1650", "₹852.50", "₹363", "₹93.50", "₹50.60", "₹26.40"],
      },
      {
        productName: "Black Japan - Rubber Paint",
        prices: ["₹1650", "₹852.50", "₹363", "₹93.50", "₹50.60", "₹26.40"],
      },
      {
        productName: "Green Board",
        prices: ["₹1815", "₹935", "₹385", "₹99", "₹53.90", "₹28.60"],
      },
      {
        productName: "Black Board",
        prices: ["₹1650", "₹852.50", "₹363", "₹93.50", "₹50.60", "₹26.40"],
      },
      {
        productName: "Grey Surfacer Primer",
        prices: ["₹1749", "₹929.50", "₹385", "₹101.20", "-", "-"],
      },
    ],
  },
];

export const waterproofingPricingSections: PricingSection[] = [
  {
    title: "Range of Water Proofing",
    headers: ["Waterproof", "20ltr", "10ltr", "5ltr", "1ltr"],
    rows: [
      {
        productName: "Sky Ultra Lw 101",
        prices: ["₹770", "₹418", "₹247.50", "₹60.50"],
      },
      {
        productName: "Sky Ultra URP 521",
        prices: ["₹4400", "₹2310", "₹1320", "₹286"],
      },
      {
        productName: "Skya Ultra Bender",
        prices: ["₹2200", "₹1100", "₹605", "₹132"],
      },
      {
        productName: "Sky Shine MTO",
        prices: ["-", "-", "-", "-"],
      },
    ],
  },
];

export const puttyGroutPricingSections: PricingSection[] = [
  {
    title: "Powder Putty",
    headers: ["Putty", "40KG", "20KG", "10KG", "5KG", "1KG"],
    rows: [
      {
        productName: "Powder Putty Bag",
        prices: ["₹605", "₹319", "-", "-", "-"],
      },
      {
        productName: "Acreylic Putty Bucket",
        prices: ["-", "₹660", "₹357.50", "₹220", "₹33"],
      },
    ],
  },
  {
    title: "Lime Wash",
    headers: ["Lime Wash", "25KG", "10KG", "5KG", "1KG"],
    rows: [
      {
        productName: "Lime Wash",
        prices: ["₹330", "₹176", "₹82.50", "-"],
      },
      {
        productName: "Sky White Cement",
        prices: ["₹495", "-", "₹121", "₹27.50"],
      },
      {
        productName: "Tile Grout Polymer Modifided Grout",
        prices: ["₹330", "-", "-", "₹33"],
      },
      {
        productName: "White & White Lime Wash 25kg",
        prices: ["₹297", "-", "-", "-"],
      },
    ],
  },
];

export const stainersPricingSections: PricingSection[] = [
  {
    title: "Universal Stainer",
    headers: ["Stainer", "200ML", "100ML", "50ML"],
    rows: [
      {
        productName: "All Colors",
        prices: ["₹57.20", "₹28.60", "₹15.40"],
      },
    ],
  },
];

export const cleaningPricingSections: PricingSection[] = [
  {
    title: "Mr. Shine Complete Price List",
    headers: ["S.No.", "Product Name", "1 LTR", "5 LTR"],
    isNumbered: true,
    rows: [
      {
        productName: "Mr. Shine Hand Wash",
        prices: ["₹124", "₹618"],
      },
      {
        productName: "Mr. Shine Liquid Detergent",
        prices: ["₹78", "₹390"],
      },
      {
        productName: "Mr. Shine Floor Cleaner",
        prices: ["₹98", "₹488"],
      },
      {
        productName: "Mr. Shine Dish Wash",
        prices: ["₹72", "₹358"],
      },
      {
        productName: "Mr. Shine Toilet Cleaner",
        prices: ["₹16", "₹78"],
      },
      {
        productName: "Mr. Shine Phenyl",
        prices: ["₹33", "₹163"],
      },
      {
        productName: "Toilet Cleaner Fast",
        prices: ["₹33", "₹163"],
      },
    ],
  },
];

export const pricingTablesByCategory: Record<string, PricingSection[]> = {
  emulsions: emulsionsPricingSections,
  distemper: distemperPricingSections,
  "synthetic-enamel": syntheticEnamelPricingSections,
  waterproofing: waterproofingPricingSections,
  "putty-grout": puttyGroutPricingSections,
  stainers: stainersPricingSections,
  cleaning: cleaningPricingSections,
};
