import urllib.request
import re

req = urllib.request.Request(
    'https://www.mobrilz.com/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)

try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        
    start_pos = html.find('Agile Driven Web &amp; Mobile App Development Services')
    if start_pos == -1:
        start_pos = html.find('Agile Driven Web')
    print(f"Found at {start_pos}")
    if start_pos != -1:
        snippet = html[max(0, start_pos - 500):start_pos + 12000]
        with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\mobrilz_section_dump.html', 'w', encoding='utf-8') as f:
            f.write(snippet)
        print("Dumped mobrilz section to file!")
except Exception as e:
    print("Error:", e)
