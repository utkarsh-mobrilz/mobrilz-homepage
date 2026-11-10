with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\mobrilz_section_large.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect CSS styles and emotion styles that govern the dashed lines and layout
import re
classes = re.findall(r'class="([^"]+)"', html[:20000])
print("Sample classes:", set(classes)[:30])

# Let's see style tags
styles = re.findall(r'<style[^>]*>(.*?)</style>', html[:30000])
print(f"Found {len(styles)} style tags in first 30k")
for s in styles[:10]:
    if 'border' in s or 'dash' in s or 'position' in s or 'grid' in s or 'flex' in s:
        print("Style match:", s)
