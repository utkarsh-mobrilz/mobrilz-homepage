const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace Visit Us section texts and icons with #FAFAFA
  const oldVisitUs = `          <!-- Section 1: Visit Us (Col 1-5) -->
          <div class="lg:col-span-4 space-y-3 font-sans">
            <h4 class="text-base sm:text-lg font-semibold text-[#FAFAFA] tracking-tight">Visit Us</h4>
            <div class="space-y-2.5 text-xs sm:text-sm text-slate-300 font-light">
              <div class="flex items-start gap-2.5">
                <i data-lucide="map-pin" class="w-4 h-4 text-slate-400 shrink-0 mt-0.5"></i>
                <span class="leading-relaxed">E-160, 3rd Floor, Sector 63 Noida, U.P. 201301, India</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i data-lucide="clock" class="w-4 h-4 text-slate-400 shrink-0"></i>
                <span>Monday - Friday: 9:00 AM - 6:00 PM (IST)</span>
              </div>
            </div>
          </div>`;

  const newVisitUs = `          <!-- Section 1: Visit Us (Col 1-5) -->
          <div class="lg:col-span-4 space-y-3 font-sans">
            <h4 class="text-base sm:text-lg font-semibold text-[#FAFAFA] tracking-tight">Visit Us</h4>
            <div class="space-y-2.5 text-xs sm:text-sm text-[#FAFAFA] font-light">
              <div class="flex items-start gap-2.5">
                <i data-lucide="map-pin" class="w-4 h-4 text-[#FAFAFA] shrink-0 mt-0.5"></i>
                <span class="leading-relaxed text-[#FAFAFA]">E-160, 3rd Floor, Sector 63 Noida, U.P. 201301, India</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i data-lucide="clock" class="w-4 h-4 text-[#FAFAFA] shrink-0"></i>
                <span class="text-[#FAFAFA]">Monday - Friday: 9:00 AM - 6:00 PM (IST)</span>
              </div>
            </div>
          </div>`;

  // Replace Get in Touch section texts and icons with #FAFAFA
  const oldGetInTouch = `          <!-- Section 2: Get in Touch (Col 6-10) -->
          <div class="lg:col-span-4 space-y-3 font-sans">
            <h4 class="text-base sm:text-lg font-semibold text-[#FAFAFA] tracking-tight">Get in Touch</h4>
            <div class="space-y-2.5 text-xs sm:text-sm text-slate-300 font-light">
              <div class="flex items-start gap-2.5">
                <i data-lucide="phone" class="w-4 h-4 text-slate-400 shrink-0 mt-0.5"></i>
                <div class="flex flex-col space-y-1">
                  <a href="tel:+918010355718" class="hover:text-white transition-colors">+91-8010355718 <span class="text-slate-400 font-normal">(Sales)</span></a>
                  <a href="tel:+917982528542" class="hover:text-white transition-colors">+91-7982528542 <span class="text-slate-400 font-normal">(HR/Careers)</span></a>
                </div>
              </div>
              <div class="flex items-center gap-2.5 pt-0.5">
                <i data-lucide="mail" class="w-4 h-4 text-slate-400 shrink-0"></i>
                <a href="mailto:sales@mobrilz.com" class="hover:text-white transition-colors">sales@mobrilz.com</a>
              </div>
            </div>
          </div>`;

  const newGetInTouch = `          <!-- Section 2: Get in Touch (Col 6-10) -->
          <div class="lg:col-span-4 space-y-3 font-sans">
            <h4 class="text-base sm:text-lg font-semibold text-[#FAFAFA] tracking-tight">Get in Touch</h4>
            <div class="space-y-2.5 text-xs sm:text-sm text-[#FAFAFA] font-light">
              <div class="flex items-start gap-2.5">
                <i data-lucide="phone" class="w-4 h-4 text-[#FAFAFA] shrink-0 mt-0.5"></i>
                <div class="flex flex-col space-y-1">
                  <a href="tel:+918010355718" class="text-[#FAFAFA] hover:text-white transition-colors">+91-8010355718 <span class="text-[#FAFAFA]/70 font-normal">(Sales)</span></a>
                  <a href="tel:+917982528542" class="text-[#FAFAFA] hover:text-white transition-colors">+91-7982528542 <span class="text-[#FAFAFA]/70 font-normal">(HR/Careers)</span></a>
                </div>
              </div>
              <div class="flex items-center gap-2.5 pt-0.5">
                <i data-lucide="mail" class="w-4 h-4 text-[#FAFAFA] shrink-0"></i>
                <a href="mailto:sales@mobrilz.com" class="text-[#FAFAFA] hover:text-white transition-colors">sales@mobrilz.com</a>
              </div>
            </div>
          </div>`;

  if (!content.includes('E-160, 3rd Floor, Sector 63 Noida, U.P. 201301, India')) {
    console.error('Address not found in ' + file);
    continue;
  }

  content = content.replace(oldVisitUs, newVisitUs);
  content = content.replace(oldGetInTouch, newGetInTouch);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated contact info colors to #FAFAFA in ' + file);
}
