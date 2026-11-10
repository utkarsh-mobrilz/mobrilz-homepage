const fs = require('fs');

const aContent = fs.readFileSync('C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html', 'utf8');
fs.writeFileSync('C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html', aContent, 'utf8');

console.log('Synced design-a.html to index.html successfully!');
console.log('File length:', aContent.length);
