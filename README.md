# AIS Social Growth System
> **"Your Social Media Should Do More Than Look Active."**  
> Built by **Alag Innovative Solutions (AIS)**

---

## 1. Project Overview
The **AIS Social Growth System** website is a premium, client-facing presentation and sales platform. It is engineered specifically for local businesses (such as healthcare clinics, private schools, coaching academies, restaurants, real estate developers, hotels, and professional firms) to explain and sell social media management as a complete, productized digital business system.

This website is **NOT** a social media analytics dashboard, admin panel, or CRM. It is a sales presentation platform designed to take a prospective business client through the psychological journey:
$$\text{ATTENTION} \longrightarrow \text{TRUST} \longrightarrow \text{UNDERSTANDING} \longrightarrow \text{DESIRE} \longrightarrow \text{ENQUIRY}$$

---

## 2. Business Positioning
* **Agency:** Alag Innovative Solutions (AIS)
* **Product:** AIS Social Growth System
* **Primary Positioning:** *"Your Social Media Should Do More Than Look Active."*
* **Core Promise:** *"We build the system that turns attention into trust, trust into enquiries, and enquiries into business opportunities."*
* **Ethical Standard:** No false guarantees of followers, viral reach, or immediate revenue. We focus on strategic engineering, craft, distribution, and continuous optimization.

---

## 3. Technology Stack
* **HTML5:** Semantic, accessible markup with OpenGraph, JSON-LD, and meta tags.
* **Tailwind CSS:** Modern utility-first styling with custom dark theme palette (`#07090E`, `#0D121C`, `#121824`, `#1F293D`, and saffron/orange accents `#FF5E1E` & `#FF7A1A`).
* **Vanilla JavaScript (ES6+):** Pure modular architecture (`config.js`, `data.js`, `components.js`, `animations.js`, `forms.js`, `main.js`) with zero frameworks (no React, Vue, or Angular required).
* **Typography:** Google Fonts (`Space Grotesk` for editorial headlines, `Plus Jakarta Sans` & `Inter` for clean body copy).
* **Lucide Icons:** Clean, modern vector iconography via CDN.
* **Scalable Vector Graphics (SVG):** Custom vector mockups for Reels, Carousels, Educational Infographics, Offers, Behind-the-scenes posts, and Monthly Telemetry Reports.

---

## 4. Key Features
1. **First Principles Framework:** signature interactive visual cascade: Attention → Trust → Demand → Action → Business Opportunity.
2. **8-Stage System Architecture:** Clickable interactive inspector for Positioning, Content Strategy, Creative Production, Distribution, Lead Capture, Follow-Up, Analysis, and Optimization.
3. **Content Engine ("Every Post Has a Job"):** 8-part content matrix (Problem, Education, Proof, Behind the scenes, Offer, FAQ, Comparison, CTA).
4. **10 Industry Blueprints:** Interactive tabs tailored for Schools, Hospitals, Coaching, Restaurants, Real Estate, Hotels, Salons, Gyms, Retail, and Professional Services.
5. **Sample Content Showcase:** Labelled mockups of high-retention Reels, Carousels, Educational Infographics, and Commercial Offers.
6. **Website + Social Media Synergy:** Demonstrates how pairing social media with an AIS-built modern website unlocks higher conversion rates.
7. **Free 7-Point Social Media Audit:** High-converting frontend lead magnet with honest, transparent validation and confirmation modal.
8. **Transparent Pricing Packages:** Social Foundation, Growth System, and Business Growth with a comprehensive side-by-side feature matrix.
9. **Accessible FAQ:** 12 honest, direct questions and answers addressing guarantees, timelines, and deliverables.
10. **Global Modal & Toast System:** Strategy call booking modal accessible from any page with keyboard navigation (`Escape` key, focus trapping).

---

## 5. Folder Structure
```
ais-social-growth/
├── index.html              # Flagship sales presentation homepage
├── system.html             # 8-part system architecture & perception design deep-dive
├── services.html           # Comprehensive catalog of all 12 services & deliverables
├── industries.html         # Interactive solutions across 10 local business verticals
├── process.html            # 6-step implementation workflow & collaboration timeline
├── pricing.html            # 3 packages, detailed feature matrix, & scope guide
├── audit.html              # Dedicated Free 7-Point Social Media Audit page & form
├── faq.html                # 12-question transparency knowledge base
├── contact.html            # Direct contact, office info, WhatsApp desk & enquiry form
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service & ethical disclaimers
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # XML sitemap for SEO discovery
│
├── assets/
│   ├── icons/
│   │   └── logo.svg        # AIS brand vector mark
│   └── mockups/
│       ├── growth-system-diagram.svg  # System pathway diagram
│       ├── sample-reel.svg            # Sample vertical video mockup
│       ├── sample-carousel.svg        # Sample editorial carousel mockup
│       ├── sample-educational.svg     # Sample clinical infographic mockup
│       ├── sample-offer.svg           # Sample demand offer creative mockup
│       ├── sample-bts.svg             # Sample behind-the-scenes mockup
│       └── sample-report-preview.svg  # Sample monthly report preview
│
├── css/
│   └── custom.css          # Brand variables, animations, scrollbars, and card styles
│
└── js/
    ├── config.js           # Global agency contact, links, colors, and tagline config
    ├── data.js             # Data store for services, industries, packages, FAQs & metrics
    ├── components.js       # Dynamic header, footer, booking modal, and toast alerts
    ├── animations.js       # Scroll reveal observers and counter animations
    ├── forms.js            # Audit & booking form handlers with validation
    └── main.js             # Tab switchers, accordion toggles, and icon initializer
```

---

## 6. How to Run Locally

Because this website uses modern Vanilla JavaScript, clean HTML5, and Tailwind via CDN, you do not need Node.js or npm to run it.

### Method A: Python HTTP Server (Recommended)
Open a terminal in the project root:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Method B: VS Code Live Server
1. Open the project folder in VS Code.
2. Right-click on `index.html`.
3. Click **"Open with Live Server"**.

### Method C: Direct Browser Opening
Double-click `index.html` in your file explorer to open it directly in Chrome, Edge, Safari, or Firefox.

---

## 7. How to Change Branding & Agency Details
Open `/js/config.js` in any code editor:
```javascript
const AIS_CONFIG = {
  agency: {
    name: "Alag Innovative Solutions",
    shortName: "AIS",
    tagline: "Your Custom Tagline",
    // ...
  },
  contact: {
    phone: "+91 98765 43210",
    email: "growth@alaginnovative.com",
    whatsapp: "+919876543210",
    // ...
  }
};
```
Updating `/js/config.js` will immediately update phone numbers, emails, WhatsApp redirect links, and agency names across all pages.

---

## 8. How to Edit Services
Open `/js/data.js` and locate `AIS_DATA.services`. Each service is defined with its title, deliverables, and description:
```javascript
{
  id: "reel-production",
  number: "03",
  title: "Reel & Short Video Production",
  shortDesc: "Your updated description...",
  deliverables: ["Script & Hook Writing", "Dynamic Video Pacing", ...],
  whoItsFor: "Local brands looking to tap into organic discovery..."
}
```

---

## 9. How to Edit Packages & Scope
Open `/js/data.js` and edit `AIS_DATA.packages`. You can add new feature checkboxes, change post counts, or update package descriptions.

---

## 10. How to Edit Industry Blueprints
Open `/js/data.js` and edit `AIS_DATA.industries`. You can customize the local business problem, content angles, CTA, and conversion funnel for any industry or add new verticals.

---

## 11. How to Deploy to Production

### Free & Instant Hosting Options:
1. **GitHub Pages:**
   - Push this repository to a GitHub repository.
   - Go to **Settings** → **Pages** → Source: `Deploy from a branch` (select `main` / root).
   - Your site will be live at `https://yourusername.github.io/repo-name/`.
2. **Netlify:**
   - Drag and drop this folder directly onto [app.netlify.com/drop](https://app.netlify.com/drop).
3. **Vercel:**
   - Run `npx vercel` or connect your GitHub repository to Vercel (zero build configuration required).
4. **Cloudflare Pages:**
   - Connect repository and select "Direct Upload" or static build (no build command needed).

---

## 12. How to Connect a Custom Domain
1. In your hosting dashboard (e.g. Netlify, Vercel, or GitHub Pages), enter your custom domain (e.g. `alaginnovative.com`).
2. In your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.), configure your DNS records:
   - **Apex domain (`@`):** Add `A` record pointing to your host's IP address.
   - **Subdomain (`www`):** Add `CNAME` record pointing to your host's target URL.
3. Enable SSL (Free Let's Encrypt certificates are provided automatically on all modern static hosts).

---

## 13. How to Connect a Backend Later
Currently, all forms in `js/forms.js` run on the client side with feedback modals. When you are ready to collect leads into an email inbox, CRM, or Google Sheet:

### Option 1: Formspree / Web3Forms (Zero Backend)
Replace the form `onsubmit` handler or add an action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Webhook to Zapier / Make / WhatsApp API
In `js/forms.js`, inside `handleAuditSubmit` or `handleBookingSubmit`, make a `fetch` call:
```javascript
fetch("https://your-webhook-url.com/leads", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(auditLead)
});
```

---

# HOW AIS USES THIS SYSTEM

### The Conceptual Marketing Framework:
```
ATTENTION (01)
  ↓
  Get the right local audience to notice the business through problem-aware Reels & search signals.
TRUST (02)
  ↓
  Dispels skepticism through real clinician/staff walkthroughs, verified results, and clinical depth.
DEMAND (03)
  ↓
  Demonstrates why postponing a decision costs the customer time, health, comfort, or money.
ACTION (04)
  ↓
  Provides a single low-friction next step (WhatsApp chat, consultation booking, or phone call).
BUSINESS OPPORTUNITY (05)
  ↓
  Converts social attention into booked appointments, store visits, and closed revenue.
```

### The 6-Stage Operational Engine:
```
POSITIONING → CONTENT → DISTRIBUTION → LEAD CAPTURE → MEASUREMENT → OPTIMIZATION
```
1. **Positioning:** Define the customer avatar, competitive edge, and brand tone before touching creative tools.
2. **Content Engine:** Assign every post an intentional conversion job (Problem, Education, Proof, Behind the scenes, Offer, FAQ, Comparison, CTA).
3. **Distribution:** Synchronize reach across Instagram, Facebook, Google Business Profile, and YouTube Shorts.
4. **Lead Capture:** Channel attention from bio links into pre-filled WhatsApp conversation starters or high-speed AIS landing pages.
5. **Measurement:** Review platform telemetry (profile visits, saves, WhatsApp clicks, inquiry rates) with zero fake metrics.
6. **Optimization:** Formulate hypotheses, test creative variations, and scale what works in subsequent monthly cycles.

---

&copy; 2025 **Alag Innovative Solutions (AIS)**. All rights reserved.
