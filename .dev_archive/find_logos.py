import os

for root, dirs, files in os.walk(r'C:\Users\Manoj\.gemini\antigravity'):
    for f in files:
        if 'logo' in f.lower() or f.endswith('.svg'):
            print(os.path.join(root, f))
