# home-page

Source for [jalep.dev](https://jalep.dev), built with [Astro](https://astro.build),
[Tailwind CSS](https://tailwindcss.com) and [daisyUI](https://daisyui.com).

## Development

Requires Node.js 24 (see `.nvmrc`).

```sh
npm install
npm run dev      # start dev server at http://localhost:4321
npm run check    # type-check, lint and format check
npm run format   # format all files
npm run build    # build static site into ./dist
npm run preview  # preview the production build
```

## Content

| What                      | Where                     |
| ------------------------- | ------------------------- |
| Name, title, links        | `src/site.ts`             |
| Home page                 | `src/pages/index.md`      |
| Experience                | `src/pages/experience.md` |
| Projects (one per file)   | `src/content/projects/`   |
| Blog posts (one per file) | `src/content/blog/`       |

Projects and posts support `draft: true` in their frontmatter, which hides them
from production builds while keeping them visible in `npm run dev`.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages via
`.github/workflows/deploy.yml`. The custom domain is set by `public/CNAME`.

The build output in `dist/` is plain static HTML/CSS, so it can be hosted
anywhere that serves static files.
