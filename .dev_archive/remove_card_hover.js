const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Remove group/card
  content = content.replace('border-slate-800/60 group/card"', 'border-slate-800/60"');
  
  // Remove group-hover/card:scale-105 and transition
  content = content.replace(
    'class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-105"',
    'class="absolute inset-0 w-full h-full object-cover object-center"'
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log('Removed hover state in ' + file);
}
