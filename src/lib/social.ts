import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_X,
  SOCIAL_YOUTUBE,
} from "astro:env/server";

// Social links are configured through environment variables at build time
// (GitHub Actions secrets in CI, `.env` locally). Unset or empty values are
// skipped, so a link only appears once its variable is set.
//
// To support a new platform: add an `envField` in `astro.config.mjs`, an entry
// below, an icon in `src/components/SocialLinks.astro`, and pass the secret to
// the build step in `.github/workflows/deploy.yml`.
const candidates = [
  {
    id: "linkedin",
    label: "LinkedIn",
    env: "SOCIAL_LINKEDIN",
    value: SOCIAL_LINKEDIN,
  },
  { id: "github", label: "GitHub", env: "SOCIAL_GITHUB", value: SOCIAL_GITHUB },
  { id: "x", label: "X", env: "SOCIAL_X", value: SOCIAL_X },
  {
    id: "youtube",
    label: "YouTube",
    env: "SOCIAL_YOUTUBE",
    value: SOCIAL_YOUTUBE,
  },
] as const;

export type SocialId = (typeof candidates)[number]["id"];

export interface SocialLink {
  id: SocialId;
  label: string;
  url: string;
}

function parseUrl(env: string, value: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${env} must be a full URL, e.g. https://example.com/me`);
  }
  if (url.protocol !== "https:") {
    throw new Error(`${env} must use https:// (got ${url.protocol})`);
  }
  return url.href;
}

export const socials: SocialLink[] = candidates.flatMap(
  ({ id, label, env, value }) => {
    const trimmed = value?.trim();
    return trimmed ? [{ id, label, url: parseUrl(env, trimmed) }] : [];
  },
);

export const getSocial = (id: SocialId) => socials.find((s) => s.id === id);
