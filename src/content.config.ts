import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Lower numbers are listed first.
      order: z.number().default(100),
      tags: z.array(z.string()).default([]),
      url: z.url().optional(),
      repo: z.url().optional(),
      // Image path relative to the Markdown file, e.g. `./my-project.webp`.
      cover: z.object({ src: image(), alt: z.string() }).optional(),
      draft: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
