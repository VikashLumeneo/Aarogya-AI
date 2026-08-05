import pathlib, re
root = pathlib.Path(r'c:\Users\vikas\Desktop\arogya-ai')
html_files = [root / 'index.html', root / 'ANVIQ_Radiologist_Page.html']
js_files = list((root / 'js').glob('*.js'))
used_tokens = set()

for file in html_files + js_files:
    text = file.read_text(encoding='utf-8')
    for m in re.finditer(r'class=["\'][^"\']+["\']', text, re.I):
        for t in re.findall(r'[A-Za-z0-9_-]+', m.group(0)[7:-1]):
            if t not in {'btn', 'btn-sm', 'btn-lg', 'btn-accent', 'btn-primary', 'btn-secondary'}:
                used_tokens.add(t)
    used_tokens.update(re.findall(r'id=["\']([^"\']+)["\']', text, re.I))

css_text = ''
for name in ['main.css', 'sections.css', 'variables.css']:
    css_text += (root / 'css' / name).read_text(encoding='utf-8') + '\n'

selector_names = set()
for m in re.finditer(r'([.#][A-Za-z][A-Za-z0-9_-]*)\s*\{', css_text):
    selector_names.add(m.group(1).lstrip('.#'))
for m in re.finditer(r'([.#][A-Za-z][A-Za-z0-9_-]*)\s*,', css_text):
    selector_names.add(m.group(1).lstrip('.#'))

unused = sorted(selector_names - used_tokens)
print('HTML/JS tokens', len(used_tokens))
print('CSS selector names', len(selector_names))
print('Potential unused', len(unused))
print('\n'.join(unused[:400]))
