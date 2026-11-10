const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Find the footer definition
  // Replace:
  // <footer id="footer" class="osmo-footer relative bg-[#040817] text-white pt-24 pb-10 overflow-hidden ">
  //   <!-- Elevated Convex Arch Transition Top Border -->
  //   <div class="absolute -top-1 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none -translate-y-[98%]">
  //     <svg class="relative block w-full h-10 sm:h-14 md:h-18 lg:h-24 text-[#040817]" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
  //       <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z"></path>
  //     </svg>
  //   </div>
  
  // Notice that if the footer is inside an overflow or the SVG is -translate-y-[98%], it sits in the CTA section.
  // Instead, placing the convex arch directly inside the top of the footer with a clean, seamless curve
  // and having the SVG draw the curve from (0, 80) Q(720, 0) (1440, 80) or placing an elevated top cap:
  
  const oldArchRegex = /\s*<!-- Elevated Convex Arch Transition Top Border -->[\s\S]*?<\/div>/;
  content = content.replace(oldArchRegex, '');

  // Let's change footer class:
  content = content.replace(
    '<footer id="footer" class="osmo-footer relative bg-[#040817] text-white pt-24 pb-10 overflow-hidden ">',
    '<footer id="footer" class="osmo-footer relative bg-[#040817] text-white pt-10 sm:pt-14 pb-10 overflow-hidden">'
  );

  // Directly at the top of the footer content, inject an elevated convex SVG banner
  // If the previous section is light (bg-[#f8fafc]), the top of the footer can have a smooth arch curve
  // Let's create an arch that bridges the light background into the dark footer:
  const newArchComponent = `    <!-- Elevated Convex Arch Transition from Light Canvas to Dark Footer -->
    <div class="w-full overflow-hidden leading-none select-none pointer-events-none -mt-10 sm:-mt-14 mb-8 sm:mb-12">
      <svg class="w-full h-14 sm:h-20 md:h-28 lg:h-36 block text-[#f8fafc]" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,0 L1440,0 L1440,20 Q720,100 0,20 Z"></path>
      </svg>
    </div>`;

  // We can insert this right after the opening <footer id="footer"...> tag (before the ambient glows):
  const footerStartTag = '<footer id="footer" class="osmo-footer relative bg-[#040817] text-white pt-10 sm:pt-14 pb-10 overflow-hidden">';
  content = content.replace(footerStartTag, `${footerStartTag}\n${newArchComponent}`);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully applied visible elevated arch in ' + file);
}
