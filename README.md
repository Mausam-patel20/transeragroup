
# 🚛 Transera Group Website

## 📌 Overview
Transera Group is a logistics and transportation company providing reliable freight and shipping solutions across Canada and North America.

This website highlights services, company information, and allows users to connect for logistics solutions.

---

## 🌐 Live Websites
- https://transeragroup.com/

---

## 🚀 Features
- Company Overview & About Section  
- Logistics Services Display  
- Freight Solutions (FTL, LTL, Cross-Border)  
- Contact & Inquiry Form  
- Responsive Design  
- SEO-Friendly Structure  

---

## 📦 Services Offered
- Full Truckload (FTL)  
- Less Than Truckload (LTL)  
- Cross-Border Shipping (Canada–USA)  
- Refrigerated Transport (Reefer)  
- Dry Van Services  
- Expedited Shipping  

---

## 🛠️ Tech Stack
- Frontend: Next.js, React  
- Styling: Tailwind CSS  
- Deployment: Render  

---

## 📂 Project Structure
/components     → Reusable UI components  
/pages          → Application routes (Next.js)  
/public         → Static assets  
/styles         → Styling files  
=======
# Transera Group Ltd. — Website Files

A complete static multi-page website ready for deployment to **GoDaddy WordPress**, GoDaddy static hosting, or any standard web host.

---

## What's in this folder

```
transera-site/
├── assets/
│   ├── logo.png         ← Your real Transera logo
│   ├── services.png     ← Your Advisory · EPC · PM service icons
│   └── founder.jpg      ← Kapil's photo (used on About page)
├── styles.css           ← All design styles (single source)
├── scripts.js           ← Animations, counters, scroll behavior
├── index.html           ← Home
├── about.html           ← About + Founder + Why Transera + Sustainability
├── services.html        ← Advisory, EPC, PM (deep dives)
├── approach.html        ← 3Ps + 8Ps + 5-Stage Pathway (full)
├── industries.html      ← Fleet, SME, Municipal, OEM (detailed)
├── speaking.html        ← Industry Voice — kWh Summit 2025 + topics
├── tools.html           ← All 5 AI tools + privacy
├── contact.html         ← Contact form + booking + info
└── README.md            ← This file
```

---

## Three deployment paths (pick the one that fits)

### Path A — Easiest: Subdirectory upload (works in 15 minutes)

This treats the static files as a self-contained site that lives **alongside** WordPress. No theme conversion needed.

1. In **GoDaddy → Hosting → File Manager**, navigate to your `public_html` folder.
2. Create a folder called `site` (or any name you like).
3. Upload the **entire contents** of this folder into `public_html/site/`.
4. Visit `https://transeragroup.com/site/` — your new site loads.
5. When ready to make it the main site, either:
   - Move all files **up one level** into `public_html/` (you may want to rename WordPress's `index.php` to `index-wp.php` first), or
   - Set up a redirect from the WordPress home to `/site/`.

**Pros**: Fastest. No WordPress complications. Looks exactly as designed.
**Cons**: Your client (Kapil's nephew) has to edit HTML files directly to make content changes — not WordPress-friendly long term.

---

### Path B — Recommended: WordPress with HTML imports (the middle path)

Keep WordPress so future content edits are friendly, but use the design as-is.

1. Install a free plugin called **"Insert HTML Snippet"** or **"HTML Import 2"**.
2. For each HTML file (`index.html`, `about.html`, etc.):
   - Open the file in a text editor.
   - Copy everything **between `<body>` and `</body>`** (skip the `<head>`).
   - In WordPress, create a new Page (Pages → Add New).
   - Title it (e.g., "About").
   - Use the **Custom HTML block** and paste the content.
   - Set the page slug to match the filename (e.g., `about` for `about.html`).
3. Upload `styles.css` and `scripts.js` to your media library or theme folder.
4. In **Appearance → Customize → Additional CSS**, paste the contents of `styles.css`.
5. In a child theme's `functions.php` or via "Insert Headers and Footers" plugin, add the link to `scripts.js`.
6. Upload the `assets/` folder contents to your WordPress Media Library or via FTP to `/wp-content/uploads/transera/`.
7. In each page's HTML, find references to `assets/logo.png` and replace with the new WordPress URL (e.g., `/wp-content/uploads/transera/logo.png`).
8. Set the WordPress nav menu to use these new pages (Appearance → Menus).

**Pros**: Future editors get the WordPress block editor.
**Cons**: A few hours of setup work. Fonts and animations work out of the box if `styles.css` is loaded.

---

### Path C — Best long-term: Convert to a WordPress theme

Hire a developer for ~$800–$1,500 to convert these HTML files into a proper WordPress theme. This gives you full WordPress benefits (plugins, easy edits, SEO tools) with this exact design. Recommend revisiting in **Phase 2** after the Phase 1 launch.

---

## Critical: Things you MUST replace before launch

### 1. Microsoft Bookings link
- **File**: `contact.html`
- **Find**: `href="#bookings-link"`
- **Replace with**: Your actual Microsoft Bookings public URL (e.g., `https://outlook.office365.com/owa/calendar/...`)
- Also add your Bookings link to the homepage **"Schedule via Microsoft Bookings"** button.

### 2. Contact form backend
The contact form on `contact.html` currently shows an alert when submitted — it's a placeholder.

**On WordPress**: Install **Contact Form 7**, **WPForms**, or **Gravity Forms**. Replace the `<form>` block in `contact.html` with the plugin's shortcode.

**On static hosting**: Use **Formspree.io** (free tier). Sign up, get your form URL, and update the `<form action="...">` attribute.

### 3. LinkedIn URL
Search every file for `LinkedIn` and replace `#` with your actual LinkedIn company page URL.

### 4. Privacy / Accessibility / Terms pages
Footer links currently point to `#`. Create these pages or link to PDFs.

### 5. Hero photo (optional upgrade)
Currently the homepage hero uses an SVG illustration. To use a real EV charging photo:
- Save your photo as `assets/hero-charging.jpg` (recommended size: 1200×1500px).
- In `index.html`, find the `<div class="hero-photo">` block.
- Uncomment the `<img>` tag and remove (or comment out) the `<svg>` block underneath.

---

## Design system reference

| Element | Value |
|--------|-------|
| Primary teal | `#0F7A87` |
| Dark teal | `#0B3D52` |
| Navy | `#082935` |
| Gold accent | `#C9A961` |
| Background | `#FFFFFF` |
| Body font | Manrope (Google Fonts) |
| Display accent | Fraunces serif italic (Google Fonts) |

All colors live as CSS variables in `styles.css` under `:root`. To rebrand, edit those variables once and every page updates.

---

## Pre-launch checklist

- [ ] All 8 pages display correctly in Chrome, Safari, Firefox
- [ ] Mobile view works (iPhone, Android)
- [ ] Logo displays in header on every page
- [ ] All internal navigation links work (no dead 404s)
- [ ] Microsoft Bookings link replaces the placeholder in `contact.html` and `index.html`
- [ ] Contact form connects to a real backend (CF7, WPForms, or Formspree)
- [ ] LinkedIn URL replaces `#`
- [ ] Privacy / Accessibility / Terms pages are created or linked
- [ ] ECRA/ESA license note is **truthful** (do not advertise contracting until license issued)
- [ ] Sustainability section is reviewed for accuracy
- [ ] Speaker bio on `speaking.html` is reviewed by Kapil
- [ ] kWh Summit 2025 details verified
- [ ] Favicon set (currently uses logo.png automatically)
- [ ] Google Analytics / Search Console added (paste tracking code into all 8 HTML files before `</head>`)
- [ ] Cloudflare CDN configured (optional but recommended)
- [ ] SSL certificate active (GoDaddy → SSL Manager)

---

## Editing content later

Until you migrate to WordPress (Path B or C), to change text on any page:
1. Open the `.html` file in a code editor (VS Code, Sublime, even Notepad++).
2. Find the text you want to change.
3. Edit it. Save.
4. Re-upload that file to GoDaddy via File Manager.

The design will not break unless you accidentally delete an HTML tag — keep backups before editing.

---

## Compliance notes (carried forward from earlier conversations)

- **ECRA/ESA license is pending.** Do not advertise "electrical contracting services" anywhere on the site until the license is issued. Current site copy correctly says "delivered through licensed ECRA/ESA partners."
- **PEO**: All references to engineering work are framed as "engineering coordination" or "owner's engineer services" — not "engineering services" — to stay compliant with PEO restrictions on non-P.Eng practitioners.
- **Privacy**: PIPEDA-aligned language is in place but a formal Privacy Notice page must be drafted (Phase 1, item 7 of your budget).

---

## Questions or issues

If anything in the site needs to change — copy edits, layout tweaks, additional pages — note them and we can iterate. The shared `styles.css` means most visual changes propagate to every page automatically.

— Built for Transera Group Ltd., 2026
