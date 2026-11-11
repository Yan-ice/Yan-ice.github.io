# Personal site on GitHub Pages

A minimal academic / research homepage you can publish at `https://<username>.github.io`.

## Quick start (recommended)

1. Create a **new public GitHub repository** named exactly:
   - `your-username.github.io`
2. Upload everything in this folder to the repo **root** (`index.html` must sit at the root).
3. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main` / root
4. Wait 1–2 minutes, then open `https://your-username.github.io`.

## Local preview

```bash
cd personal-site
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Customize

Edit `index.html`:

- Name, bio, email, GitHub / Scholar links
- Work list titles and paper URLs
- Replace the hero image URL (or put a local file in this folder, e.g. `portrait.jpg`)
- Add your real `cv.pdf` next to `index.html`

Optional: change colors and fonts in `styles.css` (`:root` variables).

## Project-site alternative

If you do **not** want a user site (`username.github.io`), you can put these files in any repo and enable Pages the same way. The URL will be:

`https://username.github.io/repo-name/`

If you use that path, keep relative asset links (`styles.css`, `script.js`) as they are.
