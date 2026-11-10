const fs = require('fs');

const a = fs.readFileSync('C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html', 'utf8');
const idx = fs.readFileSync('C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html', 'utf8');

console.log('design-a and index.html match:', a === idx);
console.log('design-a has inline SVGs:', a.includes('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"'));
console.log('osmo-square-icon-btn count in design-a:', (a.match(/osmo-square-icon-btn/g) || []).length);

const b = fs.readFileSync('C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-b.html', 'utf8');
console.log('design-b has inline SVGs:', b.includes('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"'));
