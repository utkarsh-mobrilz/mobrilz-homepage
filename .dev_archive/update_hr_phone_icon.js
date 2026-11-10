const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace the stacked phone container so each phone number gets its own phone icon
  // and they have generous, clean breathing room (gap-3.5 and pt-1.5)
  const oldGetInTouch = `          <!-- Section 2: Get in Touch (Col 6-10) -->
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

  const newGetInTouch = `          <!-- Section 2: Get in Touch (Col 6-10) -->
          <div class="lg:col-span-4 space-y-3 font-sans">
            <h4 class="text-base sm:text-lg font-semibold text-[#FAFAFA] tracking-tight">Get in Touch</h4>
            <div class="space-y-3.5 text-xs sm:text-sm text-[#FAFAFA] font-light">
              <!-- Sales Phone -->
              <div class="flex items-center gap-2.5">
                <i data-lucide="phone" class="w-4 h-4 text-[#FAFAFA] shrink-0"></i>
                <a href="tel:+918010355718" class="text-[#FAFAFA] hover:text-white transition-colors">+91-8010355718 <span class="text-[#FAFAFA]/70 font-normal">(Sales)</span></a>
              </div>
              <!-- HR / Careers Phone (With matching icon & comfortable breathing room) -->
              <div class="flex items-center gap-2.5">
                <i data-lucide="phone" class="w-4 h-4 text-[#FAFAFA] shrink-0"></i>
                <a href="tel:+917982528542" class="text-[#FAFAFA] hover:text-white transition-colors">+91-7982528542 <span class="text-[#FAFAFA]/70 font-normal">(HR/Careers)</span></a>
              </div>
              <!-- Email -->
              <div class="flex items-center gap-2.5 pt-1">
                <i data-lucide="mail" class="w-4 h-4 text-[#FAFAFA] shrink-0"></i>
                <a href="mailto:sales@mobrilz.com" class="text-[#FAFAFA] hover:text-white transition-colors">sales@mobrilz.com</a>
              </div>
            </div>
          </div>`;

  // Handle CRLF vs LF
  const normalizedContent = content.replace(/\r\n/g, '\n');
  const normalizedOld = oldGetInTouch.replace(/\r\n/g, '\n');
  const normalizedNew = newGetInTouch.replace(/\r\n/g, '\n');

  if (!normalizedContent.includes(normalizedOld)) {
    console.error('oldGetInTouch not matched in ' + file);
    continue;
  }

  const updatedContent = normalizedContent.replace(normalizedOld, normalizedNew);
  // Restore CRLF if file was CRLF
  const finalContent = content.includes('\r\n') ? updatedContent.replace(/\n/g, '\r\n') : updatedContent;

  fs.writeFileSync(file, finalContent, 'utf8');
  console.log('Successfully updated HR phone icon and spacing in ' + file);
}
