const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Top curve block
  const topCurve = `    <!-- Top Convex Curve Divider extending upward -->
    <div class="absolute -top-1 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none -translate-y-[98%]">
      <svg class="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24 text-[#060c24]" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z"></path>
      </svg>
    </div>`;

  // Bottom curve block
  const bottomCurve = `    <!-- Bottom Convex Curve Divider extending downward -->
    <div class="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[98%]">
      <svg class="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24 text-[#060c24]" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,0 Q720,80 1440,0 L1440,0 L0,0 Z"></path>
      </svg>
    </div>`;

  if (!content.includes(topCurve)) {
    console.error('topCurve not matched in ' + file);
    continue;
  }
  if (!content.includes(bottomCurve)) {
    console.error('bottomCurve not matched in ' + file);
    continue;
  }

  content = content.replace(topCurve, '');
  content = content.replace(bottomCurve, '');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully removed convex curve dividers from ' + file);
}
