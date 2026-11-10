with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\current_footer_clean.html', 'r', encoding='utf-8') as f:
    c = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(c, 'html.parser')

for header in soup.find_all(lambda tag: tag.name in ['h3', 'h4', 'div'] and tag.get_text(strip=True) and len(tag.get_text(strip=True)) < 30 and 'uppercase' in tag.get('class', [])):
    title = header.get_text(strip=True)
    parent = header.parent
    links = [a.get_text(strip=True) for a in parent.find_all('a')]
    print(f"[{title}] -> {links}")
