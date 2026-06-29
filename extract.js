const fs = require('fs');
const content = fs.readFileSync('src/app/products/page.tsx', 'utf8');

const regex = /<section id="([^"]+)"[^>]*>[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?\{\[\s*([\s\S]*?)\s*\]\.map\(/g;

const categories = [];
let match;
while ((match = regex.exec(content)) !== null) {
  categories.push({
    id: match[1],
    title: match[2].replace(/<[^>]+>/g, '').trim(),
    desc: match[3].replace(/<[^>]+>/g, '').replace(/\n\s*/g, ' ').trim(),
    productsRaw: match[4]
  });
}

// cleaning section
const cleaningIdx = content.indexOf('<section id="cleaning"');
const endIdx = content.indexOf('</main>');
const cleaningContent = content.substring(cleaningIdx, endIdx);
const arrRegex = /\{\[\s*([\s\S]*?)\s*\]\.map\(/g;
let m = arrRegex.exec(cleaningContent);
const cleaningProductsRaw = m[1];

categories.push({
    id: "cleaning",
    title: "Cleaning Products",
    desc: "Mr. Shine cleaning products for hygiene, freshness, and daily cleaning across homes, shops, offices, hotels, restaurants, hospitals, and commercial spaces.",
    productsRaw: cleaningProductsRaw
});

let out = `export interface Product {
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
`;

for (const c of categories) {
  out += `  {
    id: "${c.id}",
    title: "${c.title}",
    description: "${c.desc}",
    products: [
      ${c.productsRaw}
    ]
  },
`;
}
out += `];\n`;

fs.writeFileSync('src/data/products.ts', out);
