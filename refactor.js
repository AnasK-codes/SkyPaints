const fs = require('fs');
let content = fs.readFileSync('src/app/products/page.tsx', 'utf8');

// 1. Remove use client
content = content.replace(/"use client";\s*/g, '');

// 2. Add metadata and CategoryNav import
content = content.replace(/import Image from "next\/image";/, 'import Image from "next/image";\nimport CategoryNav from "@/components/CategoryNav";\nimport type { Metadata } from "next";\n\nexport const metadata: Metadata = {\n  title: "Our Products | Skypaints",\n  description: "Explore Skypaints\' complete range of emulsions, oil paint, distemper, synthetic enamel, waterproofing, putty, stainers, and cleaning products.",\n};');

// 3. Remove scrollToCategory function
content = content.replace(/const scrollToCategory = \([^}]+\};\s*/g, '');

// 4. Replace buttons with anchor tags
content = content.replace(/<button\s*onClick=\{\(\) => scrollToCategory\("([^"]+)"\)\}([^>]+)>(.*?)<\/button>/gs, '<a href="#$1"$2>$3</a>');

// 5. Replace sticky nav (div inside section 3) with CategoryNav component
// The sticky nav is just before section 4
const section4Idx = content.indexOf('{/* SECTION 4: PRODUCT SECTIONS */}');
const stickyNavStartIdx = content.indexOf('<section className="sticky top-0 z-40');
if (stickyNavStartIdx !== -1 && section4Idx !== -1) {
  content = content.substring(0, stickyNavStartIdx) + '<CategoryNav />\n\n        ' + content.substring(section4Idx);
}

fs.writeFileSync('src/app/products/page.tsx', content);
