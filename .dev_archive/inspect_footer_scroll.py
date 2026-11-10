with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\osmo_slater.js', 'r', encoding='utf-8') as f:
    js = f.read()

pos = js.find('initFooterScroll')
print("initFooterScroll pos:", pos)
if pos != -1:
    print(js[pos - 50:pos + 800])
