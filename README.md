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
| Name, title, tagline      | `src/site.ts`             |
| Home page and key skills  | `src/pages/index.md`      |
| Experience                | `src/pages/experience.md` |
| Projects (one per file)   | `src/content/projects/`   |
| Blog posts (one per file) | `src/content/blog/`       |

Projects and posts support `draft: true` in their frontmatter, which hides them
from production builds while keeping them visible in `npm run dev`.

The blog is currently hidden: its pages live in `src/pages/_blog/`, which Astro
excludes from routing. To publish it, rename the folder to `src/pages/blog/` and
uncomment the Blog entry in `nav` in `src/site.ts`.

## Social links

Social profile links are not stored in the repo. They are read from
environment variables at build time, and a link is only shown when its variable
is set:

`SOCIAL_LINKEDIN`, `SOCIAL_GITHUB`, `SOCIAL_X`, `SOCIAL_YOUTUBE`

- **In CI:** add them as repository secrets under _Settings → Secrets and
  variables → Actions → Secrets_. The next deploy picks them up.
- **Locally:** copy `.env.example` to `.env` and fill in the ones you want.

Values must be full `https://` URLs; anything else fails the build.
To support a new platform, add it to `astro.config.mjs`, `src/lib/social.ts`,
`src/components/SocialLinks.astro` (icon), `.env.example`, and the build step
in `.github/workflows/deploy.yml`. Icons come from
[Bootstrap Icons](https://icons.getbootstrap.com) (MIT).

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages via
`.github/workflows/deploy.yml`. The custom domain is set by `public/CNAME`.

The build output in `dist/` is plain static HTML/CSS, so it can be hosted
anywhere that serves static files.
