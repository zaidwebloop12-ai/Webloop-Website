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

The four brand colours:

| Token | Value | Used for |
| --- | --- | --- |
| `--cream` / `--paper` | `#FFEED6` | Page background |
| `--sage` | `#A5AF79` | Secondary accents, check marks, artwork |
| `--olive` | `#827148` | Logo tile, hairlines, artwork |
| `--peach` | `#E8A07C` | Primary buttons, hover rules, markers |

Three darker shades are derived from the same hues so small text clears
WCAG AA on cream — the brand colours themselves stay the visible identity:

| Token | Value | Contrast on cream |
| --- | --- | --- |
| `--ink` | `#2E2718` | 13.0 : 1 — body copy, headings |
| `--muted` / `--olive-ink` | `#6E6047` / `#6B5C39` | 5.4 : 1 / 5.7 : 1 — secondary text, mono labels |
| `--accent-ink` | `#9A5029` | 5.2 : 1 — accent text, italic highlights |

Supporting surfaces: `--card` `#FFF7EA` (raised panels) and `--paper-alt`
`#F8E6C6` (alternating sections).

Type: **Fraunces** for display headings (variable serif — the `SOFT` and
`WONK` axes give it the slightly irregular, drawn feel), **Inter** for body,
**IBM Plex Mono** for labels, numerals and eyebrows. Change the palette in one
place and the whole site follows.

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

## Images — all placeholders, ready to swap

Every photo slot is a plain `<img>` pointing at a **dummy placeholder** in
`assets/img/`. Each one is labelled with its name and the size it expects, so
you can see at a glance what belongs there.

| Folder | Files | Ratio | Suggested size |
| --- | --- | --- | --- |
| `assets/img/hero/` | `studio` | 4 : 5 | 1000 × 1250 |
| `assets/img/work/` | 8 project shots | 10 : 7 | 1200 × 840 |
| `assets/img/team/` | 4 portraits | 4 : 5 | 800 × 1000 |
| `assets/img/studio/` | `desk`, `team`, `wall` | 4 : 5 and 16 : 9 | 800 × 1000 / 1280 × 720 |
| `assets/img/map/` | `karachi` | 2 : 1 | 1280 × 640 |

**To use your own photo**, drop it in the matching folder and update the one
`src` — for example in `portfolio.html`:

```html
<img class="work-card__art" src="assets/img/work/nova-finance.jpg"
     alt="Nova Finance website" width="1200" height="840" loading="lazy" />
```

Keep the `alt`, `width` and `height` attributes. The dimensions prevent the
page jumping around while images load, and the CSS crops with `object-fit:
cover`, so anything near the right ratio will sit correctly.

If you'd rather embed a live Google Map on the contact page, replace the
`<img>` inside `.map` with your embed `<iframe>` — the surrounding card and
caption will still work.

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
