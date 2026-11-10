const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Update rings array to have clean, thicker widths without gradient or secondary colors
  // Set thicker path widths: e.g. 3.5px - 4.5px solid #FAFAFA strokes
  const oldRingsBlock = `      const rings = [
        {
          r: 65,  direction: 1,  revs: 4, width: 14,
          color: 'rgba(250, 250, 250, 0.08)', glow: 'rgba(250, 250, 250, 0.22)',
          dotR: 6.5,
          colorway: {
            primary: '#FAFAFA',
            secondary: '#E5E7EB',
            deep: '#9CA3AF',
            glow: 'rgba(250, 250, 250, 0.45)',
            border: '#FFFFFF'
          }
        },
        {
          r: 135, direction: -1, revs: 3, width: 18,
          color: 'rgba(250, 250, 250, 0.07)', glow: 'rgba(250, 250, 250, 0.18)',
          dotR: 7.5,
          colorway: {
            primary: '#FAFAFA',
            secondary: '#E5E7EB',
            deep: '#9CA3AF',
            glow: 'rgba(250, 250, 250, 0.45)',
            border: '#FFFFFF'
          }
        },
        {
          r: 215, direction: 1,  revs: 2, width: 22,
          color: 'rgba(250, 250, 250, 0.06)', glow: 'rgba(250, 250, 250, 0.15)',
          dotR: 8.5,
          colorway: {
            primary: '#FAFAFA',
            secondary: '#E5E7EB',
            deep: '#9CA3AF',
            glow: 'rgba(250, 250, 250, 0.45)',
            border: '#FFFFFF'
          }
        },
        {
          r: 300, direction: -1, revs: 1, width: 26,
          color: 'rgba(250, 250, 250, 0.05)', glow: 'rgba(250, 250, 250, 0.12)',
          dotR: 9.5,
          colorway: {
            primary: '#FAFAFA',
            secondary: '#E5E7EB',
            deep: '#9CA3AF',
            glow: 'rgba(250, 250, 250, 0.45)',
            border: '#FFFFFF'
          }
        }
      ];`;

  const newRingsBlock = `      const rings = [
        {
          r: 65,  direction: 1,  revs: 4, pathWidth: 3.5,
          dotR: 6.5,
          colorway: {
            primary: '#FAFAFA',
            secondary: '#E5E7EB',
            deep: '#9CA3AF',
            glow: 'rgba(250, 250, 250, 0.45)',
            border: '#FFFFFF'
          }
        },
        {
          r: 135, direction: -1, revs: 3, pathWidth: 4.0,
          dotR: 7.5,
          colorway: {
            primary: '#FAFAFA',
            secondary: '#E5E7EB',
            deep: '#9CA3AF',
            glow: 'rgba(250, 250, 250, 0.45)',
            border: '#FFFFFF'
          }
        },
        {
          r: 215, direction: 1,  revs: 2, pathWidth: 4.5,
          dotR: 8.5,
          colorway: {
            primary: '#FAFAFA',
            secondary: '#E5E7EB',
            deep: '#9CA3AF',
            glow: 'rgba(250, 250, 250, 0.45)',
            border: '#FFFFFF'
          }
        },
        {
          r: 300, direction: -1, revs: 1, pathWidth: 5.0,
          dotR: 9.5,
          colorway: {
            primary: '#FAFAFA',
            secondary: '#E5E7EB',
            deep: '#9CA3AF',
            glow: 'rgba(250, 250, 250, 0.45)',
            border: '#FFFFFF'
          }
        }
      ];`;

  // 2. Update the track drawing code inside the forEach:
  // Remove createConicGradient, remove the 1px center spine line, draw a single, clean, solid, thicker #FAFAFA path.
  const oldTrackDraw = `          // 1. Draw pure #FAFAFA concentric orbital track paths (completely #FAFAFA with trail)
          // Base complete orbital ring path in clean #FAFAFA
          ctx.save();
          ctx.beginPath();
          ctx.arc(centerX, centerY, ring.r, 0, Math.PI * 2);
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = 'rgba(250, 250, 250, 0.28)';
          ctx.stroke();
          ctx.restore();

          // Smooth #FAFAFA kinetic dynamic glow sweep trailing the traveling node
          const grad = ctx.createConicGradient(currentAngle, centerX, centerY);
          grad.addColorStop(0, 'rgba(250, 250, 250, 0)');
          grad.addColorStop(0.15, 'rgba(250, 250, 250, 0.08)');
          grad.addColorStop(0.5, 'rgba(250, 250, 250, 0.35)');
          grad.addColorStop(0.85, 'rgba(250, 250, 250, 0.08)');
          grad.addColorStop(1, 'rgba(250, 250, 250, 0)');

          ctx.save();
          ctx.beginPath();
          ctx.arc(centerX, centerY, ring.r, 0, Math.PI * 2);
          ctx.lineWidth = ring.width;
          ctx.strokeStyle = grad;
          ctx.stroke();
          ctx.restore();

          // Crisp luminous #FAFAFA center spine
          ctx.save();
          ctx.beginPath();
          ctx.arc(centerX, centerY, ring.r, 0, Math.PI * 2);
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(250, 250, 250, 0.55)';
          ctx.stroke();
          ctx.restore();`;

  const newTrackDraw = `          // 1. Draw solid, uniform #FAFAFA concentric orbital track path (No gradient, no internal thin line, thicker stroke)
          ctx.save();
          ctx.beginPath();
          ctx.arc(centerX, centerY, ring.r, 0, Math.PI * 2);
          ctx.lineWidth = ring.pathWidth || 4.0;
          ctx.strokeStyle = 'rgba(250, 250, 250, 0.42)'; // Clean, solid, luminous #FAFAFA
          ctx.stroke();
          ctx.restore();`;

  if (!content.includes('rgba(250, 250, 250, 0.28)')) {
    console.error('Track draw pattern not matched in ' + file);
    continue;
  }

  // Replace rings block
  const rIdx = content.indexOf('const rings = [');
  const rEnd = content.indexOf('];', rIdx) + 2;
  content = content.slice(0, rIdx) + newRingsBlock.trim() + content.slice(rEnd);

  // Replace track draw
  const tIdx = content.indexOf('// 1. Draw pure #FAFAFA concentric orbital track paths');
  const tEnd = content.indexOf('// 3. Kinetic traveling luminous molecule', tIdx);
  content = content.slice(0, tIdx) + newTrackDraw.trim() + '\n\n          ' + content.slice(tEnd);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated paths to solid, thicker #FAFAFA in ' + file);
}
