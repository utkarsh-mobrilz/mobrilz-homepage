const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace all faq-content class definitions to include grid-template-rows transition
  // Replace: class="faq-content overflow-hidden max-h-0 transition-[max-height] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
  // With grid-based smooth expand
  content = content.replace(
    /class="faq-content overflow-hidden max-h-0 transition-\[max-height\] duration-400 ease-\[cubic-bezier\(0\.16,1,0\.3,1\)\]"/g,
    'class="faq-content grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"'
  );

  // Inside faq-content, ensure the inner div has overflow-hidden so grid-rows-[0fr] to [1fr] works seamlessly
  content = content.replace(
    /<div class="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">/g,
    '<div class="overflow-hidden min-h-0"><div class="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">'
  );

  // Close the extra wrapper before each faq-content closing tag
  // Pattern: </div>\s*</div>\s*</div>\s*<!-- Accordion Item
  // Let's replace each </div>\s*</div>\s*</div> for the items:
  for (let i = 1; i <= 6; i++) {
    const idStr = `id="flubble-faq-${i}"`;
    const idx = content.indexOf(idStr);
    if (idx !== -1) {
      const closeDiv1 = content.indexOf('</div>', idx);
      const closeDiv2 = content.indexOf('</div>', closeDiv1 + 6);
      content = content.slice(0, closeDiv2) + '</div>' + content.slice(closeDiv2);
    }
  }

  // Update toggleFlubbleFaq function in JavaScript
  const oldFuncStart = 'function toggleFlubbleFaq(index) {';
  const oldFuncEnd = 'function toggleFaq(id) {';
  const funcIdx = content.indexOf(oldFuncStart);
  const funcEndIdx = content.indexOf(oldFuncEnd);

  if (funcIdx !== -1 && funcEndIdx !== -1) {
    const newFunc = `function toggleFlubbleFaq(index) {
      const targetContent = document.getElementById('flubble-faq-' + index);
      const allContents = document.querySelectorAll('.faq-content');
      const allButtons = document.querySelectorAll('.faq-btn');
      const allIcons = document.querySelectorAll('.faq-icon-box i');
      
      const isOpen = targetContent && targetContent.classList.contains('grid-rows-[1fr]');

      // Close all accordions with ultra-smooth cubic transition
      allContents.forEach((c) => {
        c.classList.remove('grid-rows-[1fr]', 'opacity-100');
        c.classList.add('grid-rows-[0fr]', 'opacity-0');
      });
      allButtons.forEach((b) => {
        b.setAttribute('aria-expanded', 'false');
      });
      allIcons.forEach((i) => {
        i.style.transform = 'rotate(0deg)';
      });

      // If clicked item was closed, open it smoothly
      if (!isOpen && targetContent) {
        targetContent.classList.remove('grid-rows-[0fr]', 'opacity-0');
        targetContent.classList.add('grid-rows-[1fr]', 'opacity-100');
        const clickedBtn = targetContent.previousElementSibling;
        if (clickedBtn) {
          clickedBtn.setAttribute('aria-expanded', 'true');
          const icon = clickedBtn.querySelector('.faq-icon-box i');
          if (icon) {
            icon.style.transform = 'rotate(180deg)';
          }
        }
      }
    }

    `;

    content = content.slice(0, funcIdx) + newFunc + content.slice(funcEndIdx);
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated accordion transition in ' + file);
}
