const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html';
const content = fs.readFileSync(filePath, 'utf8');

const footerStart = content.indexOf('<footer id="footer"');
const footerEnd = content.indexOf('</footer>', footerStart);

if (footerStart === -1 || footerEnd === -1) {
  console.error('Footer not found!');
  process.exit(1);
}

const currentFooter = content.substring(footerStart, footerEnd + 9);
fs.writeFileSync('C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/current_footer.html', currentFooter, 'utf8');
console.log('Saved current_footer.html, length:', currentFooter.length);
