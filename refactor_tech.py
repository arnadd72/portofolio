import re

file_path = 'd:/WEBPRO/porto/includes/sections/tech.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'<div class="tech-flip-card tech-hover-float reveal-(up|down) delay-([0-9]+)">\s*<div class="tech-flip-inner">\s*<div class="tech-flip-front glass">\s*<div class="tech-icon-wrapper" data-fallback="(.*?)">\s*<img src="(.*?)".*?alt="(.*?)".*?>\s*</div>\s*</div>\s*<div class="tech-flip-back glass">\s*<h3 class="tech-name">(.*?)</h3>\s*</div>\s*</div>\s*</div>'

def replace_func(m):
    return f"""<div class="tech-card tech-hover-float glass reveal-{m.group(1)} delay-{m.group(2)}" style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 20px; gap: 15px; min-height: 140px;">
                <div class="tech-icon-wrapper" data-fallback="{m.group(3)}">
                    <img src="{m.group(4)}" alt="{m.group(5)}" onerror="this.style.display='none'; this.parentNode.classList.add('show-fallback');" style="width: 50px; height: 50px; object-fit: contain;">
                </div>
                <h3 class="tech-name" style="margin: 0; font-size: 1rem; color: var(--text-main); font-weight: 600;">{m.group(6)}</h3>
            </div>"""

new_content = re.sub(pattern, replace_func, content, flags=re.DOTALL)
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print('Replaced')
