# Webloop Agency — Website

A production-ready, five-page marketing site for Webloop Agency, built with plain
**HTML, CSS and JavaScript**. No frameworks, no build step, no dependencies —
open `index.html` or drop the folder on any static host and it runs.

---

## Structure

```
webloop-agency/
├── index.html            Home
├── about.html            About
├── services.html         Services
├── portfolio.html        Portfolio (with category filtering)
├── contact.html          Contact (form + validation + success state)
├── 404.html              Not-found page
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css     Design tokens + every component style
    ├── js/main.js        All behaviour, split into small modules
    └── img/favicon.svg
```

## Design system

Everything is driven by custom properties at the top of `assets/css/style.css`:

| Token | Value | Used for |
| --- | --- | --- |
| `--ink` | `#06070D` | Page background |
| `--ink-soft` / `--surface` | `#0A0C15` / `#0E1120` | Alternating sections, cards |
| `--accent` | `#C8FF4D` | Primary accent, CTAs, highlights |
| `--violet` / `--cyan` | `#7C5CFF` / `#35E0D8` | Secondary glows and gradients |
| `--fg` / `--muted` | `#EEF1F8` / `#9AA1BB` | Body and secondary text |

Type: **Sora** for headings, **Inter** for body (loaded from Google Fonts with
system fallbacks). Change the palette in one place and the whole site follows.

## Reusable pieces

The same class-based components repeat across pages, so a change to the CSS
updates every instance:

- `.navbar` + `.mobile-menu` — sticky header that shrinks and blurs on scroll
- `.footer` — four-column footer with navigation, services and contact
- `.btn` (`--primary`, `--secondary`, `--outline`, `--sm`, `--lg`, `--block`)
- `.card` `.service-card` `.work-card` `.team-card` `.pillar` `.step` `.feature`
- `.heading` + `.eyebrow` — section headings
- `.form` + `.field` — the contact form and its validation states
- `.ic` — icon styling, so each inline SVG stays a bare `<svg class="ic"><path/></svg>`

## Behaviour (`assets/js/main.js`)

Each module checks for its own markup first, so nothing breaks on pages that
don't use it.

| Module | What it does |
| --- | --- |
| `initPreloader` | Branded loading screen; auto-dismisses (with a 3s safety net) |
| `initNavbar` | Scroll state on the header + reading-progress line |
| `initMobileMenu` | Hamburger toggle, scroll lock, Esc to close |
| `initReveal` | `IntersectionObserver` entrance animations (`.reveal`, `data-delay`) |
| `initCounters` | Statistics count up when scrolled into view |
| `initMarquee` | Duplicates the client row for a seamless loop |
| `initSpotlight` | Pointer-following highlight on cards |
| `initFilters` | Portfolio category filtering with staggered re-entry |
| `initContactForm` | Field validation, error messaging, success state, `?service=` prefill |
| `initBackToTop` | Floating scroll-to-top button |
| `initYear` | Keeps the footer copyright year current |

## Images

Project thumbnails, team portraits and the location map are **inline SVG
artwork** rather than bitmaps — they are sharp at any size, add no network
requests, and never 404.

To swap in real photography, replace the `<svg class="work-card__art">` block
inside a card with an image at the same aspect ratio:

```html
<img class="work-card__art" src="assets/img/nova-finance.jpg"
     alt="Nova Finance website" width="800" height="560" loading="lazy" />
```

(`10 / 7` for project cards, `4 / 5` for team portraits.)

## Contact form

The form validates entirely on the client and then shows a success message —
there is **no backend wired up**. To make it live, edit the submit handler in
`assets/js/main.js` (search for “No backend is wired up”) and post the values to
your endpoint, e.g.:

```js
fetch('https://your-endpoint.example/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: form.elements.name.value,
    email: form.elements.email.value,
    company: form.elements.company.value,
    service: form.elements.service.value,
    budget: form.elements.budget.value,
    message: form.elements.message.value
  })
})
```

Formspree, Netlify Forms and Web3Forms all drop in here with minimal changes.

## Running locally

Any static server works. From this folder:

```bash
python -m http.server 5173
```

Then open <http://localhost:5173>. Opening `index.html` directly from disk works
too — all paths are relative.

## Deploying

Upload the folder as-is to Netlify, Vercel, GitHub Pages, cPanel or any static
host. Before going live, update in each page's `<head>`:

- `<link rel="canonical">` and the `og:url` / `og:title` / `og:description` tags
- the domain in `robots.txt` and `sitemap.xml`
- the real email, phone and social URLs (currently `hello@webloopagency.com`,
  `+92 300 1234567`, and `*/webloopagency` handles)

## Accessibility & SEO notes

- Semantic landmarks (`header` / `nav` / `main` / `footer`), one `h1` per page
- Skip-to-content link, visible focus rings, labelled form fields with
  `aria-invalid` and `role="alert"` error messages
- `aria-current="page"` on the active navigation item
- Descriptive `aria-label`s on icon-only controls and decorative SVGs hidden
  with `aria-hidden`
- Every animation respects `prefers-reduced-motion`
- Per-page titles, meta descriptions, Open Graph tags, JSON-LD on the home page,
  plus `robots.txt` and `sitemap.xml`

Tested for horizontal overflow, working navigation and console errors at 320px,
375px, 768px and 1440px.
