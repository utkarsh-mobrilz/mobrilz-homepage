const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace lines specifically
  content = content.replace(
    '<div class="space-y-2.5 text-xs sm:text-sm text-slate-300 font-light">\r\n              <div class="flex items-start gap-2.5">\r\n                <i data-lucide="map-pin" class="w-4 h-4 text-slate-400 shrink-0 mt-0.5"></i>\r\n                <span class="leading-relaxed">E-160, 3rd Floor, Sector 63 Noida, U.P. 201301, India</span>\r\n              </div>\r\n              <div class="flex items-center gap-2.5">\r\n                <i data-lucide="clock" class="w-4 h-4 text-slate-400 shrink-0"></i>\r\n                <span>Monday - Friday: 9:00 AM - 6:00 PM (IST)</span>\r\n              </div>\r\n            </div>',
    '<div class="space-y-2.5 text-xs sm:text-sm text-[#FAFAFA] font-light">\r\n              <div class="flex items-start gap-2.5">\r\n                <i data-lucide="map-pin" class="w-4 h-4 text-[#FAFAFA] shrink-0 mt-0.5"></i>\r\n                <span class="leading-relaxed text-[#FAFAFA]">E-160, 3rd Floor, Sector 63 Noida, U.P. 201301, India</span>\r\n              </div>\r\n              <div class="flex items-center gap-2.5">\r\n                <i data-lucide="clock" class="w-4 h-4 text-[#FAFAFA] shrink-0"></i>\r\n                <span class="text-[#FAFAFA]">Monday - Friday: 9:00 AM - 6:00 PM (IST)</span>\r\n              </div>\r\n            </div>'
  );

  content = content.replace(
    '<div class="space-y-2.5 text-xs sm:text-sm text-slate-300 font-light">\r\n              <div class="flex items-start gap-2.5">\r\n                <i data-lucide="phone" class="w-4 h-4 text-slate-400 shrink-0 mt-0.5"></i>\r\n                <div class="flex flex-col space-y-1">\r\n                  <a href="tel:+918010355718" class="hover:text-white transition-colors">+91-8010355718 <span class="text-slate-400 font-normal">(Sales)</span></a>\r\n                  <a href="tel:+917982528542" class="hover:text-white transition-colors">+91-7982528542 <span class="text-slate-400 font-normal">(HR/Careers)</span></a>\r\n                </div>\r\n              </div>\r\n              <div class="flex items-center gap-2.5 pt-0.5">\r\n                <i data-lucide="mail" class="w-4 h-4 text-slate-400 shrink-0"></i>\r\n                <a href="mailto:sales@mobrilz.com" class="hover:text-white transition-colors">sales@mobrilz.com</a>\r\n              </div>\r\n            </div>',
    '<div class="space-y-2.5 text-xs sm:text-sm text-[#FAFAFA] font-light">\r\n              <div class="flex items-start gap-2.5">\r\n                <i data-lucide="phone" class="w-4 h-4 text-[#FAFAFA] shrink-0 mt-0.5"></i>\r\n                <div class="flex flex-col space-y-1">\r\n                  <a href="tel:+918010355718" class="text-[#FAFAFA] hover:text-white transition-colors">+91-8010355718 <span class="text-[#FAFAFA]/70 font-normal">(Sales)</span></a>\r\n                  <a href="tel:+917982528542" class="text-[#FAFAFA] hover:text-white transition-colors">+91-7982528542 <span class="text-[#FAFAFA]/70 font-normal">(HR/Careers)</span></a>\r\n                </div>\r\n              </div>\r\n              <div class="flex items-center gap-2.5 pt-0.5">\r\n                <i data-lucide="mail" class="w-4 h-4 text-[#FAFAFA] shrink-0"></i>\r\n                <a href="mailto:sales@mobrilz.com" class="text-[#FAFAFA] hover:text-white transition-colors">sales@mobrilz.com</a>\r\n              </div>\r\n            </div>'
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully applied #FAFAFA colors in ' + file);
}
