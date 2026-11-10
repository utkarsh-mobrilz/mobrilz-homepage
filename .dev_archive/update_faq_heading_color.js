const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(
    'Frequently Asked <br/><span class="text-[#64b5f6]">Questions</span>',
    'Frequently Asked <br/>Questions'
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully made Frequently Asked Questions one color in ' + file);
}
