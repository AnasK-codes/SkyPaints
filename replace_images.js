const fs = require('fs');
const path = require('path');

const mappings = {
  'cost-to-paint-2bhk-3bhk-india': '/images/blog-cost-to-paint.png',
  'distemper-vs-emulsion': '/images/blog-distemper-emulsion.png',
  'why-waterproofing-matters': '/images/blog-waterproofing.png',
  'heat-reflective-paints': '/images/blog-heat-reflective.png',
  'vastu-compliant-colours': '/images/blog-vastu.png',
  'trending-colour-combinations': '/images/blog-trending-colours.png',
  'interior-wall-painting-checklist': '/images/blog-checklist.png',
  'how-to-use-dark-colours': '/images/blog-dark-colours.png',
  'safe-paints-for-nurseries': '/images/blog-safe-paints.png',
  'wall-texture-designs': '/images/blog-texture-designs.png',
  'fixing-peeling-paint': '/images/blog-peeling-paint.png',
  'how-to-choose-paint-finish': '/images/blog-featured-finish.png'
};

for (const [folder, newImage] of Object.entries(mappings)) {
  const filePath = path.join('src/app/inspiration', folder, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/src="https:\/\/lh3\.googleusercontent\.com\/[^"]+"/g, `src="${newImage}"`);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${folder}`);
  }
}
