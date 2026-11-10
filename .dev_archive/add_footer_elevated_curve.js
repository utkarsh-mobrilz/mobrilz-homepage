const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Find <footer id="footer" ...>
  const footerTag = '<footer id="footer" class="osmo-footer relative bg-[#040817] text-white pt-24 pb-10 overflow-hidden ">';
  
  if (!content.includes(footerTag)) {
    console.error('footerTag not matched in ' + file);
    continue;
  }

  // Elegant elevated convex arch SVG matching the user's uploaded red curve
  const elevatedArchSvg = `<!-- Elevated Convex Arch Transition Top Border -->
    <div class="absolute -top-1 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none -translate-y-[98%]">
      <svg class="relative block w-full h-10 sm:h-14 md:h-18 lg:h-24 text-[#040817]" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z"></path>
      </svg>
    </div>`;

  const newFooterStart = `${footerTag}\n    ${elevatedArchSvg}`;

  content = content.replace(footerTag, newFooterStart);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully added elevated curve to footer in ' + file);
}
