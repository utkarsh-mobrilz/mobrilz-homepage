const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Find the entire kinetic molecule block in FAQ
  const startTag = '<!-- Kinetic Molecule Cluster (Disappearing / Reappearing Bubbles with Unique Rates) -->';
  const startIdx = content.indexOf(startTag);
  if (startIdx === -1) {
    console.error('startTag not found in ' + file);
    continue;
  }

  // Find the closing </div> of that container
  // It has <div class="relative w-44 ..."> ... </div>
  const endIdx = content.indexOf('</div>', content.indexOf('</svg>', startIdx)) + 6;

  content = content.slice(0, startIdx).trimEnd() + '\n' + content.slice(endIdx).trimStart();

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully removed kinetic molecule from ' + file);
}
