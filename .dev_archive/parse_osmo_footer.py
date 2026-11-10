with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\osmo_footer.html', 'r', encoding='utf-8') as f:
    html = f.read()

from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')

footer = soup.find('footer')
if footer:
    print("Footer tag found! Attributes:", footer.attrs)
    print("\nHeadings in footer:")
    for h in footer.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']):
        t = h.get_text(strip=True)
        if t and len(t) < 80:
            print(f"[{h.name}] {t}")
    
    print("\nLinks in footer:")
    for a in footer.find_all('a'):
        print(f"Link: {a.get_text(strip=True)} -> {a.get('href')}")
    
    print("\nSVGs in footer:", len(footer.find_all('svg')))
else:
    print("No footer tag found directly")
