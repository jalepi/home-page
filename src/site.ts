// Public, site-wide settings. Everything here ends up in the generated HTML,
// so only put information you are happy to share with the world.
// Social links live in environment variables, see `src/lib/social.ts`.
export const site = {
  name: "Jaime Leonardo Pinheiro",
  title: "Software Engineer",
  tagline: "From raw idea to production-ready product.",
  description:
    "Jaime Leonardo Pinheiro is a software engineer who takes products from 0 to 1: rapid prototyping, system architecture, and AI/ML integration.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/experience/", label: "Experience" },
  { href: "/projects/", label: "Projects" },
  // Blog is hidden for now. To publish it, rename `src/pages/_blog/` to
  // `src/pages/blog/` and uncomment the line below.
  // { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
] as const;
