// Public, site-wide settings. Everything here ends up in the generated HTML,
// so only put information you are happy to share with the world.
export const site = {
  // TODO: replace placeholders with real values.
  name: "Your Name",
  title: "Software Engineer",
  description: "Personal home page of Your Name, software engineer.",
  links: {
    github: "https://github.com/jalepi",
    linkedin: "https://www.linkedin.com/in/your-handle",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/experience/", label: "Experience" },
  { href: "/projects/", label: "Projects" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
] as const;
