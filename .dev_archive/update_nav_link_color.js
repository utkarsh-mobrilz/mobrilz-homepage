const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Update .osmo-nav-link CSS rule
  const oldCss = `      /* Clean Dark Nav Links */
      .osmo-nav-link {
        position: relative;
        display: inline-block;
        color: #94a3b8;
        font-weight: 400;
        font-size: 0.875rem;
        transition: color 0.2s ease, transform 0.2s ease;
      }`;

  const newCss = `      /* Clean Dark Nav Links with #FAFAFA typography */
      .osmo-nav-link {
        position: relative;
        display: inline-block;
        color: #FAFAFA;
        font-weight: 400;
        font-size: 0.875rem;
        transition: color 0.2s ease, transform 0.2s ease;
      }`;

  // Update column headers color if needed (they were text-white, let's make sure they are explicitly #FAFAFA)
  content = content.replace(oldCss, newCss);
  content = content.replace(
    'class="text-xs font-semibold text-white uppercase tracking-wider font-sans">Company</h4>',
    'class="text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider font-sans">Company</h4>'
  );
  content = content.replace(
    'class="text-xs font-semibold text-white uppercase tracking-wider font-sans">Services</h4>',
    'class="text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider font-sans">Services</h4>'
  );
  content = content.replace(
    'class="text-xs font-semibold text-white uppercase tracking-wider font-sans">Industries</h4>',
    'class="text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider font-sans">Industries</h4>'
  );
  content = content.replace(
    'class="text-xs font-semibold text-white uppercase tracking-wider font-sans">Resources</h4>',
    'class="text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider font-sans">Resources</h4>'
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated nav links color to #FAFAFA in ' + file);
}
