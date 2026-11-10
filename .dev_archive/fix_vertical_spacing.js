const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace section padding on #expertise
  content = content.replace(
    '<section id="expertise" class="py-20 md:py-32 bg-[#060d28] text-white relative overflow-hidden">',
    '<section id="expertise" class="py-14 md:py-20 bg-[#060d28] text-white relative overflow-hidden">'
  );

  // Replace header margin
  content = content.replace(
    '<div class="text-center max-w-3xl mx-auto mb-16 space-y-4">',
    '<div class="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">'
  );

  // Replace tab switcher margin
  content = content.replace(
    '<div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">',
    '<div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10">'
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully adjusted vertical spacing in ' + file);
}
