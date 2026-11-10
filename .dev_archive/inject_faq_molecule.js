const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

// SVG Kinetic Molecule Cluster Component
const kineticMoleculeSvg = `
          <!-- Kinetic Molecule Cluster (Disappearing / Reappearing Bubbles with Unique Rates) -->
          <div class="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto lg:mx-0 my-2 flex items-center justify-center select-none" aria-hidden="true">
            <style>
              /* Keyframes for individual bubble breathing / disappear-reappear motion */
              @keyframes bubbleFade1 {
                0%, 100% { opacity: 1; transform: scale(1); }
                35% { opacity: 0; transform: scale(0.2); }
                65% { opacity: 0.9; transform: scale(1.05); }
              }
              @keyframes bubbleFade2 {
                0%, 100% { opacity: 0.95; transform: scale(1); }
                42% { opacity: 0; transform: scale(0.15); }
                70% { opacity: 1; transform: scale(1.08); }
              }
              @keyframes bubbleFade3 {
                0%, 100% { opacity: 1; transform: scale(1); }
                28% { opacity: 0; transform: scale(0.25); }
                58% { opacity: 0.85; transform: scale(1.04); }
              }
              @keyframes bubbleFade4 {
                0%, 100% { opacity: 0.9; transform: scale(1); }
                48% { opacity: 0; transform: scale(0.1); }
                78% { opacity: 1; transform: scale(1.06); }
              }
              @keyframes bubbleFade5 {
                0%, 100% { opacity: 1; transform: scale(1); }
                38% { opacity: 0; transform: scale(0.2); }
                72% { opacity: 0.95; transform: scale(1.05); }
              }
              @keyframes bubbleFade6 {
                0%, 100% { opacity: 0.95; transform: scale(1); }
                52% { opacity: 0; transform: scale(0.18); }
                82% { opacity: 1; transform: scale(1.07); }
              }

              /* Sub-keyframes for stems that connect to center when satellite node fades */
              @keyframes stemFadeTop {
                0%, 100% { opacity: 1; }
                35% { opacity: 0.05; }
                65% { opacity: 0.9; }
              }
              @keyframes stemFadeTR {
                0%, 100% { opacity: 1; }
                48% { opacity: 0.05; }
                78% { opacity: 1; }
              }
              @keyframes stemFadeBL {
                0%, 100% { opacity: 1; }
                38% { opacity: 0.05; }
                72% { opacity: 0.95; }
              }
              @keyframes stemFadeBottom {
                0%, 100% { opacity: 1; }
                52% { opacity: 0.05; }
                82% { opacity: 1; }
              }

              /* Subtle gentle drift of the entire cluster */
              @keyframes clusterDrift {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-4px) rotate(1.5deg); }
              }

              .faq-molecule-wrap {
                animation: clusterDrift 9s ease-in-out infinite;
                transform-origin: center center;
              }

              .faq-b-1 { animation: bubbleFade1 4.2s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.2s; transform-origin: 100px 48px; }
              .faq-b-2 { animation: bubbleFade2 5.6s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.4s; transform-origin: 52px 88px; }
              .faq-b-3 { animation: bubbleFade3 4.8s cubic-bezier(0.4, 0, 0.2, 1) infinite 2.1s; transform-origin: 148px 124px; }
              .faq-b-4 { animation: bubbleFade4 6.2s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.8s; transform-origin: 144px 76px; }
              .faq-b-5 { animation: bubbleFade5 5.1s cubic-bezier(0.4, 0, 0.2, 1) infinite 2.7s; transform-origin: 56px 128px; }
              .faq-b-6 { animation: bubbleFade6 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.9s; transform-origin: 100px 146px; }

              .faq-stem-top { animation: stemFadeTop 4.2s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.2s; }
              .faq-stem-tr  { animation: stemFadeTR 6.2s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.8s; }
              .faq-stem-bl  { animation: stemFadeBL 5.1s cubic-bezier(0.4, 0, 0.2, 1) infinite 2.7s; }
              .faq-stem-bot { animation: stemFadeBottom 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.9s; }
            </style>

            <svg viewBox="0 0 200 200" class="w-full h-full faq-molecule-wrap overflow-visible drop-shadow-[0_0_25px_rgba(55,121,203,0.35)]" fill="currentColor">
              <!-- Connector Stems (rounded organic necks matching the reference image) -->
              <!-- Top Stem -->
              <rect class="faq-stem-top text-white" x="94" y="62" width="12" height="34" rx="6" />
              <!-- Top-Right Angled Stem -->
              <path class="faq-stem-tr text-white" d="M107 94 C116 88 123 83 133 79 C136 78 138 82 135 84 C126 89 118 95 109 101 Z" />
              <!-- Bottom-Left Angled Stem -->
              <path class="faq-stem-bl text-white" d="M93 106 C84 112 76 117 68 122 C65 124 63 120 66 118 C74 113 83 107 91 101 Z" />
              <!-- Bottom Stem -->
              <rect class="faq-stem-bot text-white" x="94" y="106" width="12" height="28" rx="6" />

              <!-- Core Center Node -->
              <circle cx="100" cy="100" r="17" class="text-white" />

              <!-- 1. Top Large Bubble (connected) -->
              <circle class="faq-b-1 text-white" cx="100" cy="48" r="23" />

              <!-- 2. Top-Left Free Floating Small Bubble -->
              <circle class="faq-b-2 text-white" cx="52" cy="88" r="17" />

              <!-- 3. Right Free Floating Medium-Large Bubble -->
              <circle class="faq-b-3 text-white" cx="148" cy="124" r="23" />

              <!-- 4. Top-Right Medium Bubble (connected) -->
              <circle class="faq-b-4 text-white" cx="144" cy="76" r="17" />

              <!-- 5. Bottom-Left Large Bubble (connected) -->
              <circle class="faq-b-5 text-white" cx="56" cy="128" r="23" />

              <!-- 6. Bottom Medium Bubble (connected) -->
              <circle class="faq-b-6 text-white" cx="100" cy="146" r="17" />
            </svg>
          </div>
`;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Insert kineticMoleculeSvg right under Contact Us button in FAQ Left Column
  const target = `<div class="pt-2">
            <a href="#cta" class="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0a1638]/70 hover:bg-[#0f2152] text-white font-sans text-xs sm:text-sm font-normal tracking-wide border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 shadow-sm backdrop-blur-sm">
              <span>Contact Us</span>
              <i data-lucide="arrow-up-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
            </a>
          </div>`;

  if (!content.includes(target)) {
    console.error('Target not found in ' + file);
    continue;
  }

  content = content.replace(target, target + '\n' + kineticMoleculeSvg);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully injected kinetic molecule in ' + file);
}
