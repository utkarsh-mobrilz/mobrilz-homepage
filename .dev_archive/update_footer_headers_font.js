const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace font-mono with font-sans (Plus Jakarta Sans) and adjust weight/tracking for premium typography
  content = content.replace(
    '<h4 class="text-xs font-medium text-white uppercase tracking-wider font-mono">Company</h4>',
    '<h4 class="text-xs font-semibold text-white uppercase tracking-wider font-sans">Company</h4>'
  );
  content = content.replace(
    '<h4 class="text-xs font-medium text-white uppercase tracking-wider font-mono">Services</h4>',
    '<h4 class="text-xs font-semibold text-white uppercase tracking-wider font-sans">Services</h4>'
  );
  content = content.replace(
    '<h4 class="text-xs font-medium text-white uppercase tracking-wider font-mono">Industries</h4>',
    '<h4 class="text-xs font-semibold text-white uppercase tracking-wider font-sans">Industries</h4>'
  );
  content = content.replace(
    '<h4 class="text-xs font-medium text-white uppercase tracking-wider font-mono">Resources</h4>',
    '<h4 class="text-xs font-semibold text-white uppercase tracking-wider font-sans">Resources</h4>'
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated column headers font in ' + file);
}
