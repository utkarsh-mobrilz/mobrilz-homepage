const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

const targetBlock = `        <!-- Direct Contact Pills -->
        <div class="flex flex-wrap items-center gap-3">
          <a href="tel:+918010355718" class="osmo-rolling-btn px-5 py-2.5 bg-[#09143f]/70 border border-[#1b2b65] text-slate-200 hover:text-[#64b5f6] hover:border-[#3779cb] hover:bg-[#09143f] text-xs font-mono font-medium tracking-wide">
            <div class="label-wrapper flex items-center gap-2">
              <i data-lucide="phone-call" class="w-3.5 h-3.5 text-[#64b5f6]"></i>
              <span class="label-primary">+91-8010355718</span>
              <span class="label-hover">+91-8010355718</span>
            </div>
          </a>
          <a href="mailto:sales@mobrilz.com" class="osmo-rolling-btn px-5 py-2.5 bg-[#09143f]/70 border border-[#1b2b65] text-slate-200 hover:text-[#64b5f6] hover:border-[#3779cb] hover:bg-[#09143f] text-xs font-mono font-medium tracking-wide">
            <div class="label-wrapper flex items-center gap-2">
              <i data-lucide="mail" class="w-3.5 h-3.5 text-[#64b5f6]"></i>
              <span class="label-primary">sales@mobrilz.com</span>
              <span class="label-hover">sales@mobrilz.com</span>
            </div>
          </a>
        </div>`;

const replacementBlock = `        <!-- Direct Contact: Flubble No-Card Minimalist Presentation in Plus Jakarta Sans -->
        <div class="flex flex-wrap items-center gap-8 sm:gap-10 font-sans">
          <!-- Phone Item -->
          <a href="tel:+918010355718" class="group/contact flex items-center gap-3.5 py-1 text-slate-300 hover:text-white transition-all duration-300">
            <span class="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-[#64b5f6] group-hover/contact:bg-[#3779cb] group-hover/contact:text-white group-hover/contact:scale-105 transition-all duration-300 shadow-sm">
              <i data-lucide="phone-call" class="w-4 h-4"></i>
            </span>
            <div class="flex flex-col">
              <span class="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Direct Line</span>
              <span class="text-sm font-semibold text-slate-100 group-hover/contact:text-[#64b5f6] tracking-tight transition-colors">+91-8010355718</span>
            </div>
          </a>

          <!-- Divider dot on sm screens -->
          <span class="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-700"></span>

          <!-- Email Item -->
          <a href="mailto:sales@mobrilz.com" class="group/contact flex items-center gap-3.5 py-1 text-slate-300 hover:text-white transition-all duration-300">
            <span class="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-[#64b5f6] group-hover/contact:bg-[#3779cb] group-hover/contact:text-white group-hover/contact:scale-105 transition-all duration-300 shadow-sm">
              <i data-lucide="mail" class="w-4 h-4"></i>
            </span>
            <div class="flex flex-col">
              <span class="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Inquiries</span>
              <span class="text-sm font-semibold text-slate-100 group-hover/contact:text-[#64b5f6] tracking-tight transition-colors">sales@mobrilz.com</span>
            </div>
          </a>
        </div>`;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes(targetBlock)) {
    console.error('Target block not found in ' + file);
    continue;
  }
  content = content.replace(targetBlock, replacementBlock);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated contact presentation in ' + file);
}
