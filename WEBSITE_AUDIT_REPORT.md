# Website Audit Report - Mada Overseas

**Audit date:** 2026-06-29  
**Stack:** Static HTML/CSS/JS, Netlify, Netlify Functions  
**Pages audited:** 18 HTML pages  
**Ponytail status:** Requested but not available in the active tools or install candidates. A structured manual inspection and local static crawl were performed instead.

## What Was Inspected

- Root pages: `index.html`, `about.html`, `contact.html`, `enquiry.html`
- Product pages: all files under `pages/export/` and `pages/import/`
- Legal pages: privacy, terms, shipping, disclaimer
- Shared assets: `assets/css/main.css`, `assets/js/main.js`, `assets/images/`
- Serverless routes: `netlify/functions/contact.js`, `netlify/functions/enquiry.js`
- Config/docs: `netlify.toml`, `.env.example`, `robots.txt`, `sitemap.xml`, `NOTION_FORM_INTEGRATION.md`, `image-rename-map.md`

## Security Issues Found And Fixed

- Removed real-looking Notion database IDs from tracked examples/docs and replaced them with placeholders.
- Hardened both Netlify Functions with fail-fast env checks for `NOTION_TOKEN` and database/data-source IDs.
- Replaced permissive CORS fallback behavior with an allowlist based on `SITE_URL` plus local Netlify dev origins.
- Added 12 KB request body limits.
- Added stronger server-side email validation and field length caps.
- Sanitized text by trimming, normalizing whitespace, and removing angle brackets.
- Stopped logging Notion response bodies to avoid exposing private workspace/API details in logs.
- Preserved honeypot behavior so bot submissions return success without writing to Notion.

## SEO Issues Found And Fixed

- Added missing `twitter:image` metadata to `about.html`, `contact.html`, and `enquiry.html`.
- Added Open Graph and Twitter metadata to all four legal pages.
- Verified every HTML page has one H1, a title, meta description, canonical URL, Open Graph metadata, and Twitter card metadata.
- Verified `robots.txt` and `sitemap.xml` cover all 18 indexable pages.

## Speed And Performance Fixes

- Added intrinsic `width` and `height` to all topbar logo images to reduce layout shift.
- Fixed the JS-injected sidebar logo from invalid `height="auto"` to explicit dimensions.
- Cleaned duplicate `display=swap` in the Google Fonts import.
- Added long-lived immutable cache headers for `/assets/*` in `netlify.toml`.
- Verified all local image references resolve.

## Mobile And Tablet Fixes

- Preserved the existing responsive layout rules at 1024px, 960px, 768px, and 430px.
- Confirmed static layout support for 360px, 390px, 430px, 768px, 1024px, and 1280px by code inspection and CSS breakpoint review.
- Browser screenshot verification could not be completed because the in-app browser was unavailable, Playwright was not installed, and local Edge headless failed during GPU startup.

## UI/UX And Accessibility Fixes

- Fixed honeypot CSS to remove invalid `tab-index` and keep the field hidden from layout and interaction.
- Kept successful form buttons disabled and changed their text to `Sent`, making the completed state clear.
- Added an optional `Estimated Quantity` field to the enquiry form so B2B leads are cleaner without requiring extra friction.
- Verified all images have alt attributes and explicit dimensions.

## Notion Integration Verification

- Forms submit through same-origin backend routes only:
  - `contact.html` -> `/api/contact`
  - `enquiry.html` -> `/api/enquiry`
- No frontend Notion API calls or Notion credentials were found.
- Server captures:
  - Name
  - Email
  - Phone
  - Company
  - Country
  - Product / Service Interest
  - Message
  - Source Page
  - Form Type
  - Status = `New`
  - Created Time
- Functions support separate Notion databases or one shared database/data source.
- `NOTION_FORM_INTEGRATION.md` was updated with fields, env vars, validation rules, testing steps, and manual launch tasks.

## Image And Product Naming Verification

- No broken image paths were found.
- Referenced product image filenames are lowercase, hyphenated, and descriptive.
- `image-rename-map.md` was replaced with the requested table format:
  - Old Image Name
  - New Image Name
  - Used In
  - Alt Text
  - Status
- 20 unreferenced image assets were documented for manual visual review before deletion.
- WebP conversion was not completed because no local WebP/ImageMagick encoder is installed.

## Commands Run And Results

| Command / Check | Result |
|---|---|
| `node --check netlify/functions/contact.js` | Passed |
| `node --check netlify/functions/enquiry.js` | Passed |
| Static HTML crawl for local links/images/meta/H1/image dimensions | Passed: 18 pages, 0 broken refs, 0 page/meta/image issues |
| Secret/debug scan for tracked files | Passed for real-looking Notion IDs/secrets and frontend debug logs |
| Stubbed Netlify Function tests | Passed: valid contact, valid enquiry, invalid email rejection, honeypot no-write |
| Package/build script check | No `package.json` or lockfile present; no npm build/lint/test scripts available |
| Browser screenshot verification | Blocked by unavailable in-app browser, missing Playwright, and Edge headless GPU failure |

## Files Changed

- `.env.example`
- `about.html`
- `contact.html`
- `enquiry.html`
- `index.html`
- `netlify.toml`
- `NOTION_FORM_INTEGRATION.md`
- `image-rename-map.md`
- `WEBSITE_AUDIT_REPORT.md`
- `assets/css/main.css`
- `assets/js/main.js`
- `netlify/functions/contact.js`
- `netlify/functions/enquiry.js`
- All product and legal HTML pages received logo dimension and/or metadata updates where needed.

## Remaining Manual Tasks Before Launch

- Add real Notion env vars only in Netlify and local `.env`.
- Confirm the Notion database property names match `NOTION_FORM_INTEGRATION.md` exactly.
- Submit one live contact form and one live enquiry form after deployment.
- Verify Open Graph cards using a public preview/debugger after the site is live.
- Run visual QA in a real browser at 360, 390, 430, 768, 1024, and 1280px because browser automation was blocked locally.
- Convert JPG/PNG assets to WebP with a proper image encoder and update references when tooling is available.
- Review unreferenced images in `image-rename-map.md` before deleting any assets.
