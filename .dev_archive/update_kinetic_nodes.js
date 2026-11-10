const fs = require('fs');

const files = [
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html',
  'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Find the rings configuration and node drawing logic in kineticMotionCanvas
  const oldConfigStart = '      const rings = [\n        { r: 65,  direction: 1,  revs: 4, width: 22, color: \'rgba(9, 103, 210, 0.28)\', glow: \'rgba(64, 142, 235, 0.55)\', dotR: 7.5, dotColor: \'#3779cb\', ringBorder: \'rgba(255, 255, 255, 0.65)\' },\n        { r: 135, direction: -1, revs: 3, width: 30, color: \'rgba(55, 121, 203, 0.22)\', glow: \'rgba(9, 103, 210, 0.45)\', dotR: 9,   dotColor: \'#4d94ec\', ringBorder: \'rgba(255, 255, 255, 0.75)\' },\n        { r: 215, direction: 1,  revs: 2, width: 38, color: \'rgba(64, 142, 235, 0.16)\', glow: \'rgba(55, 121, 203, 0.4)\',  dotR: 10.5,dotColor: \'#64b5f6\', ringBorder: \'rgba(255, 255, 255, 0.85)\' },\n        { r: 300, direction: -1, revs: 1, width: 48, color: \'rgba(9, 103, 210, 0.12)\', glow: \'rgba(64, 142, 235, 0.32)\', dotR: 12,  dotColor: \'#3779cb\', ringBorder: \'rgba(255, 255, 255, 0.70)\' }\n      ];';

  const newConfig = `      // Refined Mobrilz Brand Orbital Palette: 4 distinct, elegant, non-tacky brand colorways
      // 1. Innermost: Refined Cyan Azure (#38bdf8 / Mobrilz Electric Sky)
      // 2. Middle-inner: Signature Sapphire Blue (#2563eb / Mobrilz Royal Cobalt)
      // 3. Middle-outer: Subtle Electric Indigo (#6366f1 / Mobrilz Deep Horizon)
      // 4. Outermost: Soft Glacier Teal (#2dd4bf / Mobrilz Modern Mint)
      const rings = [
        {
          r: 65,  direction: 1,  revs: 4, width: 14,
          color: 'rgba(56, 189, 248, 0.16)', glow: 'rgba(56, 189, 248, 0.28)',
          dotR: 6.5,
          colorway: {
            primary: '#38bdf8',     // Cyan Azure
            secondary: '#0284c7',
            deep: '#0369a1',
            glow: 'rgba(56, 189, 248, 0.35)',
            border: 'rgba(255, 255, 255, 0.85)'
          }
        },
        {
          r: 135, direction: -1, revs: 3, width: 18,
          color: 'rgba(37, 99, 235, 0.14)', glow: 'rgba(37, 99, 235, 0.25)',
          dotR: 7.5,
          colorway: {
            primary: '#3b82f6',     // Royal Sapphire
            secondary: '#1d4ed8',
            deep: '#1e3a8a',
            glow: 'rgba(59, 130, 246, 0.35)',
            border: 'rgba(255, 255, 255, 0.85)'
          }
        },
        {
          r: 215, direction: 1,  revs: 2, width: 22,
          color: 'rgba(99, 102, 241, 0.12)', glow: 'rgba(99, 102, 241, 0.22)',
          dotR: 8.5,
          colorway: {
            primary: '#818cf8',     // Electric Indigo
            secondary: '#4f46e5',
            deep: '#312e81',
            glow: 'rgba(99, 102, 241, 0.35)',
            border: 'rgba(255, 255, 255, 0.85)'
          }
        },
        {
          r: 300, direction: -1, revs: 1, width: 26,
          color: 'rgba(45, 212, 191, 0.10)', glow: 'rgba(45, 212, 191, 0.18)',
          dotR: 9.5,
          colorway: {
            primary: '#2dd4bf',     // Glacier Teal
            secondary: '#0d9488',
            deep: '#115e59',
            glow: 'rgba(45, 212, 191, 0.32)',
            border: 'rgba(255, 255, 255, 0.85)'
          }
        }
      ];`;

  // Drawing code replacement
  const oldDrawCode = `          // Tier A: Diffused soft ambient energy aura
          const auraGrad = ctx.createRadialGradient(dotX, dotY, ring.dotR * 0.5, dotX, dotY, ring.dotR * 3.2);
          auraGrad.addColorStop(0, ring.dotColor);
          auraGrad.addColorStop(0.5, 'rgba(55, 121, 203, 0.28)');
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = auraGrad;
          ctx.beginPath();
          ctx.arc(dotX, dotY, ring.dotR * 3.2, 0, Math.PI * 2);
          ctx.fill();

          // Tier B: Outer Luminous Glass Ring with High-Definition Core
          ctx.shadowBlur = 18;
          ctx.shadowColor = ring.dotColor;
          const orbGrad = ctx.createRadialGradient(dotX - ring.dotR * 0.25, dotY - ring.dotR * 0.25, ring.dotR * 0.1, dotX, dotY, ring.dotR);
          orbGrad.addColorStop(0, '#ffffff');
          orbGrad.addColorStop(0.35, ring.dotColor);
          orbGrad.addColorStop(0.85, '#1b3d7a');
          orbGrad.addColorStop(1, '#09143f');
          ctx.fillStyle = orbGrad;
          ctx.beginPath();
          ctx.arc(dotX, dotY, ring.dotR, 0, Math.PI * 2);
          ctx.fill();

          // Tier C: Crisp micro-rim border ring for polished optical clarity
          ctx.shadowBlur = 0;
          ctx.lineWidth = 1.25;
          ctx.strokeStyle = ring.ringBorder || 'rgba(255, 255, 255, 0.75)';
          ctx.beginPath();
          ctx.arc(dotX, dotY, ring.dotR, 0, Math.PI * 2);
          ctx.stroke();

          // Tier D: Pristine white luminous pinpoint core
          const coreGrad = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, ring.dotR * 0.42);
          coreGrad.addColorStop(0, '#ffffff');
          coreGrad.addColorStop(0.7, '#ffffff');
          coreGrad.addColorStop(1, 'rgba(255, 255, 255, 0.4)');
          ctx.fillStyle = coreGrad;
          ctx.beginPath();
          ctx.arc(dotX, dotY, ring.dotR * 0.42, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();`;

  const newDrawCode = `          const cw = ring.colorway;

          // Tier A: Ultra-subtle, non-tacky diffused ambient glow (minimal blur, no harsh halo)
          const auraGrad = ctx.createRadialGradient(dotX, dotY, ring.dotR * 0.2, dotX, dotY, ring.dotR * 2.2);
          auraGrad.addColorStop(0, cw.glow);
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = auraGrad;
          ctx.beginPath();
          ctx.arc(dotX, dotY, ring.dotR * 2.2, 0, Math.PI * 2);
          ctx.fill();

          // Tier B: Elegant, satin-finish spherical jewel body using distinct brand colorway
          ctx.shadowBlur = 6;
          ctx.shadowColor = cw.glow;
          const orbGrad = ctx.createRadialGradient(
            dotX - ring.dotR * 0.3,
            dotY - ring.dotR * 0.3,
            ring.dotR * 0.05,
            dotX,
            dotY,
            ring.dotR
          );
          orbGrad.addColorStop(0, '#ffffff');
          orbGrad.addColorStop(0.28, cw.primary);
          orbGrad.addColorStop(0.75, cw.secondary);
          orbGrad.addColorStop(1, cw.deep);
          ctx.fillStyle = orbGrad;
          ctx.beginPath();
          ctx.arc(dotX, dotY, ring.dotR, 0, Math.PI * 2);
          ctx.fill();

          // Tier C: Subtle hairline optical rim for precision
          ctx.shadowBlur = 0;
          ctx.lineWidth = 1;
          ctx.strokeStyle = cw.border;
          ctx.beginPath();
          ctx.arc(dotX, dotY, ring.dotR, 0, Math.PI * 2);
          ctx.stroke();

          // Tier D: Refined specular highlight (tasteful, pinpoint reflection)
          const specGrad = ctx.createRadialGradient(
            dotX - ring.dotR * 0.32,
            dotY - ring.dotR * 0.32,
            0,
            dotX - ring.dotR * 0.32,
            dotY - ring.dotR * 0.32,
            ring.dotR * 0.28
          );
          specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
          specGrad.addColorStop(0.6, 'rgba(255, 255, 255, 0.4)');
          specGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = specGrad;
          ctx.beginPath();
          ctx.arc(dotX - ring.dotR * 0.32, dotY - ring.dotR * 0.32, ring.dotR * 0.28, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();`;

  if (!content.includes('rgba(9, 103, 210, 0.28)')) {
    console.error('Config string not matched in ' + file);
    continue;
  }

  // Normalize line endings for replacement
  const configIndex = content.indexOf('const rings = [');
  const configEnd = content.indexOf('];', configIndex) + 2;
  content = content.slice(0, configIndex) + newConfig.trim() + content.slice(configEnd);

  const drawIndex = content.indexOf('// Tier A: Diffused soft ambient energy aura');
  const drawEnd = content.indexOf('ctx.restore();', drawIndex) + 'ctx.restore();'.length;
  content = content.slice(0, drawIndex) + newDrawCode.trim() + content.slice(drawEnd);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated kinetic node colors and styling in ' + file);
}
