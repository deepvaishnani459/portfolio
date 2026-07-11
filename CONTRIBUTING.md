# Contributing

This is a personal portfolio site for Dr. Deep Vaishnani. It isn't set up
to accept feature contributions, but corrections are welcome.

## Reporting a content or technical issue
- **Typos, broken links, accessibility bugs** — open an [issue](../../issues)
  describing what's wrong and where.
- **Security issues** — please follow [SECURITY.md](SECURITY.md) instead of
  opening a public issue.

## Local development
This is a static site — no build step required.

```bash
git clone https://github.com/deepvaishnani459/portfolio.git
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Code style
- HTML: page markup only, no inline `<style>` or `<script>` blocks
  (except the JSON-LD structured data block, which must stay inline).
- CSS lives in `assets/css/style.css`.
- JS lives in `assets/js/script.js`.
- 4-space indentation (see `.editorconfig`).
