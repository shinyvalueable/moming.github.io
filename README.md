# Na Cheng — Academic Personal Website

A minimal academic personal website built with Astro and designed for PhD applications.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the local URL shown by Astro.

## 3. Build

```bash
npm run build
```

## 4. Deploy

The included GitHub Actions workflow deploys the site to GitHub Pages after pushing to `main`.

Before deploying:

1. Rename the repository to `<YOUR_GITHUB_USERNAME>.github.io`.
2. Edit `astro.config.mjs` and replace `YOUR_GITHUB_USERNAME`.
3. Replace `public/CV.pdf` with your actual CV.
4. Replace `public/profile-placeholder.svg` with a real portrait if desired.
5. Update links in `src/config.ts`.

## Suggested GitHub repository

`<YOUR_GITHUB_USERNAME>.github.io`

## Main sections

- About
- Research
- Publications
- Projects
- CV
- Contact

The visual design intentionally prioritizes an academic/research profile over a traditional blog.
