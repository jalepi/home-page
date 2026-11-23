// @ts-check
import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Social profile URLs are read at build time. Any that are unset or empty are
// simply not shown. See `src/lib/social.ts`.
const socialField = () =>
  envField.string({ context: "server", access: "public", optional: true });

// https://astro.build/config
export default defineConfig({
  site: "https://jalep.dev",
  integrations: [sitemap()],
  env: {
    schema: {
      SOCIAL_LINKEDIN: socialField(),
      SOCIAL_GITHUB: socialField(),
      SOCIAL_X: socialField(),
      SOCIAL_YOUTUBE: socialField(),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
