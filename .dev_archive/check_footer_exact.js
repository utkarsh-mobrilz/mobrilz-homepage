const fs = require('fs');
const c = fs.readFileSync('C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html', 'utf8');
const fIdx = c.indexOf('<footer id="footer"');
const fSlice = c.substring(fIdx);
const idx = fSlice.indexOf('Sector 63 Noida');
console.log('--- BEFORE ---');
console.log(fSlice.substring(idx - 600, idx));
console.log('--- AFTER ---');
console.log(fSlice.substring(idx, idx + 400));
