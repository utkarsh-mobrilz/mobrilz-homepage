with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\current_footer_clean.html', 'r', encoding='utf-8') as f:
    c = f.read()

print("Full text length:", len(c))
# Let's inspect bottom row of current footer
pos = c.rfind('border-t')
print("Bottom row text:")
print(c[pos:])
