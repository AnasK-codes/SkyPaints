const fs = require('fs');

let content = fs.readFileSync('src/app/inspiration/page.tsx', 'utf8');

const replacements = [
  { text: 'A modern living room painted in a serene soft lavender hue', img: '/images/inspiration-hero.png' },
  { text: 'A close-up shot of luxurious, thick paint being applied to a canvas', img: '/images/blog-featured-finish.png' },
  { text: 'A beautifully painted modern Indian living room with warm lighting', img: '/images/blog-cost-to-paint.png' },
  { text: 'A detailed close-up showing the textural difference between two painted surfaces', img: '/images/blog-distemper-emulsion.png' },
  { text: 'An exterior shot of a modern, minimalist house wall during a light rain shower', img: '/images/blog-waterproofing.png' },
  { text: 'A beautifully painted bright exterior of an Indian home basking in sunlight', img: '/images/blog-heat-reflective.png' },
  { text: 'A beautifully lit living room featuring a calming vastu-compliant pale yellow wall', img: '/images/blog-vastu.png' },
  { text: 'A stunning modern living room with a two-tone colour combination', img: '/images/blog-trending-colours.png' },
  { text: 'A highly detailed, macro photograph of a textured wall surface being carefully smoothed', img: '/images/inspiration-editorial.png' },
  { text: 'A neatly organized collection of professional painting tools', img: '/images/blog-checklist.png' },
  { text: 'A sophisticated dining room corner featuring dark, dramatic accent walls', img: '/images/blog-dark-colours.png' },
  { text: 'A bright, sunlit kitchen featuring soft pastel cabinets', img: '/images/blog-safe-paints.png' },
  { text: 'A close up of a luxurious metallic textured accent wall in a modern bedroom', img: '/images/blog-texture-designs.png' },
  { text: 'A close up of someone scraping away damaged, peeling paint before applying a waterproof primer', img: '/images/blog-peeling-paint.png' }
];

for (const rep of replacements) {
  const regex = new RegExp(`alt="${rep.text}"\\s*src="https:\\/\\/lh3\\.googleusercontent\\.com\\/[^"]+"`, 'g');
  content = content.replace(regex, `alt="${rep.text}"\n                src="${rep.img}"`);
}

fs.writeFileSync('src/app/inspiration/page.tsx', content);
console.log('Replaced images in page.tsx');
