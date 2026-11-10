with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\current_footer_clean.html', 'r', encoding='utf-8') as f:
    c = f.read()

pos = c.rfind('border-t')
safe_c = c[pos:].encode('ascii', 'replace').decode('ascii')
print("Bottom row text:")
print(safe_c)
