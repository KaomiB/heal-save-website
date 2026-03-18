# Heal & Save

**Heal & Save** is the public website for an **HSA (Health Savings Account) literacy** project aimed at **young adults**—especially those dealing with stress or anxiety around healthcare costs and savings. The site introduces **Savvy**, an embedded HSA chatbot, and links to **About** and **Resources** (citations, surveys, external references).

## Informatics 172

This project is part of **Informatics 172** (UCI): course work spanning **design, implementation, and deployment** of a real-world informatics artifact. The site is the **marketing and entry point** for the larger HSA assistant experience.

## Relation to the Streamlit app

The **Savvy** page embeds the **Streamlit HSA chatbot** (same product family as this repo’s companion app). The marketing site and the chatbot share **Heal & Save** branding and **light/dark theme** behavior (the embed uses Streamlit’s `dark_theme` / `light_theme` when you toggle dark mode on the site).

## Run locally

```bash
npm i
npm run dev
```

Build and preview production assets:

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

1. Push this repo to GitHub (workflow expects `.github/workflows` at the repo root).
2. **Settings → Pages → Source:** **GitHub Actions**.
3. Pushes to `main` build and deploy the site to `https://<user>.github.io/<repo>/`.
4. Commit **`package-lock.json`** so CI can run `npm ci`.

## Local-only screenshots

Version history captures and dark-mode screenshots are written under **`screenshots/`**, which is **gitignored**. Examples:

- `bash scripts/capture-version-screenshots.sh` — full-page captures at pinned git commits.
- `bash scripts/capture-dark-screenshots.sh` — current build in **dark** color scheme (home + Savvy).

## Local folder name

You can keep this project in a folder such as **`heal-and-save-website`** (recommended) instead of the old Figma export name. The **GitHub repository** name (`heal-save-website`) is unchanged unless you rename it on GitHub.

## Design source

Original layout derived from [Figma — Website with Taskbar Navigation](https://www.figma.com/design/ltVlTLFFmzxUcPxCSSoM5s/Website-with-Taskbar-Navigation).
