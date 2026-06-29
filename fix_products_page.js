const fs = require('fs');
let content = fs.readFileSync('src/app/products/page.tsx', 'utf8');

// Ensure categories is imported
if (!content.includes('import { categories } from "@/data/products"')) {
  content = content.replace(
    'import CategoryNav from "@/components/CategoryNav";',
    'import CategoryNav from "@/components/CategoryNav";\nimport { categories } from "@/data/products";'
  );
}

const sectionIds = [
  "emulsions",
  "oil-paint",
  "distemper",
  "synthetic-enamel",
  "waterproofing",
  "putty-grout",
  "stainers",
  "cleaning"
];

for (const id of sectionIds) {
  // Find the <section id="id"...>
  const sectionStart = content.indexOf(`id="${id}"`);
  if (sectionStart === -1) continue;
  
  // Find the next {[\n
  const arrStart = content.indexOf('{[\n', sectionStart);
  if (arrStart === -1) continue;
  
  // Find the matching ].map((product, idx) => (
  const mapStr = '].map((product, idx) => (';
  const arrEnd = content.indexOf(mapStr, arrStart);
  
  if (arrEnd !== -1) {
    const prefix = content.substring(0, arrStart);
    const suffix = content.substring(arrEnd + mapStr.length);
    const newMapStr = `{categories.find(c => c.id === "${id}")?.products.map((product, idx) => (`;
    
    content = prefix + newMapStr + suffix;
  }
}

fs.writeFileSync('src/app/products/page.tsx', content);
