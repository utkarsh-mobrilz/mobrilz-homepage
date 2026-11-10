const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Add the high-priority style rule inside the footer for column headings
  const styleMarker = '/* Clean Dark Nav Links */';
  const newHeaderStyle = `.osmo-footer .footer-col-heading {
        font-weight: 700 !important;
        font-family: 'Plus Jakarta Sans', var(--font-primary, sans-serif) !important;
        letter-spacing: 0.08em;
      }\n      `;

  content = content.replace(styleMarker, newHeaderStyle + styleMarker);

  // Add the footer-col-heading class to each of the 4 headings
  content = content.replace(
    '<h4 class="text-sm sm:text-base font-black tracking-widest text-[#FAFAFA] uppercase font-sans">Company</h4>',
    '<h4 class="footer-col-heading text-sm tracking-wider text-[#FAFAFA] uppercase font-sans">Company</h4>'
  );
  content = content.replace(
    '<h4 class="text-sm sm:text-base font-black tracking-widest text-[#FAFAFA] uppercase font-sans">Services</h4>',
    '<h4 class="footer-col-heading text-sm tracking-wider text-[#FAFAFA] uppercase font-sans">Services</h4>'
  );
  content = content.replace(
    '<h4 class="text-sm sm:text-base font-black tracking-widest text-[#FAFAFA] uppercase font-sans">Industries</h4>',
    '<h4 class="footer-col-heading text-sm tracking-wider text-[#FAFAFA] uppercase font-sans">Industries</h4>'
  );
  content = content.replace(
    '<h4 class="text-sm sm:text-base font-black tracking-widest text-[#FAFAFA] uppercase font-sans">Resources</h4>',
    '<h4 class="footer-col-heading text-sm tracking-wider text-[#FAFAFA] uppercase font-sans">Resources</h4>'
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated heading font weight in ' + file);
}
