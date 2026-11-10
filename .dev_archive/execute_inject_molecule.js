const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

// SVG Kinetic Molecule Cluster Component
const kineticMoleculeSvg = `
          <!-- Kinetic Molecule Cluster (Disappearing / Reappearing Bubbles with Unique Rates) -->
          <div class="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto lg:mx-0 mt-6 select-none flex items-center justify-center" aria-hidden="true">
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

            <svg viewBox="0 0 200 200" class="w-full h-full faq-molecule-wrap overflow-visible drop-shadow-[0_0_20px_rgba(255,255,255,0.18)]" fill="currentColor">
              <!-- Connector Stems (rounded organic necks matching the reference image) -->
              <!-- Top Stem -->
              <rect class="faq-stem-top text-white" x="95" y="60" width="10" height="34" rx="5" />
              <!-- Top-Right Angled Stem -->
              <path class="faq-stem-tr text-white" d="M106 94 C116 88 124 84 133 80 C136 78 138 82 135 84 C126 89 118 95 109 101 Z" />
              <!-- Bottom-Left Angled Stem -->
              <path class="faq-stem-bl text-white" d="M94 106 C84 112 76 116 67 121 C64 123 62 119 65 117 C74 112 82 107 91 101 Z" />
              <!-- Bottom Stem -->
              <rect class="faq-stem-bot text-white" x="95" y="106" width="10" height="30" rx="5" />

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

  // Search for the anchor link with Contact Us in FAQ
  const contactIdx = content.indexOf('<span>Contact Us</span>');
  if (contactIdx === -1) {
    console.error('Contact Us not found in ' + file);
    continue;
  }

  // Find the closing </a> and </div> of that button wrapper
  const divClose = content.indexOf('</div>', contactIdx);
  const insertPos = divClose + 6;

  content = content.slice(0, insertPos) + '\n' + kineticMoleculeSvg + content.slice(insertPos);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully injected kinetic molecule into ' + file);
}
