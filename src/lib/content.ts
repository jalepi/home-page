import { getCollection } from "astro:content";

// Drafts are visible in `astro dev` but excluded from production builds.
const isPublished = ({ data }: { data: { draft: boolean } }) =>
  import.meta.env.DEV || !data.draft;

export async function getProjects() {
  const entries = await getCollection("projects", isPublished);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPosts() {
  const entries = await getCollection("blog", isPublished);
  return entries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}
