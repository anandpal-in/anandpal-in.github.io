# Dr. Anand Pal — Academic Website
**Live at:** https://anandpal-in.github.io

Built with Jekyll, hosted on GitHub Pages. No build tools needed — GitHub builds it automatically.

## Upload Steps
1. Delete all old `.html` files from your GitHub repo
2. Upload everything from this zip (keep the folder structure)
3. GitHub Pages rebuilds automatically in ~2 minutes

## Folder Structure
```
├── _config.yml              ← site settings
├── _layouts/default.html   ← nav + footer (edit once, applies everywhere)
├── _includes/
│   ├── icons.html           ← all SVG symbols (edit once)
│   ├── nav.html             ← navigation (edit once)
│   └── footer.html          ← footer (edit once)
├── assets/
│   ├── css/styles.css
│   ├── js/script.js
│   └── images/              ← put Profile.jpg, brainrace.webp, archit.jpg etc. here
├── index.html               ← homepage
├── about/index.html         → anandpal-in.github.io/about/
├── research/index.html      → anandpal-in.github.io/research/
├── publications/index.html  → anandpal-in.github.io/publications/
├── teaching/index.html      → anandpal-in.github.io/teaching/
├── thought/index.html       → anandpal-in.github.io/thought/
├── leadership-development/index.html → anandpal-in.github.io/leadership-development/
├── contact/index.html       → anandpal-in.github.io/contact/
└── 404.html
```

## Images to Upload
Put these in `assets/images/`:
- `Profile.jpg` — your profile photo
- `brainrace.webp` — book cover
- `archit.jpg` — mentee photo (or any other mentee photos)

## Things to Update
- `_includes/footer.html` — replace `mailto:anand@example.com` with your real email
- `leadership-development/index.html` — replace `RAJ-KUMAR-USERNAME` with real LinkedIn usernames
- `publications/index.html` — replace `YOUR_ID` in Google Scholar links
- `assets/images/` — add your actual photo files
