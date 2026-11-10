with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\exact_agile_section.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's inspect the style block in exact_agile_section.html
override_css = """
  /* Explicit Pin Sizing and Styling to prevent SVG blow-up */
  .mobrilz-scope svg.chakra-icon.css-ri1kvh,
  .mobrilz-scope svg.chakra-icon.css-x099gz,
  .mobrilz-scope svg.chakra-icon.css-obnhhe,
  .mobrilz-scope svg.chakra-icon.css-18ufd6p,
  .mobrilz-scope svg.chakra-icon.css-bp1rrn,
  .mobrilz-scope svg.chakra-icon.css-1euvd9w,
  .mobrilz-scope svg.chakra-icon.css-1vudi42 {
    width: 24px !important;
    height: 24px !important;
    max-width: 24px !important;
    max-height: 24px !important;
    min-width: 24px !important;
    min-height: 24px !important;
    border-radius: 9999px !important;
    background: #dce6fa !important;
    border: 2px solid #ffffff !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12) !important;
    padding: 2px !important;
    box-sizing: border-box !important;
    color: #3779cb !important;
    z-index: 10 !important;
  }
  .mobrilz-scope svg.chakra-icon.css-8c1gxj,
  .mobrilz-scope svg.chakra-icon.css-aav0r0 {
    width: 20px !important;
    height: 20px !important;
    max-width: 20px !important;
    max-height: 20px !important;
    color: #3779cb !important;
  }
  .mobrilz-scope svg.chakra-icon {
    box-sizing: border-box !important;
  }
"""

# Let's inject this into the <style> tag inside exact_agile_section.html
content = content.replace("</style>", override_css + "\n</style>", 1)

with open(r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\exact_agile_section.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected CSS overrides into exact_agile_section.html")
