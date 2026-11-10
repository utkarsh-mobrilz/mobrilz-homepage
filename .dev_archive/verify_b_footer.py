with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\design-b.html', 'r', encoding='utf-8') as f:
    content_b = f.read()

has_osmo = 'osmo-footer' in content_b
print("Design B has osmo-footer:", has_osmo)
assert not has_osmo, "Design B must remain untouched!"
print("Design B verified untouched!")
