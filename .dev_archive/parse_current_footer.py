with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\design-a.html', 'r', encoding='utf-8') as f:
    html = f.read()

start_pos = html.find('<footer')
end_pos = html.find('</footer>') + len('</footer>')
with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\current_footer_clean.html', 'w', encoding='utf-8') as f:
    f.write(html[start_pos:end_pos])

from bs4 import BeautifulSoup
soup = BeautifulSoup(html[start_pos:end_pos], 'html.parser')

print("All sections & columns in current footer:")
for div in soup.find_all('div', recursive=False):
    pass

for col in soup.find_all('div'):
    h = col.find(['h3', 'h4', 'div'])
    # print headers
    if h and h.get_text(strip=True) in ['Core Services', 'Engineering Specialties', 'Hire Dedicated Leads', 'Company', 'Visit Us', 'Get in Touch']:
        print(f"Header: {h.get_text(strip=True)}")
        # print links under it
        links = [a.get_text(strip=True) for a in col.find_all('a')]
        print(f"  Links ({len(links)}): {links[:6]}")
