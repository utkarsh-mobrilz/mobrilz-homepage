with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\osmo_full.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
# Look for GSAP footer triggers in script tags
scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
print(f"Inline script blocks: {len(scripts)}")
for s in scripts:
    if 'footer' in s or 'ScrollTrigger' in s:
        print("Script match (first 400 chars):", s[:400])

# Also check external slater scripts
slaters = re.findall(r'https://slater\.app/[^"\']+\.js', html)
print("Slater scripts:", slaters)
