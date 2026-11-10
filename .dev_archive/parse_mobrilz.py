from bs4 import BeautifulSoup

with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\mobrilz_section_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

print("=== ALL HEADINGS & TEXTS ===")
for h in soup.find_all(['h1', 'h2', 'h3', 'h4', 'p']):
    txt = h.get_text(strip=True)
    if txt:
        print(f"{h.name}: {txt}")

print("\n=== ALL IMAGES ===")
for img in soup.find_all('img'):
    print(img.get('src'), '| alt:', img.get('alt'))
