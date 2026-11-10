import re, os

base = r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage'
for fname in ['design-a.html', 'design-b.html', 'index.html']:
    filepath = os.path.join(base, fname)
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    print(f"=== {fname} ===")
    
    # Check for social or empty boxes
    for m in re.finditer(r'(?:<a[^>]*osmo-square-icon-btn[^>]*>[\s\S]*?</a>\s*){3,}', text):
        print("Found osmo-square-icon-btn group:")
        print(m.group(0)[:500])

    # Check for any sequence of 6 rounded boxes / links / buttons
    for m in re.finditer(r'(?:<(?:div|a|button)[^>]*rounded-[^>]*>\s*</(?:div|a|button)>\s*){4,}', text):
        print("Found empty rounded boxes:")
        print(m.group(0))
