const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Regex replacement for top curve divider
  content = content.replace(
    /\s*<!-- Top Convex Curve Divider extending upward -->[\s\S]*?<\/div>/,
    ''
  );

  // Regex replacement for bottom curve divider
  content = content.replace(
    /\s*<!-- Bottom Convex Curve Divider extending downward -->[\s\S]*?<\/div>/,
    ''
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully removed curve dividers from ' + file);
}
