import urllib.request
import os

images = [
    ('monitior1.png', 'https://www.mobrilz.com/images/monitior1.png'),
    ('slash.png', 'https://www.mobrilz.com/images/slash.png'),
    ('testing1.png', 'https://www.mobrilz.com/images/testing1.png'),
    ('swift.png', 'https://www.mobrilz.com/images/swift.png'),
    ('dart.png', 'https://www.mobrilz.com/images/dart.png'),
    ('github.png', 'https://www.mobrilz.com/images/github.png'),
    ('jenkins.png', 'https://www.mobrilz.com/images/Jenkins.png'),
    ('docker.png', 'https://www.mobrilz.com/images/DOCKER.png'),
    ('aws.png', 'https://www.mobrilz.com/images/aws.png'),
    ('azure.png', 'https://www.mobrilz.com/images/cloud.png'),
    ('gcp.png', 'https://www.mobrilz.com/images/googlecloud.png'),
]

out_dir = r'C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\assets\mobrilz'
os.makedirs(out_dir, exist_ok=True)

for name, url in images:
    target = os.path.join(out_dir, name)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp, open(target, 'wb') as f:
            f.write(resp.read())
        print(f"Downloaded {name} ({os.path.getsize(target)} bytes)")
    except Exception as e:
        print(f"Failed {name}: {e}")
