with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\osmo_slater.js', 'r', encoding='utf-8') as f:
    js = f.read()

pos = js.find('function initFooterScroll')
print(js[pos:pos+1600])
