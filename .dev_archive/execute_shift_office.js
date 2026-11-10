const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Find footer
  const fStart = content.indexOf('<footer id="footer"');
  const fEnd = content.indexOf('</footer>', fStart);
  let footerHtml = content.substring(fStart, fEnd + 9);

  // 1. Remove the office location card from left column and make 4 equal columns in top grid
  const targetCol1 = `        <!-- Left Brand & Editorial Area (Col 1-4) -->
        <div class="lg:col-span-4 space-y-6">


          <!-- Clean Office Location & Schedule Appointment Card -->
          <div class="p-4 rounded-2xl bg-[#09143f]/60 border border-[#1b2b65] space-y-2.5">
            <div class="flex items-start gap-2.5 text-xs font-normal text-slate-300">
              <i data-lucide="map-pin" class="w-4 h-4 text-[#64b5f6] shrink-0 mt-0.5"></i>
              <span>E-160, 3rd Floor, Sector 63 Noida, U.P. 201301, India</span>
            </div>
            <div class="flex items-start gap-2.5 text-xs font-normal text-slate-300">
              <i data-lucide="clock" class="w-4 h-4 text-[#64b5f6] shrink-0 mt-0.5"></i>
              <span>Mon - Fri: 9:00 AM - 6:00 PM (IST) &middot; <a href="#cta" class="text-[#64b5f6] hover:underline font-medium">schedule an appointment</a></span>
            </div>
          </div>
        </div>

        <!-- 4 Structured Nav Columns (Col 5-12) -->
        <div class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">`;

  // We change the grid container to clean 4 columns
  footerHtml = footerHtml.replace(
    'class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16"',
    'class="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 pb-14 border-b border-[#1b2b65]/60"'
  );

  // Remove the left brand area and col-span-8 wrapper
  footerHtml = footerHtml.replace(targetCol1, '');

  // Remove the closing </div> of col-span-8 that was matching
  // Let's check where Resources column ends:
  const targetResEnd = `            <ul class="space-y-2.5">
              <li><a href="#case-studies" class="osmo-nav-link">Case Studies</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Blog & Insights</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Knowledge Base</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Client Reviews</a></li>
              <li><a href="#cta" class="osmo-nav-link">Free Quote Calculator</a></li>
              <li><a href="#faqs" class="osmo-nav-link">FAQs</a></li>
            </ul>
          </div>

        </div>

      </div>`;

  const newResEnd = `            <ul class="space-y-2.5">
              <li><a href="#case-studies" class="osmo-nav-link">Case Studies</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Blog & Insights</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Knowledge Base</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Client Reviews</a></li>
              <li><a href="#cta" class="osmo-nav-link">Free Quote Calculator</a></li>
              <li><a href="#faqs" class="osmo-nav-link">FAQs</a></li>
            </ul>
          </div>

      </div>`;

  footerHtml = footerHtml.replace(targetResEnd, newResEnd);

  // 2. Now enrich the middle row with the shifted office location & hours/consultation
  const oldContactGroup = `        <!-- Direct Contact: Flubble No-Card Minimalist Presentation in Plus Jakarta Sans -->
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

  const newContactGroup = `        <!-- Contact & Office Info Group (Cardless Flubble in Plus Jakarta Sans) -->
        <div class="flex flex-wrap items-center gap-x-8 gap-y-6 sm:gap-x-10 text-slate-300 font-sans">
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

          <!-- Divider dot -->
          <span class="hidden md:inline-block w-1 h-1 rounded-full bg-slate-700"></span>

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

          <!-- Divider dot -->
          <span class="hidden lg:inline-block w-1 h-1 rounded-full bg-slate-700"></span>

          <!-- Office Location Item (Shifted out of card) -->
          <div class="flex items-center gap-3.5 py-1 text-slate-300">
            <span class="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-[#64b5f6] shrink-0 shadow-sm">
              <i data-lucide="map-pin" class="w-4 h-4"></i>
            </span>
            <div class="flex flex-col">
              <span class="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Headquarters</span>
              <span class="text-xs sm:text-sm font-normal text-slate-200 tracking-tight leading-snug">E-160, 3rd Floor, Sector 63 Noida, U.P. 201301</span>
            </div>
          </div>

          <!-- Divider dot -->
          <span class="hidden xl:inline-block w-1 h-1 rounded-full bg-slate-700"></span>

          <!-- Operating Hours & Consultation Item (Shifted out of card) -->
          <div class="flex items-center gap-3.5 py-1 text-slate-300">
            <span class="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-[#64b5f6] shrink-0 shadow-sm">
              <i data-lucide="clock" class="w-4 h-4"></i>
            </span>
            <div class="flex flex-col">
              <span class="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Business Hours</span>
              <span class="text-xs sm:text-sm font-normal text-slate-200 tracking-tight leading-snug">
                Mon - Fri: 9:00 AM - 6:00 PM (IST) &middot; <a href="#cta" class="text-[#64b5f6] hover:underline font-medium">schedule an appointment</a>
              </span>
            </div>
          </div>
        </div>`;

  footerHtml = footerHtml.replace(oldContactGroup, newContactGroup);

  // Update container flex behavior for middle row so everything fits gracefully
  footerHtml = footerHtml.replace(
    '<div class="py-10 flex flex-col md:flex-row items-center justify-between gap-6">',
    '<div class="py-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 border-b border-[#1b2b65]/60">'
  );

  content = content.substring(0, fStart) + footerHtml + content.substring(fEnd + 9);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated footer layout in ' + file);
}
