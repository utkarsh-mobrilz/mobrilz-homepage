with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\design-a.html', 'r', encoding='utf-8') as f:
    html = f.read()

start_pos = html.find('<footer')
end_pos = html.find('</footer>') + len('</footer>')
print("Current footer in design-a.html:")
print(html[start_pos:start_pos+3000])
