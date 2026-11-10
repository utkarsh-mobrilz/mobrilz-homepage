with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\osmo_slater.js', 'r', encoding='utf-8') as f:
    js = f.read()

import re
m = re.search(r'function initFooterScroll\(\)\{([^}]+(?:\{[^}]*\}[^}]*)*)\}', js)
if m:
    print("Function initFooterScroll:")
    print(m.group(0)[:1500])
else:
    # search where 'function initFooterScroll' is defined
    pos = js.find('function initFooterScroll')
    print("Definition pos:", pos)
    print(js[pos:pos+1500])
