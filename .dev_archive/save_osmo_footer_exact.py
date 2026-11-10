with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\osmo_footer.html', 'r', encoding='utf-8') as f:
    html = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')
footer = soup.find('footer')
if footer:
    with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\osmo_footer_exact.html', 'w', encoding='utf-8') as f:
        f.write(str(footer))
    print(f"Saved osmo_footer_exact.html (length: {len(str(footer))})")
