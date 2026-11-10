const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Remove the <p> Please schedule an appointment before visiting </p> block
  const targetRegex = /\s*<p class="pt-0\.5 text-slate-400 text-xs sm:text-sm">\s*Please <a href="#cta"[^>]*>schedule an appointment<\/a> before visiting\s*<\/p>/;

  if (!targetRegex.test(content)) {
    console.error('Target not matched in ' + file);
    continue;
  }

  content = content.replace(targetRegex, '');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully removed "Please schedule an appointment before visiting" in ' + file);
}
