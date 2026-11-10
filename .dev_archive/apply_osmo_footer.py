# Replace ONLY in design-a.html and sync to index.html (leaving design-b.html untouched)
with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\design-a.html', 'r', encoding='utf-8') as f:
    content_a = f.read()

with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\osmo_styled_footer.html', 'r', encoding='utf-8') as f:
    osmo_code = f.read()

start_marker = '<footer'
end_marker = '</footer>'

pos_start = content_a.find(start_marker)
pos_end = content_a.find(end_marker, pos_start) + len(end_marker)

print(f"Replacing footer in design-a.html from {pos_start} to {pos_end}")

new_content_a = content_a[:pos_start] + osmo_code + content_a[pos_end:]

with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\design-a.html', 'w', encoding='utf-8') as f:
    f.write(new_content_a)
print("Updated design-a.html with Osmo signature footer format")

# Sync to index.html (the live active root)
with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\index.html', 'w', encoding='utf-8') as f:
    f.write(new_content_a)
print("Synced to index.html")
