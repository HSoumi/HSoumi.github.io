# Soumi Hazra — Personal Portfolio

This repository contains the source for my personal GitHub Pages portfolio: `https://hsoumi.github.io`.

## Purpose

The site presents my work and professional focus as a Security Engineer working across cloud security, DevSecOps, security automation, security operations, and responsible AI/ML applications.

Public portfolio projects are independently implemented, sanitized demonstrations. They use synthetic data where needed and do not include employer code, internal infrastructure details, credentials, customer data, proprietary diagrams, security findings, or non-public documentation.

## Site structure

```text
.
├── index.html                    # Page content and sections
├── styles.css                    # Responsive site styling
├── script.js                     # Navigation and scroll behavior
└── README.md                     # This documentation
```

## Update the site

- Edit `index.html` for copy, links, experience, and project cards.
- Edit `styles.css` for visual design and responsive layout changes.
- Edit `script.js` for client-side behavior.
- Keep public project claims accurate, scoped, and independently verifiable.
- Never commit secrets, API keys, access tokens, internal screenshots, employer-owned source code, customer data, or confidential architecture details.

## Add the graduation photo

The About section currently contains a styled placeholder. To add the University of Ottawa graduation photo later:

1. Create the folder path `assets/images/` in this repository.
2. Upload the image using this exact filename: `soumi-hazra-graduation.jpg`.
3. In `index.html`, replace this placeholder:

```html
<div class="about-photo about-placeholder reveal" aria-label="Professional photo placeholder">
  <div>
    <span>PHOTO</span>
    <strong>COMING SOON</strong>
    <small>University of Ottawa · MCS</small>
  </div>
</div>
```

with:

```html
<div class="about-photo reveal">
  <img
    src="assets/images/soumi-hazra-graduation.jpg"
    alt="Soumi Hazra at her University of Ottawa Master of Computer Science graduation"
    loading="lazy"
  >
  <div class="photo-caption">UNIVERSITY OF OTTAWA · MCS</div>
</div>
```

Then commit with a descriptive message such as `Add graduation photo to About section`.

## Preview locally

Because this is a static website, open `index.html` directly in a browser. For a local server, run one of the following commands from the repository root:

```bash
python -m http.server 8000
# Open http://localhost:8000
```

```bash
npx serve .
```

## GitHub Pages

In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save. GitHub Pages should serve the site at `https://hsoumi.github.io` after deployment completes.

## Planned public projects

- Cloud Security Baseline Lab — AWS Edition
- DevSecOps Pipeline Security Lab
- Secure LLM Audit Evidence Demo

Each project should include a clear README, architecture documentation, setup and teardown steps, threat assumptions, validation or tests, limitations, and a confidentiality statement.
